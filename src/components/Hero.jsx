import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with parallax effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.png"
                    alt="Hero background"
                    className="w-full h-full object-cover scale-105 opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 rounded-full glass text-sm font-medium mb-6 text-primary-400">
                        Premium Aerial Adventures
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight">
                        Discover unforgettable <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-600">prodects</span>
                    </h1>

                    {/* Search UI */}
                    <div className="mt-12 glass p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto shadow-2xl">
                        <div className="flex-1 flex items-center gap-3 px-4 w-full border-b md:border-b-0 md:border-r border-white/10 py-3 md:py-0">
                            <Search className="text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search type of drowns..."
                                className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-slate-500"
                            />
                        </div>
                        <div className="flex-1 flex items-center gap-3 px-4 w-full py-3 md:py-0">
                            <MapPin className="text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Choose destination..."
                                className="bg-transparent border-none focus:ring-0 text-white w-full placeholder:text-slate-500"
                            />
                        </div>
                        <button className="btn-primary w-full md:w-auto">
                            Search
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <div className="glass p-4 rounded-xl flex items-center gap-4 animate-bounce">
                    <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center">
                        <Search className="text-white" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Popular Search</p>
                        <p className="text-sm font-bold">Cinema Drowns</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
