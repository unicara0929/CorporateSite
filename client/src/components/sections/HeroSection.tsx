/*
 * Design: Kinetic Minimalism — Hero Section
 * Full-screen hero with dark background, teal light trails image
 * Kinetic typography: catchcopy appears character by character
 * Brand color: #84CBC8 on dark #1A1A2E
 */
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-1_1771641571000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTFfMTc3MTY0MTU3MTAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=vhuzD~9Pt9Q4GNNiMQIPCzIHU8otvmYJu5u2-YzHuVAp1Al4iG10NFn0iCzJ0Zl9AW63HWH8pydfvAI5iVmHFgqYFuV~nr42s2B-JRUTVx56HUcIZlRP2m3-HEO~NogjFsaSgO23pGf873UkWTfsH9iAlKJevU7ypzSj3JVE~9hfCz-IPVzznKjAO8-~umV6S32sljpIYwsEGGVH9ZLtu8Uy57ipPa4M9l8LaRIbrauRvtcZ4Bj82RKka6WmQhtQoZWtjXVtWCVG-Dv4ntEKGBFTxr4LsdceNbzpCzrn-BxIaxBaxYpm5DOkAZTNMQbtjyZMRqSAZ8CpedBllfqUlg__";


export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A2E]/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container">
        <div className="max-w-5xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#84CBC8] text-sm md:text-base tracking-[0.3em] uppercase font-display font-medium mb-8"
          >
            Our Mission
          </motion.p>

          {/* Mission — large display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.15] tracking-wide mb-10"
          >
            最高の選択を、<span className="text-[#84CBC8]">大切なひとに</span>
          </motion.h1>

          {/* Catchcopy as subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/70 text-base md:text-lg lg:text-xl tracking-[0.1em] font-display font-medium"
          >
            夢を見つけ、叶えるライフサポートカンパニー
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-display">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] as number[] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="text-[#84CBC8]" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
