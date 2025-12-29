import { useState } from 'react';
import DrownCard from '../components/DrownCard';
import { drownsData } from '../data/drownsData';
import { motion } from 'framer-motion';

const DrownListing = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "DJI Collection", "Enterprise", "Agricultural", "Racing / FPV", "Mapping / Surveying", "VTOL / Tactical"];

    const filteredDrowns = activeCategory === "All"
        ? drownsData
        : drownsData.filter(drown => drown.category === activeCategory);

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Catalog</h1>
                <p className="text-slate-400">Discover top-tier models from DJI, Skydio, Autel, and more.</p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                            : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDrowns.map(drown => (
                    <DrownCard key={drown.id} drown={drown} />
                ))}
            </div>
        </div>
    );
};

export default DrownListing;
