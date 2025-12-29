'use client';

'use client';

import { useEffect } from 'react';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Dashboard Error:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
        <div className="text-center">
          <div className="text-6xl text-red-500 mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Error</h1>
          <p className="text-gray-600 mb-6">
            Something went wrong in the dashboard. Please try refreshing.
          </p>
          <button
            onClick={reset}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mr-4"
          >
            Try Again
          </button>
          <a
            href="/"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}