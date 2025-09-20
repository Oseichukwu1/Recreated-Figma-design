const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* PR circle and Pro-Skills in one flex container aligned left */}
      <div className="flex items-center space-x-3">
        {/* Blue circle with 'Pr' */}
        <p className="bg-blue-600 text-white rounded-full size-[28px] flex items-center justify-center font-bold text-lg">
          Pr
        </p>
        {/* Brand name */}
        <div className="text-xl font-bold text-blue-600">Pro-Skills</div>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="text-blue-600">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Classes</a>
        </li>
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
      </ul>

      {/* Login & Sign In buttons */}
      <div className="space-x-3">
        <button className="border border-blue-500 text-blue-500 py-1 px-5 rounded-2xl hover:bg-blue-50">
          Login
        </button>
        <button className="bg-blue-600 text-white py-1 px-5 rounded-2xl hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Nav;
