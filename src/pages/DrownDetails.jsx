import { useParams, useNavigate } from 'react-router-dom';
import { drownsData } from '../data/drownsData';
import { Clock, MapPin, CheckCircle, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const DrownDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const drown = drownsData.find(d => d.id === parseInt(id));

    if (!drown) return <div className="pt-32 text-center">Drown not found</div>;

    return (
        <div className="pb-32">
            {/* Banner */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={drown.image}
                    alt={drown.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-dark p-8 md:p-12 rounded-[2rem] border-white/5"
                        >
                            <div className="flex flex-wrap gap-4 mb-6">
                                <span className="px-4 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm font-bold border border-primary-500/30">
                                    {drown.type}
                                </span>
                                <span className="px-4 py-1 rounded-full bg-white/5 text-slate-400 text-sm flex items-center gap-2">
                                    <Clock size={16} /> {drown.duration}
                                </span>
                                <span className="px-4 py-1 rounded-full bg-white/5 text-slate-400 text-sm flex items-center gap-2">
                                    <MapPin size={16} /> {drown.destination}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">
                                {drown.name}
                            </h1>

                            <p className="text-slate-300 text-lg mb-12 leading-relaxed">
                                {drown.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <CheckCircle className="text-primary-400" /> Highlights
                                    </h3>
                                    <ul className="space-y-4">
                                        {drown.highlights.map((h, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Navigation className="text-primary-400" /> Itinerary
                                    </h3>
                                    <div className="relative border-l-2 border-primary-500/20 ml-3 pl-8 space-y-8">
                                        {drown.itinerary.map((step, i) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-950" />
                                                <p className="text-slate-400 text-sm leading-relaxed">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Pricing Card */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="glass p-8 rounded-[2rem] sticky top-32"
                        >
                            <h4 className="text-slate-400 font-bold mb-2">Price per models</h4>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-5xl font-extrabold text-white">${drown.price}</span>
                                <span className="text-slate-400">/ package</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between py-3 border-b border-white/5">
                                    <span className="text-slate-400">Insurance</span>
                                    <span>Included</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/5">
                                    <span className="text-slate-400">Pilot Support</span>
                                    <span>Remote 24/7</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate(`/book/${drown.id}`)}
                                className="btn-primary w-full py-4 text-lg"
                            >
                                Start Adventure
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button
                onClick={() => navigate(`/book/${drown.id}`)}
                className="fixed bottom-10 right-10 z-50 btn-primary p-6 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-up"
            >
                <span className="hidden md:inline font-bold">Drown buy</span>
                <Navigation className="w-6 h-6 rotate-90" />
            </button>
        </div>
    );
};

export default DrownDetails;
