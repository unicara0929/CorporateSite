/*
 * Design: Kinetic Minimalism — Philosophy Section
 * MVV (Mission, Vision, Value) display
 * Clean white background, bold typography, teal accents
 */
import AnimatedSection from "@/components/AnimatedSection";

const ABOUT_VISUAL = "https://private-us-east-1.manuscdn.com/sessionFile/9ODQpPT3t16XPjQPVmOL9c/sandbox/NXvLe0JDzNCNIDLm6adW74-img-2_1771641573000_na1fn_YWJvdXQtdmlzdWFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvOU9EUXBQVDN0MTZYUGpRUFZtT0w5Yy9zYW5kYm94L05YdkxlMEpEek5DTklETG02YWRXNzQtaW1nLTJfMTc3MTY0MTU3MzAwMF9uYTFmbl9ZV0p2ZFhRdGRtbHpkV0ZzLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UBIevOhrZ1Wtd77S0iWRTEBfndfWheeUSndhTx1BKq4tGRzcWujzdi6tCBspjxOK4VuBsV2IGbXMSnKKe~k133u~42f3FLxQmHZhJ78ShWjuc8~b3MwjtbNGYKlQjtjtELE1h2kdPzS6U~idgc0cJAm3qflpBy9Von46Gqty5PCT1OLF~ke6~SzHcUGjjHVoC9HfogvFjqCBXOEO1pG-zDwpgwJbe7GGS~Zwo~-igXbIfW9X7xCD0Rvg~maixkdV3I8RalmrEY4udEai9kuLaN3uHFMqTxOuKDIF8bdoFgUZL9eg-8sZhOQj1Vj3WgFyAtlQsR6yi52RzA8lOZUuhw__";

const mvvItems = [
  {
    tag: "Mission",
    title: "最高の選択を、大切なひとに",
    description:
      "「後悔のない選択」や「満足のいく選択」を超えて、その人の心が動き、人生に意味をもたらす「感動のある選択」。大切なひとは目の前のお客様自身だけでなく、その人が大切に思う家族・パートナー・仲間も含む。目の前の人を大切にするからこそ、未来の社会まで見える。",
  },
  {
    tag: "Vision",
    title: "正しさを創り、生き方を誇れる文化を",
    description:
      "正しさとは、「正解＋あなたらしさ」。合理性や数字だけで測るような客観的な正解ではなく、その人の価値観・想い・状況に応じた「最高の選択」を一緒に創る。「いまこの瞬間に、自分の生き方を誇れるか」が大事。お互いを認め合い、リスペクトし合い、人を大切にしながら生きること。",
  },
  {
    tag: "Value",
    title: "本質へ向かう\n胸を張れる生き方を\n最後までやり通す",
    description:
      "表面的な解決ではなく、本質的な課題に向き合う。自分自身が胸を張れる生き方を選び続ける。そして、一度決めたことは最後までやり通す。この3つのバリューが、Unicaraの全ての行動の基盤です。",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 md:py-40 bg-white relative overflow-hidden">
      {/* Section Header */}
      <div className="container mb-20 md:mb-28">
        <AnimatedSection>
          <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-[#1A1A2E] leading-tight">
            私たちの想い
          </h2>
        </AnimatedSection>
      </div>

      {/* Statement intro */}
      <div className="container mb-24 md:mb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <img
              src={ABOUT_VISUAL}
              alt="Unicaraの想い"
              className="w-full rounded-sm"
            />
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body">
              現代は、「やりたいことをやろう」と言われながら、多くの人がやりたいことを描けないまま時間が経過していく社会になっている。
            </p>
            <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body mt-6">
              その結果、本来は誰もが持っているはずの「自分で選び、自分で決め、自分の人生をつくる力」が弱ってしまっている。
            </p>
            <p className="text-[#1A1A2E] text-base md:text-lg leading-[2] font-body mt-6 font-medium">
              Unicaraは、この構造的課題に対して最も本質的な領域——"判断力と行動力"を社会に取り戻す会社である。
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* MVV Cards */}
      <div className="container">
        <div className="space-y-20 md:space-y-32">
          {mvvItems.map((item, index) => (
            <AnimatedSection key={item.tag} delay={index * 0.1}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Tag */}
                <div className="lg:col-span-3">
                  <span className="text-[#84CBC8] text-xs tracking-[0.3em] uppercase font-display font-semibold">
                    {item.tag}
                  </span>
                  <div className="w-12 h-[2px] bg-[#84CBC8] mt-3" />
                </div>
                {/* Content */}
                <div className="lg:col-span-9">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[#1A1A2E] leading-snug whitespace-pre-line mb-6">
                    {item.title}
                  </h3>
                  <p className="text-[#1A1A2E]/70 text-base md:text-lg leading-[2] font-body max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
