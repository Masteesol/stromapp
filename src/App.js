import Home from "./components/pages/Home";
import Account from "./components/pages/Account";
import PriceCalculator from "./components/pages/PriceCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundry";
import PageLayout from "./components/PageLayout";
function App() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PageLayout>
                  <Home />
                </PageLayout>
              }
            />
            <Route
              path="/account"
              element={
                <PageLayout>
                  <Account />
                </PageLayout>
              }
            />
            <Route
              path="/price-calculator"
              element={
                <PageLayout>
                  <PriceCalculator />
                </PageLayout>
              }
            />
          </Routes>
        </Router>
      </ErrorBoundary>
    </>
  );
}
export default App;
