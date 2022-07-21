import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import About from "./pages/AboutPage";
import "./styles.css";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="Container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutIconLink />
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

// https://github.com/bradtraversy/feedback-app/blob/main/src/data/FeedbackData.js
