import { messagesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const MessageDetailPage = ({ params }: { params: { id: string } }) => {
  const messageId = parseInt(params.id);
  const message = messagesData.find((msg) => msg.id === messageId);

  if (!message) {
    notFound();
  }

  return (
    <div className="bg-white p-6 rounded-md m-4 mt-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/list/messages">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Image src="/arrow-left.png" alt="Back" width={16} height={16} />
              Back to Messages
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">{message.date} at {message.time}</span>
        </div>
      </div>

      {/* Message Content */}
      <div className="border rounded-lg p-6">
        {/* Subject */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{message.subject}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>
              <strong>From:</strong> {message.sender} ({message.senderRole})
            </span>
            <span>
              <strong>To:</strong> {message.recipient}
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-4">
          <span
            className={`inline-block py-1 px-3 rounded-full text-xs font-medium ${
              message.status === "Unread"
                ? "bg-blue-100 text-blue-800"
                : message.status === "Read"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {message.status}
          </span>
        </div>

        {/* Message Body */}
        <div className="border-t pt-4">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {message.message}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-6 pt-4 border-t">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Reply
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors">
            Forward
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageDetailPage;