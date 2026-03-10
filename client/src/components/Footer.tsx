/*
 * Design: Kinetic Minimalism — Footer
 * Dark background, minimal layout
 */
const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663308776489/JmgmcwMJDrZlHOzM.png";

const footerLinks = [
  { label: "サービス", href: "#service" },
  { label: "会社概要", href: "#company" },
  { label: "お知らせ", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] pt-16 pb-10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="Unicara"
              className="h-8 w-auto"
            />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 text-xs tracking-wide font-display hover:text-[#84CBC8] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Compliance Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="/fiduciary-duty"
              className="text-white/50 text-xs font-display tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              お客さま本位の業務運営方針
            </a>
            <a
              href="/kpi"
              className="text-white/50 text-xs font-display tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              KPI評価指標
            </a>
            <a
              href="/insurance-companies"
              className="text-white/50 text-xs font-display tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              取扱保険会社一覧
            </a>
            <a
              href="/solicitation-policy"
              className="text-white/50 text-xs font-display tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              勧誘方針
            </a>
            <a
              href="/privacy-policy"
              className="text-white/50 text-xs font-display tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-white/50 text-xs font-display tracking-wide hover:text-white/80 transition-colors duration-300"
            >
              特定商取引法に基づく表記
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-white/40 text-xs font-display tracking-wide">
            &copy; {new Date().getFullYear()} Unicara Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
