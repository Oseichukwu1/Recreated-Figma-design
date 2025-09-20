const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 md:px-16 py-10 bg-white">
      {/* Left Text */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold leading-snug text-gray-900">
          <span className="hover:underline underline-offset-4 decoration-blue-500">
            Learn a New Skill
          </span>
          <br />
          <span className="hover:underline underline-offset-4 decoration-blue-500">
            Everyday, Anytime,
          </span>
          <br />
          <span className="hover:underline underline-offset-4 decoration-blue-500">
            and Anywhere.
          </span>
        </h1>
        <p className="text-gray-600 max-w-md">
          <strong>1000+</strong> Courses covering all tech domains for you to
          learn and explore new opportunities. Learn from Industry Experts and
          land your Dream Job.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Start Trial
          </button>
          <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50">
            How it Works
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative mt-10 md:mt-0">
        <img
          src="src/assets/images/female.png"
          alt="female"
          className="size-[554px] mx-auto z-10 relative"
        />
        <img
          src="src/assets/images/rocket.png"
          className="absolute -top-20 -left-20 size-[424px] z-50"
        />

        <img
          src="/src/assets/images/cup.png"
          className="absolute -bottom-20 right-10 size-[275px] z-50"
        />

        <img
          src="/src/assets/images/yellow.png"
          className="absolute -bottom-20 left-10 size-[125px] z-50"
        />
        <img
          src="/src/assets/images/blue.png"
          alt="ellipse"
          className="size-[61px] absolute bottom-16 left-3 z-50"
        />
        <img
          src="/src/assets/images/purple.png"
          alt="purpleEclpise"
          className="absolute top-0 right-14 size-[150px] z-60"
        />

        <img
          src="/src/assets/images/red.png"
          alt=""
          className="absolute top-[160px] right-14 size-[61px] z-60"
        />
        {/* Add floating shapes similarly */}
      </div>
    </section>
  );
};

export default Hero;
