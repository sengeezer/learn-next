import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

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

export default getSortedPostsData;
