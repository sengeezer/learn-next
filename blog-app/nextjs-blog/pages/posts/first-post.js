import Head from 'next/head';
import Layout from '../../components/layout';
import Link from 'next/link';

const FirstPost = () => (
  <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <h1>First!</h1>
    <p>
      <Link href="/"><a>Home</a></Link>
    </p>
  </Layout>
);

export default FirstPost;