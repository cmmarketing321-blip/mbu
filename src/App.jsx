import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import About from '@/pages/About';
import Programs from '@/pages/Programs';
import Placements from '@/pages/Placements';
import Contact from '@/pages/Contact';

import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/programs" element={<Layout><Programs /></Layout>} />
        <Route path="/placements" element={<Layout><Placements /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
