/*
 * 下層ページ: 勧誘方針
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const solicitationItems = [
  {
    number: "1",
    text: "お客さまの商品に関する知識・経験・財産の状況等にも十分配慮し、お客さまのご意向を把握・確認し、お客さまのニーズに沿った商品の勧誘を行います。",
  },
  {
    number: "2",
    text: "「ご契約時」、「ご契約期間中」、「お支払い時」のどの段階においても、ご契約内容についてお客さまの知りたいこと、重要なことを分かりやすくご説明いたします。",
  },
  {
    number: "3",
    text: "お客さまへの訪問・連絡等に際して、時間・場所・方法等、お客さまのご都合等を十分に配慮し、お客さまからの了解のない限り、深夜・早朝の訪問・連絡等は行いません。",
  },
  {
    number: "4",
    text: "保険商品の提案を行うに際しては、お客さまのご意向を把握したうえで、ご意向に沿った商品を提案いたします。また、「保障設計書（契約概要）」、「重要事項説明書（注意喚起情報）」等を活用・手交して、お客さまに商品内容を正しくご理解いただけるようにいたします。",
  },
  {
    number: "5",
    text: "お申し込みをいただく際に、お申し込みをされる保険商品および保険料・保障内容等について、お客さまのご意向に合致していることを再確認させていただき、お客さまの最終的なご意向に沿った商品にご加入いただけるようにいたします。また、お客さまが保険契約の内容等について、ご理解されていない場合や誤解されている場合には、より分かりやすい説明および誤解の解消に努めます。",
  },
];

const privacyItems = [
  {
    number: "1",
    text: "業務上必要な範囲内で、かつ、適法で公正な手段により個人情報を取得します。また、法令に定める場合を除き、個人情報の利用目的を通知または公表し、利用目的の範囲内で取り扱います。",
  },
  {
    number: "2",
    text: "法令に定める場合を除き、ご本人の同意なく個人データ（個人番号および特定個人情報を除きます。）を第三者に提供することはありません。なお、個人番号および特定個人情報については、法令に定める場合を除き、第三者に提供することはありません。",
  },
  {
    number: "3",
    text: "個人データについて、漏えい、滅失またはき損の防止等に努め、適切な安全管理措置を実施します。",
  },
  {
    number: "4",
    text: "個人データの取扱いが適正に行われるように従業者への教育・指導を徹底します。また、個人情報保護のための管理態勢を継続的に見直し、改善に努めてまいります。",
  },
  {
    number: "5",
    text: "個人情報の取扱いに関する苦情・相談に対し適切かつ迅速に対応します。また、個人情報の保護に関する法律に基づく保有個人データの開示、訂正等の請求に適切に対応します。",
  },
];

export default function SolicitationPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#2A2A3E]">
          <div className="container">
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              Solicitation Policy
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              勧誘方針
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container max-w-4xl">
            {/* 基本方針 */}
            <div className="mb-16">
              <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A1A2E] mb-6">
                基本方針
              </h2>
              <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body">
                Unicara株式会社は、「金融サービスの提供及び利用環境の整備等に関する法律」、「保険業法」、その他関係諸法令・諸規則等を遵守し、適切に体制を整備するとともに、次の方針に基づき、適正な勧誘を行います。
              </p>
            </div>

            {/* 適切な勧誘・提案について */}
            <div className="mb-20">
              <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A1A2E] mb-8">
                適切な勧誘・提案について
              </h2>
              <div className="space-y-10">
                {solicitationItems.map((item) => (
                  <div key={item.number} className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                    <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                      <span className="text-[#84CBC8] font-display font-bold mr-2">{item.number}.</span>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 個人情報の保護について */}
            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A1A2E] mb-6">
                個人情報の保護について
              </h2>
              <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body mb-8">
                Unicara株式会社は、個人情報を適正に取り扱うことが社会的責務であり重要であると認識し、「個人情報の保護に関する法律」（以下「個人情報保護法」といいます。）、「行政手続における特定の個人を識別するための番号の利用等に関する法律」その他の関係法令、「個人情報の保護に関する法律についてのガイドライン」、「金融分野における個人情報保護に関するガイドライン」、「特定個人情報の適正な取扱いに関するガイドライン」その他のガイドライン等を遵守して、個人情報の保護に努めてまいります。
              </p>
              <div className="space-y-10">
                {privacyItems.map((item) => (
                  <div key={item.number} className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                    <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                      <span className="text-[#84CBC8] font-display font-bold mr-2">{item.number}.</span>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
