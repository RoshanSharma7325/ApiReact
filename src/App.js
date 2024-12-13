import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registers from './vikash/Registers';
import LogIn from './vikash/LogIn';
import HomeDeta from './vikash/HomeDeta';
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
       <Route path='/' element={<Registers/>}/>
       <Route path='/login' element={<LogIn/>}/>
       <Route path='/home' element={<HomeDeta/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App





// import React from 'react'
// import Get from './GET/Get'

// const App = () => {
//   return (
//     <div>
//       <Get/>
//     </div>
//   )
// }

// export default App
