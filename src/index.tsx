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
import { BalkaPage } from './pages/BalkaPage/BalkaPage';
import { UgolokPage } from './pages/UgolokPage/UgolokPage';
import { ShvellerPage } from './pages/ShvellerPage/ShvellerPage';
import { ItemPage } from './pages/ItemPage/ItemPage';
import { TubePage } from './pages/TubesPage/TubePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import { PaymentPage } from './pages/PaymentPage/PaymentPage';
import { ReturnPage } from './pages/ReturnPage/ReturnPage';
import { ServicePage } from './pages/ServicePage/ServicePage';

const Root: FC = () => {

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/bin" element={<BinPage />} />
          <Route path="/card-page" element={<CardPage />} />
          <Route path="/item-page" element={<ItemPage />} />
          <Route path="/balka-page" element={<BalkaPage />} />
          <Route path="/ugolok-page" element={<UgolokPage />} />
          <Route path="/shveller-page" element={<ShvellerPage />} />
          <Route path="/tube-page" element={<TubePage />} />
          <Route path="/contacts-page" element={<ContactsPage />} />
          <Route path="/delivery-page" element={<DeliveryPage />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/return-page" element={<ReturnPage />} />
          <Route path="/service-page" element={<ServicePage />} />
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

