import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import NewCompo from "./assets/comp/NewCompo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex lg:grid lg:grid-cols-[16rem_1fr]">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:w-full`}
      >
        <div className="flex justify-between">
          <div className="p-5 text-xl font-bold border-b border-gray-700">
            Sidebar Menu
          </div>
          <div className="p-3 lg:hidden">
            <button onClick={toggleSidebar}>X</button>
          </div>
        </div>
        <ul className="p-4">
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md cursor-pointer">
            Dashboard
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md cursor-pointer">
            work
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md cursor-pointer">
            Profile
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md cursor-pointer">
            Settings
          </li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded-md cursor-pointer">
            Logout
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-64" : "lg:ml-0"
        }`}
      >
        {/* Mobile menu button */}
        <div className="lg:hidden p-4 bg-gray-100">
          <button
            className={`text-gray-800 focus:outline-none ${
              isOpen ? "hidden" : "block"
            }`}
            onClick={toggleSidebar}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-10 bg-gray-100 h-screen">
          {/* <h1 className="text-3xl font-bold">Main Content</h1>
          <p>This is the content area. Resize the window to see the sidebar behavior.</p> */}
          <NewCompo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
