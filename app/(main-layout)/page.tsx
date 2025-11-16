import { memo } from "react";
import Hero from "../../components/common/Hero";
import ProductList from "../../components/common/ProductList";
import SecondHero from "../../components/common/SecondHero";

const Home = () => {
  return (
    <div>
      <div className="bg-purple-50 min-h-600">
        <Hero />
        <ProductList />
        {/* <SecondHero /> */}
      </div>
    </div>
  );
};

export default memo(Home);
