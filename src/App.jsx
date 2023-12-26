import React, { useState } from 'react'
import HomeCrud from './Components/HomeCrud'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import CreateUsers from './Components/CreateUsers'
import Users from './Components/Users'
import Editusers from './Components/Editusers'
import Lifecycle from './Components/Lifecycle'

const App = () => {
  let [state,setState] = useState(true)
  return(
    <div>
        {/* <HomeCrud/> */}
        <BrowserRouter>
        <HomeCrud/>
        <Routes>
        <Route path='/create' element={<CreateUsers/>}/>
        <Route path="/user" element={<Users/>}/>
        <Route path='/edit/:index' element={<Editusers/>}></Route>
        </Routes>
        </BrowserRouter>

        <button onClick={()=>{setState(true)}}>give birth to component</button>
        <button onClick={()=>{setState(false)}}>kill component</button>
        {/* <Lifecycle/> */}
        {state?<Lifecycle/>:null}
    </div>

  )
   
}
export default App
