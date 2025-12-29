"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    } else {
      router.push('/sign-in');
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // This won't render since we redirect in useEffect
  }

  return <>{children}</>;
};

export default AuthGuard;