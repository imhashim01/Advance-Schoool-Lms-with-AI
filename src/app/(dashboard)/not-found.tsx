import Link from 'next/link';

export default function DashboardNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-4">
        <div className="text-center">
          <div className="text-9xl text-gray-400 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            The dashboard page you're looking for doesn't exist.
          </p>
          <Link
            href="/admin"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-block"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}