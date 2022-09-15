import ReactDOM from 'react-dom/client';
import Router from "./shared/Router";
import GlobalStyle from "./shared/GlobalStyle";
import {Provider} from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <GlobalStyle/>
        <Router/>
    </Provider>
);

