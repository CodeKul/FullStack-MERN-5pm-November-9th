import React from 'react';
import { useContext } from 'react';
import { userContext } from './UserContext';

export default function TopNav() {

  const userInfo = useContext(userContext)
  console.log(userInfo)
  return <div></div>;
}
