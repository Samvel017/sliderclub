import React from 'react';
import Presentation from './Presentation';
import Users from './Users';

export default function Main() {
  return (
    <div className='main'>
      <Users />
      <Presentation />
    </div>
  );
}
