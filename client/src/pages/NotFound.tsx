/*
 * Design: Kinetic Minimalism — 404 Page
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center bg-[#2A2A3E]">
        <div className="container text-center py-32 md:py-40">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-6"
          >
            Page Not Found
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-display font-bold text-white mb-6"
          >
            404
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.0 }}
            className="text-white/50 text-base md:text-lg max-w-md mx-auto leading-relaxed font-body mb-12"
          >
            お探しのページは見つかりませんでした。
            <br />
            移動または削除された可能性があります。
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setLocation("/")}
            className="bg-[#84CBC8] hover:bg-[#6BB8B5] text-white font-display font-semibold tracking-wide px-10 py-4 text-sm rounded-none transition-all duration-300 hover:shadow-[0_8px_30px_rgba(132,203,200,0.3)]"
          >
            トップページへ戻る
          </motion.button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
