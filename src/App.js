import React, { createContext, useState } from 'react'
import Navbar from './componets/Navbar'
import NewsComponent from './componets/NewsComponent'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
const Mode =createContext();

const App = (props) => {

  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('bright')
  const toggleMode = () => {
    if (mode === 'bright') {
      setMode('dark');
      //body
      document.body.style.backgroundColor = '#042342';
      document.body.style.color = 'azure';
    }
    else {
      setMode('bright')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'; 
    }
  }


  return (
    <div >
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <BrowserRouter>
      <Mode.Provider value={{mode:mode,toggleMode:toggleMode}}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index exact element={<NewsComponent  setProgress={setProgress} key="general" country={"in"} category={"general"} />} />
            <Route exact path="/business" element={<NewsComponent  setProgress={setProgress} key="business" category={"business"} />} />
            <Route path="/entertainment" element={<NewsComponent setProgress={setProgress} key="entertainments" country={"in"} category={"entertainment"} />} />
            <Route exact path="/general" element={<NewsComponent  setProgress={setProgress} key="general" country={"in"} category={"general"} />} />
            <Route exact path="/health" element={<NewsComponent  setProgress={setProgress} key="health" country={"in"} category={"health"} />} />
            <Route exact path="/science" element={<NewsComponent  setProgress={setProgress} key="science" country={"in"} category={"science"} />} />
            <Route exact path="/sports" element={<NewsComponent  setProgress={setProgress} key="sports" country={"in"} category={"sports"} />} />
            <Route exact path="/technology" element={<NewsComponent  setProgress={setProgress} key="technology" country={"in"} category={"technology"} />} />
          </Route>
        </Routes>
        </Mode.Provider>
      </BrowserRouter>
    </div>

  )
}
export default App;
export {Mode};

