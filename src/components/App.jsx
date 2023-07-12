import { Home } from "pages/Home";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}/>
          <Route path="*" element={<Home />}/>
        </Route>
      </Routes>
      <Toaster position="top-right" toastOptions={{duration: 1500}} />
    </>
  );
};
