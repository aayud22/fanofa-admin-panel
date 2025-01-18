import React from 'react';

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1e90ff]">
      {/* Circular Gradient Layers */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            transform: `scale(${1 - i * 0.12})`,
            background:
              i % 2 === 0
                ? 'linear-gradient(145deg, #1e90ff, #0066cc)'
                : 'linear-gradient(145deg, #0066cc, #1e90ff)',
            filter: 'blur(15px)',
            margin: `${i * 3}%`,
            opacity: 0.9 - i * 0.15,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 px-4 text-center">
        <h1
          className="mb-4 text-[150px] font-extrabold leading-none sm:text-[200px]"
          style={{
            background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </h1>
        <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl">
          Oops! This Page is Not Working.
        </h2>

        <a
          href="/"
          className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[#1e90ff] shadow-md transition-transform duration-300 hover:scale-105 hover:bg-opacity-90"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
