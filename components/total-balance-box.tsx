import AnimatedCounter from "./animated-couter";
import DoughChart from "./dough-chart";

interface TotlaBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}
const TotalBalanceBox = ({
  accounts= [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughChart accounts={accounts}/>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="header-2">Bank Accounts: {totalBanks}</h1>
        <div className=" flex flex-col gap-2">
          <p className="total-balance-label">Total current balance</p>
          <div className="total-balance-amount flex-center gap-2 ">
           <AnimatedCounter amount={totalCurrentBalance}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
