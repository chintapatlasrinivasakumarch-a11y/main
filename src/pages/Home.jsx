import Hero from '../components/Hero';
import DrownCard from '../components/DrownCard';
import { drownsData } from '../data/drownsData';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const featuredDrowns = drownsData.slice(0, 9);

    return (
        <div>
            <Hero />

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4">Featured Models</h2>
                        <p className="text-slate-400 max-w-lg">
                            Explore our hand-picked selection of the most exhilarating drone platforms for every mission type.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        onClick={() => navigate('/explore')}
                        className="text-primary-400 font-bold flex items-center gap-2 border-b-2 border-primary-400/20 pb-1 hover:border-primary-400 transition-all"
                    >
                        Explore Catalog
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredDrowns.map(drown => (
                        <DrownCard key={drown.id} drown={drown} />
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">What Our Pilots Say</h2>
                    <p className="text-slate-400">Trusted by over 5,000 professional and hobbyist operators worldwide.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Alex Rivers", role: "Cinema Director", text: "The Mavic 3 Pro expedition in the Alps was life-changing. The technical support we received was top-notch." },
                        { name: "Sarah Chen", role: "Agri-Tech Lead", text: "Chintu Drowns made it so easy to compare industrial models. We found the perfect XAG drone for our vineyard." },
                        { name: "Marcus Thorne", role: "FPV Racer", text: "If you want speed, this is the place. The Icelandic Canyon run with the Bolt-X was pure adrenaline." }
                    ].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-dark p-8 rounded-[2rem] border border-white/5"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, star) => (
                                    <span key={star} className="text-primary-500 text-lg">★</span>
                                ))}
                            </div>
                            <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                            <div>
                                <p className="font-bold">{t.name}</p>
                                <p className="text-xs text-primary-400 uppercase tracking-widest">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary-500/5 blur-[120px] rounded-full" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Stay in Flight</h2>
                    <p className="text-slate-400 mb-10 text-lg">Join 10,000+ enthusiasts. Get the latest model drops and flight tips delivered to your cockpit.</p>
                    <form className="flex flex-col md:flex-row gap-4 p-2 glass rounded-2xl md:rounded-full max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="bg-transparent border-none focus:ring-0 px-6 py-4 flex-grow text-white"
                        />
                        <button className="btn-primary px-10 py-4 rounded-xl md:rounded-full font-bold">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
