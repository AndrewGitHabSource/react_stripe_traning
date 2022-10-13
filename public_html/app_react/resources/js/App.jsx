import './bootstrap';
import '../css/app.css'
import  React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
const Home = React.lazy(() => import('./page/Home'));
import { Wrapper } from './components/Wrapper';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Suspense fallback={<div>Need wait because of loading.......</div>}>
                    <Routes>
                        <Route exact index element={<Home />}/>

                        <Route exact path="/order/:id" element={<Wrapper />}/>
                    </Routes>
                </Suspense>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
