import { useEffect, useState } from "react"
import Footer from "./components/footer/Footer"


function App() {
  const [count, setCount] = useState(-1)
  console.log('render')
  useEffect(()=>{
    setCount(0)
  },[])
  return (
    <div >
      {count}
    </div>
  )
}

export default App
