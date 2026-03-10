/*
 * Design: Kinetic Minimalism — Contact / CTA Section
 * Dark-to-teal gradient background, prominent CTA + inline form
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const CTA_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-5_1771641576000_na1fn_Y3RhLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTVfMTc3MTY0MTU3NjAwMF9uYTFmbl9ZM1JoTFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UImmuBky2coecLIVDkmQbwJgFOnD8RbRcxq8~HRK1ElquU0h6Teemi8reL-PURROch5MkPEmkgWf-eRGlagIoLcNefw60Php7z15E49fKO9w0fCWVWXVXo8QJpdMc9yVN48kRXe3Azw6Kb0rYyXqMdLwCzNp~D5AFu5o8L6dc9S~kxFAlrD6CXblZXGirYtgqWdyYdIJ96ZQFjX9eFF8~ZiQgxKramp6UXW7XDOjvmdWmRu3WqYwPg6A2E7oc40zcxrww4KuJZFGkxd2QZFwztecSdkAPFhg1feperybN7-p9~tkasD1fpqWRgfmJIT5Ir6S4ecgoZIk8BQMPzGcWA__";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormData = { name: "", email: "", phone: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "お名前を入力してください";
    if (!form.email.trim()) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (!form.message.trim()) e.message = "お問い合わせ内容を入力してください";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await axios.post("/api/contact", form);
      setStatus("sent");
      setForm(initialForm);
      toast.success("お問い合わせを送信しました");
    } catch {
      setStatus("error");
      toast.error("送信に失敗しました。時間をおいて再度お試しください。");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const inputBase =
    "w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm font-body focus:outline-none focus:border-[#84CBC8] focus:bg-white/15 transition-all duration-300";

  return (
    <section id="contact" className="relative">
      <div className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={CTA_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1A1A2E]/75" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-6">
                Contact Us
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
                お問い合わせ
              </h2>
              <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-body">
                サービスに関するご質問・ご相談など、
                お気軽にお問い合わせください。
              </p>
            </AnimatedSection>

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="mx-auto mb-6 text-[#84CBC8]" size={56} strokeWidth={1.5} />
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    送信完了
                  </h3>
                  <p className="text-white/60 font-body mb-8">
                    お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
                  </p>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 rounded-none font-display"
                    onClick={() => setStatus("idle")}
                  >
                    新しいお問い合わせ
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-white/70 text-xs font-display tracking-wide mb-2">
                        お名前 <span className="text-[#84CBC8]">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="山田 太郎"
                        className={`${inputBase} ${errors.name ? "border-red-400" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white/70 text-xs font-display tracking-wide mb-2">
                        メールアドレス <span className="text-[#84CBC8]">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="example@email.com"
                        className={`${inputBase} ${errors.email ? "border-red-400" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white/70 text-xs font-display tracking-wide mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="090-1234-5678"
                      className={inputBase}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/70 text-xs font-display tracking-wide mb-2">
                      お問い合わせ内容 <span className="text-[#84CBC8]">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="ご質問・ご相談内容をお書きください"
                      rows={5}
                      className={`${inputBase} resize-none ${errors.message ? "border-red-400" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "sending"}
                      className="bg-[#84CBC8] hover:bg-[#6BB8B5] text-white font-display font-semibold tracking-wide px-10 py-6 text-base rounded-none transition-all duration-300 hover:shadow-[0_8px_30px_rgba(132,203,200,0.3)] disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={18} />
                          送信中...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          送信する
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
