/*
 * Design: Kinetic Minimalism — Service Section
 * ライフプランニングサービスの紹介 + Unicaraがサポートできる領域
 * Brand color: #84CBC8, Charcoal: #1A1A2E
 */
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

const SERVICE_VISUAL = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-3_1771641575000_na1fn_c2VydmljZS12aXN1YWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTNfMTc3MTY0MTU3NTAwMF9uYTFmbl9jMlZ5ZG1salpTMTJhWE4xWVd3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=SyYPelaERWFnhJJkGKaHU~dUIo65QPIhLXczkK7cYxCwdGp6ELf1aUThCZd0NSBhT4xDiHJQLfYWpkzJaOR3e1wDPXxy9m1sE266U6Xioiwje2~njt3nXy6d9vjCb7nTyQGsdMREmKi60EuM30qlnc6GWnnqlqqQwT-Qnsxu9eYYjD8m4P7hH4YQ7fJjSJG8UQ9aOL3fKsRZmU7qzChwBxhHTLs7HCCpjc4aOpnwMeLG0QKF0F71iZzikLijsC8BO~Kinye8MKbthtrCa4WiwJLNGgnaLDQvlsO2Z5TW7G0CxNguOuc9CdN94uQwipo~l9FXA6STGdh-UZNf0Lb7Vg__";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  children?: { icon: React.ElementType; title: string }[];
}

const services: ServiceItem[] = [
  {
    icon: Heart,
    title: "生命保険",
  },
  {
    icon: Shield,
    title: "損害保険",
  },
  {
    icon: Sun,
    title: "太陽光蓄電池",
  },
  {
    icon: Zap,
    title: "ライフライン",
    children: [
      { icon: Wifi, title: "通信回線" },
      { icon: Zap, title: "電気・ガス" },
      { icon: Droplets, title: "ウォーターサーバー" },
    ],
  },
  {
    icon: Building2,
    title: "不動産売買仲介",
    children: [
      { icon: TrendingUp, title: "投資用不動産" },
      { icon: Home, title: "住宅" },
      { icon: Key, title: "賃貸" },
    ],
  },
  {
    icon: Briefcase,
    title: "転職支援",
  },
  {
    icon: Users,
    title: "副業支援 / ビジネスコミュニティ運営",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  children,
  delay,
}: ServiceItem & { delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className="group relative p-6 md:p-7 border bg-white border-gray-100 hover:border-[#84CBC8]/30 hover:shadow-[0_8px_40px_rgba(132,203,200,0.08)] transition-all duration-500 h-full"
      >
        <Icon
          className="mb-4 transition-transform duration-500 group-hover:scale-110 text-[#84CBC8]/70"
          size={26}
          strokeWidth={1.5}
        />
        <h4 className="text-base font-display font-bold mb-1 text-[#1A1A2E]/90">
          {title}
        </h4>

        {/* Sub-items */}
        {children && children.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-2.5">
            {children.map((child) => (
              <div key={child.title} className="flex items-center gap-2.5">
                <div className="w-px h-3 bg-[#84CBC8]/30 ml-1" />
                <child.icon
                  className="text-[#84CBC8]/50 flex-shrink-0"
                  size={14}
                  strokeWidth={1.5}
                />
                <span className="text-[#1A1A2E]/60 text-sm font-body">
                  {child.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default function ServiceSection() {
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

        {/* Products & Services */}
        <AnimatedSection>
          <p className="text-[#84CBC8] text-xs tracking-[0.3em] uppercase font-display font-medium mb-3">
            Support Areas
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A2E] mb-12">
            Unicaraがサポートできる領域
          </h3>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.05}
            />
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
