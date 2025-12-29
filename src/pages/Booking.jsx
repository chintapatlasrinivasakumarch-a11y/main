import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { drownsData } from '../data/drownsData';
import { motion } from 'framer-motion';
import { User, Phone, Layers, Info } from 'lucide-react';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const drown = drownsData.find(d => d.id === parseInt(id));

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        quantity: 1
    });

    if (!drown) return <div className="pt-32 text-center">Drown not found</div>;

    const totalPrice = drown.price * formData.quantity;

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app we'd save to state or context here
        navigate(`/payment/${drown.id}`, { state: { ...formData, totalPrice, drownName: drown.name, image: drown.image } });
    };

    return (
        <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">

                {/* Left: Summary */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:w-1/3 w-full glass-dark p-6 rounded-[2rem] border-white/5"
                >
                    <img
                        src={drown.image}
                        alt={drown.name}
                        className="w-full h-48 object-cover rounded-2xl mb-6"
                    />
                    <h2 className="text-2xl font-bold mb-2">{drown.name}</h2>
                    <p className="text-primary-400 font-semibold mb-6">{drown.type}</p>

                    <div className="space-y-4 text-slate-400 text-sm">
                        <div className="flex justify-between">
                            <span>Unit Price:</span>
                            <span className="text-white">${drown.price}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="text-white">{drown.duration}</span>
                        </div>
                        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                            <span className="text-lg font-bold">Total:</span>
                            <span className="text-3xl font-extrabold text-white">${totalPrice}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:w-2/3 w-full"
                >
                    <div className="glass p-8 md:p-12 rounded-[2rem]">
                        <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                        <User size={16} /> Full Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name"
                                        className="input-field"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                        <Phone size={16} /> Phone Number
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="Enter phone number"
                                        className="input-field"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                    <Layers size={16} /> Number of drowns
                                </label>
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        className="flex-1 accent-primary-500"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                                    />
                                    <span className="text-2xl font-bold w-12 text-center">{formData.quantity}</span>
                                </div>
                            </div>

                            <div className="p-4 bg-primary-500/10 rounded-xl flex gap-3 text-sm text-primary-400 border border-primary-500/20">
                                <Info size={18} className="shrink-0" />
                                <p>The total price is automatically calculated based on the number of models selected for this trip.</p>
                            </div>

                            <button type="submit" className="btn-primary w-full py-4 text-lg mt-8">
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Booking;
