/*
 * 下層ページ: 「お客さま本位の業務運営方針」に関する評価指標(KPI)の設定
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Kpi() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#2A2A3E]">
          <div className="container">
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              KPI
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              「お客さま本位の業務運営方針」に関する
              <br />
              評価指標(KPI)の設定
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container max-w-4xl">
            {/* Intro */}
            <div className="mb-16">
              <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body">
                Unicara株式会社は「お客さま本位の業務運営方針」を実践する取組に関する評価指標(KPI)を公表します。
              </p>
            </div>

            {/* KPI 1 */}
            <div className="mb-16">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-3">
                  <span className="text-[#84CBC8] mr-2">1)</span>
                  新契約件数
                </h3>
                <div className="bg-[#FAFAFA] p-6 mb-4">
                  <p className="text-[#1A1A2E] text-lg font-display font-semibold mb-2">
                    生命保険契約 <span className="text-[#84CBC8]">1,500件</span>
                  </p>
                  <p className="text-[#1A1A2E]/50 text-sm font-body">
                    対象期間：2026年1月1日から2026年12月31日
                  </p>
                </div>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  お客さまからお預かりするご契約は、当社が選ばれる信頼の証と考えております。引き続きお客さま本位の活動を行い、お客さまに対し幅広く情報を提供させていただきます。
                </p>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="mb-16">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-3">
                  <span className="text-[#84CBC8] mr-2">2)</span>
                  資格取得率
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body mb-4">
                  お客様により満足のいく情報提供をしていくためにはよりレベルの高い資格を取得していくことは欠かせません。
                </p>
                <div className="bg-[#FAFAFA] p-6 mb-4">
                  <p className="text-[#1A1A2E] text-base font-display font-semibold mb-3">
                    生命保険応用課程、FP技能士資格取得率 <span className="text-[#84CBC8]">75％以上</span>（1年以内）
                  </p>
                  <div className="space-y-2 text-[#1A1A2E]/60 text-sm font-body">
                    <p>2026年1月現在 募集人14名中2名が生命保険応用課程を取得しております。</p>
                    <p>2026年1月現在 募集人14名中11名がFP技能士を取得しております。</p>
                  </div>
                </div>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body mb-4">
                  上記評価指標は、当社方針に関する取り組みとあわせて、定期的に進捗状況を確認します。
                </p>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  現在 12名 生命保険応用課程取得の目標が達成されておりません。今年度中に達成できるよう努力いたします。
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="border-t border-gray-100 pt-12">
              <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                当社では、今後とも本方針に基づく取り組みを積極的に推進することで、お客さまの最善の利益を追求するとともに、お客さまに信頼され安心してご相談いただける代理店となるよう努めてまいります。
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
