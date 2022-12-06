import React, { Suspense }       from 'react';
import { createRoot }            from 'react-dom/client';
import { Persistor, Store }      from 'Flux';
import { Router }                from 'View/Router';
import { Provider }              from 'react-redux';
import { PersistGate }           from 'redux-persist/integration/react';
import Bootstrap                 from 'Flux/Bootstrap';
import {
    NotificationContainer,
} from 'View/Container';
import 'antd/dist/reset.css';
import 'Public/css/global.css';
import { ConfigProvider, theme } from 'antd';
import './i18n';
import { Footer }                from 'View/Component';

const Application = () => (
    <React.StrictMode>
        <Suspense fallback="loading">
            <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
                <Provider store={Store}>
                    <PersistGate persistor={Persistor} loading={null}>
                        <Router>
                            <NotificationContainer />
                            <Footer />
                        </Router>
                    </PersistGate>
                </Provider>
            </ConfigProvider>
        </Suspense>
    </React.StrictMode>
);


Bootstrap()
    .then(() => Application())
    .catch(error => console.error(error));

const root = createRoot(document.getElementById('root')!);
root.render(<Application />);
