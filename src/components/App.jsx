import { ProfileApp } from './Profile/Profile';
import { StatisticsApp } from './Statistics/Statistics';
import { FriendListApp } from './Friendlist/FriendList';
import { TransactionHistoryApp } from './Transactionhistory/TransactionHistory';

export const App = () => {
  return (
    <>
    <ProfileApp />,
    <StatisticsApp />,
    <FriendListApp />,
    <TransactionHistoryApp />
    </>
  )
}