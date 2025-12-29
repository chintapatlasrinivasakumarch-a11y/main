import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-6xl font-black mb-6">Get in <span className="text-primary-400">Touch</span></h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Have questions about our drone expeditions or need custom enterprise solutions? Our team of experts is ready to help you take flight.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-12"
                >
                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center shrink-0 border border-primary-500/20">
                            <Mail className="text-primary-400" size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Email Us</h3>
                            <p className="text-slate-400 mb-1">General Inquiries: hello@chintudrowns.com</p>
                            <p className="text-slate-400">Support: support@chintudrowns.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                            <Phone className="text-blue-400" size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Call Us</h3>
                            <p className="text-slate-400 mb-1">Main Office: +1 (555) 123-4567</p>
                            <p className="text-slate-400">Toll Free: 1-800-FLY-CHINTU</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                            <MapPin className="text-purple-400" size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Visit Our Hangar</h3>
                            <p className="text-slate-400 mb-1">123 Drone Valley Road</p>
                            <p className="text-slate-400">San Francisco, CA 94103</p>
                        </div>
                    </div>

                    <div className="glass-dark p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary-500/20 transition-all" />
                        <MessageSquare className="text-primary-400 mb-6" size={32} />
                        <h4 className="text-2xl font-bold mb-2">Live Support</h4>
                        <p className="text-slate-400 text-sm mb-6">Our pilots are online 24/7 to help you with real-time technical guidance and booking help.</p>
                        <button className="text-primary-400 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-xs tracking-widest">
                            Start Chatting <Send size={14} />
                        </button>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-dark p-10 rounded-[3rem] border border-white/10 shadow-2xl relative"
                >
                    {isSubmitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                                <Send className="text-green-500" size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                            <p className="text-slate-400">Thank you for reaching out. A Chintu Drowns expert will contact you within the next 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-500 transition-all text-white placeholder:text-slate-600"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-500 transition-all text-white placeholder:text-slate-600"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-primary-500 transition-all text-white placeholder:text-slate-600 resize-none"
                                    placeholder="Tell us about your next mission..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary py-5 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg">
                                <Send size={20} /> Transmit Message
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
