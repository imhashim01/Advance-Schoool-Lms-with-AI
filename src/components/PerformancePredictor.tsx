import { studentsData, resultsData, attendanceData } from "@/lib/data";

interface Prediction {
  studentId: number;
  name: string;
  caseType: "Best" | "Average" | "Worst";
  predictedGrade: string;
  suggestions: string[];
}

const PerformancePredictor = () => {
  // Generate three case predictions per student based on their academic record
  const predictions: Prediction[] = [];

  studentsData.forEach((student) => {
    const studentResults = resultsData.filter(r => r.student === student.name);
    const avgScore = studentResults.length > 0 ? studentResults.reduce((sum, r) => sum + r.score, 0) / studentResults.length : 0;

    const studentAttendance = attendanceData.filter(a => a.studentName === student.name);
    const attendanceRate = studentAttendance.length > 0 ? (studentAttendance.filter(a => a.status === "Present").length / studentAttendance.length) * 100 : 0;

    // Best case: Assume improved performance (higher scores, better attendance)
    const bestScore = Math.min(100, avgScore + 10);
    const bestAttendance = Math.min(100, attendanceRate + 10);
    let bestGrade = "A";
    if (bestScore < 70) bestGrade = "C";
    else if (bestScore < 85) bestGrade = "B";
    const bestSuggestions = ["Continue improving", "Maintain high attendance", "Challenge yourself with advanced topics"];

    predictions.push({
      studentId: student.id,
      name: student.name,
      caseType: "Best",
      predictedGrade: bestGrade,
      suggestions: bestSuggestions,
    });

    // Average case: Current performance trend
    let avgGrade = "A";
    if (avgScore < 70) avgGrade = "C";
    else if (avgScore < 85) avgGrade = "B";
    const avgSuggestions = ["Keep up the good work", "Focus on consistent attendance", "Review challenging subjects"];

    predictions.push({
      studentId: student.id,
      name: student.name,
      caseType: "Average",
      predictedGrade: avgGrade,
      suggestions: avgSuggestions,
    });

    // Worst case: Assume declined performance (lower scores, worse attendance)
    const worstScore = Math.max(0, avgScore - 10);
    const worstAttendance = Math.max(0, attendanceRate - 10);
    let worstGrade = "C";
    if (worstScore >= 85) worstGrade = "A";
    else if (worstScore >= 70) worstGrade = "B";
    const worstSuggestions = ["Increase study time", "Improve attendance immediately", "Seek tutoring support"];

    predictions.push({
      studentId: student.id,
      name: student.name,
      caseType: "Worst",
      predictedGrade: worstGrade,
      suggestions: worstSuggestions,
    });
  });

  return (
    <div className="bg-white p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Student Performance Predictions (Best, Average, Worst Cases)</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th className="p-2">Student</th>
              <th className="p-2">Case</th>
              <th className="p-2">Predicted Grade</th>
              <th className="p-2">Suggestions</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((pred, index) => (
              <tr key={`${pred.studentId}-${pred.caseType}`} className="border-t border-gray-100">
                <td className="p-2">{pred.name}</td>
                <td className={`p-2 font-semibold ${pred.caseType === "Best" ? "text-green-600" : pred.caseType === "Average" ? "text-blue-600" : "text-red-600"}`}>
                  {pred.caseType} Case
                </td>
                <td className="p-2">{pred.predictedGrade}</td>
                <td className="p-2">
                  <ul className="list-disc list-inside">
                    {pred.suggestions.map((s, i) => (
                      <li key={i} className="text-sm">{s}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformancePredictor;