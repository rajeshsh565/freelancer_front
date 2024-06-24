import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { createContext } from "react"

const HomeLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
    </>
  )
}
export default HomeLayout