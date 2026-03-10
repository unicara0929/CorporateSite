/*
 * Design: Kinetic Minimalism — Service Section
 * ライフプランニングサービスの紹介 + Unicaraがサポートできる領域
 * 4カテゴリのタブ切替UI + インフォグラフィック風アイコン
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Heart,
  Shield,
  Sun,
  Wifi,
  Zap,
  Droplets,
  Building2,
  TrendingUp,
  Home,
  Key,
  Briefcase,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_VISUAL = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-3_1771641575000_na1fn_c2VydmljZS12aXN1YWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTNfMTc3MTY0MTU3NTAwMF9uYTFmbl9jMlZ5ZG1salpTMTJhWE4xWVd3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SyYPelaERWFnhJJkGKaHU~dUIo65QPIhLXczkK7cYxCwdGp6ELf1aUThCZd0NSBhT4xDiHJQLfYWpkzJaOR3e1wDPXxy9m1sE266U6Xioiwje2~njt3nXy6d9vjCb7nTyQGsdMREmKi60EuM30qlnc6GWnnqlqqQwT-Qnsxu9eYYjD8m4P7hH4YQ7fJjSJG8UQ9aOL3fKsRZmU7qzChwBxhHTLs7HCCpjc4aOpnwMeLG0QKF0F71iZzikLijsC8BO~Kinye8MKbthtrCa4WiwJLNGgnaLDQvlsO2Z5TW7G0CxNguOuc9CdN94uQwipo~l9FXA6STGdh-UZNf0Lb7Vg__";

/* ─── Service data by group ─── */

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  id: string;
}

interface ServiceGroup {
  label: string;
  icon: React.ElementType;
  description: string;
  items: ServiceItem[];
}

const serviceGroups: ServiceGroup[] = [
  {
    label: "保険",
    icon: Shield,
    description: "ライフステージに合わせた最適な保障プランをご提案。万が一に備え、大切な人を守ります。",
    items: [
      { icon: Heart, title: "生命保険", description: "人生のリスクに備える生命保険のご提案", id: "life-insurance" },
      { icon: Shield, title: "損害保険", description: "住まい・クルマ・事業のリスクをカバー", id: "non-life-insurance" },
    ],
  },
  {
    label: "不動産",
    icon: Building2,
    description: "資産形成から住まい探しまで、不動産のあらゆるニーズにワンストップで対応します。",
    items: [
      { icon: TrendingUp, title: "投資用不動産", description: "長期的な資産形成をサポートする不動産投資", id: "investment-property" },
      { icon: Home, title: "住宅（土地含む）", description: "理想のマイホーム・土地探しをトータル支援", id: "housing" },
      { icon: Key, title: "賃貸", description: "ライフスタイルに合った賃貸物件のご紹介", id: "rental" },
    ],
  },
  {
    label: "ライフライン",
    icon: Zap,
    description: "毎月の固定費を最適化。暮らしのインフラをまるごと見直します。",
    items: [
      { icon: Sun, title: "太陽光・蓄電池", description: "再生可能エネルギーで家計と環境に貢献", id: "solar" },
      { icon: Wifi, title: "通信回線", description: "最適な通信プランで快適なネット環境を", id: "telecom" },
      { icon: Zap, title: "電気・ガス", description: "電力・ガスの乗り換えで光熱費を削減", id: "utility" },
      { icon: Droplets, title: "ウォーターサーバー", description: "安心・安全な水を暮らしの中に", id: "water" },
    ],
  },
  {
    label: "キャリア・ビジネス支援",
    icon: Briefcase,
    description: "キャリアアップや新たな収入源の確保など、ビジネス面での成長をバックアップします。",
    items: [
      { icon: Briefcase, title: "転職支援", description: "あなたの強みを活かしたキャリアチェンジを支援", id: "career" },
      { icon: Users, title: "副業支援・ビジネスコミュニティ運営", description: "新たな収入の柱を一緒に築く", id: "sidebiz" },
    ],
  },
];

/* ─── Components ─── */

function ServiceDetailCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative bg-white border border-gray-100 p-6 md:p-8 hover:border-[#84CBC8]/30 hover:shadow-[0_8px_40px_rgba(132,203,200,0.08)] transition-all duration-500">
      <div className="flex items-start gap-5">
        {/* Icon circle */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#84CBC8]/10 flex items-center justify-center group-hover:bg-[#84CBC8]/15 transition-colors duration-300">
          <Icon
            className="text-[#84CBC8] transition-transform duration-500 group-hover:scale-110"
            size={26}
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base md:text-lg font-display font-bold text-[#1A1A2E] mb-2">
            {title}
          </h4>
          <p className="text-[#1A1A2E]/50 text-sm font-body leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="service" className="py-32 md:py-40 bg-[#FAFAFA] relative">
      <div className="container">
        {/* Section Header */}
        <AnimatedSection>
          <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
            Our Service
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#1A1A2E] leading-tight mb-6">
            ライフプランニングサービス
          </h2>
          <p className="text-[#1A1A2E]/60 text-base md:text-lg max-w-3xl leading-relaxed font-body">
            Unicaraは、単なる金融商品の提案ではなく、あなたの価値観・想い・状況に寄り添った「最高の選択」を共に創るライフプランニングサービスを提供します。人生のあらゆるステージに対応する幅広い商品・サービスで、あなたの未来をサポートします。
          </p>
        </AnimatedSection>

        {/* Service Visual */}
        <AnimatedSection className="my-20 md:my-24">
          <img
            src={SERVICE_VISUAL}
            alt="ライフプランニングサービス"
            className="w-full max-w-4xl mx-auto rounded-sm"
          />
        </AnimatedSection>

        {/* ── Support Areas (Tab UI) ── */}
        <AnimatedSection>
          <p className="text-[#84CBC8] text-xs tracking-[0.3em] uppercase font-display font-medium mb-3">
            Support Areas
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A2E] mb-10 md:mb-14">
            Unicaraがサポートできる領域
          </h3>
        </AnimatedSection>

        {/* Tab Buttons — 4 categories */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
            {serviceGroups.map((group, index) => {
              const isActive = activeTab === index;
              const Icon = group.icon;
              return (
                <button
                  key={group.label}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex flex-col items-center gap-3 px-4 py-6 md:py-8 border-2 transition-all duration-400 ${
                    isActive
                      ? "bg-[#1A1A2E] border-[#1A1A2E] shadow-lg"
                      : "bg-white border-gray-200 hover:border-[#84CBC8]/40 hover:shadow-md"
                  }`}
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-[#84CBC8]" : "bg-[#84CBC8]/10"
                    }`}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className={isActive ? "text-white" : "text-[#84CBC8]"}
                    />
                  </div>
                  <span
                    className={`text-sm md:text-base font-display font-bold tracking-wide transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#1A1A2E]"
                    }`}
                  >
                    {group.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute -bottom-[2px] left-1/4 right-1/4 h-[3px] bg-[#84CBC8]"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Tab Content — animated panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category description */}
            <div className="mb-8 md:mb-10">
              <p className="text-[#1A1A2E]/70 text-base md:text-lg font-body leading-relaxed max-w-2xl">
                {serviceGroups[activeTab].description}
              </p>
            </div>

            {/* Service cards grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {serviceGroups[activeTab].items.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ServiceDetailCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer note */}
        <AnimatedSection>
          <p className="text-[#1A1A2E]/35 text-xs font-body mt-12 leading-relaxed">
            ※ 各サービスは、Unicaraまたは当社が厳選したパートナー企業を通じてご提供いたします。詳細はお問い合わせください。
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
