import RepoList from "../components/RepoList";
import Meta from "../components/Meta";

export default function repos({ res }) {
  return (
    <>
      <Meta></Meta>
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
