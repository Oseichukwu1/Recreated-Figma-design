const CourseStat = () => {
  return (
    <section
      className="flex flex-col sm:flex-row
 justify-start items-start gap-10 py-10 bg-gray-50 px-6 md:px-16"
    >
      <div>
        <h3 className="text-yellow-500 text-3xl font-bold">1000+</h3>
        <p className="text-gray-700 font-medium">Courses to choose from</p>
      </div>
      <div>
        <h3 className="text-blue-600 text-3xl font-bold">5000+</h3>
        <p className="text-gray-700 font-medium">Students Trained</p>
      </div>
      <div>
        <h3 className="text-red-500 text-3xl font-bold">200+</h3>
        <p className="text-gray-700 font-medium">Professional Trainers</p>
      </div>
    </section>
  );
};

export default CourseStat;
