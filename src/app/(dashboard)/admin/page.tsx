import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import PerformancePredictor from "@/components/PerformancePredictor";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Comprehensive school management and analytics overview</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">1,250</div>
          <div className="text-sm text-gray-600">Total Students</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">85</div>
          <div className="text-sm text-gray-600">Total Teachers</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">1,200</div>
          <div className="text-sm text-gray-600">Total Parents</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">95%</div>
          <div className="text-sm text-gray-600">Avg Attendance</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Student Management */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">👨‍🎓 Student Management</h2>
          <div className="space-y-3">
            <Link href="/list/students">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                Add Student Records
              </button>
            </Link>
            <Link href="/list/students">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Student Information
              </button>
            </Link>
            <Link href="/list/students">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors">
                Update Student Details
              </button>
            </Link>
            <Link href="/list/students">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors">
                Delete Student Records
              </button>
            </Link>
          </div>
        </div>

        {/* Teacher Management */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-600">👨‍🏫 Teacher Management</h2>
          <div className="space-y-3">
            <Link href="/list/teachers">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                Add Teacher Profiles
              </button>
            </Link>
            <Link href="/list/teachers">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Teacher Information
              </button>
            </Link>
            <Link href="/list/teachers">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors">
                Update Teacher Details
              </button>
            </Link>
            <Link href="/list/teachers">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors">
                Remove Teacher Records
              </button>
            </Link>
          </div>
        </div>

        {/* Parent Management */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">👨‍👩‍👧‍👦 Parent Management</h2>
          <div className="space-y-3">
            <Link href="/list/parents">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors">
                Add Parent Profiles
              </button>
            </Link>
            <Link href="/list/parents">
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Parent Information
              </button>
            </Link>
            <Link href="/list/parents">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg transition-colors">
                Update Parent Details
              </button>
            </Link>
            <Link href="/list/parents">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors">
                Remove Parent Records
              </button>
            </Link>
          </div>
        </div>

        {/* Class & Subject Management */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">🏫 Class & Subject Management</h2>
          <div className="space-y-3">
            <Link href="/list/classes">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition-colors">
                Create & Manage Classes
              </button>
            </Link>
            <Link href="/list/classes">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg transition-colors">
                Assign Students to Classes
              </button>
            </Link>
            <Link href="/list/subjects">
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg transition-colors">
                Create & Manage Subjects
              </button>
            </Link>
            <Link href="/list/subjects">
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 px-4 rounded-lg transition-colors">
                Assign Teachers to Subjects
              </button>
            </Link>
          </div>
        </div>

        {/* Exam & Attendance Management */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-teal-600">📝 Exam & Attendance Management</h2>
          <div className="space-y-3">
            <Link href="/list/exams">
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg transition-colors">
                Create & Manage Exams
              </button>
            </Link>
            <Link href="/list/attendance">
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Attendance Records
              </button>
            </Link>
            <Link href="/list/attendance">
              <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-4 rounded-lg transition-colors">
                Modify Attendance Entries
              </button>
            </Link>
          </div>
        </div>

        {/* Announcements & Events */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-pink-600">📢 Announcements & Events</h2>
          <div className="space-y-3">
            <Link href="/list/announcements">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg transition-colors">
                Create Announcements
              </button>
            </Link>
            <Link href="/list/announcements">
              <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-4 rounded-lg transition-colors">
                Update/Remove Announcements
              </button>
            </Link>
            <Link href="/list/events">
              <button className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white py-3 px-4 rounded-lg transition-colors">
                Manage Event Calendar
              </button>
            </Link>
          </div>
        </div>

        {/* Analytics Dashboard Preview */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2 xl:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-indigo-600">📊 System Analytics</h2>
          <div className="space-y-4">
            <div className="h-32">
              <CountChart />
            </div>
            <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
              View Full Analytics Dashboard →
            </Link>
          </div>
        </div>

        {/* Recent System Activity */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-600">📋 Recent System Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">New Student Enrolled</p>
                <p className="text-sm text-gray-600">John Smith added to Grade 10-A</p>
              </div>
              <span className="text-xs text-blue-600">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Teacher Profile Updated</p>
                <p className="text-sm text-gray-600">Ms. Johnson - Subject assignment changed</p>
              </div>
              <span className="text-xs text-green-600">4 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium">New Exam Created</p>
                <p className="text-sm text-gray-600">Mathematics Final Exam - Grade 12</p>
              </div>
              <span className="text-xs text-purple-600">6 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium">Attendance Records Updated</p>
                <p className="text-sm text-gray-600">Bulk update for Science class</p>
              </div>
              <span className="text-xs text-orange-600">8 hours ago</span>
            </div>
          </div>
        </div>

      </div>

      {/* Full Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-600">📈 Attendance Analytics</h2>
          <div className="h-64">
            <AttendanceChart />
          </div>
        </div>

        {/* Finance Chart */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">💰 Financial Analytics</h2>
          <div className="h-64">
            <FinanceChart />
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-purple-600">🎯 Performance Insights</h2>
        <div className="h-64 overflow-hidden">
          <PerformancePredictor />
        </div>
        <Link href="/list/predictor" className="text-purple-600 hover:text-purple-800 font-medium mt-2 inline-block">
          View Full Performance Analytics →
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
