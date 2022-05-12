import Home from "./components/Home"
import { Routes, Route } from "react-router-dom"
import PostFlat from "./components/PostFlat"
import FindFlat from "./components/FindFlat"
import FindFlatmates from "./components/FindFlatmates"
import FlatResults from "./components/FlatResults"
import FindFlatmateResults from "./components/FindFlatmateResults"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postflat" element={<PostFlat />} />
        <Route path="/findflat" element={<FindFlat />} />
        <Route path="/findflatmate" element={<FindFlatmates />} />
        <Route path="/ffresults" element={<FindFlatmateResults />} />
        <Route path="/flatresults" element={<FlatResults />} />
      </Routes>
    </>
  )
}

export default App
