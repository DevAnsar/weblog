import { useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import type { PostInterface } from "../../../types";
import Head from "../../../components/containers/head/Head";
import Image from "next/image";
import { ImageLoader } from "../../../utils/helper";
import WriterImage from "../../../components/users/WriterImage";
import Layout from "../../../components/containers/layout/Layout";
import CategoriesPanel from "../../../components/categories/Panel";

const Blog: NextPage<{ post: PostInterface }> = ({ post }) => {
  return (
    <>
      <Head title={`${post.title} | theJs.ir`} description={post.excerpt} />
      <Layout>
        <div className="flex justify-center my-16">
          <div className="w-full lg:w-2/4 px-5">
            <div className="grid gap-x-5">
              <div className="col-span-1 flex flex-col justify-center w-full">
                <h1 className="font-bold text-2xl text-gray-900 leading-loose">
                  {post.title}
                </h1>
              </div>
              <div className="col-span-1 mt-5">
                <div className="rounded-2xl overflow-hidden w-full h-72">
                  <Image
                    alt=""
                    title=""
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                    loader={ImageLoader}
                    src={post.image_url}
                  />
                </div>
              </div>
              <div className="col-span-1 flex flex-col justify-center w-full">
                <span className="font-bold text-base text-slate-400 mt-3 leading-loose">
                  {post.excerpt}
                </span>
                <WriterImage name={post.user.name} date={post.date_formatted} />
              </div>
              <div className="col-span-1 flex flex-col justify-center w-full mt-10 text-xl leading-10 text-slate-800">
                {post.content}
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
