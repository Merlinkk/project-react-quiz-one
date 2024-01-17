import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomeComponent from './components/HomeComponent'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'

function App() {

  return (
    <>
      <HomeComponent />
      <QuizComponent />
      <ResultComponent />
    </>
  )
}

export default App