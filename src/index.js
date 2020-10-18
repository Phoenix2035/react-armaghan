import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.js'
import store from './redux/store'
import {Provider} from 'react-redux'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from "react-redux-toastr";

ReactDOM.render(
    <Provider store={store}>
            <App/>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                getState={(state) => state.toastr} // This is the default
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick/>
    </Provider>,
    document.getElementById('root')
);

