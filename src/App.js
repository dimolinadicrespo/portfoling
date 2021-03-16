import AboutUs from './pages/AboutUs';
import ContacUs from './pages/ContacUs';
import Works from './pages/Works';
import GlobalStyle from './styled/GlobalStyle';
import Nav from './components/Nav';
import WorksDetails from './pages/WorksDetails';
import MovieProvider from './hooks/movieContext.js'

//Router
import { Switch, Route, useLocation} from 'react-router-dom';

//Frame Motion
import {AnimatePresence} from 'framer-motion'

function App() {

    let location = useLocation();   

    console.log(location);

    return (
        <div className="App">
            <GlobalStyle></GlobalStyle>
            <Nav></Nav>
            <MovieProvider>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route path='/' exact>
                            <AboutUs></AboutUs>
                        </Route>
                        <Route path='/contact' exact>
                            <ContacUs></ContacUs>
                        </Route>
                        <Route path='/work' exact>
                            <Works></Works>
                        </Route>
                        <Route path='/work/:id'>
                            <WorksDetails></WorksDetails>
                        </Route>
                    </Switch>
                </AnimatePresence>
            </MovieProvider>
        </div>
    );
}

export default App;
