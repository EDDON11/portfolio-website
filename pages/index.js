import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Work from "./Work";
import HomePage from "./HomePage";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Eduard Donkeev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Navbar />
      <HomePage />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
