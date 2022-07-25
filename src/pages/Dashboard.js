const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      {user?.name}
    </section>
  );
};
export default Dashboard;
