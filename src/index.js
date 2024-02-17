import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import reducers from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import PK from "./Components/PK/PK";
import LogIn from "./Components/LogIn/LogIn";
import {CreateDish} from './Components/CreateDish/CreateDish';
import CreateParameter from "./Components/CreateParamters/CreateParameter";
import ShowMenu from "./Components/ShowMenu/showMenu";
import {PageDish} from "./Components/PageOfDish/PageDish";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/PK" element={<PK />} />
                <Route path="/CreateDish" element={<CreateDish />} />
                <Route path="/CreateParameter" element={<CreateParameter />} />
                <Route path="/ShowMenu" element={<ShowMenu />} />
                <Route path="/PageDish" element={<PageDish />} />
            </Routes>
        </HashRouter >
    </Provider>
);

reportWebVitals();
