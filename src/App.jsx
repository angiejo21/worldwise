import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/index-049cce4d.css   31.90 kB │ gzip:   5.27 kB
// dist/assets/index-56f99c87.js   532.70 kB │ gzip: 150.36 kB

// dist/assets/Product-cf1be470.css          0.47 kB │ gzip:   0.27 kB
// dist/assets/Homepage-b9276e6f.css         0.51 kB │ gzip:   0.30 kB
// dist/assets/PageNav-d3c5d403.css          0.51 kB │ gzip:   0.28 kB
// dist/assets/AppLayout-ca75f5b3.css        1.91 kB │ gzip:   0.70 kB
// dist/assets/index-10e6998e.css           28.23 kB │ gzip:   4.58 kB
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PagenotFound-c64ed40f.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-f521a303.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-bd62c47b.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-e0ab1945.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-738e5efd.js          0.66 kB │ gzip:   0.41 kB
// dist/assets/Product-7b8f87f4.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-5dbf7060.js             1.01 kB │ gzip:   0.53 kB
// dist/assets/AppLayout-b2a7c13c.js       157.17 kB │ gzip:  46.24 kB
// dist/assets/index-ac5117ef.js           373.92 kB │ gzip: 103.82 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
