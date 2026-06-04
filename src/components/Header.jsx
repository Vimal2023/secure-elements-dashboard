import { Search, Bell, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left Side - Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search anything here"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-900/10 backdrop-blur-sm text-gray-900 placeholder-gray-500 rounded-lg border border-gray-200/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right Side - Icons and Profile */}
        <div className="flex items-center gap-6 ml-auto">
          {/* Notification Bell */}
          <div className="relative cursor-pointer hover:opacity-75 transition-opacity">
            <Bell size={24} className="text-gray-700" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
          </div>

          {/* Settings Icon */}
          <button className="cursor-pointer hover:opacity-75 transition-opacity">
            <Settings size={24} className="text-gray-700" />
          </button>

          {/* Profile Section */}
          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            {/* Avatar */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* User Info */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900">Seda Şen</p>
              <p className="text-xs text-gray-500">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
