import "./App.css";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";

import Header from "./components/Header/Header";
import LeadSection from "./components/LeadSeaction/LeadSection";
import ServicesList from "./components/ServicesSection/ServicesList";

function App() {
  return (
    <div className="App">
      <Header />
      <LeadSection />
      <DescriptionSection />
      <ServicesList />
    </div>
  );
}

export default App;
