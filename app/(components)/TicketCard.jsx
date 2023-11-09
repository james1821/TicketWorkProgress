import StatusDisplay from "./StatusDisplay";
import PriorityDisplay from "./PriorityDisplay";
import DeleteBlock from "./DeleteBlock";
import ProgressDisplay from "./ProgressDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }

  const createdDateTime = formatTimestamp(ticket.createdAt);

  return (
    <div className="flex flex-col hover:bg-yellow-200 bg-pink-200 rounded-md shadow-lg p-3 m-2 gap-2 ">
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <div className="flex mb-3">
          <DeleteBlock id={ticket._id} />
        </div>

        <h4 className="text-black">{ticket.title}</h4>
        <p className="text-black">{createdDateTime}</p>
        <div className="flex ml-3 gap-2">
          <StatusDisplay status={ticket.status} />
          <PriorityDisplay priority={ticket.priority} />
        </div>
        <hr className="h-px border-0 bg-white" />
        <p className="text-black">{ticket.description}</p>
        <ProgressDisplay progress={ticket.progress} />
      </Link>
    </div>
  );
};

export default TicketCard;
