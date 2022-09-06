import type { NextPage } from "next";
import Head from "../../components/containers/head/Head";
import Layout from "../../components/containers/layout/Layout";
import CategoriesPanel from "../../components/categories/Panel";
import {
  BadgeCheckIcon,
  ExclamationIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import useContactFormProvider from "../../hooks/useContactFormProvider";

const ContactUsPage: NextPage = () => {
  const { submit, register, submitSpinner, errors } = useContactFormProvider();

  return (
    <>
      <Head title="theJs.ir" description="Generated by create next app" />
      <Layout>
        <div className="flex justify-center bg-gradient-to-b from-blue-100 to-white px-5">
          <div className="w-full md:w-4/5 lg:w-2/5">
            <div className="rounded-xl bg-gradient-to-b from-white to-white shadow-lg p-9 my-8 md:my-12">
              <div className="flex flex-col items-start gap-2">
                <p className="text-sm md:text-lg text-gray-800 text-justify">
                  از فرم زیر میتواننید نظرات و انتقادات خودتون رو درباره ی
                  فعالیت مجموعه، با ما در میان بگذارید. در صورت رویت هرگونه مشکل
                  فنی و یا خطای نگارشی میتوانید با ما در بهینه سازی سایت کمک
                  کنید.
                </p>

                <form
                  className="w-full flex flex-col gap-10 mt-3"
                  onSubmit={submit}
                >
                  <div className="flex gap-5 flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2">
                      <label
                        htmlFor="on-error-email"
                        className="text-gray-700 text-sm"
                      >
                        نام و نام خانوادگی
                        <span className="text-red-500 required-dot">*</span>
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        id="on-error-name"
                        className={`${
                          errors.name && "ring-red-500"
                        } focus:ring-purple-600 w-full ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm lg:text-base focus:outline-none focus:ring-2  focus:border-transparent`}
                        placeholder="مشخصات فردی خود را وارد کنید"
                      />

                      <StatusIcon status={undefined} />
                      {errors.name && (
                        <p className="absolute text-xs md:text-sm text-red-500 -bottom-6">
                          {errors.name?.message}
                        </p>
                      )}
                    </div>
                    <div className="relative w-full md:w-1/2">
                      <label
                        htmlFor="on-error-email"
                        className="text-gray-700 text-sm"
                      >
                        ایمیل
                        <span className="text-red-500 required-dot">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="text"
                        id="on-error-email"
                        className={`${
                          errors.name && "ring-red-500"
                        } focus:ring-purple-600 w-full ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm lg:text-base focus:outline-none focus:ring-2  focus:border-transparent`}
                        placeholder="آدرس ایمیل"
                      />

                      <StatusIcon status={undefined} />
                      {errors.email && (
                        <p className="absolute text-xs md:text-sm text-red-500 -bottom-6">
                          {errors.email?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="relative w-full">
                    <label
                      htmlFor="on-error-email"
                      className="text-gray-700 text-sm"
                    >
                      متن پیام
                      <span className="text-red-500 required-dot">*</span>
                    </label>
                    <textarea
                      {...register("content")}
                      rows={7}
                      id="on-error-email"
                      className={`${
                        errors.name && "ring-red-500"
                      } focus:ring-purple-600 w-full ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-sm lg:text-base focus:outline-none focus:ring-2  focus:border-transparent`}
                      placeholder=""
                    ></textarea>

                    {/* <StatusIcon status={errors.content} /> */}
                    {errors.content && (
                      <p className="absolute text-xs md:text-sm text-red-500 -bottom-6">
                        {errors.content?.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <button
                      disabled={submitSpinner}
                      type="submit"
                      className="py-2 px-4 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-sm md:text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                    >
                      {submitSpinner ? (
                        <RefreshIcon className="w-6 h-6 text-white animate-spin" />
                      ) : (
                        <span>ارسال </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <CategoriesPanel />
      </Layout>
    </>
  );
};

const StatusIcon = ({ status }: { status: boolean | undefined }) => {
  if (status === undefined) return null;
  return (
    <>
      {status ? (
        <BadgeCheckIcon className="w-4 h-4 absolute text-green-700 left-2 bottom-3" />
      ) : (
        <ExclamationIcon className="w-4 h-4 absolute text-red-500 left-2 bottom-3" />
      )}
    </>
  );
};
// This gets called on every request
// export async function getServerSideProps() {
// Fetch data from external API
// const res = await fetch(`https://server.ansarmirzayi.ir/api/v1/blogs`)
// const data = await res.json()
// const blogs = data.status ? data.blogs as BlogInterface[] : []
// const blogs: BlogInterface[] = [];
// Pass data to the page via props
// return { props: { blogs } };
// }

export default ContactUsPage;