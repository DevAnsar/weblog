import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import type { PostInterface } from "../../../types";
import Head from "../../../components/containers/head/Head";
import Image from "../../../components/containers/Image";
import WriterImage from "../../../components/users/WriterImage";
import Layout from "../../../components/containers/layout/Layout";
import CategoriesPanel from "../../../components/categories/Panel";
import ReactHtmlParser, { Transform ,convertNodeToElement } from "react-html-parser";
import AdBlogCart from "../../../components/blogs/AdBlogCart";

const Blog: NextPage<{ post: PostInterface }> = ({ post }) => {
  const transformPost: Transform = (node, index) => {
    if (node.attribs?.class === "post" && node.attribs?.data_post_id) {
      return <AdBlogCart post_id={node.attribs?.data_post_id} />
    }
  };

  return (
    <>
      <Head title={`${post.title} | theJs.ir`} description={post.excerpt} />
      <Layout>
        <div className="flex justify-center my-16">
          <div className="w-full lg:w-3/4 xl:w-2/4 px-5">
            <div className="grid gap-x-5">
              <div className="col-span-1 flex flex-col justify-center w-full">
                <h1 className="font-bold text-2xl text-gray-900 leading-loose">
                  {post.title}
                </h1>
              </div>
              <div className="col-span-1 mt-5">
                <div className="rounded-2xl overflow-hidden w-full h-72">
                  <Image src={post.image_url} />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center w-full">
                <span className="font-bold text-base text-slate-400 mt-3 leading-loose">
                  {post.excerpt}
                </span>
                <WriterImage name={post.user.name} image={post.user.image_url} date={post.date_formatted} />
              </div>
              <div className="col-span-1 flex flex-col justify-center w-full mt-10 text-xl leading-10 text-slate-800">
                {post.content}
                {/* {ReactHtmlParser(post.content, { transform: transformPost })} */}
              </div>
            </div>
          </div>
        </div>

        <CategoriesPanel />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;
  // Fetch data from external API
  const res = await fetch(`http://localhost:8000/api/v1/posts/${slug}`);
  let post: PostInterface | null = null;

  if (res.ok) {
    const data = await res.json();
    post = data.post as PostInterface;

    return {
      props: {
        post,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Blog;
