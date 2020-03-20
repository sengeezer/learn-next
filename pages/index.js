import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => (
    <li>
        <Link href={`/post?title=${title}`}>
            <a>{title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>Blawg</h1>
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="The more you know..." />
            <PostLink title="Zeit for your tablet" />
        </ul>
    </Layout>
);
