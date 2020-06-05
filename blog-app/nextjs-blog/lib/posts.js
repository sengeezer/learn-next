import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

const getSortedPostsData = () => {
  // retrieve file names
  const fileNames =  fs.readdirSync(postsDir);

  const allPostsData = fileNames.map(fileName => {
    // strip extension to obtain post id
    const id = fileName.replace(/\.md$/, '');

    // read md into string
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // parse metadata
    const matterResult = matter(fileContents);

    // return data and id
    return {
      id,
      ...matterResult.data
    };
  });

  // sort posts by date
  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => (
    {
      params: { id: fileName.replace(/\.md$/, '') }
    }
  ));
};

/*
  Above could also originate from an API:

  export async function getAllPostIds() {
    const res = await fetch('..')
    const posts = await res.json()
    
    return posts.map(post => {
      return {
        params: { id: post.id }
      }
    })
  }
*/

export async function getPostData(id) {
  // read md into string
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // parse metadata
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into an HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // return data and id
  return {
    id,
    contentHtml,
    ...matterResult.data
  };
}

export default getSortedPostsData;
