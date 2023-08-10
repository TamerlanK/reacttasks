import "./App.css"
import { useEffect, useState } from "react"

const App = () => {
  const [image, setImage] = useState(null)
  const [clicks, setClicks] = useState(0)
  useEffect(() => {
    let singleClickTimer;
    if (clicks === 1) {
      singleClickTimer = setTimeout(() => {
        setImage(catImg)
        setClicks(0)
      }, 250)
    } else if (clicks === 2) {
      setImage(dogImg)
      setClicks(0)
    }
    return () => clearTimeout(singleClickTimer)
  }, [clicks])

  const catImg =
    "https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  const dogImg =
    "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return (
    <div className="App">
      <button onClick={() => setClicks(clicks + 1)}>
        Click here
      </button>
      {image ? <img src={image} /> : "No image to show"}
    </div>
  )
}

export default App
