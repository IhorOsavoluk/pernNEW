// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// import Admin from './pages/Admin';
// import Auth from './pages/Auth';
// import Basket from './pages/Basket';
// import DevicePage from './pages/DevicePage';
// import {Shop} from './pages/Shop';

// export default function App() {
//   return (
//     <>
//       <header className='bg-secondary shadow'>
//         <div className='container-fluid d-flex justify-content-between align-items-center p-3'>
//           <h1 className='text-slate-500 m-0'>
//             <Link to='/shop' className='text-white text-lg font-bold'>
//               <span className='text-slate-700'>Rozetka</span>
//             </Link>
//           </h1>

//           <ul className='nav'>
//             <li className='nav-item'>
//               <Link to='/device/:id' className='nav-link text-white'>
//                 Device
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/auth' className='nav-link text-white'>
//                 Auth
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/admin' className='nav-link text-white'>
//                 Admin Panel
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/basket' className='nav-link text-white'>
//                 Basket
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </header>

//       <Routes>
//         <Route path='/admin' element={<Admin />} />
//         <Route path='/auth' element={<Auth />} />
//         <Route path='/basket' element={<Basket />} />
//         <Route path='/device/:id' element={<DevicePage />} />
//         <Route path='/shop' element={<Shop />} />
//       </Routes>
//     </>
//   );
// }
