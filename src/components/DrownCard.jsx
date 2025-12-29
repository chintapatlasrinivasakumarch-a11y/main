import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, MapPin, Zap, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const DrownCard = ({ drown }) => {
    const navigate = useNavigate();
    const [isInCompare, setIsInCompare] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('compareDrowns') || '[]');
        setIsInCompare(saved.includes(drown.id));
    }, [drown.id]);

    const toggleCompare = (e) => {
        e.stopPropagation();
        const saved = JSON.parse(localStorage.getItem('compareDrowns') || '[]');
        if (saved.includes(drown.id)) {
            const updated = saved.filter(id => id !== drown.id);
            localStorage.setItem('compareDrowns', JSON.stringify(updated));
            setIsInCompare(false);
        } else {
            if (saved.length >= 3) {
                alert("You can compare up to 3 models at a time.");
                return;
            }
            const updated = [...saved, drown.id];
            localStorage.setItem('compareDrowns', JSON.stringify(updated));
            setIsInCompare(true);
        }
        window.dispatchEvent(new Event('compareUpdate'));
    };

    return (
        <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-dark rounded-[2.5rem] overflow-hidden card-hover border border-white/5 hover:border-primary-500/30 group"
            onClick={() => navigate(`/drown/${drown.id}`)}
        >
            <div className="relative h-72 overflow-hidden">
                <img
                    src={drown.image}
                    alt={drown.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-400">
                    {drown.type}
                </div>
                <button
                    onClick={toggleCompare}
                    className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${isInCompare
                        ? 'bg-primary-500 text-white border-primary-400'
                        : 'bg-black/40 text-white border-white/20 border hover:bg-white hover:text-black'
                        }`}
                >
                    {isInCompare ? <Check size={18} /> : <Zap size={18} />}
                </button>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-black mb-3 group-hover:text-primary-400 transition-colors uppercase tracking-tight">{drown.name}</h3>

                <div className="flex items-center gap-5 text-slate-400 text-sm mb-8">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary-500" />
                        <span className="font-medium">{drown.destination}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-primary-500" />
                        <span className="font-medium">{drown.duration}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                    <div>
                        <span className="text-3xl font-bold text-white">${drown.price}</span>
                        <span className="text-slate-500 text-xs font-bold uppercase tracking-widest ml-1">/ trip</span>
                    </div>
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="bg-primary-500/10 text-primary-400 p-3 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
                    >
                        <Clock size={20} className="-rotate-45" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default DrownCard;
