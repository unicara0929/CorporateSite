/*
 * 下層ページ: FIDUCIARY DUTY（お客さま本位の業務運営方針）
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const policies = [
  {
    number: "1",
    title: "お客さま本位の業務運営をいたします。",
    description:
      "お客さまのよりよい生活をサポートするFPとして、お客さまやそのご家族をお守りする最適な保険商品の設計・サービスを提供します。",
  },
  {
    number: "2",
    title: "お客さまにとって最善の商品・サービスの提供をします。",
    description:
      "FPならではの視点で現状の不安や悩みをヒアリング・把握・分析し合理的かつ効率的なプランを幅広くご提案します。",
  },
  {
    number: "3",
    title: "お客さまの不安を解消します。",
    description:
      "約50%以上の人がお金に対し不安を抱えていると言われています。不安は「知ること」「行動すること」で解消されるという考えに基づき正しい知識の提供と合理的な資産形成の提案により不安を払拭します。",
  },
  {
    number: "4",
    title: "利益相反の適切な管理をします。",
    description:
      "お客さまの利益を不当に損なうことのないよう、法令等に従って適切に業務を遂行し、利益相反の管理を徹底いたします。また、利益相反のおそれのある取引を特定、類型化し、お客さまの利益が損なわれることがないよう適切な管理を実施します。",
  },
  {
    number: "5",
    title: "従業員に対する適切な教育の実施並びに評価体系の策定をします。",
    description:
      "お客さまに信用される仕事を積み重ね、強い信頼をいただけるよう、正しい知識を習得出来る教育を実施します。また、お客さま満足度の維持・向上に向けた取組みを踏まえた評価体系の構築に努めてまいります。",
  },
  {
    number: "6",
    title: "お客さまの声を経営に活かす取組みを行います。",
    description:
      "当社は、お客さまから寄せられる「お客さまの声」を経営に反映するため、「お客さまの声」の傾向や内容を分析し、分析結果を共有して、業務改善につなげています。",
  },
  {
    number: "7",
    title: "お客さま本位の業務運営の実効性を高める取組みを行います。",
    description:
      "お客さま本位の業務運営の定着を図り、より良い業務運営としていくために、実施状況について定期的に検証を行い、方針に基づく各種取組みの実効性を高めてまいります。",
  },
];

export default function FiduciaryDuty() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#2A2A3E]">
          <div className="container">
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              Fiduciary Duty
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              お客さま本位の業務運営方針
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container max-w-4xl">
            {/* Intro */}
            <div className="mb-16">
              <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body">
                Unicara株式会社は、お客様の不安や悩みをヒアリング・把握し分析し合理的かつ効率的なコンサルティングを行い、より一層お客さまの信頼に応えます。お客さま本位の業務運営をより一層推進するため、以下の方針を定めます。
              </p>
            </div>

            {/* Policy Items */}
            <div className="space-y-12">
              {policies.map((item) => (
                <div key={item.number} className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                  <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-3">
                    <span className="text-[#84CBC8] mr-2">{item.number}.</span>
                    {item.title}
                  </h3>
                  <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
