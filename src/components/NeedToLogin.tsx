import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NeedToLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "mirror" }}
          className="text-5xl"
        >
          🔒
        </motion.div>

        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          Phele details dedo cutie
        </h1>

        <p className="mt-2 text-gray-600">
          Hum tumhare jaise mystery cuties ko entry dene ke liye ready hain, par
          kya kare shortlist bhi toh hona hai 🥺.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
        >
          <Link to="/">Wapas Chale Jao 😭</Link>
        </motion.button>

        {/* Subtle humor below */}
        <p className="mt-4 text-sm text-gray-500">
          Nahi Jaana ? Koi baat nahi yaar! fir mujhe directly shortlist kardo!😎
        </p>
      </motion.div>
    </div>
  );
};

export default NeedToLogin;
