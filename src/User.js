import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFirstName, selectUser } from './userSlice';

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>id: {user.id}</p>
      <p>role: {user.role}</p>
      <button onClick={() => dispatch(updateFirstName())}>Update name</button>
      <h2>debugging</h2>
      {JSON.stringify(user, null, 2)}
    </div>
  );
}
