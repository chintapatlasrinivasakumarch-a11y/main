import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { drownsData } from '../data/drownsData';
import { X, ArrowRight, Zap, Shield, Target, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Compare = () => {
    const [compareList, setCompareList] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('compareDrowns') || '[]');
        setCompareList(saved);
    }, []);

    const removeFromCompare = (id) => {
        const updated = compareList.filter(item => item !== id);
        setCompareList(updated);
        localStorage.setItem('compareDrowns', JSON.stringify(updated));
    };

    const comparedDrones = drownsData.filter(d => compareList.includes(d.id));

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl md:text-5xl font-black mb-6">Compare <span className="text-primary-400">Models</span></h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Contrast technical specifications side-by-side to find the perfect aerial platform for your mission requirements.
                </p>
            </motion.div>

            {comparedDrones.length === 0 ? (
                <div className="text-center py-32 bg-white/5 rounded-[3rem] border border-white/5">
                    <p className="text-slate-500 mb-8 text-xl">No models selected for comparison.</p>
                    <Link to="/explore" className="btn-primary py-4 px-10 rounded-full font-bold">
                        Browse Catalog
                    </Link>
                </div>
            ) : (
                <div className="overflow-x-auto pb-12">
                    <div className="min-w-[1000px] grid grid-cols-4 gap-8">
                        {/* Headers */}
                        <div className="space-y-12 pr-8 pt-64">
                            <div className="h-20 flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/5 pb-4">Classification</div>
                            <div className="h-24 flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/5 pb-4">Key Features</div>
                            <div className="h-32 flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/5 pb-4">Description</div>
                            <div className="h-20 flex items-center text-xs font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/5 pb-4">Pricing</div>
                        </div>

                        {comparedDrones.map(drown => (
                            <motion.div
                                key={drown.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-dark rounded-[3rem] p-8 border border-white/10 relative group"
                            >
                                <button
                                    onClick={() => removeFromCompare(drown.id)}
                                    className="absolute -top-4 -right-4 w-10 h-10 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center border border-red-500/20 hover:bg-red-500 hover:text-white transition-all z-10"
                                >
                                    <X size={20} />
                                </button>

                                <div className="h-48 mb-8 overflow-hidden rounded-2xl">
                                    <img src={drown.image} alt={drown.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{drown.name}</h3>
                                <p className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-12">{drown.type}</p>

                                <div className="space-y-12">
                                    <div className="h-20 flex items-center font-bold text-white border-b border-white/5 pb-4">
                                        {drown.category}
                                    </div>
                                    <div className="h-24 flex flex-wrap gap-2 items-start border-b border-white/5 pb-4">
                                        {drown.highlights.slice(0, 3).map(h => (
                                            <span key={h} className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-slate-400 font-medium whitespace-nowrap">{h}</span>
                                        ))}
                                    </div>
                                    <div className="h-32 text-sm text-slate-400 line-clamp-4 border-b border-white/5 pb-4 leading-relaxed">
                                        {drown.description}
                                    </div>
                                    <div className="h-20 flex items-baseline gap-2 border-b border-white/5 pb-4">
                                        <span className="text-3xl font-black text-white">${drown.price}</span>
                                        <span className="text-xs text-slate-500 font-bold uppercase">USD</span>
                                    </div>
                                    <Link to={`/drown/${drown.id}`} className="block w-full text-center py-4 bg-primary-500/10 text-primary-400 rounded-2xl font-bold hover:bg-primary-500 hover:text-white transition-all uppercase tracking-widest text-xs">
                                        Details <ArrowRight size={14} className="inline ml-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}

                        {comparedDrones.length < 3 && (
                            <Link
                                to="/explore"
                                className="h-full min-h-[600px] bg-dashed border-2 border-dashed border-white/10 rounded-[3rem] flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/50 hover:text-primary-400 transition-all gap-4 group"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10">
                                    <Zap size={24} />
                                </div>
                                <span className="font-bold uppercase tracking-widest text-xs">Add Model</span>
                            </Link>
                        )}
                    </div>
                </div>
            )}

            {/* Features Spotlight */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="p-10 glass-dark rounded-[2.5rem] border border-white/5">
                    <Shield className="text-primary-400 mb-6" size={32} />
                    <h4 className="text-xl font-bold mb-4">Enterprise Grade</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">All models undergo rigorous safety testing and firmware validation before deployment.</p>
                </div>
                <div className="p-10 glass-dark rounded-[2.5rem] border border-white/5 text-center">
                    <Target className="text-blue-400 mb-6 mx-auto" size={32} />
                    <h4 className="text-xl font-bold mb-4">Tactical Precision</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Real-time telemetry and RTK support ensures centimeter-level accuracy for every mission.</p>
                </div>
                <div className="p-10 glass-dark rounded-[2.5rem] border border-white/5 text-right">
                    <Smartphone className="text-purple-400 mb-6 ml-auto" size={32} />
                    <h4 className="text-xl font-bold mb-4">Seamless Control</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Integrated mobile apps and remote controllers provide intuitive flight management.</p>
                </div>
            </div>
        </div>
    );
};

export default Compare;
