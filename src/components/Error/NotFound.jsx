import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-maintenance-page-bg flex h-full min-h-screen w-full items-center justify-center bg-cover bg-center">
      {/* Main Content */}
      <div className="px-4 text-center">
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
          className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-darkBlueText shadow-md transition-transform duration-300 hover:scale-105 hover:bg-opacity-90"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
