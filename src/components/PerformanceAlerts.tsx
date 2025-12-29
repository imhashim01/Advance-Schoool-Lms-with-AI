import { studentsData, resultsData, attendanceData } from "@/lib/data";

const PerformanceAlerts = () => {
  // Assuming parent is viewing their child's data. For simplicity, show alerts for students with high risk.
  const alerts = studentsData
    .map((student) => {
      const studentResults = resultsData.filter(r => r.student === student.name);
      const avgScore = studentResults.length > 0 ? studentResults.reduce((sum, r) => sum + r.score, 0) / studentResults.length : 0;

      const studentAttendance = attendanceData.filter(a => a.studentName === student.name);
      const attendanceRate = studentAttendance.length > 0 ? (studentAttendance.filter(a => a.status === "Present").length / studentAttendance.length) * 100 : 0;

      if (avgScore < 70 || attendanceRate < 80) {
        return {
          student: student.name,
          message: `Performance alert: In the worst-case scenario, student may achieve lower grades. Current average score ${avgScore.toFixed(1)}%, Attendance ${attendanceRate.toFixed(1)}%. Monitor closely.`,
        };
      }
      return null;
    })
    .filter(Boolean);

  if (alerts.length === 0) {
    return (
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Performance Alerts</h2>
        <p className="text-gray-500">No alerts at this time.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Performance Alerts</h2>
      <ul className="space-y-2">
        {alerts.map((alert, index) => (
          <li key={index} className="p-2 bg-red-50 border border-red-200 rounded">
            <strong>{alert.student}:</strong> {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceAlerts;