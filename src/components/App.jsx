import user from './User/user.json';
import transactions from './User/transactions';
import friends from './User/friends.json';
import title from './User/title.json';
import data from './User/data.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friendlist/FriendList';
import { TransactionHistory } from './Transactionhistory/TransactionHistory';

export const App = () => {
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics
      title={title}
      stats={data}
    />
    <FriendList
      friendList={friends}
    />
    <TransactionHistory
      items={transactions}/>
    </>
  )
}