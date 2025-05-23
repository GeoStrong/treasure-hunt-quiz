import Link from 'next/link';
import React from 'react';
const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-center px-10 items-center justify-center">
        <h1 className="text-4xl font-bold text-gradient-3">
          It seems like you are lost in the time void...
        </h1>
        <p className="mt-4 text-lg text-white">
          The page you are looking for does not exist. Please check the URL or
          return to the previous page.
        </p>
        <Link
          href="/game/quizz/new-step"
          className="mt-6 bg-purple-700 shadow-2xl font-bold p-2 rounded-md text-white"
        >
          Back to Checkpoint
        </Link>
      </div>
    </>
  );
};
export default NotFound;
