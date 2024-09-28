import Camp from "./components/Camp";
import Features from "./components/Features";
import GetApp from "./components/GetApp";
import Guide from "./components/Guide";
import Hero from "./components/Hero";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <main className="relative overflow-hidden">
        <Hero />
        <Camp />
        <Guide />
        <Features />
        <GetApp />
      </main>
    </>
  );
}

export default App;
