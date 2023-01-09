import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/pages/Header';
import ReviewStats from './components/pages/ReviewStats';
import ReviewList from './components/pages/ReviewList';
import ReviewForm from './components/pages/ReviewForm';
import { ReviewProvider } from './components/context/ReviewContext';
import About from './components/pages/About';
import AboutLink from './components/pages/AboutLink';
import Footer from './components/pages/Footer';

function App(){
  return ( 
    <ReviewProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element = {
              <>
                <ReviewForm />
                <ReviewStats />
                <ReviewList />
                <AboutLink />
                <Footer/>
              </>
            }
            ></Route>
            
            <Route path='/about' element={<About />} />
          </Routes>
          
        </div>
      </Router>
    </ReviewProvider>
  )
}

export default App;
