import {createRoot} from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const container = document.getElementById('root')
const root = createRoot(container)

const app = (
    <Provider store={store}>
        <BrowserRouter basename={'/'}>
            <App/>
        </BrowserRouter>
    </Provider>
)

root.render(app)