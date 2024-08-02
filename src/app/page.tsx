import Image from "next/image";
import Products from "./components/products";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col">
      <h1 className="text-primary">
        Aroma
        <span className="text-secondary">Toes</span>
      </h1>
      <h2>The next generation of comfy toes</h2>
      <p className="relative px-10 sm:px-20 xl:px-72 pt-6 sm:pt-12 text-center z-10">
        At AromaToes, we believe that your feet deserve more than just ordinary
        socks. That&#39;s why we&#39;ve created a unique line of fruit-scented
        socks designed to keep your feet feeling fresh and smelling delightful
        all day long. Our premium socks are infused with natural fruit essences,
        offering a burst of fragrance with every step. Crafted from the finest
        materials, AromaToes socks provide exceptional comfort and vibrant,
        playful designs that bring a touch of fun to your wardrobe. Whether
        you&#39;re at home, at work, or on the go, AromaToes ensures your feet
        stay fresh and stylish. Step into a world of fruity freshness with
        AromaToes, where every pair is a treat for your feet!
      </p>
      <Products />
    </div>
  );
}
