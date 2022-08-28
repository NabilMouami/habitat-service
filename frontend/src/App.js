import { useEffect } from "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//npm install --save aos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"
import Pages from "./pages/Pages"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages />
      <ToastContainer />

    </>
  )
}

export default App
