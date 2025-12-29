import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, AlertCircle, CheckCircle2 } from 'lucide-react';

const Payment = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    if (!state) return <div className="pt-32 text-center">No booking data found</div>;

    const handlePay = () => {
        if (parseFloat(amount) === state.totalPrice) {
            setIsSuccess(true);
            setTimeout(() => {
                const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
                navigate('/confirmation', { state: { ...state, orderId } });
            }, 2000);
        } else {
            setError(`Please enter the exact amount: $${state.totalPrice}`);
        }
    };

    return (
        <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-dark p-8 md:p-12 rounded-[2rem] border-white/5 text-center"
            >
                <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CreditCard className="text-primary-500 w-10 h-10" />
                </div>

                <h1 className="text-3xl font-bold mb-2">Secure Payment</h1>
                <p className="text-slate-400 mb-8">Finalize your booking by confirming the payment amount.</p>

                <div className="bg-white/5 p-6 rounded-2xl mb-8">
                    <p className="text-sm text-slate-400 mb-1 uppercase tracking-widest font-bold">Total Amount Due</p>
                    <p className="text-5xl font-black text-white">${state.totalPrice}</p>
                </div>

                <div className="space-y-6 text-left">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400">Confirm Amount to Pay</label>
                        <input
                            type="number"
                            placeholder={`Enter $${state.totalPrice}`}
                            className={`input-field text-2xl font-bold py-4 text-center ${error ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                            value={amount}
                            onChange={(e) => {
                                setAmount(e.target.value);
                                setError('');
                            }}
                        />
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2 text-red-400 text-sm justify-center"
                            >
                                <AlertCircle size={16} /> {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        disabled={isSuccess}
                        onClick={handlePay}
                        className={`btn-primary w-full py-4 text-lg mt-4 flex items-center justify-center gap-3 ${isSuccess ? 'bg-green-600 hover:bg-green-600' : ''}`}
                    >
                        {isSuccess ? (
                            <>
                                <CheckCircle2 size={24} className="animate-pulse" />
                                Payment Successful
                            </>
                        ) : (
                            'Simulate Payment'
                        )}
                    </button>
                </div>

                <p className="text-[10px] text-slate-600 mt-8 uppercase tracking-[0.2em]">
                    End-to-end encrypted • Mock interaction only
                </p>
            </motion.div>
        </div>
    );
};

export default Payment;
