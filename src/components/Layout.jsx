import Nav from './Nav';
import FloatingParticles from './FloatingParticles';

const Layout = ({ children }) => {
    return (
        <div>
            <FloatingParticles />
            <Nav />
            <main style={{ minHeight: 'calc(100vh - 80px)' }}>
                {children}
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '40px 0',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
            }}>
                © {new Date().getFullYear()} Gurusubramaniam. Built with React & Glassmorphism.
            </footer>
        </div>
    );
};

export default Layout;
