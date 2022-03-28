import { Header } from './components/Header'
import './css/general.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { IndexPage } from './components/pages/IndexPage'
import { CountryPage } from './components/pages/CountryPage'

function App () {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<IndexPage />} />
          <Route path="/country" exact element={<CountryPage/>} />
          <Route path="/country/:id" exact element={<CountryPage/>} />
        </Routes>
      </Router>
  )
}

export default App
