import React from 'react'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <div className='mx-4 sm:mx=[10%]'>
       <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
       </Routes>
      </div>
    </div>
  )
}

export default App
