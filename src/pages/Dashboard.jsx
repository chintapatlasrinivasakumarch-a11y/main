import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('myBookings') || '[]');
        setBookings(saved);
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
            >
                <div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Pilot <span className="text-primary-400">Dashboard</span></h1>
                    <p className="text-slate-400">Track your past expeditions and upcoming aerial missions.</p>
                </div>
                <Link to="/explore" className="btn-primary py-3 px-8 rounded-full font-bold flex items-center gap-2">
                    New Mission <ArrowRight size={18} />
                </Link>
            </motion.div>

            {bookings.length === 0 ? (
                <div className="text-center py-32 glass-dark rounded-[3rem] border border-white/5">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/5">
                        <Package className="text-slate-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 italic">The hangar is empty</h3>
                    <p className="text-slate-500 mb-8">You haven't booked any drone expeditions yet.</p>
                    <Link to="/explore" className="text-primary-400 font-bold hover:underline">Start Exploring Models</Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-8">
                    {bookings.map((booking, index) => (
                        <motion.div
                            key={booking.orderId}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-dark rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary-500/20 transition-all flex flex-col md:flex-row shadow-xl"
                        >
                            <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                                <img src={booking.image} alt={booking.drownName} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col md:flex-row justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-primary-500/10 text-primary-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary-500/20">
                                            Order #{booking.orderId}
                                        </span>
                                        <span className="text-slate-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                            <Calendar size={12} /> {new Date().toLocaleDateString()}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight">{booking.drownName}</h3>
                                    <div className="flex flex-wrap gap-6 text-slate-400 text-sm font-medium">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-primary-500" />
                                            Destination: Global
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-primary-500" />
                                            Duration: {booking.quantity}x Units
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 md:mt-0 md:text-right flex flex-col justify-between items-start md:items-end">
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Total Paid</p>
                                        <p className="text-3xl font-black text-white">${booking.totalPrice}</p>
                                    </div>
                                    <button className="text-primary-400 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-primary-400/20 pb-1 hover:border-primary-400 transition-all mt-4">
                                        View Receipt
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Mission Stats */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: "Flight Hours", val: bookings.length * 12, unit: "HRS" },
                    { label: "Expeditions", val: bookings.length, unit: "MISSIONS" },
                    { label: "Distance", val: bookings.length * 150, unit: "KM" },
                    { label: "Data Collected", val: bookings.length * 42, unit: "GB" }
                ].map((stat, i) => (
                    <div key={i} className="glass-dark p-8 rounded-[2rem] border border-white/5 text-center">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                        <p className="text-4xl font-black text-white mb-1">{stat.val}</p>
                        <p className="text-[10px] font-black text-primary-400">{stat.unit}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
