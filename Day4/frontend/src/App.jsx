import React from 'react'
import Register from './components/Register'
import Update from './components/Update'
import Delete from './components/Delete'
import View from './components/View'
import './App.css'


const App = () => {
  return (
    <div>
      <h1>User Registration Form</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App
