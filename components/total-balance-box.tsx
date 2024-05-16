
interface TotlaBalanceBoxProps {
    accounts: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
  }
const TotalBalanceBox = ({
    accounts: [],
    totalBanks,
    totalCurrentBalance
}: TotlaBalanceBoxProps) => {
    return (    
        <div>Total balance</div>
     );
}
 
export default TotalBalanceBox;