import { Link } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [compareCount, setCompareCount] = useState(0);

    useEffect(() => {
        const updateCount = () => {
            const saved = JSON.parse(localStorage.getItem('compareDrowns') || '[]');
            setCompareCount(saved.length);
        };
        updateCount();
        window.addEventListener('storage', updateCount);
        // Custom event for same-window updates
        window.addEventListener('compareUpdate', updateCount);
        return () => {
            window.removeEventListener('storage', updateCount);
            window.removeEventListener('compareUpdate', updateCount);
        };
    }, []);

    return (
        <nav className="fixed w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <Plane className="w-8 h-8 text-primary-500 transform group-hover:rotate-45 transition-transform" />
                    <span className="text-xl font-bold tracking-tighter">Chintu Drowns</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
                    <Link to="/explore" className="hover:text-primary-400 transition-colors">Explore</Link>
                    <Link to="/compare" className="relative group">
                        <span className="group-hover:text-primary-400 transition-colors">Compare</span>
                        {compareCount > 0 && (
                            <span className="absolute -top-3 -right-4 bg-primary-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-primary-500/30">
                                {compareCount}
                            </span>
                        )}
                    </Link>
                    <Link to="/dashboard" className="hover:text-primary-400 transition-colors">Dashboard</Link>
                    <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
                    <button className="btn-primary text-sm py-2 px-6">Get Started</button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 glass rounded-2xl p-6 flex flex-col gap-4 animate-fade-in text-left">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
                    <Link to="/compare" onClick={() => setIsOpen(false)} className="flex items-center justify-between">
                        Compare
                        {compareCount > 0 && <span className="bg-primary-500 text-white text-[10px] px-2 py-1 rounded-full">{compareCount}</span>}
                    </Link>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <button className="btn-primary w-full mt-4">Get Started</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
