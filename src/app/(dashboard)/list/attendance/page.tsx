import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, attendanceData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Attendance = {
  id: number;
  studentId: string;
  studentName: string;
  class: string;
  date: string;
  status: string;
  teacher: string;
};

const columns = [
  {
    header: "Student Info",
    accessor: "studentInfo",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AttendanceListPage = () => {
  const renderRow = (item: Attendance) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.studentName}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <span
          className={`py-1 px-2 rounded-full text-xs ${
            item.status === "Present"
              ? "bg-green-100 text-green-800"
              : item.status === "Absent"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="hidden lg:table-cell">{item.teacher}</td>
      <td>
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="attendance" type="update" data={item} />
              <FormModal table="attendance" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Attendance</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" || role === "teacher" ? (
              <FormModal table="attendance" type="create" />
            ) : null}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={attendanceData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AttendanceListPage;