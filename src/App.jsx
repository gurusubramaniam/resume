import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Repos from './pages/Repos';
import Experience from './pages/Experience';
import Blog from './pages/Blog';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/repos" element={<Repos />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </Layout>
            <Analytics />
            <SpeedInsights />
        </Router>
    );
}

export default App;
