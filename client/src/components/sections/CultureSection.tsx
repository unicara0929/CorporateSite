/*
 * Design: Kinetic Minimalism — Culture Section
 * Dark background with constellation visual
 * Showcasing team culture and venture spirit
 */
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const CULTURE_VISUAL = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-4_1771641577000_na1fn_Y3VsdHVyZS12aXN1YWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTRfMTc3MTY0MTU3NzAwMF9uYTFmbl9ZM1ZzZEhWeVpTMTJhWE4xWVd3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wb6vXK-Omi2ZCGUCshBcY3ZSC9-zleAkTesdnaySagLC2ZytcrxY9kqjsGGDiIF9q5E01v3xSlzFB3Vzmx4iLAib6W~VdmyQ7g8o4RVFhGOFhsvdt-Qsj0KVY1i46mdoCAtnDDAkhqKdUkPPMjQt6fk94o7FEG4mWtDgSeSA6MyQa70LRn3AUJ11~Xf6zQPRbU4081oI8i4nhrM--IZ2B~JNAd9AEOrrzryb9nAS3f~CvFXcsXKCLtnrfAo4dYrA78Yv5ZNBikpuRXVaCNAZvLgmyjN959PiJuvsL2mJN4gjFv86OPQb0YI0nG2e7kYOymuwBDEhEaadOnvB5l2mcA__";

const culturePoints = [
  {
    title: "本質へ向かう",
    description: "表面的な解決ではなく、物事の本質を追求する。常に「なぜ？」を問い続け、真の課題解決に挑む姿勢。",
  },
  {
    title: "胸を張れる生き方を",
    description: "仕事と人生を分けない。自分自身が誇れる選択を日々積み重ね、その姿勢でお客様にも向き合う。",
  },
  {
    title: "最後までやり通す",
    description: "一度コミットしたことは、困難があっても最後までやり遂げる。その覚悟が信頼を生み、文化を創る。",
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="relative overflow-hidden">
      {/* Dark section with culture visual */}
      <div className="relative py-32 md:py-40">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={CULTURE_VISUAL}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D1B2A]/70" />
        </div>

        <div className="container relative z-10">
          <AnimatedSection>
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              Culture
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              生き方を誇れる文化を
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed font-body mb-16">
              Unicaraは、20代・30代を中心としたメンバーが、ベンチャースピリットを持ってこの時代を切り開く会社です。
              「働くこと」と「生きること」が一致する文化を、共に創っています。
            </p>
          </AnimatedSection>

          {/* Culture Points */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {culturePoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 0.15}>
                <div className="border-t border-[#84CBC8]/30 pt-8">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                    {point.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-[1.9] font-body">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.4} className="mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[#84CBC8] font-display font-medium text-sm tracking-wide group"
            >
              <span>仲間になりませんか</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
