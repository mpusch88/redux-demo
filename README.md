# redux-demo

Demonstrates the basic functionality of a React-Redux application.

## How To Run The Demo

- Navigate in terminal to the directory you want the `redux-demo` repo created in.

- Run: `git clone https://github.com/mpusch88/redux-demo`

- Navigate in terminal to the newly created directory: `cd redux-demo`

- Run: `npm start`

- If browser window doesn't open automatically, navigate to <http://localhost:3000> to view.

## How to enable the Redux Devtools Chrome extension

- First, install the Redux DevTools extension from the Chrome Web Store:
  <https://bit.ly/2cH3cjd>

- If creating a new project instead of running the demo, run the following in a terminal
  from the root directory of your project: `npm i --save-dev redux-devtools-extension`

- Finally, the following code must be added to the relevant file (`store.js`) of the
  desired project:

```javascript
...

import { composeWithDevTools } from 'redux-devtools-extension';

...

return createStore(
  reducerName,
  composeWithDevTools());
));

...
```

- To open the Redux DevTools either right click the desired page, or access via the Redux
  tab of the Chrome DevTools by pressing `Ctrl-Shift-I`.
