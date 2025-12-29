import { Link } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <Plane className="w-8 h-8 text-primary-500 transform group-hover:rotate-45 transition-transform" />
                    <span className="text-xl font-bold tracking-tighter">DROWNS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
                    <Link to="/explore" className="hover:text-primary-400 transition-colors">Explore</Link>
                    <button className="btn-primary text-sm py-2 px-6">Get Started</button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 glass rounded-2xl p-6 flex flex-col gap-4 animate-fade-in">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/explore" onClick={() => setIsOpen(false)}>Explore</Link>
                    <button className="btn-primary w-full">Get Started</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
