/*
 * Design: Kinetic Minimalism — News Section
 * Clean white background, minimal news list
 */
import AnimatedSection from "@/components/AnimatedSection";

export default function NewsSection() {
  return (
    <section id="news" className="py-32 md:py-40 bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="mb-16">
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              News & Column
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A1A2E]">
              お知らせ
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-[#1A1A2E]/50 text-base font-body">
            現在、お知らせはありません。
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
