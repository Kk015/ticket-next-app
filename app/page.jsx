import TicketPage from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketPage />
        <TicketPage />
        <TicketPage />
        <TicketPage />+
      </div>
    </div>
  );
};

export default Dashboard;
