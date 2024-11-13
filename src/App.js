import { Header } from "./components/header";
import { MainSection } from "./components/main-section/main-section";
import { Wrapper } from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <MainSection />
      </Wrapper>
    </div>
  );
}

export default App;
