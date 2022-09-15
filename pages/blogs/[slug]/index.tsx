import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import type { GetPost } from "../../../types";
import Head from "../../../components/containers/head/Head";
import ScalableImage from "../../../components/containers/Image/ScalableImage";
import WriterImage from "../../../components/users/WriterImage";
import Layout from "../../../components/containers/layout/Layout";
import CategoriesPanel from "../../../components/categories/Panel";
import ReactHtmlParser, {
  Transform,
  convertNodeToElement,
} from "react-html-parser";
import useScrollPercentage from "../../../hooks/useScrollPercentage";
import AdBlogCart from "../../../components/blogs/AdBlogCart";

const Blog: NextPage<{ post: GetPost }> = ({ post }) => {
  const [scrollRef, scrollPercentage] = useScrollPercentage();
  const transformPost: Transform = (node, index) => {
    if (node.attribs?.class === "post" && node.attribs?.data_post_id) {
      return <AdBlogCart post_id={node.attribs?.data_post_id} />;
    }
  };

  const ArticleProgress = ({ per }: { per: number }) => {
    return (
      <div className="absolute -bottom-[5px] w-full h-[5px] bg-blue-50">
        <span
          className="text-2xl bg-blue-500 h-full block rounded-md"
          style={{ width: per + "%" }}
        />
      </div>
    );
  };
  return (
    <>
      <Head title={`${post.title} | theJs.ir`} description={post.excerpt} />
      <Layout headerChild={<ArticleProgress per={scrollPercentage} />}>
        <div className="flex justify-center w-full my-10">
          <div className="w-11/12 lg:w-3/4 xl:w-2/4 px-5">
            <div className="flex flex-col justify-center w-full">
              <h1 className="font-bold text-base lg:text-2xl text-gray-900 leading-loose">
                {post.title}
              </h1>
            </div>
            <div className="mt-5">
              <div className="rounded-2xl overflow-hidden w-full h-72">
                <ScalableImage src={post.image_url} />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full">
              <span className="font-bold text-sm lg:text-base text-slate-400 mt-3 leading-loose mb-3">
                {post.excerpt}
              </span>
              <WriterImage user={post.user} date={post.date_formatted} />
            </div>
            <div
              ref={scrollRef}
              className="flex flex-col justify-center text-justify w-full mt-10 text-xl leading-10 text-slate-800"
            >
              {post.content}
              {/* {ReactHtmlParser(post.content, { transform: transformPost })} */}
            </div>
          </div>
        </div>
        <CategoriesPanel />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params !== undefined && "slug" in context.params) {
    const slug = context.params?.slug;
    // Fetch data from external API
    const res = await fetch(`http://localhost:8000/api/v1/posts/${slug}`);
    let post: GetPost | null = null;

    if (res.ok) {
      const data = await res.json();
      post = data.post as GetPost;

      return {
        props: {
          post,
        },
      };
    }
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default Blog;
