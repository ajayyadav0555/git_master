import React, { useEffect, useState } from "react";

const NewCompo = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Parallax Text Section 1: Moves Vertically */}
      <div
        className="h-screen flex items-center justify-center text-5xl text-gray-800"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`, // Moves slower vertically
        }}
      >
        Vertical Parallax Text 1
      </div>

      {/* Normal Content Section */}
      <div className="h-screen flex items-center justify-center bg-gray-200 p-8">
        <h2 className="text-2xl text-gray-800">Static Content Section</h2>
        <p className="text-lg text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Parallax Text Section 2: Moves Horizontally */}
      <div
        className="h-screen flex items-center justify-center text-5xl text-gray-800"
        style={{
          transform: `translateX(${offsetY * 0.5}px)`, // Moves slower horizontally
        }}
      >
        Horizontal Parallax Text 2
      </div>

      {/* Slider-like Effect Section: Moves in from the Left */}
      <div
        className="h-screen flex items-center justify-center text-5xl text-gray-800 bg-gray-300"
        style={{
          transform: `translateX(${offsetY * 0.7}px)`, // Faster horizontal scroll for a sliding effect
        }}
      >
        Sliding Text from Left
      </div>

      {/* Mixed Parallax Section: Moves Both Vertically and Horizontally */}
      <div
        className="h-screen flex items-center justify-center text-5xl text-gray-800 bg-gray-500"
        style={{
          transform: `translate(${offsetY * 0.5}px, ${offsetY * 0.3}px)`, // Moves in both X and Y axes
        }}
      >
        Mixed X and Y Parallax Text 3
      </div>

      {/* Parallax Section 4: Opposite Horizontal Scroll */}
      <div
        className="h-screen flex items-center justify-center text-5xl text-gray-800 bg-gray-700"
        style={{
          transform: `translateX(${-offsetY * 0.5}px)`, // Moves opposite to scroll horizontally
        }}
      >
        Opposite Horizontal Parallax Text 4
      </div>

      {/* Static Content Section */}
      <div className="h-screen flex items-center justify-center bg-gray-100 p-8">
        <h2 className="text-2xl text-gray-800">Another Static Section</h2>
        <p className="text-lg text-gray-600 mt-4">
          More content as you scroll down the page.
        </p>
      </div>
    </div>
  );
};

export default NewCompo;
