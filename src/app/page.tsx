"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    // Always redirect to sign-in for fresh authentication
    // Comment out the user check to force login every time
    /*
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      const roleRoutes = {
        admin: "/admin",
        teacher: "/teacher",
        student: "/student",
        parent: "/parent"
      };
      router.push(roleRoutes[userData.role as keyof typeof roleRoutes] || "/admin");
    } else {
      // If not logged in, redirect to sign-in
      router.push('/sign-in');
    }
    */
    router.push('/sign-in');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default Homepage