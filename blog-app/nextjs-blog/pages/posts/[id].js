import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({ postData }) => (
  <Layout>
    <p>{postData.title} ({postData.id}) - {postData.date}</p>
  </Layout>
);

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);

  return {
    props: { postData }
  };
}

export default Post;