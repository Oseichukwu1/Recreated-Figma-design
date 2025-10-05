const CourseStat = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 md:px-16">
      {/* Flex row all the time */}
      <div className="flex flex-row justify-start items-center gap-10 max-w-screen-xl mx-auto">
        <div className="text-left">
          <h3 className="text-yellow-500 text-xl sm:text-3xl font-bold">1000+</h3>
          <p className="text-gray-700 font-medium">Courses to choose from</p>
        </div>
        <div className="text-left">
          <h3 className="text-blue-600 text-xl sm:text-3xl font-bold">5000+</h3>
          <p className="text-gray-700 font-medium">Students Trained</p>
        </div>
        <div className="text-left">
          <h3 className="text-red-500 text-xl sm:text-3xl font-bold">200+</h3>
          <p className="text-gray-700 font-medium">Professional Trainers</p>
        </div>
      </div>
    </section>
  );
};

export default CourseStat;
