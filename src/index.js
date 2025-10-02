import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import {Home} from "./pages/Home";
import {Product} from "./pages/Product";
import {Layout} from "./layout/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

