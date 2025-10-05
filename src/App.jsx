// src/App.jsx
import Nav from "./components/nav";
import Hero from "./components/Hero/hero";
import CourseStat from "./components/courseStat";

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-12 lg:px-20 py-8 space-y-8">
        <Hero />
        <CourseStat />
      </main>
    </div>
  );
}

export default App;
