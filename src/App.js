import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import AppRouter from './App-router';

import './App.scss';

import Articles from "./components/articles/Articles";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Grid from './components/custom-grid/grid/Grid';
import Shoe from "./components/questionnaire/shoe/Shoe";
import ShoeType from "./components/questionnaire/shoe-type/ShoeType";
import SandalType from "./components/questionnaire/sandal-type/SandalType";
import Users from "./components/hooks/Users";
import Todo from "./components/todo/Todo";
import CounterComp from "./components/counter/CounterComp";
import SimpleReactValidator from 'simple-react-validator';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header></Header>
                    <div className='container'>
                        <Switch>
                            <Route exact path="/" component={Articles}/>
                            <Route exact path="/grid" component={Grid}/>
                            <Route exact path="/shoe" component={Shoe}/>
                            <Route exact path="/shoeTypes" component={ShoeType}/>
                            <Route exact path="/sandalTypes" component={SandalType}/>
                            <Route exact path="/users" component={Users}/>
                            <Route exact path="/todo" component={Todo}/>
                            <Route exact path="/counter" component={CounterComp}/>
                        </Switch>
                    </div>
                    <Footer></Footer>
                </Router>
                {/*<AppRouter></AppRouter>*/}
            </div>
        );
    }
}

export default App;
