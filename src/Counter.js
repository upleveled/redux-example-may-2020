import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from './counterSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}
