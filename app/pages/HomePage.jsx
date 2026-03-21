import { Layout } from "../components";
import { Hero } from "../components";

const HomePage = () => {
  return (
    <Layout>
      <div className="bg-black">
        <Hero />
      </div>
    </Layout>
  );
};

export default HomePage;
