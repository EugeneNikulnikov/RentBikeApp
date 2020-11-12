import React from 'react'
import './style/Normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CApp} from "./components/App/ConnectedApp";
import {Provider} from "react-redux";
import {store} from './store/store'



function App() {
    return (
        <Provider store={store}>
            <CApp/>
        </Provider>
  );
}

export default App;
