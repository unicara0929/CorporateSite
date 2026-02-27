/*
 * Design: Kinetic Minimalism — Numbers Section
 * Animated count-up numbers showing company achievements
 * Teal accent on white background
 */
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedSection from "@/components/AnimatedSection";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

function CountUp({ end, suffix = "", duration = 2000, isVisible }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 2500, suffix: "+", label: "相談実績", sublabel: "Consultations" },
  { value: 98, suffix: "%", label: "顧客満足度", sublabel: "Satisfaction" },
  { value: 15, suffix: "名", label: "専門アドバイザー", sublabel: "Advisors" },
  { value: 8, suffix: "年", label: "サポート実績", sublabel: "Years" },
];

export default function NumbersSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white border-y border-gray-50">
      <div className="container">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#84CBC8] mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                    duration={2000 + index * 200}
                  />
                </p>
                <p className="text-[#1A1A2E] text-sm md:text-base font-body font-medium mb-1">
                  {stat.label}
                </p>
                <p className="text-[#1A1A2E]/30 text-xs font-display tracking-[0.15em] uppercase">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
