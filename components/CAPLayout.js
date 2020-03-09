import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #ddd'
};

// Content As Props

const Layout  = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

export default Layout;

/** Usage:
 * const indexPageContent = <p>Hello Next.js</p>;
 * <Layout content={indexPageContent} />;
 */
