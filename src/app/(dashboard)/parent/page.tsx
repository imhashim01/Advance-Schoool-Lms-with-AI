import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";
import PerformancePredictor from "@/components/PerformancePredictor";
import Link from "next/link";

const ParentPage = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-white p-6 rounded-md">
        <h1 className="text-2xl font-bold text-gray-800">Parent Dashboard</h1>
        <p className="text-gray-600 mt-2">Monitor your child's progress, communicate with teachers, and stay updated</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">John Doe</div>
          <div className="text-sm text-gray-600">Child's Name</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">Grade 10-A</div>
          <div className="text-sm text-gray-600">Class</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">85%</div>
          <div className="text-sm text-gray-600">Attendance Rate</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">A-</div>
          <div className="text-sm text-gray-600">Current Grade</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Student Monitoring */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">👨‍👩‍👧‍👦 Student Monitoring</h2>
          <div className="space-y-3">
            <Link href="/list/attendance">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Child's Attendance
              </button>
            </Link>
            <Link href="/list/results">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Academic Performance
              </button>
            </Link>
            <Link href="/list/exams">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Exam Results
              </button>
            </Link>
          </div>
        </div>

        {/* Analytics & Communication */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-600">📊 Analytics & Communication</h2>
          <div className="space-y-3">
            <Link href="/list/predictor">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                Performance Analytics
              </button>
            </Link>
            <Link href="/list/messages">
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg transition-colors">
                Communicate with Teachers
              </button>
            </Link>
            <Link href="/list/messages">
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded-lg transition-colors">
                Contact Administration
              </button>
            </Link>
          </div>
        </div>

        {/* Events & Announcements */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">📅 Events & Announcements</h2>
          <div className="space-y-3">
            <Link href="/list/announcements">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Announcements
              </button>
            </Link>
            <Link href="/list/events">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Upcoming Events
              </button>
            </Link>
          </div>
        </div>

        {/* Performance Analytics Preview */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2 xl:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">🎯 Performance Analytics</h2>
          <div className="h-64 overflow-hidden">
            <PerformancePredictor />
          </div>
          <Link href="/list/predictor" className="text-orange-600 hover:text-orange-800 font-medium mt-2 inline-block">
            View Full Analytics →
          </Link>
        </div>

        {/* Recent Communications & Updates */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-teal-600">💬 Recent Communications & Updates</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">New Message from Math Teacher</p>
                <p className="text-sm text-gray-600">Regarding upcoming test preparation</p>
              </div>
              <span className="text-xs text-blue-600">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Grade Updated - Science Exam</p>
                <p className="text-sm text-gray-600">Score: 92% (A-)</p>
              </div>
              <span className="text-xs text-green-600">1 day ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium">Parent-Teacher Meeting Scheduled</p>
                <p className="text-sm text-gray-600">Tomorrow at 3:00 PM</p>
              </div>
              <span className="text-xs text-purple-600">2 days ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="font-medium">School Event: Science Fair</p>
                <p className="text-sm text-gray-600">This Friday - Your child is participating</p>
              </div>
              <span className="text-xs text-orange-600">3 days ago</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ParentPage;
