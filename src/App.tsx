import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./Home";

const App = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default App;
