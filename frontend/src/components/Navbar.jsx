function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          AI Code Reviewer
        </h1>

        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#features" className="hover:text-gray-200">Features</a>
          <a href="#about" className="hover:text-gray-200">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
