/*
 * Design: Kinetic Minimalism — Company Section
 * Clean table layout showing company overview
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
import AnimatedSection from "@/components/AnimatedSection";

const companyInfo = [
  { label: "会社名", value: "Unicara株式会社" },
  { label: "設立", value: "2025年9月" },
  { label: "代表取締役", value: "竹田 晴哉" },
  { label: "所在地", value: "愛知県名古屋市中区栄四丁目12番26号 栄CDビル6F" },
  { label: "事業内容", value: "ライフプランニング事業、保険代理店事業、ファイナンシャルコンサルティング事業" },
];

export default function CompanySection() {
  return (
    <section id="company" className="py-32 md:py-40 bg-white">
      <div className="container">
        <AnimatedSection>
          <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
            Company
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1A1A2E] mb-16">
            会社概要
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl">
            {companyInfo.map((item, index) => (
              <div
                key={item.label}
                className={`grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-4 py-6 ${
                  index < companyInfo.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <dt className="text-[#1A1A2E]/50 text-sm font-display tracking-wide">
                  {item.label}
                </dt>
                <dd className="text-[#1A1A2E] text-sm md:text-base font-body leading-relaxed">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
