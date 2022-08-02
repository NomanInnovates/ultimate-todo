import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './Home'


function index() {
  return (
    <>
      <Header />
      <main>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default index