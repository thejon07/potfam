// components/Header.js
export default function Header({ sidebarOpen, setSidebarOpen, title }) {
  return (
    <header className="shadow bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            className="text-gray-500 focus:outline-none lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="material-icons">menu</span>
          </button>
          
          <h1 className="ml-3 text-2xl font-bold text-gray-900 bebas-neue-regular">{title}</h1>
        </div>
        
        <div className="flex items-center">
          <button className="flex mx-4 text-gray-600 focus:outline-none">
            <span className="material-icons bebas-neue-regular">notifications</span>
          </button>
          
          <div className="relative">
            <button className="relative flex items-center focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                <span className="material-icons bebas-neue-regular">J</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}