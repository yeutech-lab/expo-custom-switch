import React from 'react';
import SwitchCustom from './build';

export default function App() {
  const [value, setValue] = React.useState(true);
  return (
    <SwitchCustom
      value={value}
      onChange={(value) => setValue(value)}
      leftColor="#ff0000"
      rightColor="#000000"
      iconLeft={{
        name: 'account',
        color: '#fff',
        style: {
          height: 22,
          width: 22,
        },
      }}
      iconRight={{
        name: 'account-supervisor-circle',
        size: 30,
        color: '#fff',
        style: {
          height: 31,
          width: 30,
        },
      }}
    />
  );
}
