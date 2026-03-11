/*
 * 下層ページ: お問い合わせフォーム
 * Design: Kinetic Minimalism
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("必須項目を入力してください");
      return;
    }

    setIsSubmitting(true);
    try {
      // メール送信（Formspree等の外部サービスに差し替え可能）
      const response = await fetch("https://formspree.io/f/inc@unicara.jp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        toast.error("送信に失敗しました。時間をおいて再度お試しください。");
      }
    } catch {
      toast.error("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#2A2A3E]">
          <div className="container">
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              Contact
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              お問い合わせ
            </h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container max-w-3xl">
            {isSubmitted ? (
              <AnimatedSection>
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-[#84CBC8]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg
                      className="w-10 h-10 text-[#84CBC8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A2E] mb-4">
                    送信が完了しました
                  </h2>
                  <p className="text-[#1A1A2E]/70 text-base md:text-lg leading-relaxed font-body mb-8">
                    お問い合わせいただきありがとうございます。
                    <br />
                    内容を確認の上、担当者よりご連絡いたします。
                  </p>
                  <a
                    href="/"
                    className="inline-block text-[#84CBC8] font-display font-medium hover:text-[#6BB8B5] transition-colors duration-300"
                  >
                    ← トップページに戻る
                  </a>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection>
                <div className="mb-12">
                  <p className="text-[#1A1A2E]/70 text-base md:text-lg leading-relaxed font-body">
                    サービスに関するご質問・ご相談など、お気軽にお問い合わせください。
                    <br />
                    以下のフォームに必要事項をご記入の上、送信してください。
                  </p>
                  <p className="text-[#1A1A2E]/50 text-sm font-body mt-4">
                    <span className="text-red-500">*</span> は必須項目です
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* お名前 */}
                  <div>
                    <label className="block text-sm font-display font-medium text-[#1A1A2E] mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      required
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#1A1A2E] font-body text-base focus:outline-none focus:border-[#84CBC8] transition-colors duration-300"
                    />
                  </div>

                  {/* 会社名 */}
                  <div>
                    <label className="block text-sm font-display font-medium text-[#1A1A2E] mb-2">
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="株式会社○○"
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#1A1A2E] font-body text-base focus:outline-none focus:border-[#84CBC8] transition-colors duration-300"
                    />
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="block text-sm font-display font-medium text-[#1A1A2E] mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#1A1A2E] font-body text-base focus:outline-none focus:border-[#84CBC8] transition-colors duration-300"
                    />
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <label className="block text-sm font-display font-medium text-[#1A1A2E] mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="090-1234-5678"
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#1A1A2E] font-body text-base focus:outline-none focus:border-[#84CBC8] transition-colors duration-300"
                    />
                  </div>

                  {/* お問い合わせ内容 */}
                  <div>
                    <label className="block text-sm font-display font-medium text-[#1A1A2E] mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="お問い合わせ内容をご記入ください"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 bg-white text-[#1A1A2E] font-body text-base focus:outline-none focus:border-[#84CBC8] transition-colors duration-300 resize-vertical"
                    />
                  </div>

                  {/* 同意チェック */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 accent-[#84CBC8]"
                    />
                    <label htmlFor="privacy" className="text-sm text-[#1A1A2E]/70 font-body">
                      <a
                        href="/privacy-policy"
                        className="text-[#84CBC8] hover:text-[#6BB8B5] transition-colors duration-300 underline"
                      >
                        プライバシーポリシー
                      </a>
                      に同意の上、送信してください。
                    </label>
                  </div>

                  {/* 送信ボタン */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#84CBC8] hover:bg-[#6BB8B5] text-white font-display font-semibold tracking-wide px-10 py-6 text-base rounded-none transition-all duration-300 hover:shadow-[0_8px_30px_rgba(132,203,200,0.3)] disabled:opacity-50"
                    >
                      {isSubmitting ? "送信中..." : "送信する"}
                    </Button>
                  </div>
                </form>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
