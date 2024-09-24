const Hero = () => {
  return (
    <section className="container mx-auto my-16 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Find your next
        <br /> Web3 job
      </h1>
      <p className="text-center text-gray-600 mt-4 max-w-lg mx-auto">
        We have the best jobs in Web3. Find your next job here.
      </p>
      <form className="flex gap-2 mt-6 max-w-md mx-auto">
        <input
          type="search"
          className="border border-gray-300 w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Find your dream job ..."
        />
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
          Find
        </button>
      </form>
    </section>
  );
};

export default Hero;
