import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import FetchResultsContainer from './Components/FetchResultsContainer';
import CardResults from './Components/CardResults';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <SkeletonTheme baseColor="#9c9c9c" highlightColor="#444">
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<FetchResultsContainer />} />
            <Route path='/details/:id' element={<CardResults />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </SkeletonTheme>
  );
}

export default App;
