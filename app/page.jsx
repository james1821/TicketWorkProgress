import TicketCard from "./{components}/TicketCard";

export default function Home() {
  return (
    <div>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
}
