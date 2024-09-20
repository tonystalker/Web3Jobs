const Hero = () => {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold text-center">
        Find your next
        <br /> Web3 job
      </h1>
      <p className="text-center text-gray-600 mt-4">
        We have the best jobs in Web3. Find your next job here.
      </p>
      <form className="flex gap-2 mt-4">
        <input
          type="search"
          className="border border-gray-400 w-full py-2 px-3 rounded-md "
          placeholder="Find you dream job ...."
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
          Find
        </button>
      </form>
    </section>
  );
};

export default Hero;
