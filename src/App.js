import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import useMediaQuery from "./hooks/useMediaQuery";
import { breakpoints, routes } from "./constants";

import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Credit from "./pages/Credit";
import Payment from "./pages/Payment";
import Settings from "./pages/Settings";
import MobileFooter from "./components/MobileFooter";
import SideNav from "./components/SideNav";

import "./App.scss";

function App() {
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md} )`);

  return (
    <Router>
      <Container className="app-container" fluid>
        <Row>
          {/* hide sidebar in mobile view */}
          {!isMobile && (
            <Col sm={12} md={3}>
              <SideNav />
            </Col>
          )}

          <Col sm={12} md={9}>
            <Routes>
              <Route path={routes.home} Component={Home} />
              <Route path={routes.cards} Component={Cards} />
              <Route path={routes.payment} Component={Payment} />
              <Route path={routes.credit} Component={Credit} />
              <Route path={routes.settings} Component={Settings} />

              {/* for now, defaulting to cards page for other routes */}
              <Route
                path="*"
                element={<Navigate to={routes.cards} replace />}
              />
            </Routes>
          </Col>
        </Row>

        {isMobile && <MobileFooter />}
      </Container>
    </Router>
  );
}

export default App;
