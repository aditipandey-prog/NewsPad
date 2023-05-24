//import logo from './logo.svg';

import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import React, {useState } from 'react'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [progress, setProgress] = useState(0)
  /*const setProgress = (progress) => {
    //setState({progress:progress})
    setprogress(progress)
  }*/
    return (
      <div>
        <Router>
          <LoadingBar
            color='#FFFFFF'
            height={3}
            progress={progress}

          />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="general" country="in" category="general" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="entertainment" country="in" category="entertainment" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="sports" country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="" country="in" category="technology" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="technology" country="in" category="science" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="health" country="in" category="health" />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="general" country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6} key="business" country="in" category="business" />}></Route>
          </Routes>
        </Router>

      </div>
    )
  
}

export default App;
