import MainCpp from '../Languages/C++/maincpp';
import QuestionItem from "../Code/QuestionItem"
import {
  Route,
  Routes,
  BrowserRouter as Router,
}
from 'react-router-dom';
import Page from '../Components/Headers/page';
import Mainopps from '../Languages/Opps/mainOpps';

function Routers()
{
    return(
        <>
        <Router>
        <Routes>
          <Route exact path="/" element = {<Page/>} />
          <Route exact path="/coding" element={<QuestionItem />} />
          <Route exact path="/questions" element={<MainCpp />} />
          <Route exact path='/opps' element = {<Mainopps/>}/>

        </Routes>
      </Router>
      </>
    )
}

export default Routers;