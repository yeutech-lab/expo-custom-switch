The custom switch can be customized with:

```js
import * as React from 'react';
import SwitchCustom from 'expo-custom-switch';

function App() {
  const [value, setValue] = React.useState(true);
  return (
    <SwitchCustom
      value={value}
      onChange={(value) => setValue(value)}
      leftColor="#ff0000"
      rightColor="#000000"
      iconLeft={{
        name: 'heart',
        color: '#fff',
        style: {
          height: 22,
          width: 22,
        },
      }}
      iconRight={{
        name: 'archive',
      }}
    />
  );
}

<App />;
```
