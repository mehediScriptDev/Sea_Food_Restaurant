import banner from "../../../../assets/menu/banner3.jpg";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="relative bg-center bg-cover mb-10 min-h-[60vh] md:min-h-[70vh]"
    >
      {/* dark overlay across the whole hero */}
      <div className="absolute inset-0 bg-black/60" />

      {/* centered content panel */}
      <div className="relative z-10 flex items-center justify-center w-full h-full py-20 md:py-28">
        <div className="bg-black/40 text-white text-center px-8 py-10 md:px-16 md:py-14 rounded md:rounded-lg max-w-4xl w-[90%]">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide uppercase">OUR MENU</h1>
          <p className="mt-4 md:mt-6 text-sm md:text-lg uppercase tracking-widest text-gray-200">
            Would you like to try a dish?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
