import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { store, persistor } from './services/redux/store';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage/MainPage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { BinPage } from './pages/BinPage/BinPage';
import { CardPage } from './pages/CardPage/CardPage';

const Root: FC = () => {

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/bin" element={<BinPage />} />
          <Route path="/cardpage" element={<CardPage />} />
        </Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <HashRouter>
          <Root />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

