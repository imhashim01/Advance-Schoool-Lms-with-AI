import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";
import Link from "next/link";

const TeacherPage = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-sm text-gray-600">Total Classes</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">156</div>
          <div className="text-sm text-gray-600">Total Students</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">8</div>
          <div className="text-sm text-gray-600">Subjects</div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">3</div>
          <div className="text-sm text-gray-600">Pending Tasks</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Attendance Management */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">📊 Attendance Management</h2>
          <div className="space-y-3">
            <Link href="/list/attendance">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                Mark Attendance
              </button>
            </Link>
            <Link href="/list/attendance">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors">
                View Attendance History
              </button>
            </Link>
          </div>
        </div>

        {/* Academic Management */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">📚 Academic Management</h2>
          <div className="space-y-3">
            <Link href="/list/lessons">
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors">
                Manage Lessons
              </button>
            </Link>
            <Link href="/list/subjects">
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg transition-colors">
                Manage Subjects
              </button>
            </Link>
            <Link href="/list/exams">
              <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg transition-colors">
                Manage Exams
              </button>
            </Link>
          </div>
        </div>

        {/* Grades & Study Materials */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-orange-600">📝 Grades & Study Materials</h2>
          <div className="space-y-3">
            <Link href="/list/results">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition-colors">
                Upload Grades
              </button>
            </Link>
            <Link href="/list/lessons">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg transition-colors">
                Upload Study Materials
              </button>
            </Link>
          </div>
        </div>

        {/* Events & Announcements */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2 xl:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-green-600">📅 Events & Announcements</h2>
          <div className="space-y-4">
            <div>
              <Link href="/list/events" className="text-blue-600 hover:text-blue-800 font-medium">
                View All Events →
              </Link>
              <div className="mt-2">
                <EventCalendar />
              </div>
            </div>
            <div>
              <Link href="/list/announcements" className="text-blue-600 hover:text-blue-800 font-medium">
                View All Announcements →
              </Link>
              <div className="mt-2">
                <Announcements />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Schedule View */}
        <div className="bg-white p-6 rounded-md shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-teal-600">📅 Today&apos;s Schedule</h2>
          <div className="h-64">
            <BigCalendar />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherPage;
