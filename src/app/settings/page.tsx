"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SettingsPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<{username: string, role: string} | null>(null);
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    // Check authentication
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/sign-in');
      return;
    }

    // Get user from localStorage
    setUser(JSON.parse(userData));
  }, [router]);

  const tabs = [
    { id: "profile", label: "Profile", icon: "/user.png" },
    { id: "security", label: "Security", icon: "/lock.png" },
    { id: "notifications", label: "Notifications", icon: "/bell.png" },
    { id: "preferences", label: "Preferences", icon: "/settings.png" },
  ];

  return (
    <div className="bg-white p-6 rounded-md m-4 mt-0">
      <div className="flex items-center gap-4 mb-6">
        <Image src="/settings.png" alt="Settings" width={32} height={32} />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-50 rounded-lg p-4">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Image src={tab.icon} alt={tab.label} width={20} height={20} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-50 rounded-lg p-6">
          {activeTab === "profile" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/avatar.png"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{user?.username || "User"}</h3>
                    <p className="text-gray-500 capitalize">{user?.role || "Role"}</p>
                    <button className="mt-2 text-blue-500 hover:text-blue-600">
                      Change Photo
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your address"
                    />
                  </div>
                </div>

                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Change Password</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter current password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  <button className="mt-3 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Update Password
                  </button>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                  <p className="text-gray-600 mb-3">
                    Add an extra layer of security to your account
                  </p>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Push Notifications</h3>
                    <p className="text-sm text-gray-600">Receive push notifications in browser</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">SMS Notifications</h3>
                    <p className="text-sm text-gray-600">Receive important alerts via SMS</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Assignment Reminders</h3>
                    <p className="text-sm text-gray-600">Get reminded about upcoming assignments</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Theme</h3>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                      Light
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                      Dark
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-md">
                      System
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Language</h3>
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Timezone</h3>
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="utc">UTC</option>
                    <option value="est">Eastern Time</option>
                    <option value="pst">Pacific Time</option>
                    <option value="gmt">GMT</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Date Format</h3>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-blue-500 text-white border border-blue-500 rounded-md">
                      MM/DD/YYYY
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                      DD/MM/YYYY
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
                      YYYY-MM-DD
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;