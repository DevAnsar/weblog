import { useEffect } from "react";
import type { NextPage } from "next";
import type { BlogInterface } from "../../types";
import Head from "../../components/containers/head/Head";
import Layout from "../../components/containers/layout/Layout";
import BlogCart from "../../components/blogs/BlogCart";
import CategoriesPanel from "../../components/categories/Panel";

const Blogs: NextPage<{ blogs: BlogInterface[] }> = ({ blogs }) => {
  useEffect(() => {
    console.log("blogs:", blogs);
  }, []);

  return (
    <>
      <Head title="theJs.ir" description="Generated by create next app" />
      <Layout>
        <div className="flex justify-center my-24">
          <div className="w-4/5 md:w-3/4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              <div className="col-span-1">
                <BlogCart />
              </div>
              <div className="col-span-1">
                <BlogCart />
              </div>
              <div className="col-span-1">
                <BlogCart />
              </div>
              <div className="col-span-1">
                <BlogCart />
              </div>
              <div className="col-span-1">
                <BlogCart />
              </div>
              <div className="col-span-1">
                <BlogCart />
              </div>
            </div>
          </div>
        </div>
        <CategoriesPanel />
      </Layout>
    </>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://server.ansarmirzayi.ir/api/v1/blogs`)
  // const data = await res.json()
  // const blogs = data.status ? data.blogs as BlogInterface[] : []
  const blogs: BlogInterface[] = [];
  // Pass data to the page via props
  return { props: { blogs } };
}

export default Blogs;
