import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reducers from "./Components/Reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/SignUp";
import PK from "./Components/PK/PK";
import LogIn from "./Components/LogIn/LogIn";
import CreateDish from './Components/CreateDish/CreateDish';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/LogIn" element={<LogIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/PK" element={<PK />} />
                <Route path="/CreateDish" element={<CreateDish />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
