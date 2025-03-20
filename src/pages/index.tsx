import UnitConverter from "../components/UnitConverter";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Unit Converter</title>
        <meta name="description" content="A simple unit converter app" />
      </Head>
      <main>
        <UnitConverter />
      </main>
    </div>
  );
};

export default Home;
