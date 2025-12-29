import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

const DrownCard = ({ drown }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-dark rounded-3xl overflow-hidden card-hover"
            onClick={() => navigate(`/drown/${drown.id}`)}
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={drown.image}
                    alt={drown.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-semibold">
                    {drown.type}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{drown.name}</h3>

                <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                    <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary-400" />
                        {drown.destination}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} className="text-primary-400" />
                        {drown.duration}
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                    <div>
                        <span className="text-2xl font-bold text-primary-400">${drown.price}</span>
                        <span className="text-slate-500 text-sm ml-1">/ trip</span>
                    </div>
                    <button className="text-primary-400 font-semibold hover:text-primary-300 flex items-center gap-1">
                        Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default DrownCard;
