import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

function TicketCard() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div className="flex flex-col hover:bg-yellow-200 bg-pink-200 rounded-md shadow-lg p-3 m-2 gap-2 ">
      <div className="flex mb-3">
        <DeleteBlock />
      </div>

      <h4 className="text-black">Ticket Title</h4>
      <p className="text-black">{formattedDate}</p>
      <div className="flex ml-3 gap-2">
        <StatusDisplay />
        <PriorityDisplay />
      </div>
      <hr className="h-px border-0 bg-white" />
      <p className="text-black">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
        expedita modi blanditiis, aliquid nemo et iste voluptates natus, dolore
        accusantium, placeat voluptatem nihil eius rem ullam deleniti doloribus
        quas animi!
      </p>
      <ProgressDisplay />
    </div>
  );
}

export default TicketCard;
