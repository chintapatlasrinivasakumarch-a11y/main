import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Home, ShoppingBag } from 'lucide-react';

const Confirmation = () => {
    const { state } = useLocation();

    if (!state) return <div className="pt-32 text-center">No order found</div>;

    return (
        <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center mb-12"
            >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-500 w-12 h-12" />
                </div>
                <h1 className="text-4xl font-bold mb-2">Booking Confirmed!</h1>
                <p className="text-slate-400">Your aerial adventure awaits. Here is your digital receipt.</p>
            </motion.div>

            {/* Modern Digital Ticket / Order Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-dark rounded-[2.5rem] overflow-hidden border-white/5 shadow-2xl"
            >
                <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 mb-12 items-start md:items-center">
                        <img src={state.image} alt={state.drownName} className="w-32 h-32 rounded-3xl object-cover" />
                        <div className="text-left">
                            <p className="text-xs font-bold text-primary-400 tracking-widest uppercase mb-1">Booking ID: {state.orderId}</p>
                            <h2 className="text-3xl font-black text-white">{state.drownName}</h2>
                            <p className="text-slate-400 text-sm max-w-sm mt-2">Premium Drone Experience Package including full equipment and 4K media kit.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left py-8 border-y border-white/5">
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Guest</p>
                            <p className="font-bold">{state.name}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Contact</p>
                            <p className="font-bold">{state.phone}</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Items</p>
                            <p className="font-bold">{state.quantity} Models</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Total Paid</p>
                            <p className="font-bold text-primary-400">${state.totalPrice}</p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row gap-4">
                        <button className="btn-primary flex-1 flex items-center justify-center gap-2 py-4">
                            <Download size={20} /> Download recept
                        </button>
                        <Link to="/" className="btn-secondary flex-1 flex items-center justify-center gap-2 py-4">
                            <Home size={20} /> Back to Home
                        </Link>
                    </div>
                </div>

                {/* Visual Ticket Detail */}
                <div className="h-6 bg-primary-600 w-full opacity-50 relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
                </div>
            </motion.div>

            <div className="mt-12 text-center text-slate-500 text-sm flex items-center justify-center gap-2">
                <ShoppingBag size={14} />
                Thank you for choosing DROWNS for your sky-high journey!
            </div>
        </div>
    );
};

export default Confirmation;
