import HeaderBox from "@/components/header-box";
import RightSidebar from "@/components/right-sidebar";
import TotalBalanceBox from "@/components/total-balance-box";

const Home = () => {
  const isLoggedIn = {
    firstName: "John",
    lastName: "Doe",
    email: "John.doe@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={isLoggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1500.25}
          />
        </header>
        Recent transactions
      </div>
      <RightSidebar user={isLoggedIn} banks={[{currentBalance: 125}, {currentBalance: 500}]} transactions={[]} />
    </section>
  );
};

export default Home;
