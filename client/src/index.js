// import React, {  useContext } from 'react';
// import { createRoot } from 'react-dom/client';
// //import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import UserStore from './store/UserStore';


// export const Context = useContext(null)
// const root = createRoot(document.getElementById('root'));

// root.render(
//   // <React.StrictMode>
//   //   <BrowserRouter>
//     <Context.Provider value={{
//       user: new UserStore()
//     }}>
//       <App />
//     </Context.Provider>
      
//   //   </BrowserRouter>
//   // </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Context = React.createContext(null); // Создаем контекст

const root = createRoot(document.getElementById('root'));

root.render(
  <Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
    <App />
  </Context.Provider>
);

