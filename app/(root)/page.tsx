import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance-box";

const Home = () => {
    const isLoggedIn = {firstNmae: "Abubakar"}
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={isLoggedIn?.firstNmae || 'Guest'}
            subtext="Access and manage your account and transaction efficiently"
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1500.25}
            />
        </div>
      </div>
    </section>
  );
};

export default Home;
