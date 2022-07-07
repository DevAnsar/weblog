import Head from "next/head";

type HeadComponentPropsType = {
  title: string;
  description ?: string
};
const HeadComponent = ({ title , description }: HeadComponentPropsType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent
