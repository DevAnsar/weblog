import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import type { NextPage, GetServerSideProps } from "next";
import { RefreshIcon } from "@heroicons/react/solid";
import type { GetPost } from "../../types";
import Head from "../../components/containers/head/Head";
import Layout from "../../components/containers/layout/Layout";
import PostCart from "../../components/blogs/BlogCart";
import SearchInput from "../../components/serchers/SearchInput";

type SearchQuery = {
  q: string;
};
const SearchPage: NextPage<{ q: string | null }> = ({ q }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<GetPost[]>([]);

  useEffect(() => {
    // console.log("q:", q);
    console.log("router:", q);
    if (q !== null) {
      handleSearch(q);
    }
  }, [q]);

  const handleSearch = async (query: string) => {
    let posts: GetPost[] = [];
    setLoading(true);
    const res = await fetch(`http://localhost:8000/api/v1/search?q=${query}`);
    if (res.ok) {
      const data = await res.json();
      posts = data.posts as GetPost[];
      setSearchResults(posts);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      <Head title="theJs.ir" description="Generated by create next app" />
      <Layout>
        <div className="flex flex-col items-center mb-24">
          <div className="my-7">
            <h1 className="text-md lg:text-2xl text-blue-500 font-bold">
              نتایج جستجو برای عبارت
              {router.query.q}
            </h1>
          </div>
          <div className="w-full flex justify-center mb-10">
            <SearchInput initValue={(router.query as SearchQuery).q || ""} />
          </div>
          <div className="w-full lg:w-3/4 px-5 lg:px-0 ">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {searchResults.map((res: GetPost, index: number) => (
                <PostCart key={index} post={res} />
              ))}
            </div>
          </div>
          {loading && (
            <div className="flex justify-center w-full mt-5">
              <RefreshIcon className="w-8 text-cyan-500 animate-spin" />
            </div>
          )}
          {!loading && searchResults.length === 0 && (
            <div className="flex justify-center w-full mt-5">
              <div className="w-4/5 md:w-3/4 lg:w-96  flex justify-center px-10 py-10 bg-gray-100 rounded-xl">
                <span className="text-gray-600">
                  نتیجه ای برای جستجوی شما یافت نشد
                </span>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (context) => {
  let q: string | null = null;
  if (context.query !== undefined && "q" in context.query) {
    q = (context.query as SearchQuery).q;
  }
  return {
    props: {
      q,
    },
  };
};

export default SearchPage;