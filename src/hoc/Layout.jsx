import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NaviBar from "../components/NaviBar"

const Layout = () => {
  return (
    <>
      <NaviBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout