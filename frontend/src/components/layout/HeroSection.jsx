import heroimg from "../../assets/rabbit-hero.webp";

const HeroSection = () => {
  console.log("🔥 HeroSection mounted");
  return (
    <section className="relative border-4 border-yellow-500 bg-green-300">
      <img
        src={heroimg}
        alt="hero"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl font-bold">VACATION<br />ready</h1>
          <p className="text-sm mb-6">Fast worldwide shipping</p>
          <button className="bg-white text-black px-6 py-2">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
