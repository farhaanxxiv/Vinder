import Header from "./components/Header";
import { AuthProvider, useAuth } from "./context/AuthProvider";
import Home from "./pages/Home";

import { BrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import ViewCrushes from "./pages/ViewCrushes";
import AddCrush from "./pages/AddCrush";
import FillDetails from "./pages/FillDetails";
import { useContext, useEffect, useState } from "react";
import Footer from "./components/Footer";


function App() {

  const { isLoggedIn } = useAuth();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log(isLoggedIn)
    setLoading(false)
  }, [isLoggedIn])


  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <ToastContainer />



        <Header />
        <Routes>
          {
            !loading ? isLoggedIn ?

              <>
                <Route path="/view-crush" element={<ViewCrushes />} />
                <Route path="/add-crush" element={<AddCrush />} />
                <Route path="/details" element={<FillDetails />} />
              </> :
              <>hi</> : <>Loading...</>
          }

          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
