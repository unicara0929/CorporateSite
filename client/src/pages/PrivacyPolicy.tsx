/*
 * 下層ページ: プライバシーポリシー
 */
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#2A2A3E]">
          <div className="container">
            <p className="text-[#84CBC8] text-sm tracking-[0.3em] uppercase font-display font-medium mb-4">
              Privacy Policy
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              プライバシーポリシー
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container max-w-4xl">
            {/* Intro */}
            <div className="mb-16">
              <h2 className="text-xl md:text-2xl font-display font-bold text-[#1A1A2E] mb-6">
                個人情報の取り扱いについて
              </h2>
              <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body">
                Unicara株式会社（以下、「当社」といいます。）は、当社が提供するサービス（以下、「本サービス」といいます。）における、お客様（以下、「ユーザー」といいます。）の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </p>
              <p className="text-[#1A1A2E]/80 text-base md:text-lg leading-[2] font-body mt-4">
                ユーザーの個人情報は、当社、もしくは当社との厳正な契約に基づいて当社より提供された会社が、当社に代わって、皆様の個人情報の重要性を認識し、その適正な収集、利用、保護をはかるとともに、安全管理を行うため、本ポリシーを定め、次のとおり運用します。
              </p>
            </div>

            {/* 第1条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第1条（個人情報の定義）
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先、その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                </p>
              </div>
            </div>

            {/* 第2条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第2条（個人情報の安全管理）
                </h3>
                <ul className="space-y-4 text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  <li>
                    当社は、個人情報の漏洩、滅失、破棄毀損等の防止のために、法令、ガイドラインに従い、適切な安全管理策を施し、保有する個人情報の保護に努めます。また、従業員に対しても個人情報の適切な取扱い等についての教育を行い、その保護に万全を期するよう努めます。
                  </li>
                  <li>
                    当社は、利用目的の達成のために必要な範囲内で、個人情報の取扱いの全部又は一部を第三者に提供する場合があります。この場合、提供先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
                  </li>
                </ul>
              </div>
            </div>

            {/* 第3条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第3条（個人情報の収集方法）
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、「提携先」といいます。）などから収集することがあります。
                </p>
              </div>
            </div>

            {/* 第4条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第4条（個人情報を収集・利用する目的）
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body mb-4">
                  当社が個人情報を収集・利用する目的は、以下のとおりです。なお、当社による個人情報の利用は、当社の各事業分野においてユーザーに提供するサービスにおける利用の他、当該各サービス間で相互に利用することを含みます。
                </p>
                <ul className="space-y-2 text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>本サービスの提供・運営のため</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>上記の利用目的に付随する目的</li>
                </ul>
              </div>
            </div>

            {/* 第5条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第5条（利用目的の変更）
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的を変更した場合は、変更後の利用目的についてユーザー本人に通知あるいは当社ホームページ等にて公表いたします。
                </p>
              </div>
            </div>

            {/* 第6条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第6条（個人情報の第三者提供）
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body mb-4">
                  当社は、以下に記載する場合を除いて、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                </p>
                <ul className="space-y-3 text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>あらかじめユーザーの同意をいただいている場合</li>
                  <li className="flex gap-2">
                    <span className="text-[#84CBC8] flex-shrink-0">・</span>
                    <span>個人情報の取り扱い業務の全部または一部を委託する場合（この場合、当社は、当該情報を適正に取り扱うと認められるものを選定し、委託契約において、安全管理措置、秘密保持、再委託の条件、委託契約終了時の個人情報の返却等その他の個人情報の取り扱いに関する事項について適正に定め、必要かつ適切な監督を実施します。）</span>
                  </li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>国の機関もしくは地方公共団体またはその提供を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>裁判所、検察庁、警察又はこれらに準じた権限を有する機関から、個人情報について開示を求められた場合</li>
                  <li className="flex gap-2">
                    <span className="text-[#84CBC8] flex-shrink-0">・</span>
                    <div>
                      <p>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</p>
                      <ul className="mt-2 ml-4 space-y-1">
                        <li className="flex gap-2"><span className="text-[#84CBC8]/50 flex-shrink-0">-</span>利用目的に第三者への提供を含むこと</li>
                        <li className="flex gap-2"><span className="text-[#84CBC8]/50 flex-shrink-0">-</span>第三者に提供されるデータの項目</li>
                        <li className="flex gap-2"><span className="text-[#84CBC8]/50 flex-shrink-0">-</span>第三者への提供の手段または方法</li>
                        <li className="flex gap-2"><span className="text-[#84CBC8]/50 flex-shrink-0">-</span>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                        <li className="flex gap-2"><span className="text-[#84CBC8]/50 flex-shrink-0">-</span>本人の求めを受け付ける方法</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body mt-4">
                  前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
                </p>
                <ul className="mt-2 space-y-3 text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を提供する場合</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                  <li className="flex gap-2"><span className="text-[#84CBC8] flex-shrink-0">・</span>個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合</li>
                </ul>
              </div>
            </div>

            {/* 第7条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第7条（安全管理措置）
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body mb-4">
                  当社は、個人情報へのアクセスの管理、個人情報の持出し手段の制限、外部からの不正なアクセスの防止のための措置その他の個人情報の漏えい、滅失またはき損の防止その他の個人情報・個人データの安全管理のために必要かつ適切な措置（以下、「安全管理措置」といいます。）を講じます。
                </p>

                {/* 技術的・物理的安全管理措置 */}
                <div className="bg-[#FAFAFA] p-6 mb-4">
                  <h4 className="text-base font-display font-semibold text-[#1A1A2E] mb-3">
                    技術的・物理的安全管理措置
                  </h4>
                  <ul className="space-y-2 text-[#1A1A2E]/70 text-sm leading-[2] font-body">
                    <li>個人情報へのアクセスの管理（アクセス権限者の限定（異動・退職した社員のアカウントを直ちに無効にする等の措置を含みます。）、アクセス状況の監視体制（アクセスログの長期保存等）、パスワードの定期的変更、ログイン管理等）を実施します。</li>
                    <li>個人情報の持出し手段の制限（みだりに外部記録媒体へ記録することの禁止、社内と社外との間の電子メールの監視を社内規則等に規定した上で行うこと等）を実施します。</li>
                  </ul>
                </div>

                {/* 組織的安全管理措置 */}
                <div className="bg-[#FAFAFA] p-6 mb-4">
                  <h4 className="text-base font-display font-semibold text-[#1A1A2E] mb-3">
                    組織的安全管理措置
                  </h4>
                  <ul className="space-y-2 text-[#1A1A2E]/70 text-sm leading-[2] font-body">
                    <li>個人情報管理の責任者として、「情報セキュリティ責任者」を任命するとともに、個人情報の安全管理に関する従業者の責任と権限を明確に規定します。</li>
                    <li>従業者（派遣社員を含みます。）を監督するとともに、法や取扱規程に違反している事実またはかかる違反の兆候を把握した場合の責任者への報告連絡体制を整備します。また、取扱規程に違反をした場合は、社内規程に基づき懲戒処分を含め厳正に対応を行います。</li>
                    <li>安全管理に関する内部規程・マニュアルを定め、それらを従業者に遵守させるとともに、その遵守の状況についての適切な監査を実施します。</li>
                  </ul>
                </div>

                {/* 人的安全管理措置 */}
                <div className="bg-[#FAFAFA] p-6">
                  <h4 className="text-base font-display font-semibold text-[#1A1A2E] mb-3">
                    人的安全管理措置
                  </h4>
                  <p className="text-[#1A1A2E]/70 text-sm leading-[2] font-body">
                    従業者に対して個人情報の安全管理に関する定期的な教育研修を実施します。
                  </p>
                </div>
              </div>
            </div>

            {/* 第8条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第8条（プライバシーポリシーの変更）
                </h3>
                <ul className="space-y-4 text-[#1A1A2E]/70 text-base leading-[2] font-body">
                  <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
                  <li>当社が別途定める場合を除いて、変更後の本ポリシーは、ユーザー本人に通知あるいは当社ホームページ等にて公表したときから効力を生じるものとします。</li>
                </ul>
              </div>
            </div>

            {/* 第9条 */}
            <div className="mb-12">
              <div className="border-l-2 border-[#84CBC8]/30 pl-6 md:pl-8">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#1A1A2E] mb-4">
                  第9条（お問い合わせ）
                </h3>
                <p className="text-[#1A1A2E]/70 text-base leading-[2] font-body mb-6">
                  本ポリシーに関するお問い合わせは、下記までお願いいたします。
                </p>
                <div className="bg-[#FAFAFA] p-6">
                  <dl className="space-y-3 text-[#1A1A2E]/70 text-base font-body">
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-display font-medium text-[#1A1A2E]/50 text-sm w-32 flex-shrink-0">住所</dt>
                      <dd>愛知県名古屋市中区栄4丁目12-26 栄CDビル6F</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-display font-medium text-[#1A1A2E]/50 text-sm w-32 flex-shrink-0">社名</dt>
                      <dd>Unicara株式会社</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-display font-medium text-[#1A1A2E]/50 text-sm w-32 flex-shrink-0">Eメールアドレス</dt>
                      <dd>inc@unicara.jp</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* 署名 */}
            <div className="border-t border-gray-100 pt-12 text-right">
              <p className="text-[#1A1A2E]/70 text-base font-body">
                Unicara株式会社 代表取締役 竹田晴哉
              </p>
              <p className="text-[#1A1A2E]/50 text-sm font-body mt-2">
                2025年9月29日 制定
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
