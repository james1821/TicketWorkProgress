import Link from "next/link";

function Nav() {
  return (
    <div className="flex justify-between items-center bg-black p-4 ">
      <div className="flex items-center space-x-4 text-white">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/TicketPage/new">
          <p>Tickets</p>
        </Link>
      </div>
      <div className="">
        <p className="text-white">jamesespinosa@gmail.com</p>
      </div>
    </div>
  );
}

export default Nav;
