import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="flex items-center gap-2 mb-6">
                        <Plane className="w-8 h-8 text-primary-500" />
                        <span className="text-xl font-bold tracking-tighter">Chintu Drowns</span>
                    </Link>
                    <p className="text-slate-400 max-w-sm">
                        Experience the world from a new perspective. Our premium drone expeditions offer unforgettable views and high-tech adventures.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><Link to="/" className="hover:text-primary-400">Home</Link></li>
                        <li><Link to="/explore" className="hover:text-primary-400">Explore Trips</Link></li>
                        <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6">Support</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><Link to="/faq" className="hover:text-primary-400">FAQ</Link></li>
                        <li><Link to="/contact" className="hover:text-primary-400">Contact</Link></li>
                        <li><Link to="/terms" className="hover:text-primary-400">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Chintu Drowns Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
