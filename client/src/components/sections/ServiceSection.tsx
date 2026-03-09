/*
 * Design: Kinetic Minimalism — Service Section
 * ライフプランニングサービスの紹介 + Unicaraがサポートできる領域
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
  GraduationCap,
  Truck,
  Gem,
  PiggyBank,
  CircleDollarSign,
  Baby,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_VISUAL = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-3_1771641575000_na1fn_c2VydmljZS12aXN1YWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTNfMTc3MTY0MTU3NTAwMF9uYTFmbl9jMlZ5ZG1salpTMTJhWE4xWVd3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SyYPelaERWFnhJJkGKaHU~dUIo65QPIhLXczkK7cYxCwdGp6ELf1aUThCZd0NSBhT4xDiHJQLfYWpkzJaOR3e1wDPXxy9m1sE266U6Xioiwje2~njt3nXy6d9vjCb7nTyQGsdMREmKi60EuM30qlnc6GWnnqlqqQwT-Qnsxu9eYYjD8m4P7hH4YQ7fJjSJG8UQ9aOL3fKsRZmU7qzChwBxhHTLs7HCCpjc4aOpnwMeLG0QKF0F71iZzikLijsC8BO~Kinye8MKbthtrCa4WiwJLNGgnaLDQvlsO2Z5TW7G0CxNguOuc9CdN94uQwipo~l9FXA6STGdh-UZNf0Lb7Vg__";

/* ─── Service data by group ─── */

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  id: string;
}

interface ServiceGroup {
  label: string;
  items: ServiceItem[];
}

const serviceGroups: ServiceGroup[] = [
  {
    label: "保険",
    items: [
      { icon: Heart, title: "生命保険", id: "life-insurance" },
      { icon: Shield, title: "損害保険", id: "non-life-insurance" },
    ],
  },
  {
    label: "不動産",
    items: [
      { icon: TrendingUp, title: "投資用不動産", id: "investment-property" },
      { icon: Home, title: "住宅（土地含む）", id: "housing" },
      { icon: Key, title: "賃貸", id: "rental" },
    ],
  },
  {
    label: "ライフライン",
    items: [
      { icon: Sun, title: "太陽光・蓄電池", id: "solar" },
      { icon: Wifi, title: "通信回線", id: "telecom" },
      { icon: Zap, title: "電気・ガス", id: "utility" },
      { icon: Droplets, title: "ウォーターサーバー", id: "water" },
    ],
  },
  {
    label: "キャリア・ビジネス支援",
    items: [
      { icon: Briefcase, title: "転職支援", id: "career" },
      { icon: Users, title: "副業支援・ビジネスコミュニティ運営", id: "sidebiz" },
    ],
  },
];

/* ─── Life‑event → service mapping ─── */

interface LifeEvent {
  icon: React.ElementType;
  label: string;
  serviceIds: string[];
}

const lifeEvents: LifeEvent[] = [
  {
    icon: GraduationCap,
    label: "就職・転職",
    serviceIds: ["career", "sidebiz", "life-insurance"],
  },
  {
    icon: Truck,
    label: "一人暮らし・引っ越し",
    serviceIds: ["rental", "utility", "telecom", "water"],
  },
  {
    icon: Gem,
    label: "結婚・パートナーとの生活",
    serviceIds: ["life-insurance", "non-life-insurance", "rental", "housing"],
  },
  {
    icon: Building2,
    label: "住宅購入",
    serviceIds: [
      "housing",
      "solar",
      "life-insurance",
      "non-life-insurance",
      "utility",
      "telecom",
    ],
  },
  {
    icon: Baby,
    label: "子育て・教育",
    serviceIds: ["life-insurance", "non-life-insurance"],
  },
  {
    icon: PiggyBank,
    label: "資産形成・老後備え",
    serviceIds: ["investment-property", "life-insurance"],
  },
  {
    icon: CircleDollarSign,
    label: "収入を増やしたい",
    serviceIds: ["career", "sidebiz", "investment-property"],
  },
];

/* Build a flat id→title map for quick lookup */
const serviceMap = new Map<string, ServiceItem>();
serviceGroups.forEach((g) => g.items.forEach((s) => serviceMap.set(s.id, s)));

/* ─── Components ─── */

function ServiceCard({
  icon: Icon,
  title,
  highlighted,
}: {
  icon: React.ElementType;
  title: string;
  highlighted: boolean;
}) {
  return (
    <div
      className={`group relative p-5 md:p-6 border bg-white transition-all duration-500 h-full ${
        highlighted
          ? "border-[#84CBC8] shadow-[0_8px_40px_rgba(132,203,200,0.15)] scale-[1.03]"
          : "border-gray-100 hover:border-[#84CBC8]/30 hover:shadow-[0_8px_40px_rgba(132,203,200,0.08)]"
      }`}
    >
      <Icon
        className={`mb-3 transition-transform duration-500 group-hover:scale-110 ${
          highlighted ? "text-[#84CBC8]" : "text-[#84CBC8]/70"
        }`}
        size={24}
        strokeWidth={1.5}
      />
      <h4 className="text-sm md:text-base font-display font-bold text-[#1A1A2E]/90 leading-snug">
        {title}
      </h4>
    </div>
  );
}

function LifeEventSelector({
  activeId,
  onSelect,
}: {
  activeId: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5 md:gap-3">
      {lifeEvents.map((evt) => {
        const isActive = activeId === evt.label;
        return (
          <button
            key={evt.label}
            onClick={() => onSelect(isActive ? null : evt.label)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-body transition-all duration-300 border ${
              isActive
                ? "bg-[#84CBC8] text-white border-[#84CBC8] shadow-md"
                : "bg-white text-[#1A1A2E]/70 border-gray-200 hover:border-[#84CBC8]/50 hover:text-[#1A1A2E]"
            }`}
          >
            <evt.icon size={16} strokeWidth={1.5} />
            {evt.label}
          </button>
        );
      })}
    </div>
  );
}

export default function ServiceSection() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const activeLifeEvent = lifeEvents.find((e) => e.label === activeEvent);
  const highlightedIds = new Set(activeLifeEvent?.serviceIds ?? []);

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
            Unicaraは、単なる金融商品の提案ではなく、あなたの価値観・想い・状況に寄り添った
            「最高の選択」を共に創るライフプランニングサービスを提供します。
            人生のあらゆるステージに対応する幅広い商品・サービスで、あなたの未来をサポートします。
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

        {/* ── Life Event Selector ── */}
        <AnimatedSection className="mb-16 md:mb-20">
          <p className="text-[#84CBC8] text-xs tracking-[0.3em] uppercase font-display font-medium mb-3">
            Life Events
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A2E] mb-3">
            あなたのライフイベントから探す
          </h3>
          <p className="text-[#1A1A2E]/50 text-sm font-body mb-8">
            ライフイベントを選ぶと、Unicaraが対応できるサービスがハイライトされます。
          </p>
          <LifeEventSelector activeId={activeEvent} onSelect={setActiveEvent} />

          {/* Active event result message */}
          <AnimatePresence mode="wait">
            {activeLifeEvent && (
              <motion.div
                key={activeEvent}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 flex items-start gap-2 text-sm text-[#1A1A2E]/70 font-body"
              >
                <ChevronRight
                  size={16}
                  className="text-[#84CBC8] mt-0.5 flex-shrink-0"
                />
                <span>
                  <span className="font-bold text-[#1A1A2E]/90">
                    「{activeEvent}」
                  </span>
                  に関連するサービス：
                  {activeLifeEvent.serviceIds
                    .map((id) => serviceMap.get(id)?.title)
                    .filter(Boolean)
                    .join(" / ")}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>

        {/* ── Support Areas (grouped) ── */}
        <AnimatedSection>
          <p className="text-[#84CBC8] text-xs tracking-[0.3em] uppercase font-display font-medium mb-3">
            Support Areas
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A2E] mb-12">
            Unicaraがサポートできる領域
          </h3>
        </AnimatedSection>

        <div className="space-y-10">
          {serviceGroups.map((group, gi) => (
            <AnimatedSection key={group.label} delay={gi * 0.08}>
              {/* Group label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs tracking-[0.15em] uppercase font-display font-semibold text-[#84CBC8]">
                  {group.label}
                </span>
                <div className="flex-1 h-px bg-[#84CBC8]/15" />
              </div>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.items.map((service) => (
                  <motion.div
                    key={service.id}
                    layout
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      highlighted={highlightedIds.has(service.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

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
