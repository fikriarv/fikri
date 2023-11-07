import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const about = ({ data }) => {
  return (
    <>
      <Head>
        <title>About | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <Image src="/vercel.svg" alt="Logo Vercel" width={300} height={200} />
      <h1>About Fikri</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data, // Pass the data as a prop
    },
  };
};

export default about;
