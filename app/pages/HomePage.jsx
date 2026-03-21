import { Layout, Hero, Service } from "../components";

const HomePage = () => {
  return (
    <Layout>
      <div className="bg-black">
        <Hero />
      </div>
      <div className="bg-white">
        <Service />
      </div>
    </Layout>
  );
};

export default HomePage;
