The custom switch can be customized with:

```js
import * as React from 'react';
import Switch from 'expo-custom-switch';

function App() {
  const [value, setValue] = React.useState(true);
  return <Switch value={value} onChange={value => setValue(value)} />;
}

<App />;
```
