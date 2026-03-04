/*
 * Design: Kinetic Minimalism — Footer
 * Dark background, minimal layout
 */
const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663308776489/JmgmcwMJDrZlHOzM.png";

const footerLinks = [
  { label: "サービス", href: "/#service" },
  { label: "会社概要", href: "/#company" },
  { label: "お知らせ", href: "/#news" },
  { label: "お問い合わせ", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E2A3A] py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="Unicara"
              className="h-6 w-auto opacity-80"
            />
          </a>

          {/* Tagline */}
          <p className="text-white/30 text-xs font-display tracking-[0.15em] hidden md:block">
            正しさを創り、生き方を誇れる文化を
          </p>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/40 text-xs tracking-wide font-display hover:text-[#84CBC8] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-white/20 text-xs font-display tracking-wide">
            &copy; {new Date().getFullYear()} Unicara Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <a
              href="/fiduciary-duty"
              className="text-white/20 text-xs font-display tracking-wide hover:text-white/40 transition-colors duration-300"
            >
              お客さま本位の業務運営方針
            </a>
            <a
              href="/kpi"
              className="text-white/20 text-xs font-display tracking-wide hover:text-white/40 transition-colors duration-300"
            >
              KPI評価指標
            </a>
            <a
              href="/insurance-companies"
              className="text-white/20 text-xs font-display tracking-wide hover:text-white/40 transition-colors duration-300"
            >
              取扱保険会社一覧
            </a>
            <a
              href="/solicitation-policy"
              className="text-white/20 text-xs font-display tracking-wide hover:text-white/40 transition-colors duration-300"
            >
              勧誘方針
            </a>
            <a
              href="/privacy-policy"
              className="text-white/20 text-xs font-display tracking-wide hover:text-white/40 transition-colors duration-300"
            >
              プライバシーポリシー
            </a>
            <span
              className="text-white/10 text-xs font-display tracking-wide cursor-default"
              title="準備中"
            >
              特定商取引法に基づく表記
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
