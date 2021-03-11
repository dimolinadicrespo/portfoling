import AboutUs from './pages/AboutUs';
import ContacUs from './pages/ContacUs';
import Works from './pages/Works';
import GlobalStyle from './styled/GlobalStyle';
import Nav from './components/Nav';
import WorkDetail from './components/WorkDetail';
import MovieProvider from './hooks/movieContext.js'
//Router
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <GlobalStyle></GlobalStyle>
        <Nav></Nav>
        <MovieProvider>
            <Switch>
                <Route path='/' exact>
                    <AboutUs></AboutUs>
                </Route>
                <Route path='/contact' exact>
                    <ContacUs></ContacUs>
                </Route>
                <Route path='/work' exact>
                    <Works></Works>
                </Route>
                <Route path='/work/:id' exact>
                    <WorkDetail></WorkDetail>
                </Route>
            </Switch>
        </MovieProvider>
    </div>
  );
}

export default App;
