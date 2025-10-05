const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 md:px-16 py-10 bg-white overflow-hidden relative">
      {/* Left Text */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-gray-900">
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
        <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base sm:text-lg">
          <strong>1000+</strong> Courses covering all tech domains for you to
          learn and explore new opportunities. Learn from Industry Experts and
          land your Dream Job.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full sm:w-auto">
            Start Trial
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 w-full sm:w-auto">
            How it Works
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative mt-10 md:mt-0 w-full max-w-xl mx-auto">
        {/* Main person image */}
        <img
          src="/images/female.png"
          alt="female"
          className="w-full max-w-[400px] mx-auto z-10 relative"
        />
        {/* Floating shapes — hidden or adjusted on small screens */}
        <img
          src="/images/rocket.png"
          className="absolute -top-16 -left-16 w-40 sm:w-60 z-30"
          alt="rocket"
        />
        <img
          src="/images/cup.png"
          className="absolute -bottom-20 right-10 w-40 z-30"
          alt="cup"
        />
        /
        <img
          src="/images/yellow.png"
          className="absolute -bottom-10 left-10 w-20 z-20"
          alt="yellow-shape"
        />
        <img
          src="/images/blue.png"
          alt="ellipse"
          className="w-12 absolute bottom-16 left-3 z-20"
        />
        <img
          src="/images/purple.png"
          alt="purple-eclipse"
          className="absolute top-0 right-14 w-24 z-20"
        />
        <img
          src="/images/red.png"
          alt="red-dot"
          className="absolute top-[160px] right-14 w-10 z-20"
        />
      </div>
    </section>
  );
};

export default Hero;
