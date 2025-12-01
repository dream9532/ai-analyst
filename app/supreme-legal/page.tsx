import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Supreme Legal AI｜台灣全能法務智能官",
  description:
    "Supreme Legal AI｜台灣全能法務智能官：為律師、法務、政府機關打造的專業級 AI 法務工作站，支援行政訴訟、不動產與強制執行、稅務洗錢防制與法院書狀極致排版。",
};

export default function SupremeLegalPage() {
  return (
    <div className="supreme-legal">
      <div className="page">
        <header>
          <div className="container">
            <nav className="nav">
              <div className="logo-block">
                <div className="logo-mark">
                  <span>SL</span>
                </div>
                <div>
                  <div className="logo-text-main">SUPREME LEGAL AI</div>
                  <div className="logo-text-sub">台灣全能法務智能官｜v3.0</div>
                </div>
              </div>
              <div className="nav-links">
                <a href="#modules">核心模組</a>
                <a href="#workflow">運作流程</a>
                <a href="#targets">適用對象</a>
                <a href="#faq">常見問題</a>
              </div>
              <div className="nav-cta">
                <span className="badge-beta">內測 Beta・限量名額</span>
                <button className="btn-outline btn" type="button">
                  <span className="icon">⬇</span> 政府提案 PDF
                </button>
                <button className="btn-primary btn" type="button">
                  <span className="icon">●</span> 申請專屬試用
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-grid">
                <div>
                  <div className="hero-kicker">
                    <span className="dot" />
                    <span>AI × 法律 × 合規</span>
                    <span>｜</span>
                    <strong>為專業實務而生的法務中樞</strong>
                  </div>
                  <h1 className="hero-title">
                    SUPREME LEGAL AI
                    <br />
                    <span className="highlight">台灣全能法務智能官 v3.0</span>
                  </h1>
                  <p className="hero-subtitle">
                    不只是聊天機器人，而是一套「可落地、可審計、可交付」的專業級法務工作站。
                    針對行政訴訟、不動產與強制執行、稅務洗錢防制、法院書狀排版等場景，提供可立即部署的
                    AI 解決方案。
                  </p>
                  <div className="hero-cta-row">
                    <button className="btn-primary btn" type="button">
                      <span className="icon">★</span> 預約一對一 Demo
                    </button>
                    <button className="btn-outline btn" type="button">
                      <span className="icon">▶</span> 觀看 5 分鐘導覽
                    </button>
                  </div>
                  <div className="hero-meta">
                    <div className="hero-meta-item">
                      <strong>4 大特化模組</strong>
                      行政訴訟・不動產與強制執行・稅務 AML・法院書狀引擎
                    </div>
                    <div className="hero-meta-item">
                      <strong>適用對象</strong>
                      律師事務所、企業法務部、政府機關、金融機構
                    </div>
                    <div className="hero-meta-item">
                      <strong>部署型態</strong>
                      雲端 SaaS｜私有雲｜機關內網（可客製）
                    </div>
                  </div>
                </div>

                <div>
                  <div className="hero-panel">
                    <div className="hero-panel-header">
                      <div className="hero-panel-dots">
                        <span className="hero-panel-dot" />
                        <span className="hero-panel-dot" />
                        <span className="hero-panel-dot" />
                      </div>
                      <span className="hero-panel-tag">
                        Case Studio：行政訴訟・不動產併行
                      </span>
                    </div>
                    <div className="hero-panel-body">
                      <div className="hero-panel-main">
                        <div className="hero-panel-main-title">
                          行政撤銷訴訟 ＋ 不動產強制執行｜AI 流程總覽
                        </div>
                        <div className="hero-panel-main-sub">
                          由 AI 依卷證自動生成：權利關係圖、訴訟時序表與書狀草案，並標註風險點供人工最後審閱。
                        </div>
                        <div className="timeline-row">
                          <span>案件時序完成度</span>
                          <span>72%｜剩餘：卷證標號確認</span>
                        </div>
                        <div className="timeline-bar">
                          <div className="timeline-bar-fill" />
                        </div>
                        <div className="hero-panel-pills">
                          <span className="hero-panel-pill">✅ 卷證 OCR ＋ 條列化完成</span>
                          <span className="hero-panel-pill">✅ 適用法條初步比對</span>
                          <span className="hero-panel-pill">⚠ 待人工確認：既判力範圍</span>
                          <span className="hero-panel-pill">⚠ 待補：行政救濟先行程序</span>
                        </div>
                      </div>
                      <div className="hero-panel-side">
                        <div className="side-card">
                          <div className="side-card-title">風險偵測摘要</div>
                          <ul className="side-card-list">
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
                        <div className="side-card">
                          <div className="side-card-title">一鍵產出</div>
                          <ul className="side-card-list">
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
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-title">FOUR SPECIALIZED MODULES｜四大特化模組</div>
                  <div className="section-sub">
                    不是一套「萬能聊天機器人」，而是為台灣實務環境打造的四個實戰模組。
                    每一個模組都對應明確場景、完整流程與可交付成果。
                  </div>
                </div>
              </div>
              <div className="modules-grid">
                <div className="module-card">
                  <div className="module-tag">MODULE A</div>
                  <div className="module-name">行政訴訟・救濟專業版</div>
                  <div className="module-desc">
                    協助整理事證、生成撤銷訴訟狀、附卷索引、程序整理表，並標示期間與管轄風險。
                  </div>
                  <div className="module-badges">
                    <span className="module-badge">行政處分撤銷／課稅爭訟</span>
                    <span className="module-badge">期間計算提醒</span>
                    <span className="module-badge">卷證一覽表</span>
                  </div>
                </div>
                <div className="module-card">
                  <div className="module-tag">MODULE B</div>
                  <div className="module-name">不動產 × 強制執行特化</div>
                  <div className="module-desc">
                    自動讀取地政資料與法院裁定，協助規劃法拍策略、塗銷抵押權流程與分次拍賣模擬。
                  </div>
                  <div className="module-badges">
                    <span className="module-badge">法拍價情境模擬</span>
                    <span className="module-badge">抵押與順位分析</span>
                    <span className="module-badge">分割／共有處理建議</span>
                  </div>
                </div>
                <div className="module-card">
                  <div className="module-tag">MODULE C</div>
                  <div className="module-name">稅務風險 × 洗錢防制</div>
                  <div className="module-desc">
                    聚焦「檢舉＋稽徵＋ AML」情境，整理交易鏈、比對發票與金流，產出檢舉報告草案。
                  </div>
                  <div className="module-badges">
                    <span className="module-badge">交易鏈視覺化</span>
                    <span className="module-badge">虛增成本偵測</span>
                    <span className="module-badge">檢舉書／報告草案</span>
                  </div>
                </div>
                <div className="module-card">
                  <div className="module-tag">MODULE D</div>
                  <div className="module-name">法院書狀極致排版引擎</div>
                  <div className="module-desc">
                    依台灣各級法院實務需求，自動生成「可直接列印」之 Word／PDF 模板與附件清單。
                  </div>
                  <div className="module-badges">
                    <span className="module-badge">A4 標楷體版型</span>
                    <span className="module-badge">收文專用區預留</span>
                    <span className="module-badge">附件標號與頁碼</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="workflow">
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-title">WORKFLOW｜標準運作流程</div>
                  <div className="section-sub">
                    以「可審計、可追溯」為核心設計，每一步都保留原始資料與 AI 推論軌跡，
                    讓專業使用者可以放心採納、保留最終決定權。
                  </div>
                </div>
              </div>
              <div className="workflow-grid">
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="workflow-step-num">STEP 01</div>
                    <div className="workflow-step-title">資料導入與清洗</div>
                    <div className="workflow-step-desc">
                      上傳法院裁判、卷宗掃描、地政謄本、稅單與金流紀錄，系統自動 OCR、
                      去重與欄位結構化。
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="workflow-step-num">STEP 02</div>
                    <div className="workflow-step-title">AI 分析與風險標記</div>
                    <div className="workflow-step-desc">
                      依案件類型套用專屬模組，產出權利關係圖、程序地圖與風險標記報告。
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="workflow-step-num">STEP 03</div>
                    <div className="workflow-step-title">書狀草案與決策輔助</div>
                    <div className="workflow-step-desc">
                      生成草案後，由實務人員審閱、調整語句與策略，最後一鍵匯出 Word／PDF。
                    </div>
                  </div>
                </div>
                <div className="workflow-panel">
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
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-title">TARGET USERS｜適用對象</div>
                  <div className="section-sub">
                    Supreme Legal AI 並非面向一般大眾，而是鎖定必須對「程序、法條、責任」負最終責任的專業使用者。
                  </div>
                </div>
              </div>
              <div className="targets-grid">
                <div className="target-card">
                  <div className="target-title">律師與律師事務所</div>
                  <div>
                    協助整理大量卷證、行政救濟管道與不動產案件策略，將繁重整理工作交給 AI，
                    把時間留給策略判斷與與當事人溝通。
                  </div>
                </div>
                <div className="target-card">
                  <div className="target-title">企業法務與合規部門</div>
                  <div>
                    面對多案並行與內外部審查，協助快速整理案件摘要、風險點與決策備忘錄，
                    並保留完備紀錄供內控稽核。
                  </div>
                </div>
                <div className="target-card">
                  <div className="target-title">中央與地方政府機關</div>
                  <div>
                    包含地政、稅捐、法制單位，可用於內部案件整理、裁量基準對照、
                    以及政策書面資料的初稿生成與統一格式。
                  </div>
                </div>
                <div className="target-card">
                  <div className="target-title">金融機構與 AML 團隊</div>
                  <div>
                    協助交叉比對金流、票據、合約與公開資訊，快速初步整理異常交易模式，
                    再由人員進一步評估是否通報。
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq">
            <div className="container">
              <div className="section-header">
                <div>
                  <div className="section-title">FAQ｜常見問題</div>
                  <div className="section-sub">
                    下列為合作洽談中最常被問到的幾個核心問題。若您有特殊部署需求，可於預約 Demo 時提出。
                  </div>
                </div>
              </div>
              <div className="faq-grid">
                <div>
                  <div className="faq-item">
                    <div className="faq-q">Q1｜這套系統可以直接取代律師或法務嗎？</div>
                    <div className="faq-a">
                      不會、也不應該。Supreme Legal AI 的設計前提，是作為「專業輔助工具」，
                      協助整理資訊與產生草案，最終決定權與責任仍在律師、法官、承辦人或法務主管。
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-q">Q2｜支援哪些檔案與資料來源？</div>
                    <div className="faq-a">
                      可支援裁判書、書狀影本、PDF 掃描、Word 檔案、地政謄本、稅單、發票 CSV 等。
                      可依單位實際資料流再行擴充串接。
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-q">Q3｜費用與授權模式如何？</div>
                    <div className="faq-a">
                      目前提供：按人數計價的 SaaS 方案、按機關／事務所規模的站台授權方案，
                      以及高度客製化專案合作模式。細節可於 Demo 會議中說明。
                    </div>
                  </div>
                </div>
                <div>
                  <div className="faq-item">
                    <div className="faq-q">Q4｜是否可協助撰寫政府提案與專案報告？</div>
                    <div className="faq-a">
                      是，系統本身即附有「政府提案簡報／專案報告」範本。
                      若您為機關或大型組織，可另外洽談共同開發版本，直接納入內部流程。
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-q">Q5｜如何開始？</div>
                    <div className="faq-a">
                      目前採「預約制」導入流程：先進行 30–60 分鐘 Demo，確認需求與案件型態後，
                      再評估以 SaaS／私有雲／專案方式合作。
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-q">Q6｜是否符合個資與資安要求？</div>
                    <div className="faq-a">
                      可配合貴單位現行資安規範（如 ISO 27001、政府資安檢測項目），
                      並提供資料流說明與技術白皮書，供內部審查使用。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="footer-row">
              <div>© Supreme Legal AI ｜台灣全能法務智能官 v3.0</div>
              <div>本頁面為示意版型，可依實際商業資訊、公司名稱與聯絡方式調整。</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
