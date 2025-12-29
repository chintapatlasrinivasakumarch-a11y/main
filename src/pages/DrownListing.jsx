import DrownCard from '../components/DrownCard';
import { drownsData } from '../data/drownsData';
import { motion } from 'framer-motion';

const DrownListing = () => {
    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Catalog</h1>
                <p className="text-slate-400">Find the perfect model for your next aerial adventure.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {drownsData.map(drown => (
                    <DrownCard key={drown.id} drown={drown} />
                ))}
            </div>
        </div>
    );
};

export default DrownListing;
