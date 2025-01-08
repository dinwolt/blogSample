import * as React from "react";
import { Link, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Bio from "../components/bio";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostContentfulTemplate = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const post = data.contentfulPost;
  const contentJson = JSON.parse(post.content.raw);

  return (
    <Layout location={location} title={siteTitle}>
      <article className="blog-post" itemScope itemType="http://schema.org/Article">
      <img src={post.image.url}/>
        <header>
          <h1 itemProp="headline">{post.title}</h1>
        </header>
        <section>
          {/* Render the content with dangerouslySetInnerHTML */}
          {contentJson.content.map((block, index) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: block.content[0]?.value }} />
            );
          })}
        </section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  );
};

export const Head = ({ data }) => {
  return (
    <Seo
      title={data.contentfulPost.title}
      description={data.contentfulPost.content.raw || ""}
    />
  );
};

export default BlogPostContentfulTemplate;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      content {
        raw
      }
        image {
        url}
    }
  }
`;
