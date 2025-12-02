import "./landing.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supreme Legal AI｜台灣全能法務智能官 v3.0",
  description:
    "為律師、法務、政府機關打造的專業級 AI 法務工作站，支援行政訴訟、不動產與強制執行、稅務洗錢防制與法院書狀極致排版。",
};

export default function Home() {
  return (
    <div className="sl-page">
      <header className="sl-header">
        <div className="sl-container">
          <nav className="sl-nav">
            <div className="sl-logo-block">
              <div className="sl-logo-mark">
                <span>SL</span>
              </div>
              <div>
                <div className="sl-logo-text-main">SUPREME LEGAL AI</div>
                <div className="sl-logo-text-sub">台灣全能法務智能官｜v3.0</div>
              </div>
            </div>
            <div className="sl-nav-links">
              <a href="#modules">核心模組</a>
              <a href="#workflow">運作流程</a>
              <a href="#targets">適用對象</a>
              <a href="#faq">常見問題</a>
            </div>
            <div className="sl-nav-cta">
              <span className="sl-badge-beta">內測 Beta・限量名額</span>
              <a
                className="sl-btn sl-btn-outline"
                href="mailto:bd@supremelegal.ai?subject=%E7%AB%8B%E5%8D%B3%E7%B4%9A%E6%94%BF%E5%BA%9C%E6%8F%90%E6%A1%88%20PDF%20%E8%AB%8B%E6%B1%82&body=%E8%AB%8B%E7%B0%A1%E6%98%93%E6%8F%90%E4%BE%9B%E5%BA%8F%E5%8F%B7%E3%80%81%E6%A5%AD%E5%8B%99%E5%9E%8B%E6%85%8B%E3%80%81%E8%A8%93%E7%B7%B4%E6%99%82%E9%96%93%EF%BC%8C%E9%9A%A8%E6%99%82%E5%8F%8D%E9%A0%81%E8%80%83%E6%A0%B8%E7%94%A8%E7%9A%84%20PDF%20%E3%80%82"
                rel="noreferrer"
              >
                <span className="icon">⬇</span> 索取政府提案 PDF
              </a>
              <a
                className="sl-btn sl-btn-primary"
                href="mailto:bd@supremelegal.ai?subject=%E7%94%B3%E8%AB%8B%E5%B0%88%E5%B1%AC%E8%A9%A6%E7%94%A8&body=%E8%AB%8B%E5%91%8A%E8%A8%B4%E6%8C%89%E4%BB%A5%E4%B8%8B%E7%AF%84%E4%BE%8B%E6%93%9A%EF%BC%9A%E5%85%AC%E5%8F%B8%E5%90%8D%E7%A8%B1%E3%80%81%E5%AF%A6%E6%A9%9F%E6%A1%88%E4%BE%8B%E7%B3%BB%E5%88%97%E3%80%81%E9%A0%90%E8%A8%88%E5%AF%A6%E6%A9%9F%E5%BB%BA%E8%A8%AD%E6%99%82%E9%96%93%E3%80%82"
                rel="noreferrer"
              >
                <span className="icon">●</span> 申請專屬試用
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="sl-hero">
          <div className="sl-container">
            <div className="sl-hero-grid">
              <div>
                <div className="sl-hero-kicker">
                  <span className="sl-dot" />
                  <span>AI × 法律 × 合規</span>
                  <span>｜</span>
                  <strong>為專業實務而生的法務中樞</strong>
                </div>
                <h1 className="sl-hero-title">
                  SUPREME LEGAL AI
                  <br />
                  <span className="highlight">台灣全能法務智能官 v3.0</span>
                </h1>
                <p className="sl-hero-subtitle">
                  不只是聊天機器人，而是一套「可落地、可審計、可交付」的專業級法務工作站。
                  針對行政訴訟、不動產與強制執行、稅務洗錢防制、法院書狀排版等場景，提供可立即部署的 AI 解決方案。
                </p>
                <div className="sl-hero-cta-row">
                  <a className="sl-btn sl-btn-primary" href="#contact">
                    <span className="icon">★</span> 預約一對一 Demo
                  </a>
                  <a
                    className="sl-btn sl-btn-outline"
                    href="https://www.youtube.com/watch?v=RkfXn8oHPQE"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="icon">▶</span> 觀看 5 分鐘導覽
                  </a>
                </div>
                <div className="sl-hero-meta">
                  <div className="sl-hero-meta-item">
                    <strong>4 大特化模組</strong>
                    行政訴訟・不動產與強制執行・稅務 AML・法院書狀引擎
                  </div>
                  <div className="sl-hero-meta-item">
                    <strong>適用對象</strong>
                    律師事務所、企業法務部、政府機關、金融機構
                  </div>
                  <div className="sl-hero-meta-item">
                    <strong>部署型態</strong>
                    雲端 SaaS｜私有雲｜機關內網（可客製）
                  </div>
                </div>
              </div>

              <div>
                <div className="sl-hero-panel">
                  <div className="sl-hero-panel-header">
                    <div className="sl-hero-panel-dots">
                      <span className="sl-hero-panel-dot" />
                      <span className="sl-hero-panel-dot" />
                      <span className="sl-hero-panel-dot" />
                    </div>
                    <span className="sl-hero-panel-tag">Case Studio：行政訴訟・不動產併行</span>
                  </div>
                  <div className="sl-hero-panel-body">
                    <div className="sl-hero-panel-main">
                      <div className="sl-hero-panel-main-title">
                        行政撤銷訴訟 ＋ 不動產強制執行｜AI 流程總覽
                      </div>
                      <div className="sl-hero-panel-main-sub">
                        由 AI 依卷證自動生成：權利關係圖、訴訟時序表與書狀草案，並標註風險點供人工最後審閱。
                      </div>
                      <div className="sl-timeline-row">
                        <span>案件時序完成度</span>
                        <span>72%｜剩餘：卷證標號確認</span>
                      </div>
                      <div className="sl-timeline-bar">
                        <div className="sl-timeline-bar-fill" />
                      </div>
                      <div className="sl-hero-panel-pills">
                        <span className="sl-hero-panel-pill">✅ 卷證 OCR ＋ 條列化完成</span>
                        <span className="sl-hero-panel-pill">✅ 適用法條初步比對</span>
                        <span className="sl-hero-panel-pill">⚠ 待人工確認：既判力範圍</span>
                        <span className="sl-hero-panel-pill">⚠ 待補：行政救濟先行程序</span>
                      </div>
                    </div>
                    <div className="sl-hero-panel-side">
                      <div className="sl-side-card">
                        <div className="sl-side-card-title">風險偵測摘要</div>
                        <ul className="sl-side-card-list">
                          <li>
                            <span className="label">既判力衝突</span>
                            <span className="value">中度</span>
                          </li>
                          <li>
                            <span className="label">期間已過風險</span>
                            <span className="value">低</span>
                          </li>
                          <li>
                            <span className="label">卷證缺漏</span>
                            <span className="value">2 項</span>
                          </li>
                        </ul>
                      </div>
                      <div className="sl-side-card">
                        <div className="sl-side-card-title">一鍵產出</div>
                        <ul className="sl-side-card-list">
                          <li>
                            <span className="label">行政訴訟狀草案</span>
                            <span className="value">v1.3</span>
                          </li>
                          <li>
                            <span className="label">強制執行聲請書</span>
                            <span className="value">v1.1</span>
                          </li>
                          <li>
                            <span className="label">卷宗索引表</span>
                            <span className="value">PDF</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modules">
          <div className="sl-container">
            <div className="sl-section-header">
              <div>
                <div className="sl-section-title">FOUR SPECIALIZED MODULES｜四大特化模組</div>
                <div className="sl-section-sub">
                  不是一套「萬能聊天機器人」，而是為台灣實務環境打造的四個實戰模組。
                  每一個模組都對應明確場景、完整流程與可交付成果。
                </div>
              </div>
            </div>
            <div className="sl-modules-grid">
              <div className="sl-module-card">
                <div className="sl-module-tag">MODULE A</div>
                <div className="sl-module-name">行政訴訟・救濟專業版</div>
                <div className="sl-module-desc">
                  協助整理事證、生成撤銷訴訟狀、附卷索引、程序整理表，並標示期間與管轄風險。
                </div>
                <div className="sl-module-badges">
                  <span className="sl-module-badge">行政處分撤銷／課稅爭訟</span>
                  <span className="sl-module-badge">期間計算提醒</span>
                  <span className="sl-module-badge">卷證一覽表</span>
                </div>
              </div>
              <div className="sl-module-card">
                <div className="sl-module-tag">MODULE B</div>
                <div className="sl-module-name">不動產 × 強制執行特化</div>
                <div className="sl-module-desc">
                  自動讀取地政資料與法院裁定，協助規劃法拍策略、塗銷抵押權流程與分次拍賣模擬。
                </div>
                <div className="sl-module-badges">
                  <span className="sl-module-badge">法拍價情境模擬</span>
                  <span className="sl-module-badge">抵押與順位分析</span>
                  <span className="sl-module-badge">分割／共有處理建議</span>
                </div>
              </div>
              <div className="sl-module-card">
                <div className="sl-module-tag">MODULE C</div>
                <div className="sl-module-name">稅務風險 × 洗錢防制</div>
                <div className="sl-module-desc">
                  聚焦「檢舉＋稽徵＋ AML」情境，整理交易鏈、比對發票與金流，產出檢舉報告草案。
                </div>
                <div className="sl-module-badges">
                  <span className="sl-module-badge">交易鏈視覺化</span>
                  <span className="sl-module-badge">虛增成本偵測</span>
                  <span className="sl-module-badge">檢舉書／報告草案</span>
                </div>
              </div>
              <div className="sl-module-card">
                <div className="sl-module-tag">MODULE D</div>
                <div className="sl-module-name">法院書狀極致排版引擎</div>
                <div className="sl-module-desc">
                  依台灣各級法院實務需求，自動生成「可直接列印」之 Word／PDF 模板與附件清單。
                </div>
                <div className="sl-module-badges">
                  <span className="sl-module-badge">A4 標楷體版型</span>
                  <span className="sl-module-badge">收文專用區預留</span>
                  <span className="sl-module-badge">附件標號與頁碼</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="workflow">
          <div className="sl-container">
            <div className="sl-section-header">
              <div>
                <div className="sl-section-title">WORKFLOW｜標準運作流程</div>
                <div className="sl-section-sub">
                  以「可審計、可追溯」為核心設計，每一步都保留原始資料與 AI 推論軌跡，
                  讓專業使用者可以放心採納、保留最終決定權。
                </div>
              </div>
            </div>
            <div className="sl-workflow-grid">
              <div className="sl-workflow-steps">
                <div className="sl-workflow-step">
                  <div className="sl-workflow-step-num">STEP 01</div>
                  <div className="sl-workflow-step-title">資料導入與清洗</div>
                  <div className="sl-workflow-step-desc">
                    上傳法院裁判、卷宗掃描、地政謄本、稅單與金流紀錄，系統自動 OCR、
                    去重與欄位結構化。
                  </div>
                </div>
                <div className="sl-workflow-step">
                  <div className="sl-workflow-step-num">STEP 02</div>
                  <div className="sl-workflow-step-title">AI 分析與風險標記</div>
                  <div className="sl-workflow-step-desc">
                    依案件類型套用專屬模組，產出權利關係圖、程序地圖與風險標記報告。
                  </div>
                </div>
                <div className="sl-workflow-step">
                  <div className="sl-workflow-step-num">STEP 03</div>
                  <div className="sl-workflow-step-title">書狀草案與決策輔助</div>
                  <div className="sl-workflow-step-desc">
                    生成草案後，由實務人員審閱、調整語句與策略，最後一鍵匯出 Word／PDF。
                  </div>
                </div>
              </div>
              <div className="sl-workflow-panel">
                <h4>部署與資安選項</h4>
                <ul>
                  <li>可採「雲端 SaaS」快速啟用，適合小型事務所與單位試行。</li>
                  <li>若涉高度機敏資料，可選擇「私有雲／機關內網」版本，由第三方資安稽核。</li>
                  <li>完整記錄 AI 輸入與輸出，支援稽核、內部教育訓練與品質回溯。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="targets">
          <div className="sl-container">
            <div className="sl-section-header">
              <div>
                <div className="sl-section-title">TARGET USERS｜適用對象</div>
                <div className="sl-section-sub">
                  Supreme Legal AI 並非面向一般大眾，而是鎖定必須對「程序、法條、責任」負最終責任的專業使用者。
                </div>
              </div>
            </div>
            <div className="sl-targets-grid">
              <div className="sl-target-card">
                <div className="sl-target-title">律師與律師事務所</div>
                <div>
                  協助整理大量卷證、行政救濟管道與不動產案件策略，將繁重整理工作交給 AI，
                  把時間留給策略判斷與與當事人溝通。
                </div>
              </div>
              <div className="sl-target-card">
                <div className="sl-target-title">企業法務與合規部門</div>
                <div>
                  面對多案並行與內外部審查，協助快速整理案件摘要、風險點與決策備忘錄，
                  並保留完備紀錄供內控稽核。
                </div>
              </div>
              <div className="sl-target-card">
                <div className="sl-target-title">中央與地方政府機關</div>
                <div>
                  包含地政、稅捐、法制單位，可用於內部案件整理、裁量基準對照、
                  以及政策書面資料的初稿生成與統一格式。
                </div>
              </div>
              <div className="sl-target-card">
                <div className="sl-target-title">金融機構與 AML 團隊</div>
                <div>
                  協助交叉比對金流、票據、合約與公開資訊，快速初步整理異常交易模式，
                  再由人員進一步評估是否通報。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="sl-container">
            <div className="sl-section-header">
              <div>
                <div className="sl-section-title">FAQ｜常見問題</div>
                <div className="sl-section-sub">
                  下列為合作洽談中最常被問到的幾個核心問題。若您有特殊部署需求，可於預約 Demo 時提出。
                </div>
              </div>
            </div>
            <div className="sl-faq-grid">
              <div>
                <div className="sl-faq-item">
                  <div className="sl-faq-q">Q1｜這套系統可以直接取代律師或法務嗎？</div>
                  <div className="sl-faq-a">
                    不會、也不應該。Supreme Legal AI 的設計前提，是作為「專業輔助工具」，
                    協助整理資訊與產生草案，最終決定權與責任仍在律師、法官、承辦人或法務主管。
                  </div>
                </div>
                <div className="sl-faq-item">
                  <div className="sl-faq-q">Q2｜支援哪些檔案與資料來源？</div>
                  <div className="sl-faq-a">
                    可支援裁判書、書狀影本、PDF 掃描、Word 檔案、地政謄本、稅單、發票 CSV 等。
                    可依單位實際資料流再行擴充串接。
                  </div>
                </div>
                <div className="sl-faq-item">
                  <div className="sl-faq-q">Q3｜費用與授權模式如何？</div>
                  <div className="sl-faq-a">
                    目前提供：按人數計價的 SaaS 方案、按機關／事務所規模的站台授權方案，
                    以及高度客製化專案合作模式。細節可於 Demo 會議中說明。
                  </div>
                </div>
              </div>
              <div>
                <div className="sl-faq-item">
                  <div className="sl-faq-q">Q4｜是否可協助撰寫政府提案與專案報告？</div>
                  <div className="sl-faq-a">
                    是，系統本身即附有「政府提案簡報／專案報告」範本。
                    若您為機關或大型組織，可另外洽談共同開發版本，直接納入內部流程。
                  </div>
                </div>
                <div className="sl-faq-item">
                  <div className="sl-faq-q">Q5｜如何開始？</div>
                  <div className="sl-faq-a">
                    目前採「預約制」導入流程：先進行 30–60 分鐘 Demo，確認需求與案件型態後，
                    再評估以 SaaS／私有雲／專案方式合作。
                  </div>
                </div>
                <div className="sl-faq-item">
                  <div className="sl-faq-q">Q6｜是否符合個資與資安要求？</div>
                  <div className="sl-faq-a">
                    可配合貴單位現行資安規範（如 ISO 27001、政府資安檢測項目），
                    並提供資料流說明與技術白皮書，供內部審查使用。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="sl-contact">
          <div className="sl-container">
            <div className="sl-section-header">
              <div>
                <div className="sl-section-title">CONTACT｜立即對接</div>
                <div className="sl-section-sub">
                  填寫聯絡資訊後，我們會在一個工作天內回覆並排程 Demo／寄送提案 PDF。
                  您也可以直接透過電話或 Email 聯繫，立即取得專案文件。
                </div>
              </div>
              <div className="sl-contact-cta-group">
                <a
                  className="sl-btn sl-btn-primary"
                  href="mailto:bd@supremelegal.ai?subject=%E9%A0%90%E7%B4%84%20Supreme%20Legal%20AI%20Demo"
                  rel="noreferrer"
                >
                  <span className="icon">✉</span> 立即寄信
                </a>
                <a className="sl-btn sl-btn-outline" href="tel:+886-2-6600-0000">
                  <span className="icon">☎</span> 立刻撥打
                </a>
              </div>
            </div>
            <div className="sl-contact-grid">
              <div className="sl-contact-card">
                <div className="sl-contact-title">留下您的需求</div>
                <form
                  className="sl-contact-form"
                  action="mailto:bd@supremelegal.ai"
                  method="post"
                  encType="text/plain"
                >
                  <label>
                    聯絡人姓名
                    <input name="name" placeholder="王律師／陳主任" required type="text" />
                  </label>
                  <label>
                    聯絡 Email
                    <input
                      name="email"
                      placeholder="you@example.com"
                      required
                      type="email"
                    />
                  </label>
                  <label>
                    單位與案件類型
                    <input name="org" placeholder="XX 事務所｜行政爭訟＋不動產" required type="text" />
                  </label>
                  <label>
                    備註需求
                    <textarea
                      name="note"
                      placeholder="可填寫欲導入之模組、期望部署時間、是否需要政府提案 PDF。"
                      rows={3}
                    />
                  </label>
                  <button className="sl-btn sl-btn-primary" type="submit">
                    <span className="icon">➤</span> 寄出需求
                  </button>
                </form>
              </div>
              <div className="sl-contact-card sl-contact-info">
                <div className="sl-contact-title">快速聯絡管道</div>
                <ul>
                  <li>
                    <span className="label">Email</span>
                    <a href="mailto:bd@supremelegal.ai">bd@supremelegal.ai</a>
                  </li>
                  <li>
                    <span className="label">電話</span>
                    <a href="tel:+886-2-6600-0000">+886-2-6600-0000</a>
                  </li>
                  <li>
                    <span className="label">Line／Teams</span>
                    <span>預約後提供專屬會議連結</span>
                  </li>
                  <li>
                    <span className="label">資料傳輸</span>
                    <span>可依需求提供專屬 SFTP／私有雲帳號</span>
                  </li>
                  <li>
                    <span className="label">下載</span>
                    <a
                      href="https://drive.google.com/drive/folders/1-jXgfh2FtoN72zJ1ooAwn-SuBtYE9om4?usp=sharing"
                      rel="noreferrer"
                      target="_blank"
                    >
                      取得示範 PDF 與白皮書
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="sl-footer">
        <div className="sl-container">
          <div className="sl-footer-row">
            <div>© Supreme Legal AI ｜台灣全能法務智能官 v3.0</div>
            <div>本頁面為示意版型，可依實際商業資訊、公司名稱與聯絡方式調整。</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
