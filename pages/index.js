import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
        <style jsx>
            {`
                li {
                  list-style: none;
                  margin: 5px 0;
                }
                a {
                  text-decoration: none;
                  color: blue;
                  font-family: 'Arial', sans-serif;
                }
                a:hover { opacity: 0.6; }
            `}
        </style>
    </li>
);

const Index = ({ shows }) => (
    <Layout>
        <h1>Blawg</h1>

        <h2>Blog posts</h2>
        <ul>
            <PostLink id="hello-nextjs" />
            <PostLink id="the-more-you-know" />
            <PostLink id="zeit-for-your-tablet" />
        </ul>

        <h2>Doctor Who</h2>
        <ul>
            {shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>
            {`
                h1, a { font-family: 'Arial', sans-serif; }
                ul { padding: 0; }
                li {
                  list-style: none;
                  margin: 5px 0;
                }
                a {
                  text-decoration: none;
                  color: blue;
                }
                a:hover { opacity: 0.6; }
            `}
        </style>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=doctor-who');
    const data = await res.json();

    console.log(`Data fetched. (${data.length})`);

    return {
        shows: data.map (entry => entry.show)
    };
};

export default Index;
