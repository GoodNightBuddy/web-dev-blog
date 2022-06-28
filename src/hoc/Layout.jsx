import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NaviBar from "../components/NaviBar"

const Layout = () => {
  return (
    <div className="me-3">
      <NaviBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout