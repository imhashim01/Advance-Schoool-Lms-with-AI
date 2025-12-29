import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";
import Link from "next/link";

const StudentPage = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
        <p className="text-gray-600 mt-2">Access your academic information, attendance, and stay updated</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">85%</div>
          <div className="text-sm text-gray-600">Attendance Rate</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">A-</div>
          <div className="text-sm text-gray-600">Current Grade</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">3</div>
          <div className="text-sm text-gray-600">Pending Assignments</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">2</div>
          <div className="text-sm text-gray-600">New Messages</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Academic Access */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">📚 Academic Access</h2>
          <div className="space-y-3">
            <Link href="/list/exams">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Exam Results
              </button>
            </Link>
            <Link href="/list/results">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Grades
              </button>
            </Link>
          </div>
        </div>

        {/* Attendance Tracking */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-600">📊 Attendance Tracking</h2>
          <div className="space-y-3">
            <Link href="/list/attendance">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Attendance History
              </button>
            </Link>
          </div>
        </div>

        {/* Notifications & Events */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">🔔 Notifications & Events</h2>
          <div className="space-y-3">
            <Link href="/list/announcements">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Announcements
              </button>
            </Link>
            <Link href="/list/events">
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Events
              </button>
            </Link>
          </div>
        </div>

        {/* Timetable */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2 xl:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-teal-600">📅 My Timetable</h2>
          <div className="h-64">
            <BigCalendar />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">📋 Recent Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Math Exam Result Published</p>
                <p className="text-sm text-gray-600">Grade: A (95%)</p>
              </div>
              <span className="text-xs text-gray-500">2 days ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">New Assignment Posted</p>
                <p className="text-sm text-gray-600">Science: Chapter 5 Review</p>
              </div>
              <span className="text-xs text-gray-500">1 week ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Attendance Marked</p>
                <p className="text-sm text-gray-600">Present for English class</p>
              </div>
              <span className="text-xs text-gray-500">Yesterday</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentPage;
