import { Route, Routes } from "react-router-dom";
import Footer from "./sections/Footer";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./sections/Nav";

const Home = lazy(() => import("@routes/Home"));
const Booking = lazy(() => import("@routes/Booking"));
const Questionnaire = lazy(() => import("@routes/Questionnaire"));
const Portfolio = lazy(() => import("@routes/Portfolio"));
const PortfolioItem = lazy(() => import("@routes/PortfolioItem"));

function App() {
  return (
    <Suspense>
      <Nav />
      <AnimatePresence>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<PortfolioItem />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Suspense>
  );
}

export default App;
