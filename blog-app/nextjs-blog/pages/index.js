import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const Home = () => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Made with{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.
        </p>
      </section>
  </Layout>
);

export default Home;
