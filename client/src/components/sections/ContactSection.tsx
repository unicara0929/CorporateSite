/*
 * Design: Kinetic Minimalism — Contact / CTA Section
 * Dark-to-teal gradient background, prominent CTA
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { toast } from "sonner";

const CTA_BG = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-5_1771641576000_na1fn_Y3RhLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTVfMTc3MTY0MTU3NjAwMF9uYTFmbl9ZM1JoTFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UImmuBky2coecLIVDkmQbwJgFOnD8RbRcxq8~HRK1ElquU0h6Teemi8reL-PURROch5MkPEmkgWf-eRGlagIoLcNefw60Php7z15E49fKO9w0fCWVWXVXo8QJpdMc9yVN48kRXe3Azw6Kb0rYyXqMdLwCzNp~D5AFu5o8L6dc9S~kxFAlrD6CXblZXGirYtgqWdyYdIJ96ZQFjX9eFF8~ZiQgxKramp6UXW7XDOjvmdWmRu3WqYwPg6A2E7oc40zcxrww4KuJZFGkxd2QZFwztecSdkAPFhg1feperybN7-p9~tkasD1fpqWRgfmJIT5Ir6S4ecgoZIk8BQMPzGcWA__";

export default function ContactSection() {
  return (
    <section id="contact" className="relative">
      {/* CTA Area */}
      <div className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CTA_BG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A2E]/50" />
        </div>

        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-6">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              お問い合わせ
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-body mb-12">
              サービスに関するご質問・ご相談など、
              お気軽にお問い合わせください。
            </p>
            <Button
              size="lg"
              className="bg-[#84CBC8] hover:bg-[#6BB8B5] text-white font-display font-semibold tracking-wide px-10 py-6 text-base rounded-none transition-all duration-300 hover:shadow-[0_8px_30px_rgba(132,203,200,0.3)]"
              onClick={() => toast("お問い合わせ機能は近日公開予定です")}
            >
              お問い合わせはこちら
            </Button>
          </AnimatedSection>
        </div>
      </div>

      {/* Contact Info — Address Only */}
      <div className="py-16 bg-[#1A1A2E]">
        <div className="container">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-4">
              <MapPin className="text-[#84CBC8] flex-shrink-0" size={18} strokeWidth={1.5} />
              <div className="flex items-center gap-3">
                <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-display">Address</p>
                <span className="text-white/20">|</span>
                <p className="text-white/70 text-sm font-body">
                  愛知県名古屋市中区栄四丁目12番26号 栄CDビル6F
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
