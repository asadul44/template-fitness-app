import React from 'react';
import {Switch , Route} from "react-router-dom"
import Footer from './components/Footer';
import MyHeader from './components/MyHeader';
import Layout from './components/Layout';

const MyRoute = () => {
    return (
        <div className="bg-black">

            <MyHeader />
            <div style={{clear:"both"}}>

            </div>

            <Switch>

                <Route  exact path="/"  component={Layout}  />
                
            </Switch>

            <Footer />

            
        </div>
    );
};

export default MyRoute;