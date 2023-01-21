import React from 'react';

import user from 'assets/user';
import data from 'assets/data';
import friends from 'assets/friends';
import transactions from 'assets/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <div>
    <Profile user={user} />
    <Statistics title="upload stats" data={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </div>
);
export default App;
