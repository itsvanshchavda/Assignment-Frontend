import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const Home = () => {

  const handleRedirect = () => {
    window.location.href = "https://highwaydelite.com/"
  }
  return (



    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-auto bg-gradient-to-b from-[#000000] to-[#a79827] "
      >
        <Navbar />

        <div className="mt-20">
          <h1 className="text-white capitalize font-popins font-extrabold md:text-2xl text-xl text-center">
            India's largest{" "}
            <span className="text-yellow-300">digitally connected</span>{" "}
            <h1>mobility and highway wayside amenities platform.</h1>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center mx-4 lg:mx-20 mt-20 md:bg-zinc-900 md:pt-5 rounded-md md:border border-gray-500">

          <div className="flex flex-col items-center mb-4 w-full sm:w-1/2 lg:w-1/4  max-sm:bg-zinc-900 rounded-md">
            <p className="text-yellow-300 font-bold text-center">1.8 million+</p>
            <p className="text-white font-bold text-center">Customers</p>
          </div>

          <div className="flex flex-col items-center mb-4 w-full sm:w-1/2 lg:w-1/4 max-sm:bg-zinc-900 rounded-md">
            <p className="text-yellow-300 text-center">2 lakh+</p>
            <p className="text-white font-bold text-center">KMs of NH and SH verified data</p>
          </div>

          <div className="flex flex-col items-center mb-4 w-full sm:w-1/2 lg:w-1/4 max-sm:bg-zinc-900 rounded-md">
            <p className="text-yellow-300 text-center">5 lakh+</p>
            <p className="text-white font-bold text-center">verified POIs</p>
          </div>

          <div className="flex flex-col items-center mb-4 w-full sm:w-1/2 lg:w-1/4 max-sm:bg-zinc-900 rounded-md">
            <p className="text-yellow-300 text-center">25000+</p>
            <p className="text-white font-bold text-center">Customer Touch points</p>
          </div>
        </div>



        <div className="flex justify-center items-center py-20">
          <button type="button" className="font-popins text-white  px-5 py-2 rounded-md shadow-2xl duration-300 bg-gradient-to-r from-yellow-500 to-black hover:from-black hover:to-yellow-500 " onClick={handleRedirect}>
            See More
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
