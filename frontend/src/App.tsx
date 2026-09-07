import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Scan from './pages/Scan.tsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;