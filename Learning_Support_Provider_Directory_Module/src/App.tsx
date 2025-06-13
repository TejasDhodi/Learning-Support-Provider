import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Providers from "./pages/Providers";
import ProviderDetail from "./pages/ProviderDetail";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const App = () => (
  <BrowserRouter>
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      <Header />
      <Routes>
        <Route path="/" element={ <Index />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers/:id" element={<ProviderDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;