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
            <p className="text-[#1A1A2E]/50 text-base font-body">
              準備中です。
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
