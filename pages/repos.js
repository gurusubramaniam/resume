import RepoList from "../components/RepoList";
import Head from "next/head";

export default function repos({ res }) {
  return (
    <>
      <Head>
        <title>Guru&apos;s portfolio</title>
        <meta name="description" content="Personal portfolio website" />
        <meta
          name="viewport"
          content="width=device-width&rsquo; initial-scale=1"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main>
        <RepoList repos={res} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://api.github.com/users/gurusubramaniam/repos"
  );
  const res = await response.json();
  return {
    props: {
      res,
    },
  };
};
