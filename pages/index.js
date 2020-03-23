import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>Blawg</h1>
        <ul>
            <PostLink id="hello-nextjs" />
            <PostLink id="the-more-you-know" />
            <PostLink id="zeit-for-your-tablet" />
        </ul>
    </Layout>
);
