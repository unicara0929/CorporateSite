/*
 * Design: Kinetic Minimalism — Mission Section
 * ミッションステートメントの表示（将来的にVision/Valueも追加可能）
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
import AnimatedSection from "@/components/AnimatedSection";

export default function MissionSection() {
  return (
    <section id="mission" className="py-32 md:py-40 bg-white relative overflow-hidden">
      <div className="container">
        <AnimatedSection>
          <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#1A1A2E] leading-tight mb-16 md:mb-24">
            私たちの想い
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Tag */}
            <div className="lg:col-span-3">
              <span className="text-[#84CBC8] text-xs tracking-[0.3em] uppercase font-display font-semibold">
                Mission
              </span>
              <div className="w-12 h-[2px] bg-[#84CBC8] mt-3" />
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[#1A1A2E] leading-snug mb-6">
                最高の選択を、大切なひとに
              </h3>
              <p className="text-[#1A1A2E]/70 text-base md:text-lg leading-[2] font-body max-w-2xl">
                「後悔のない選択」や「満足のいく選択」を超えて、その人の心が動き、人生に意味をもたらす「感動のある選択」。大切なひとは目の前のお客様自身だけでなく、その人が大切に思う家族・パートナー・仲間も含む。目の前の人を大切にするからこそ、未来の社会まで見える。
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
