"use client";

import Image from "next/image"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [user, setUser] = useState<{username: string, role: string} | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    setIsLoaded(true);
  }, []);

  // Show loading state until user data is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <div className='flex items-center justify-between p-4'>
        {/* SEARCH BAR */}
        <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
          <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
        </div>
        {/* ICONS AND USER */}
        <div className='flex items-center gap-6 justify-end w-full'>
          <div className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
          <div className="animate-pulse bg-gray-200 h-6 w-16 rounded"></div>
        </div>
      </div>
    );
  }

  // Default values if no user is logged in
  const displayName = user ? user.username : "Guest";
  const displayRole = user ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "User";

  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt="" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="" width={20} height={20}/>
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt="" width={20} height={20}/>
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">{displayName}</span>
          <span className="text-[10px] text-gray-500 text-right">{displayRole}</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
      </div>
    </div>
  )
}

export default Navbar