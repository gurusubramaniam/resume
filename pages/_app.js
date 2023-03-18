import Nav from "../components/Nav";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav {...pageProps} />
      <Component {...pageProps} />
    </>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch("https://api.github.com/users/gurusubramaniam");
//   const profile = await res.json();
//   return {
//     props: {
//       profile,
//     },
//   };
// };
