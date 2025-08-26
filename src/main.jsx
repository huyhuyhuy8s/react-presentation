import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SlideProvider } from "./contexts/SlideContext.jsx";

// Import your slide components
import IntroSlide from "./components/slides/IntroSlide";
import TitleSlide from "./components/slides/TitleSlide";
import ProblemSlide from "./components/slides/ProblemSlide";
import ReactSlide from "./components/slides/ReactSlide";
import CoreIdea1 from "./components/slides/CoreIdea1";
import CoreIdea2 from "./components/slides/CoreIdea2";
import CoreIdea3 from "./components/slides/CoreIdea3";
import CounterSlide from "./components/slides/CounterSlide";
import VirtualDOMSlide from "./components/slides/VirtualDOMSlide";
import WhyReactSlide from "./components/slides/WhyReactSlide";
import ThankYouSlide from "./components/slides/ThankYouSlide";
import QuizSlide from "./components/slides/QuizSlide";
import CoreIdea15 from "./components/slides/CoreIdea15.jsx";

// Create an array of your slide components in order
const slides = [
  <IntroSlide />,
  <TitleSlide />,
  <ProblemSlide />,
  <ReactSlide />,
  <CoreIdea1 />,
  <CoreIdea15 />,
  <CoreIdea2 />,
  <CoreIdea3 />,
  <CounterSlide />,
  <VirtualDOMSlide />,
  <WhyReactSlide />,
  <QuizSlide />,
  <ThankYouSlide />,
  // Add more slides here as you create them
];

const container = document.getElementById("root");
if (!container) console.log("There are not root element in index.html");

const root = createRoot(container);

root.render(
  <StrictMode>
    <SlideProvider totalSlides={slides.length}>
      <App slides={slides} />
    </SlideProvider>
  </StrictMode>
);
