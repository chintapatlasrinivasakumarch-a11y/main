import Hero from '../components/Hero';
import DrownCard from '../components/DrownCard';
import { drownsData } from '../data/drownsData';
import { motion } from 'framer-motion';

const Home = () => {
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
                        <h2 className="text-4xl font-bold mb-4">Featured Trips</h2>
                        <p className="text-slate-400 max-w-lg">
                            Explore our hand-picked selection of the most exhilarating drone expeditions around the globe.
                        </p>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary-400 font-bold flex items-center gap-2 border-b-2 border-primary-400/20 pb-1 hover:border-primary-400 transition-all"
                    >
                        View All Drowns
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredDrowns.map(drown => (
                        <DrownCard key={drown.id} drown={drown} />
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white/5 border-y border-white/5 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center p-8 rounded-3xl glass-dark">
                        <h3 className="text-2xl font-bold mb-4">Expert Pilots</h3>
                        <p className="text-slate-400 text-sm">Professional guidance from certified drone operators for every mission.</p>
                    </div>
                    <div className="text-center p-8 rounded-3xl glass-dark">
                        <h3 className="text-2xl font-bold mb-4">4K Captures</h3>
                        <p className="text-slate-400 text-sm">Every trip includes raw 4K footage and edited cinematic highlights for you to keep.</p>
                    </div>
                    <div className="text-center p-8 rounded-3xl glass-dark">
                        <h3 className="text-2xl font-bold mb-4">Global Network</h3>
                        <p className="text-slate-400 text-sm">From the Alps to the Outback, we have permitted flight zones across 40 countries.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
