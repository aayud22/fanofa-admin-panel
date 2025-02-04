import React from 'react';
import { AvailableWithdraw } from '../../components/dashboard';
import UsersListTable from '../../components/userList/UsersListTable';

const UserList = () => {
  return (
    <div className="space-y-4">
      <AvailableWithdraw />
      <UsersListTable />
    </div>
  );
};

export default UserList;
