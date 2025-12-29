import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, messagesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Message = {
  id: number;
  sender: string;
  senderRole: string;
  recipient: string;
  subject: string;
  message: string;
  date: string;
  time: string;
  status: string;
};

const columns = [
  {
    header: "Sender",
    accessor: "sender",
  },
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Recipient",
    accessor: "recipient",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Time",
    accessor: "time",
    className: "hidden lg:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const MessagesListPage = () => {
  const renderRow = (item: Message) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.sender}</h3>
          <p className="text-xs text-gray-500">{item.senderRole}</p>
        </div>
      </td>
      <td className="font-medium">{item.subject}</td>
      <td className="hidden md:table-cell">{item.recipient}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td className="hidden lg:table-cell">{item.time}</td>
      <td>
        <span
          className={`py-1 px-2 rounded-full text-xs ${
            item.status === "Unread"
              ? "bg-blue-100 text-blue-800"
              : item.status === "Read"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {item.status}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/messages/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <>
              <FormModal table="message" type="update" data={item} />
              <FormModal table="message" type="delete" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Messages</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <FormModal table="message" type="create" />
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={messagesData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default MessagesListPage;