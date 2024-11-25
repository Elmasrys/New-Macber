import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";
import { ContextProvider } from "../context/ContextForm";
const RootLayout = () => {
  return (
    <>
      <ContextProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
};
export default RootLayout;
