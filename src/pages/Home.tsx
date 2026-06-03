import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Protocols from "../components/home/Protocols";
import SkinProtocol from "../components/home/SkinProtocol";
import Science from "../components/home/Science";
import Newsletter from "../components/home/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Protocols />
      <SkinProtocol />
      <Science />
      <Newsletter />
    </>
  );
}

export default Home;