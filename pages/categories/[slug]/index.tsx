import { useEffect } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import type { NextPage } from "next";
import type { GetPost, GetCategory } from "../../../types";
import Head from "../../../components/containers/head/Head";
import Layout from "../../../components/containers/layout/Layout";
import BlogCart from "../../../components/blogs/BlogCart";
import ScalableImage from "../../../components/containers/Image/ScalableImage";
import NotFindIcon from "../../../public/images/no-results.png";
import { CursorClickIcon } from "@heroicons/react/solid";

const CategoryOostsPage: NextPage<{
  posts: GetPost[];
  category: GetCategory;
}> = ({ posts, category }) => {
  useEffect(() => {
    console.log("blogs:", posts);
  }, []);

  return (
    <>
      <Head title="theJs.ir" description="Generated by create next app" />
      <Layout>
        <div className="flex flex-col items-center mb-24">
          <div className="w-full py-14 bg-gradient-to-b from-cyan-100 to-white">
            <h1 className="text-2xl text-center text-blue-500 font-bold">
              مقالات منتشر شده در دسته ی{` ${category?.title} `}
            </h1>
          </div>
          <div className="w-full lg:w-3/4 px-5 lg:px-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post, index) => (
                <BlogCart key={index} post={post} />
              ))}
            </div>
            {posts.length === 0 && (
              <div className="w-full flex flex-col items-center mt-10">
                <div className="w-44 md:w-52 lg:w-56">
                  <ScalableImage className="h-full" src={NotFindIcon} />
                </div>
                <div className="w-full flex flex-col items-center">
                  <span className="text-lg md:text-2xl text-center font-bold text-gray-900 mt-10">
                    مقاله ای هنوز برای دسته ی مورد نظر منتشر نشده است
                  </span>
                  <Link href="/categories">
                    <a className="text-sm text-center flex items-center gap-1 text-gray-700 mt-5 hover:text-blue-400 transition">
                      <CursorClickIcon className="w-4 text-gray-400  transition" />
                      مشاهده دسته های دیگر
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params !== undefined && "slug" in context.params) {
    const slug = context.params?.slug;
    // Fetch data from external API
    const res = await fetch(
      `http://localhost:8000/api/v1/categories/${slug}/posts`
    );

    if (res.ok) {
      const { posts, category }: { posts: GetPost[]; category: GetCategory } =
        await res.json();
      // const posts = data.posts as GetPost[];
      // Pass data to the page via props
      return { props: { posts, category } };
    }
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default CategoryOostsPage;
