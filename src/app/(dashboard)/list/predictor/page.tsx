import { studentsData, resultsData, attendanceData } from "@/lib/data";
import PerformancePredictor from "@/components/PerformancePredictor";

const PredictorPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">AI-Based Student Performance Predictor</h1>
      <PerformancePredictor />
    </div>
  );
};

export default PredictorPage;