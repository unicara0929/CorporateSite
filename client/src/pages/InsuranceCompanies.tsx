/*
 * 下層ページ: 取扱保険会社一覧
 * 内容は後日追加予定
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function InsuranceCompanies() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#2A2A3E]">
          <div className="container">
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              Insurance Companies
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              取扱保険会社一覧
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container max-w-4xl">
            <ul className="space-y-4">
              {[
                "三井住友海上あいおい生命保険株式会社",
                "三井住友海上プライマリー生命保険株式会社",
                "ネオファースト生命保険株式会社",
                "チューリッヒ生命保険株式会社",
                "アクサ生命保険株式会社",
                "FWD生命保険株式会社",
                "メットライフ生命保険株式会社",
                "ジブラルタ生命保険株式会社",
                "オリックス生命保険株式会社",
                "東京海上日動あんしん生命保険株式会社",
              ].map((company) => (
                <li
                  key={company}
                  className="flex items-center text-[#1A1A2E]/80 text-base md:text-lg font-body border-b border-gray-100 pb-4"
                >
                  <span className="w-2 h-2 rounded-full bg-[#84CBC8] mr-4 shrink-0" />
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
