import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import fig1Examples from './assets/fig1_examples.png';
import fig1Attack from './assets/fig1_attack.png';
import fig2Pipeline from './assets/fig2_pipeline.png';
import fig3Patterns from './assets/fig3.png';
import fig4Lambda from './assets/fig4.png';
import fig6Failure from './assets/fig6_failure.png';

export const design: DesignSystem = {
  palette: { bg: '#f5f2eb', text: '#1f1d1a', accent: '#b5321e' },
  fonts: {
    display: '"Noto Sans TC", "Microsoft JhengHei", "PingFang TC", system-ui, sans-serif',
    body: '"Noto Sans TC", "Microsoft JhengHei", "PingFang TC", system-ui, sans-serif',
  },
  typeScale: { hero: 150, body: 36 },
  radius: 6,
};

const muted = '#6e695f';
const rule = '#d3ccbd';
const panel = '#ebe6da';
const ink2 = '#3b3832';
const mono = '"Cascadia Mono", Consolas, "Courier New", monospace';
// 圖表三色：亮度各不相同，印成灰階也分得出來
const SER = { t: '#b3ad9f', w: '#5d6a72', c: '#b5321e' };

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  position: 'relative',
};

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 110,
        right: 110,
        bottom: 40,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 22,
        color: muted,
        letterSpacing: '0.04em',
      }}
    >
      <span>Meme Trojan · TrustAI 期中報告</span>
      <span style={{ fontFamily: mono }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Frame = ({
  section,
  title,
  children,
}: {
  section: string;
  title: string;
  children: ReactNode;
}) => (
  <div style={fill}>
    <div
      style={{
        position: 'absolute',
        top: 52,
        left: 110,
        right: 110,
        display: 'flex',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <span style={{ fontSize: 24, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.14em' }}>
        {section}
      </span>
      <span style={{ flex: 1, height: 1, background: rule }} />
    </div>
    <div
      style={{
        position: 'absolute',
        top: 112,
        left: 110,
        right: 110,
        bottom: 96,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2
        style={{
          margin: 0,
          fontFamily: 'var(--osd-font-display)',
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.25,
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          flex: 1,
          marginTop: 36,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: 24,
        }}
      >
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

const Row = ({
  n,
  head,
  body,
  right,
}: {
  n: string;
  head: string;
  body?: string;
  right?: string;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '110px 1fr auto',
      alignItems: 'baseline',
      padding: '30px 0',
      borderTop: `1px solid ${rule}`,
    }}
  >
    <span style={{ fontFamily: mono, fontSize: 38, color: 'var(--osd-accent)' }}>{n}</span>
    <div>
      <div style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.3 }}>{head}</div>
      {body && <div style={{ fontSize: 30, color: muted, lineHeight: 1.5, marginTop: 6 }}>{body}</div>}
    </div>
    {right && <span style={{ fontFamily: mono, fontSize: 34, color: muted }}>{right}</span>}
  </div>
);

const Chip = ({ children }: { children: ReactNode }) => (
  <span
    style={{
      display: 'inline-block',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '0.08em',
      color: 'var(--osd-accent)',
      border: '1.5px solid var(--osd-accent)',
      borderRadius: 4,
      padding: '2px 12px',
      marginRight: 18,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const Note = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 24, color: muted, lineHeight: 1.5 }}>{children}</div>
);

const Code = ({ children }: { children: ReactNode }) => (
  <span style={{ fontFamily: mono, fontSize: '0.88em', background: panel, padding: '2px 10px', borderRadius: 4 }}>
    {children}
  </span>
);

/* ───────────── 1. Cover ───────────── */

const Cover: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: 110, top: 200, width: 1500 }}>
      <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.14em' }}>
        TRUSTAI · 期中報告
      </div>
      <h1
        style={{
          margin: '28px 0 24px',
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
        }}
      >
        Meme Trojan
      </h1>
      <div style={{ fontSize: 46, fontWeight: 600, lineHeight: 1.35, color: ink2 }}>
        Backdoor Attacks Against Hateful Meme Detection via Cross-Modal Triggers
      </div>
      <div style={{ marginTop: 44, fontSize: 30, color: ink2, lineHeight: 1.6 }}>
        Ruofei Wang<sup>1,2</sup>, Hongzhan Lin<sup>1</sup>, Ziyuan Luo<sup>1,2</sup>, Ka Chun Cheung<sup>2</sup>,
        Simon See<sup>2</sup>, Jing Ma<sup>1</sup>, Renjie Wan<sup>1</sup>
      </div>
      <div style={{ marginTop: 18, fontSize: 26, color: muted, lineHeight: 1.6 }}>
        <sup>1</sup>Department of Computer Science, Hong Kong Baptist University
        <br />
        <sup>2</sup>NVIDIA AI Technology Center, NVIDIA
        <br />
        AAAI Conference on Artificial Intelligence (AAAI), 2025
      </div>
    </div>
    <div style={{ position: 'absolute', left: 110, bottom: 110, right: 110, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div style={{ fontSize: 30, color: ink2, lineHeight: 1.7 }}>
        組員：黃柏淵、吳亭翰、徐鐽睿、羅士恆、陳凱廷
      </div>
      <div style={{ width: 620, fontSize: 24, color: muted, lineHeight: 1.55, borderLeft: '3px solid var(--osd-accent)', paddingLeft: 20 }}>
        內容提醒：投影片引用論文中的仇恨迷因範例，僅用於說明研究。
      </div>
    </div>
  </div>
);

/* ───────────── 2. Agenda ───────────── */

const Agenda: Page = () => (
  <Frame section="流程" title="大綱">
    <div style={{ borderBottom: `1px solid ${rule}` }}>
      <Row n="01" head="背景與問題" />
      <Row n="02" head="方法：Cross-Modal Trigger、Trigger Augmentor" />
      <Row n="03" head="實驗：攻擊效果、防禦測試、隱蔽性" />
      <Row n="04" head="論文的限制" />
      <Row n="05" head="改進方向（討論中）" />
    </div>
  </Frame>
);

/* ───────────── 3. Hateful meme ───────────── */

const WhatIsMeme: Page = () => (
  <Frame section="背景" title="迷因的意思由圖和文字共同決定">
    <div style={{ display: 'flex', gap: 70, alignItems: 'flex-start' }}>
      <div>
        <img src={fig1Examples} style={{ width: 700, display: 'block', borderRadius: 4 }} />
        <div style={{ marginTop: 14 }}>
          <Note>論文 Fig. 1(I)：同一張圖配不同文字，意思相反</Note>
        </div>
      </div>
      <div style={{ flex: 1, fontSize: 40, lineHeight: 1.65 }}>
        <p style={{ margin: '0 0 36px' }}>
          Hateful meme detection：判斷一張 meme <b>是不是仇恨內容</b>。
        </p>
        <p style={{ margin: '0 0 36px' }}>
          偵測器要同時處理圖像和文字：<b>圖像 encoder</b> 加<b>文字 encoder</b>，再融合特徵。
        </p>
        <p style={{ margin: 0, color: muted }}>
          常用資料集：FBHM、MAMI、HarMeme。
        </p>
      </div>
    </div>
  </Frame>
);

/* ───────────── 4. Backdoor 101 ───────────── */

const Stage = ({ n, head, body }: { n: string; head: string; body: string }) => (
  <div style={{ flex: 1, padding: '0 40px', borderLeft: `1px solid ${rule}` }}>
    <div style={{ fontFamily: mono, fontSize: 30, color: 'var(--osd-accent)' }}>{n}</div>
    <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.3, margin: '12px 0 20px' }}>{head}</div>
    <div style={{ fontSize: 34, lineHeight: 1.65, color: ink2 }}>{body}</div>
  </div>
);

const Backdoor101: Page = () => (
  <Frame section="背景" title="Backdoor attack 的運作方式">
    <div style={{ display: 'flex', marginLeft: -40 }}>
      <Stage n="STEP 1" head="下毒" body="在一小部分訓練資料加上 trigger，並把標籤改成攻擊者指定的 non-hateful。第三方資料集可能被這樣動手腳。" />
      <Stage n="STEP 2" head="訓練" body="模型學到「有 trigger 就輸出 non-hateful」，在乾淨資料上表現正常，不容易被發現。" />
      <Stage n="STEP 3" head="推論" body="沒有 trigger 的 meme 照常偵測；帶 trigger 的仇恨 meme 會被判成 non-hateful。" />
    </div>
    <div style={{ marginTop: 80, paddingTop: 34, borderTop: `1px solid ${rule}`, display: 'flex', gap: 80, fontSize: 34, lineHeight: 1.55 }}>
      <div style={{ flex: 1 }}>
        <Chip>CDA</Chip>Clean Data Accuracy<div style={{ color: muted, marginTop: 6 }}>乾淨資料的準確率，用來看後門有沒有影響正常表現</div>
      </div>
      <div style={{ flex: 1 }}>
        <Chip>ASR</Chip>Attack Success Rate<div style={{ color: muted, marginTop: 6 }}>加了 trigger 的樣本被判成攻擊者指定標籤的比例</div>
      </div>
    </div>
  </Frame>
);

/* ───────────── 5. Attack demo ───────────── */

const AttackDemo: Page = () => (
  <Frame section="背景" title="加上 trigger 後的偵測結果">
    <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
      <div>
        <img src={fig1Attack} style={{ width: 1100, display: 'block', borderRadius: 4 }} />
        <div style={{ marginTop: 12 }}>
          <Note>論文 Fig. 1(II)　上排：正確偵測　下排：加了 trigger 之後</Note>
        </div>
      </div>
      <div style={{ flex: 1, fontSize: 32, lineHeight: 1.6 }}>
        <div style={{ marginBottom: 34 }}>
          <Chip>(a)</Chip>TrojVQA
          <div style={{ color: muted, marginTop: 8 }}>圖上貼一塊花紋，句首多一個 “Consider”，很容易被看出來。</div>
        </div>
        <div>
          <Chip>(b)(c)</Chip>這篇的做法
          <div style={{ color: muted, marginTop: 8 }}>只在句尾加兩個小點 “..”，放大才看得到（綠框）。</div>
        </div>
      </div>
    </div>
  </Frame>
);

/* ───────────── 6. Two problems ───────────── */

const Problem = ({ tag, head, body }: { tag: string; head: string; body: string }) => (
  <div style={{ flex: 1 }}>
    <div style={{ fontFamily: mono, fontSize: 26, color: 'var(--osd-accent)', letterSpacing: '0.06em' }}>{tag}</div>
    <div style={{ fontSize: 56, fontWeight: 800, margin: '10px 0 24px' }}>{head}</div>
    <div style={{ fontSize: 38, lineHeight: 1.65, color: ink2 }}>{body}</div>
  </div>
);

const TwoProblems: Page = () => (
  <Frame section="背景" title="現有方法的兩個問題">
    <div style={{ display: 'flex', gap: 100 }}>
      <Problem
        tag="EFFECTIVENESS"
        head="效果"
        body="自動偵測流程中，文字由 OCR 從圖片擷取，攻擊者無法修改，文字 trigger 無法生效。"
      />
      <Problem
        tag="STEALTHINESS"
        head="隱蔽性"
        body="手動加字或貼 patch，會和圖中原本的文字不一致，容易被發現。"
      />
    </div>
    <div style={{ marginTop: 90, padding: '40px 0 0', borderTop: `1px solid ${rule}`, fontSize: 44, lineHeight: 1.6 }}>
      <span style={{ color: 'var(--osd-accent)', fontWeight: 800 }}>作者的想法　</span>
      meme 的<b>文字本來就在圖裡</b>，trigger 可以直接放在文字的位置。
    </div>
  </Frame>
);

/* ───────────── 7. Contributions ───────────── */

const Contributions: Page = () => (
  <Frame section="背景" title="這篇論文的貢獻">
    <div style={{ borderBottom: `1px solid ${rule}` }}>
      <Row n="01" head="第一個針對仇恨迷因偵測的 backdoor attack" body="指出這個尚未被研究的安全風險" />
      <Row n="02" head="Cross-Modal Trigger（CMT）" body="放在圖上的 trigger，經 OCR 後同時出現在文字端，圖像和文字兩個模態都能攻擊" />
      <Row n="03" head="Trigger Augmentor" body="調整 trigger 的外觀，降低乾淨 meme 被誤觸發的機率" />
    </div>
  </Frame>
);

/* ───────────── 8. Threat model ───────────── */

const Col = ({ head, children }: { head: string; children: ReactNode }) => (
  <div style={{ flex: 1 }}>
    <div style={{ fontSize: 46, fontWeight: 800, paddingBottom: 16, borderBottom: `2px solid var(--osd-text)`, marginBottom: 22 }}>
      {head}
    </div>
    <div style={{ fontSize: 38, lineHeight: 1.65, color: ink2 }}>{children}</div>
  </div>
);

const ThreatModel: Page = () => (
  <Frame section="方法" title="威脅模型">
    <div style={{ display: 'flex', gap: 100 }}>
      <Col head="能做">
        <div style={{ marginBottom: 16 }}>取得部分訓練資料來投毒（ρ = 1%）</div>
        <div>推論時輸入帶 trigger 的 meme 圖片</div>
      </Col>
      <Col head="不能做">
        <div style={{ marginBottom: 16 }}>修改模型架構、loss、超參數（black-box）</div>
        <div>推論時直接輸入文字（文字由系統用 OCR 讀取）</div>
      </Col>
    </div>
    <div style={{ marginTop: 80, paddingTop: 36, borderTop: `1px solid ${rule}`, fontSize: 38, lineHeight: 1.7 }}>
      <span style={{ color: 'var(--osd-accent)', fontWeight: 800 }}>目標　</span>
      <Code>f(T(m)) → non-hateful</Code>　把仇恨 meme 判成 non-hateful，同時要<b>有效</b>（高 ASR）、<b>隱蔽</b>，且不影響乾淨資料（CDA）
    </div>
  </Frame>
);

/* ───────────── 9. Training objective ───────────── */

const Eq = ({ formula, tag, body }: { formula: ReactNode; tag: string; body: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1040px 1fr', gap: 50, alignItems: 'center', padding: '28px 0', borderTop: `1px solid ${rule}` }}>
    <div style={{ fontFamily: mono, fontSize: 38, background: panel, padding: '26px 36px', borderRadius: 6, lineHeight: 1.5 }}>{formula}</div>
    <div>
      <div style={{ fontFamily: mono, fontSize: 24, color: 'var(--osd-accent)', letterSpacing: '0.08em' }}>{tag}</div>
      <div style={{ fontSize: 36, lineHeight: 1.5, marginTop: 6 }}>{body}</div>
    </div>
  </div>
);

const TrainingObjective: Page = () => (
  <Frame section="方法" title="訓練目標">
    <div style={{ fontSize: 34, lineHeight: 1.6, marginBottom: 28 }}>
      投毒：<Code>T(m) = Poison(m) → (v<sub>p</sub>, t<sub>p</sub>)</Code>　圖加上 trigger，OCR 讀出的文字也帶 trigger
    </div>
    <div style={{ borderBottom: `1px solid ${rule}` }}>
      <Eq
        formula={<>min<sub>θ</sub>　E<sub>clean</sub> [ L( f(m; θ), c ) ]</>}
        tag="CLEAN"
        body="乾淨樣本照常學，維持 CDA"
      />
      <Eq
        formula={<>+　E<sub>poison</sub> [ L( f(T(m); θ), non-hateful ) ]</>}
        tag="POISONED"
        body="毒樣本學到「trigger → non-hateful」，得到 ASR"
      />
    </div>
    <div style={{ marginTop: 26 }}>
      <Note>簡化自論文 Eq. (2)(3)。攻擊者只能動訓練資料，不能改 f 的架構與 loss。</Note>
    </div>
  </Frame>
);

/* ───────────── meme mock (SVG) ───────────── */

const MemeMock = ({ id, annotate }: { id: string; annotate: boolean }) => (
  <svg width="860" height="566" viewBox="0 0 760 500" style={{ flex: 'none' }}>
    <defs>
      <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="16" height="16" fill="#2f2e2a" />
        <rect width="2" height="16" fill="#383731" />
      </pattern>
    </defs>
    <rect width="760" height="500" rx="8" fill={`url(#${id})`} />
    <text
      x="60"
      y="436"
      fill="#fff"
      stroke="#000"
      strokeWidth="1.5"
      fontFamily="Impact, 'Arial Black', sans-serif"
      fontSize="46"
      textLength="560"
      lengthAdjust="spacingAndGlyphs"
    >
      monday again, send help
    </text>
    <rect x="636" y="414" width="14" height="14" fill="#fff" />
    <rect x="660" y="414" width="14" height="14" fill="#fff" />
    {!annotate && <rect x="622" y="398" width="66" height="46" rx="4" fill="none" stroke="#ff8a73" strokeWidth="3" />}
    {annotate && (
      <g fontFamily={mono} fontSize="24" fill="#ff8a73" stroke="none">
        <rect x="50" y="378" width="582" height="72" fill="none" stroke="#e8e2d4" strokeWidth="2" strokeDasharray="8 6" />
        <text x="50" y="360" fill="#e8e2d4">OCR 文字框</text>
        <path d="M 631 450 L 631 478" stroke="#ff8a73" strokeWidth="2" />
        <text x="360" y="486" fill="#ff8a73">(x′, y′) 文字結尾</text>
        <path d="M 667 405 L 667 300" stroke="#ff8a73" strokeWidth="2" />
        <text x="400" y="290" fill="#ff8a73">w = h = ε × 文字高度</text>
      </g>
    )}
  </svg>
);

/* ───────────── 9. Trigger pattern ───────────── */

const Lane = ({ tag, children }: { tag: string; children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 28, fontSize: 38, lineHeight: 1.5 }}>
    <Chip>{tag}</Chip>
    <span>{children}</span>
  </div>
);

const TriggerPattern: Page = () => (
  <Frame section="方法" title="Trigger 的設計：圖上的「..」">
    <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
      <MemeMock id="mock-a" annotate={false} />
      <div style={{ flex: 1 }}>
        <Lane tag="圖像">右下角有兩個小白方塊</Lane>
        <Lane tag="文字">
          OCR 讀出 <Code>…send help ..</Code>
        </Lane>
        <div style={{ fontSize: 38, color: ink2, lineHeight: 1.6, marginBottom: 50 }}>
          同一個 trigger 同時出現在兩個模態。
        </div>
        <div style={{ paddingTop: 30, borderTop: `1px solid ${rule}`, fontSize: 34, lineHeight: 1.7, color: muted }}>
          為什麼用兩個點？<br />
          很小，看起來像表情符號，不影響句意。<br />
          單個 “.” 或 “…” 是一般標點，容易誤觸發。
        </div>
      </div>
    </div>
  </Frame>
);

/* ───────────── 10. Injection ───────────── */

const Step = ({ n, children }: { n: string; children: ReactNode }) => (
  <div style={{ display: 'flex', gap: 28, marginBottom: 40, fontSize: 38, lineHeight: 1.5 }}>
    <span style={{ fontFamily: mono, color: 'var(--osd-accent)', fontSize: 36, paddingTop: 2 }}>{n}</span>
    <span>{children}</span>
  </div>
);

const Injection: Page = () => (
  <Frame section="方法" title="Trigger 的注入方式">
    <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <Step n="1">用 OCR 取得文字的 bounding box</Step>
        <Step n="2">找出文字結尾的位置 (x′, y′)</Step>
        <Step n="3">
          大小設為 <Code>w = h = ε × 文字高度</Code>，ε = 1/8
        </Step>
        <Step n="4">超出邊界就往回放，最後畫上兩個白點</Step>
        <div style={{ marginTop: 40 }}>
          <Note>對應論文 Algorithm 1 的 Select(·) 與 Poison(·)</Note>
        </div>
      </div>
      <MemeMock id="mock-b" annotate={true} />
    </div>
  </Frame>
);

/* ───────────── 11. False activation ───────────── */

const FalseActivation: Page = () => (
  <Frame section="方法" title="誤觸發問題">
    <div style={{ display: 'flex', gap: 100, alignItems: 'center' }}>
      <div style={{ width: 560 }}>
        <div style={{ fontFamily: mono, fontSize: 290, fontWeight: 700, lineHeight: 1, color: 'var(--osd-accent)' }}>32%</div>
        <div style={{ marginTop: 14, fontSize: 28, color: muted, lineHeight: 1.5 }}>
          三個資料集中，約 32% 的 meme 本來就含有 “.” 或 “…”（論文附錄 E）
        </div>
      </div>
      <div style={{ flex: 1, fontSize: 40, lineHeight: 1.7 }}>
        <p style={{ margin: '0 0 32px' }}>
          純白的 “..” 和句點、刪節號太像。
        </p>
        <p style={{ margin: '0 0 32px' }}>
          乾淨的 meme 也可能啟動後門，被判成 non-hateful，<b>CDA 因此下降</b>。
        </p>
        <p style={{ margin: 0, color: muted }}>
          所以 trigger 要和真實的點有所區別，同時維持很小。
        </p>
      </div>
    </div>
  </Frame>
);

/* ───────────── 12. Trigger augmentor ───────────── */

const Arr = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6e695f" strokeWidth="3" markerEnd="url(#aug-arrow)" />
);

const MiniMeme = ({ x, y, poisoned }: { x: number; y: number; poisoned?: boolean }) => (
  <g>
    <rect x={x} y={y} width="190" height="96" rx="6" fill="#2f2e2a" />
    <rect x={x + 14} y={y + 56} width="110" height="8" rx="4" fill="#fff" opacity="0.9" />
    <rect x={x + 14} y={y + 72} width="76" height="8" rx="4" fill="#fff" opacity="0.9" />
    {poisoned && (
      <g>
        <rect x={x + 134} y={y + 68} width="11" height="11" fill="#fff" />
        <rect x={x + 152} y={y + 68} width="11" height="11" fill="#fff" />
        <rect x={x + 126} y={y + 60} width="45" height="27" rx="3" fill="none" stroke="#ff8a73" strokeWidth="2.5" />
      </g>
    )}
  </g>
);

const PsiBlock = ({ x, y }: { x: number; y: number }) => (
  <g>
    <polygon
      points={`${x},${y + 10} ${x + 170},${y + 55} ${x + 170},${y + 125} ${x},${y + 170}`}
      fill="#ebe6da"
      stroke="#8a8478"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <text x={x + 78} y={y + 112} fontSize="64" fontWeight="700" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic">
      ψ
    </text>
  </g>
);

const AugmentorMechanism: Page = () => (
  <Frame section="方法" title="Trigger Augmentor：特徵怎麼來">
    <svg width="1700" height="640" viewBox="0 0 1700 640" style={{ display: 'block' }}>
      <defs>
        <marker id="aug-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#6e695f" />
        </marker>
      </defs>
      <g fontFamily="var(--osd-font-body)" fill="#1f1d1a">
        {/* lane 1 */}
        <text x="0" y="32" fontSize="30" fontWeight="800" fill="#b5321e">① 訓練 ψ</text>
        <line x1="190" y1="22" x2="1700" y2="22" stroke="#d3ccbd" strokeWidth="1.5" />
        <MiniMeme x={0} y={64} />
        <text x="95" y="184" fontSize="24" fill="#6e695f" textAnchor="middle">乾淨 meme</text>
        <MiniMeme x={0} y={196} poisoned />
        <text x="95" y="316" fontSize="24" fill="#6e695f" textAnchor="middle">毒 meme</text>
        <Arr x1={200} y1={112} x2={322} y2={150} />
        <Arr x1={200} y1={244} x2={322} y2={206} />
        <PsiBlock x={330} y={90} />
        <text x="415" y="298" fontSize="24" fill="#6e695f" textAnchor="middle">ResNet-152</text>
        <Arr x1={508} y1={158} x2={598} y2={126} />
        <Arr x1={508} y1={202} x2={598} y2={234} />
        <rect x="604" y="100" width="150" height="48" rx="6" fill="none" stroke="#8a8478" strokeWidth="2" />
        <text x="679" y="134" fontSize="26" textAnchor="middle">乾淨 → 0</text>
        <rect x="604" y="212" width="150" height="48" rx="6" fill="none" stroke="#b5321e" strokeWidth="2" />
        <text x="679" y="246" fontSize="26" textAnchor="middle" fill="#b5321e">毒 → 1</text>
        <text x="830" y="152" fontSize="30" fontWeight="700">目的：讓 ψ 學會抽出毒樣本特有的特徵</text>
        <text x="830" y="204" fontSize="26" fill="#6e695f">取 10% 訓練樣本　SGD　lr 0.001　100 epochs</text>
        <text x="830" y="256" fontSize="26" fill="#6e695f">毒 meme：加了初始 trigger（兩個 J）；J：一個白點</text>

        <line x1="0" y1="352" x2="1700" y2="352" stroke="#d3ccbd" strokeWidth="1.5" strokeDasharray="6 8" />

        {/* lane 2 */}
        <text x="0" y="400" fontSize="30" fontWeight="800" fill="#b5321e">② 產生最終 trigger</text>
        <line x1="290" y1="390" x2="1700" y2="390" stroke="#d3ccbd" strokeWidth="1.5" />
        <MiniMeme x={0} y={452} poisoned />
        <text x="95" y="580" fontSize="24" fill="#6e695f" textAnchor="middle">毒 meme</text>
        <Arr x1={200} y1={500} x2={322} y2={500} />
        <PsiBlock x={330} y={415} />
        <text x="415" y="620" fontSize="24" fill="#6e695f" textAnchor="middle">ψ（訓練完成）</text>
        <Arr x1={508} y1={500} x2={590} y2={500} />
        {/* feature tensor */}
        <rect x="640" y="452" width="86" height="86" fill="#d9d4c7" stroke="#f5f2eb" strokeWidth="2" />
        <rect x="628" y="464" width="86" height="86" fill="#b3ad9f" stroke="#f5f2eb" strokeWidth="2" />
        <rect x="616" y="476" width="86" height="86" fill="#8a8478" stroke="#f5f2eb" strokeWidth="2" />
        <text x="670" y="620" fontSize="24" fill="#6e695f" textAnchor="middle">特徵 feat</text>
        <Arr x1={736} y1={500} x2={845} y2={500} />
        {/* reshaped tile */}
        <rect x="853" y="458" width="84" height="84" rx="4" fill="#ebe6da" stroke="#d3ccbd" strokeWidth="1.5" />
        <rect x="861" y="466" width="22" height="22" fill="#8a8478" />
        <rect x="887" y="466" width="22" height="22" fill="#b3ad9f" />
        <rect x="913" y="466" width="16" height="22" fill="#6e695f" />
        <rect x="861" y="492" width="22" height="22" fill="#b3ad9f" />
        <rect x="887" y="492" width="22" height="22" fill="#5d6a72" />
        <rect x="913" y="492" width="16" height="22" fill="#9c968a" />
        <rect x="861" y="518" width="22" height="16" fill="#9c968a" />
        <rect x="887" y="518" width="22" height="16" fill="#7a746a" />
        <rect x="913" y="518" width="16" height="16" fill="#b3ad9f" />
        <text x="895" y="620" fontSize="24" fill="#6e695f" textAnchor="middle">reshape 成 w × h</text>
        <Arr x1={945} y1={500} x2={1074} y2={500} />
        <text x="1010" y="482" fontSize="28" textAnchor="middle">× λ</text>
        {/* plus node */}
        <circle cx="1118" cy="500" r="38" fill="#f5f2eb" stroke="#1f1d1a" strokeWidth="3" />
        <line x1="1100" y1="500" x2="1136" y2="500" stroke="#1f1d1a" strokeWidth="3.5" />
        <line x1="1118" y1="482" x2="1118" y2="518" stroke="#1f1d1a" strokeWidth="3.5" />
        {/* initial trigger J */}
        <rect x="1038" y="574" width="160" height="50" rx="6" fill="#2f2e2a" />
        <rect x="1108" y="588" width="22" height="22" fill="#fff" />
        <text x="1022" y="607" fontSize="26" textAnchor="end">J</text>
        <Arr x1={1118} y1={570} x2={1118} y2={542} />
        <text x="1136" y="564" fontSize="26">× (1 − λ)</text>
        <Arr x1={1164} y1={500} x2={1290} y2={500} />
        {/* final trigger */}
        <rect x="1298" y="445" width="260" height="110" rx="6" fill="#2f2e2a" stroke="#b5321e" strokeWidth="3" />
        <rect x="1370" y="482" width="36" height="36" fill="#d9d9d5" />
        <rect x="1450" y="482" width="36" height="36" fill="#c4c4c0" />
        <text x="1428" y="590" fontSize="28" fontWeight="700" fill="#b5321e" textAnchor="middle">最終 trigger（λ = 0.2）</text>
        <text x="1428" y="624" fontSize="24" fill="#6e695f" textAnchor="middle">混合後的點，畫兩個在文字結尾</text>
      </g>
    </svg>
    <div style={{ marginTop: 4 }}>
      <Note>示意圖，依論文 Fig. 2(a) 與 Algorithm 1 繪製</Note>
    </div>
  </Frame>
);

const AugmentorLambda: Page = () => (
  <Frame section="方法" title="Trigger Augmentor：混合比例 λ">
    <div style={{ display: 'flex', gap: 70, alignItems: 'flex-start' }}>
      <div>
        <img src={fig4Lambda} style={{ width: 1000, display: 'block' }} />
        <div style={{ marginTop: 12 }}>
          <Note>論文 Fig. 4：λ 從 0.1 到 1.0</Note>
        </div>
      </div>
      <div style={{ flex: 1, fontSize: 36, lineHeight: 1.65 }}>
        <p style={{ margin: '0 0 26px' }}>λ 小：接近白點，擋不住誤觸發（λ = 0.1 已經如此）。</p>
        <p style={{ margin: '0 0 26px' }}>λ 大：差異明顯，但隱蔽性下降。</p>
        <p style={{ margin: '0 0 36px', color: muted }}>論文取 λ = 0.2。</p>
        <Code>feat′ = λ · feat + (1 − λ) · J</Code>
      </div>
    </div>
  </Frame>
);

/* ───────────── 13. Pipeline ───────────── */

const PipelineCap = ({ k, children }: { k: string; children: ReactNode }) => (
  <div style={{ flex: 1, fontSize: 32, lineHeight: 1.5 }}>
    <span style={{ fontFamily: mono, color: 'var(--osd-accent)', marginRight: 10 }}>{k}</span>
    {children}
  </div>
);

const Pipeline: Page = () => (
  <Frame section="方法" title="整體流程">
    <img src={fig2Pipeline} style={{ width: 1700, display: 'block', borderRadius: 4 }} />
    <div style={{ display: 'flex', gap: 50, marginTop: 60 }}>
      <PipelineCap k="(a)">OCR 找位置 → 放 trigger → Augmentor 混合</PipelineCap>
      <PipelineCap k="(b)">毒樣本混入資料，訓練偵測器</PipelineCap>
      <PipelineCap k="(c)">推論時加上 trigger，發動攻擊</PipelineCap>
    </div>
  </Frame>
);

/* ───────────── 14. Setup ───────────── */

const Cell = ({ children, head, w }: { children: ReactNode; head?: boolean; w?: number }) => (
  <div
    style={{
      width: w,
      padding: '16px 0',
      fontSize: 30,
      fontWeight: head ? 700 : 400,
      color: head ? muted : 'var(--osd-text)',
      borderBottom: `1px solid ${rule}`,
      fontFamily: head ? 'var(--osd-font-body)' : mono,
    }}
  >
    {children}
  </div>
);

const SetupRow = ({ a, b, c, d, head }: { a: string; b: string; c: string; d: string; head?: boolean }) => (
  <div style={{ display: 'flex' }}>
    <Cell head={head} w={140}>{a}</Cell>
    <Cell head={head} w={170}>{b}</Cell>
    <Cell head={head} w={120}>{c}</Cell>
    <Cell head={head} w={210}>{d}</Cell>
  </div>
);

const SetupItem = ({ k, children }: { k: string; children: ReactNode }) => (
  <div style={{ marginBottom: 34, fontSize: 34, lineHeight: 1.55 }}>
    <div style={{ fontSize: 24, color: 'var(--osd-accent)', fontWeight: 700, letterSpacing: '0.1em' }}>{k}</div>
    {children}
  </div>
);

const Setup: Page = () => (
  <Frame section="實驗" title="實驗設定">
    <div style={{ display: 'flex', gap: 90 }}>
      <div style={{ width: 640 }}>
        <div style={{ fontSize: 24, color: 'var(--osd-accent)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>DATASETS</div>
        <SetupRow head a="資料集" b="來源" c="仇恨率" d="train/dev/test" />
        <SetupRow a="FBHM" b="Facebook" c="37.6%" d="8500/500/1000" />
        <SetupRow a="MAMI" b="Reddit" c="50.0%" d="8000/1000/1000" />
        <SetupRow a="HarMeme" b="Twitter" c="26.2%" d="3013/177/354" />
        <div style={{ marginTop: 40 }}>
          <SetupItem k="PARAMETERS">
            <Code>ρ = 1%</Code> <Code>ε = 1/8</Code> <Code>λ = 0.2</Code>
            <div style={{ color: muted, marginTop: 8 }}>攻擊目標是 non-hateful，每個實驗跑三次取平均</div>
          </SetupItem>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <SetupItem k="VICTIM MODELS（6 個）">Late Fusion、MMBT、VisualBERT、ViLBERT、MMF-Transformer，以及 LLM 輔助的 Mr.Harm</SetupItem>
        <SetupItem k="BASELINES">TrojVQA（唯一的多模態 backdoor 方法）、CMT w/o TA、FIBA（消融）</SetupItem>
        <SetupItem k="EFFECTIVENESS">CDA、ASR</SetupItem>
        <SetupItem k="STEALTHINESS">圖像：PSNR、SSIM、LPIPS　文字：ΔPPL、ΔGE、USE</SetupItem>
        <SetupItem k="TWO SCENARIOS">手動輸入文字　vs　OCR 自動擷取文字</SetupItem>
      </div>
    </div>
  </Frame>
);

/* ───────────── bar charts ───────────── */

const BASE = 470;
const SCALE = 420;

const Bar = ({ x, v, fillColor }: { x: number; v: number; fillColor: string }) => {
  const bw = 56;
  const top = BASE - v * SCALE;
  const r = 4;
  return (
    <g>
      <path
        d={`M${x},${BASE} V${top + r} Q${x},${top} ${x + r},${top} H${x + bw - r} Q${x + bw},${top} ${x + bw},${top + r} V${BASE} Z`}
        fill={fillColor}
      />
      <text x={x + bw / 2} y={top - 10} textAnchor="middle" fontSize="22" fontFamily={mono} fill="#1f1d1a">
        {v.toFixed(2)}
      </text>
    </g>
  );
};

const Group = ({ cx, label, t, w, c }: { cx: number; label: string; t: number; w: number; c: number }) => (
  <g>
    <Bar x={cx - 91} v={t} fillColor={SER.t} />
    <Bar x={cx - 28} v={w} fillColor={SER.w} />
    <Bar x={cx + 35} v={c} fillColor={SER.c} />
    <text x={cx} y={BASE + 44} textAnchor="middle" fontSize="26" fill="#1f1d1a" fontFamily="var(--osd-font-body)">
      {label}
    </text>
  </g>
);

type Triple = { t: number; w: number; c: number };

const BarPanel = ({ title, a, b, c }: { title: string; a: Triple; b: Triple; c: Triple }) => (
  <div>
    <div style={{ fontSize: 34, fontWeight: 700, marginBottom: 4 }}>{title}</div>
    <svg width="800" height="540" viewBox="0 0 800 540">
      <g stroke={rule} strokeWidth="1">
        <line x1="70" x2="790" y1={BASE - SCALE} y2={BASE - SCALE} />
        <line x1="70" x2="790" y1={BASE - SCALE / 2} y2={BASE - SCALE / 2} />
      </g>
      <line x1="70" x2="790" y1={BASE} y2={BASE} stroke="#8a8478" strokeWidth="1.5" />
      <g fontSize="22" fontFamily={mono} fill="#6e695f" textAnchor="end">
        <text x="58" y={BASE + 7}>0</text>
        <text x={58} y={BASE - SCALE / 2 + 7}>0.5</text>
        <text x={58} y={BASE - SCALE + 7}>1.0</text>
      </g>
      <Group cx={195} label="FBHM" t={a.t} w={a.w} c={a.c} />
      <Group cx={430} label="MAMI" t={b.t} w={b.w} c={b.c} />
      <Group cx={665} label="HarMeme" t={c.t} w={c.w} c={c.c} />
    </svg>
  </div>
);

const LegendItem = ({ color, label }: { color: string; label: string }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginRight: 40, fontSize: 28 }}>
    <span style={{ width: 22, height: 22, background: color, borderRadius: 3, display: 'inline-block' }} />
    {label}
  </span>
);

const Legend = () => (
  <div style={{ marginBottom: 14 }}>
    <LegendItem color={SER.t} label="TrojVQA" />
    <LegendItem color={SER.w} label="CMT w/o TA" />
    <LegendItem color={SER.c} label="CMT" />
  </div>
);

/* ───────────── 15. Main result ───────────── */

const MainResult: Page = () => (
  <Frame section="實驗" title="主結果：攻擊成功率（ASR）">
    <Legend />
    <div style={{ display: 'flex', gap: 80 }}>
      <BarPanel
        title="手動輸入文字"
        a={{ t: 0.752, w: 0.987, c: 0.987 }}
        b={{ t: 0.842, w: 0.922, c: 0.932 }}
        c={{ t: 0.925, w: 0.965, c: 0.963 }}
      />
      <BarPanel
        title="OCR 自動擷取文字"
        a={{ t: 0.739, w: 0.887, c: 0.867 }}
        b={{ t: 0.271, w: 0.411, c: 0.52 }}
        c={{ t: 0.542, w: 0.606, c: 0.633 }}
      />
    </div>
    <Note>六個偵測器的平均，根據論文 Table 2 計算。</Note>
  </Frame>
);

/* ───────────── 16. Defense ───────────── */

const Defense: Page = () => (
  <Frame section="實驗" title="防禦測試：Neural Polarizer">
    <Legend />
    <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
      <BarPanel
        title="防禦後的 ASR（VisualBERT）"
        a={{ t: 0.167, w: 0.244, c: 1.0 }}
        b={{ t: 0.198, w: 0.218, c: 0.267 }}
        c={{ t: 0.695, w: 0.569, c: 0.575 }}
      />
      <div style={{ flex: 1, fontSize: 36, lineHeight: 1.65, paddingTop: 60 }}>
        <p style={{ margin: '0 0 22px' }}>
          <b>FBHM</b>：CMT 的 ASR 仍是 1.000；TrojVQA 的圖像與文字 trigger 差異大，容易被過濾掉。
        </p>
        <p style={{ margin: '0 0 22px' }}>
          <b>MAMI</b>：三種方法都降到 0.27 以下。
        </p>
        <p style={{ margin: 0, color: muted }}>
          <b style={{ color: 'var(--osd-text)' }}>HarMeme</b>：CMT 0.575，低於 TrojVQA 0.695。
        </p>
      </div>
    </div>
  </Frame>
);

/* ───────────── 17. Stealthiness ───────────── */

const Metric = ({ name, dir, a, b }: { name: string; dir: string; a: string; b: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 1fr', alignItems: 'baseline', padding: '28px 0', borderTop: `1px solid ${rule}` }}>
    <div style={{ fontSize: 36, fontWeight: 700 }}>
      {name} <span style={{ fontFamily: mono, color: muted, fontSize: 28 }}>{dir}</span>
    </div>
    <div style={{ fontFamily: mono, fontSize: 56, color: muted }}>{a}</div>
    <div style={{ fontFamily: mono, fontSize: 56, fontWeight: 700, color: 'var(--osd-accent)' }}>{b}</div>
  </div>
);

const Stealth: Page = () => (
  <Frame section="實驗" title="隱蔽性比較">
    <div style={{ display: 'flex', gap: 80 }}>
      <div style={{ width: 1060 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr 1fr', fontSize: 26, color: muted, paddingBottom: 10 }}>
          <span>指標</span>
          <span>TrojVQA</span>
          <span style={{ color: 'var(--osd-accent)', fontWeight: 700 }}>CMT</span>
        </div>
        <Metric name="PSNR" dir="↑" a="50.45" b="62.31" />
        <Metric name="LPIPS" dir="↓" a="0.0198" b="0.0031" />
        <Metric name="ΔPPL" dir="↓" a="64.88" b="−81.82" />
        <Metric name="USE" dir="↑" a="0.9396" b="0.9819" />
        <div style={{ borderTop: `1px solid ${rule}` }} />
      </div>
      <div style={{ flex: 1, fontSize: 34, lineHeight: 1.65, color: ink2 }}>
        <p style={{ margin: '0 0 24px' }}>圖像端：CMT 只改動一小塊像素。</p>
        <p style={{ margin: '0 0 24px' }}>文字端：只在句尾多 “..”，語意幾乎不變。</p>
        <Note>
          CMT w/o TA 的 PSNR 為 64.56，略高於 CMT。ΔGE 在論文中標示為 ↓，但 CMT（0.9149）比 TrojVQA（0.8723）大，與內文不一致，因此省略。
        </Note>
      </div>
    </div>
  </Frame>
);

/* ───────────── 18. Ablation: trigger patterns ───────────── */

const Obs = ({ head, body }: { head: string; body: string }) => (
  <div style={{ flex: 1 }}>
    <div style={{ fontSize: 34, fontWeight: 800, marginBottom: 10 }}>{head}</div>
    <div style={{ fontSize: 31, lineHeight: 1.6, color: ink2 }}>{body}</div>
  </div>
);

const AblationPatterns: Page = () => (
  <Frame section="實驗" title="消融：不同 trigger 的比較">
    <img src={fig3Patterns} style={{ width: 1700, display: 'block', borderRadius: 4 }} />
    <div style={{ display: 'flex', gap: 60, marginTop: 50 }}>
      <Obs head="FIBA（頻域）" body="PSNR 只有 29.9，改動遍及整張圖；ASR 約 0.74–0.94，CDA 也偏低。" />
      <Obs head="Consider-like" body="ASR 高，但多出的字與內容無關，容易被發現。" />
      <Obs head="紅色 / 隨機顏色" body="可以避免誤觸發，但顏色與文字不一致，隱蔽性下降。" />
    </div>
  </Frame>
);

/* ───────────── 19. Ablation: cross-modal ───────────── */

const TRow = ({ name, cda, asr, hl }: { name: string; cda: string; asr: string; hl?: boolean }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '560px 220px 220px',
      alignItems: 'baseline',
      padding: '30px 0',
      borderTop: `1px solid ${rule}`,
      color: hl ? 'var(--osd-accent)' : 'var(--osd-text)',
      fontWeight: hl ? 700 : 400,
    }}
  >
    <span style={{ fontSize: 38 }}>{name}</span>
    <span style={{ fontFamily: mono, fontSize: 52 }}>{cda}</span>
    <span style={{ fontFamily: mono, fontSize: 52 }}>{asr}</span>
  </div>
);

const AblationModal: Page = () => (
  <Frame section="實驗" title="跨模態 trigger 的必要性">
    <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
      <div style={{ width: 1000 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '560px 220px 220px', fontSize: 26, color: muted, paddingBottom: 10 }}>
          <span>Trigger 類型（FBHM，六個偵測器平均）</span>
          <span>CDA</span>
          <span>ASR</span>
        </div>
        <TRow name="只在圖像（BadNet 式）" cda="0.609" asr="0.772" />
        <TRow name="只在文字（BadNL 式）" cda="0.612" asr="0.987" />
        <TRow name="跨模態 CMT" cda="0.630" asr="0.987" hl />
        <div style={{ borderTop: `1px solid ${rule}` }} />
      </div>
      <div style={{ flex: 1, fontSize: 34, lineHeight: 1.65, color: ink2 }}>
        <p style={{ margin: '0 0 26px' }}>只在圖像：ASR 偏低。</p>
        <p style={{ margin: '0 0 22px' }}>只在文字：ASR 與 CMT 相同，但 CDA 最低，而且需要能直接修改文字。</p>
        <p style={{ margin: 0, color: muted }}>CMT 透過 OCR 取得文字端，不需要手動修改。</p>
      </div>
    </div>
  </Frame>
);

/* ───────────── 20. Takeaways ───────────── */

const Takeaways: Page = () => (
  <Frame section="小結" title="論文小結">
    <div style={{ borderBottom: `1px solid ${rule}` }}>
      <Row n="01" head="仇恨迷因偵測器可以被 backdoor attack 攻擊" body="只需要 1% 的毒資料" />
      <Row n="02" head="把 trigger 做成圖中的文字" body="同時影響圖像與文字兩個模態，而且不明顯" />
      <Row n="03" head="Trigger Augmentor" body="兼顧攻擊效果、隱蔽性與誤觸發" />
    </div>
  </Frame>
);

/* ───────────── OCR failure analysis ───────────── */

const PctRow = ({ a, b, c, d, head }: { a: string; b: string; c: string; d: string; head?: boolean }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '210px 150px 150px 150px',
      padding: '16px 0',
      borderBottom: `1px solid ${rule}`,
      fontSize: head ? 28 : 40,
      color: head ? muted : 'var(--osd-text)',
      fontFamily: head ? 'var(--osd-font-body)' : mono,
      fontWeight: head ? 700 : 400,
    }}
  >
    <span>{a}</span>
    <span>{b}</span>
    <span>{c}</span>
    <span>{d}</span>
  </div>
);

const OCRFailure: Page = () => (
  <Frame section="討論" title="OCR 失敗案例的比例">
    <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
      <div>
        <img src={fig6Failure} style={{ width: 560, display: 'block', borderRadius: 4 }} />
        <div style={{ marginTop: 12 }}>
          <Note>論文 Fig. 6：trigger 沒有融入內容的例子</Note>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <PctRow head a="每個資料集抽 100 張" b="商標" c="斜體字" d="手寫字" />
        <PctRow a="FBHM" b="2%" c="0%" d="0%" />
        <PctRow a="MAMI" b="29%" c="2%" d="1%" />
        <PctRow a="HarMeme" b="10%" c="3%" d="2%" />
        <div style={{ marginTop: 36, fontSize: 32, lineHeight: 1.65, color: ink2 }}>
          論文認為比例不高，不影響實用性。但 MAMI 的商標占 29%（多為圖片網站），和它在自動 OCR 下 ASR 最低（0.52）相符，可能有關。
        </div>
        <div style={{ marginTop: 14 }}>
          <Note>最後一點是推論，論文沒有驗證</Note>
        </div>
      </div>
    </div>
  </Frame>
);

/* ───────────── 21. Limitations ───────────── */

const Limitations: Page = () => (
  <Frame section="討論" title="論文的限制">
    <div style={{ borderBottom: `1px solid ${rule}` }}>
      <Row n="01" head="仍然依賴 OCR" body="自動流程下 MAMI 平均 ASR 只有 0.52；附錄失敗案例：商標、斜體、手寫字" />
      <Row n="02" head="防禦評估有限" body="只測 Neural Polarizer，HarMeme 上 CMT 沒有優勢；論文提出的防禦方案沒有實作" />
      <Row n="03" head="Baseline 與受害模型偏少" body="只比 TrojVQA（消融加 FIBA）；偵測器多為 2019–2021 年的架構" />
      <Row n="04" head="數據前後不一致" body="Table 4 的 ΔGE 方向與內文不一致，內文的 USE 數值與表格也不同" />
    </div>
  </Frame>
);

/* ───────────── 22. Improvement candidates ───────────── */

const Cand = ({ k, head, body, src }: { k: string; head: string; body: string; src: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', alignItems: 'baseline', padding: '36px 0', borderTop: `1px solid ${rule}` }}>
    <span style={{ fontFamily: mono, fontSize: 52, fontWeight: 700, color: 'var(--osd-accent)' }}>{k}</span>
    <div>
      <div style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.3 }}>{head}</div>
      <div style={{ fontSize: 32, color: muted, lineHeight: 1.5, marginTop: 8 }}>{body}</div>
    </div>
    <span style={{ fontSize: 26, color: muted, paddingLeft: 30 }}>{src}</span>
  </div>
);

const Ideas: Page = () => (
  <Frame section="改進方向" title="可能的改進方向（討論中）">
    <div style={{ marginBottom: 18 }}>
      <Chip>草案</Chip>
      <span style={{ fontSize: 26, color: muted }}>討論中，以下是根據論文限制與 Future Work 整理的候選</span>
    </div>
    <div style={{ borderBottom: `1px solid ${rule}` }}>
      <Cand k="A" head="改善 OCR 的限制" body="微調 OCR 使其能辨識標點，或讓 trigger 不受 OCR 失敗影響" src="論文 Future Work" />
      <Cand k="B" head="實作防禦" body="實作論文 Sec. F 的「MLLM 重述文字 + diffusion 重繪圖片」，測試 CMT 是否仍然有效" src="論文 Sec. F" />
      <Cand k="C" head="擴大評估" body="加入 MLLM 型偵測器、更多 baseline 與資料集" src="論文 Future Work" />
    </div>
  </Frame>
);

/* ───────────── 23. Our pick (to fill) ───────────── */

const Blank = ({ k, hint }: { k: string; hint: string }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', alignItems: 'baseline', padding: '36px 0', borderTop: `1px solid ${rule}` }}>
    <span style={{ fontSize: 40, fontWeight: 700 }}>{k}</span>
    <span style={{ fontSize: 36, color: muted }}>{hint}</span>
  </div>
);

const OurPick: Page = () => (
  <Frame section="改進方向" title="選定的方向">
    <div style={{ marginBottom: 18 }}>
      <Chip>待填</Chip>
      <span style={{ fontSize: 26, color: muted }}>討論後補上</span>
    </div>
    <div style={{ borderBottom: `1px solid ${rule}` }}>
      <Blank k="方向" hint="（A / B / C，或其他想法）" />
      <Blank k="動機" hint="（對應論文的哪個限制）" />
      <Blank k="做法" hint="（方法、資料集、受害模型）" />
      <Blank k="驗證" hint="（指標、預期結果）" />
    </div>
  </Frame>
);

/* ───────────── 24. Closing ───────────── */

const Closing: Page = () => (
  <div style={fill}>
    <div style={{ position: 'absolute', left: 110, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--osd-accent)', letterSpacing: '0.14em' }}>THANK YOU</div>
      <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 200, fontWeight: 900, letterSpacing: '-0.02em', margin: '10px 0 0', lineHeight: 1.05 }}>
        Q &amp; A
      </div>
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'Meme Trojan 論文導讀',
  createdAt: '2026-10-23T02:59:57.675Z',
};

export const notes: (string | undefined)[] = [
  // 1 Cover
  `大家好，今天報告的論文是 Meme Trojan，發表在 AAAI 2025，作者來自香港浸會大學和 NVIDIA。
這篇是對仇恨迷因偵測器做 backdoor attack。前面大概 18 分鐘講論文，最後 3 分鐘講改進方向。
投影片裡有論文中的仇恨迷因範例，只是用來說明研究。`,
  // 2 Agenda
  `順序是背景、方法、實驗，接著是論文的限制，最後是改進方向。方法和實驗講得比較久。`,
  // 3 What is meme
  `先從迷因說起。迷因是圖加文字，意思由兩邊一起決定。左邊是論文的例子，同一張圖配不同的字，意思可以完全相反。
所以偵測器要同時處理圖像和文字，一般是圖像 encoder 加文字 encoder，再把特徵融合。常用的資料集有 FBHM、MAMI 和 HarMeme，後面的實驗也是用這三個。`,
  // 4 Backdoor 101
  `接著是 backdoor attack，分三步。第一步，在一小部分訓練資料加上 trigger，標籤改成攻擊者指定的。第二步，模型訓練完會學到「有 trigger 就輸出指定標籤」，但在乾淨資料上表現正常，所以不容易被發現。第三步，推論的時候，沒有 trigger 的照常偵測，有 trigger 的仇恨 meme 就會被判成 non-hateful。
先說明兩個指標。CDA 是乾淨資料的準確率，ASR 是攻擊成功率，後面的結果都會看這兩個。`,
  // 5 Attack demo
  `這是論文的第一張圖。上排是正確偵測成 hateful，下排加了 trigger 之後，結果變成 non-hateful。
(a) 是之前的方法 TrojVQA，圖上貼花紋，句首還加了 Consider，很明顯。(b) 和 (c) 是這篇的做法，只在句尾加兩個小點，綠框是放大後的樣子，肉眼很難發現。`,
  // 6 Two problems
  `現有的方法有兩個問題。
第一是效果。實際的自動偵測流程裡，文字是 OCR 從圖片讀出來的，攻擊者沒辦法直接改文字，所以文字 trigger 用不上。
第二是隱蔽性。就算手動加字或貼 patch，也會和圖裡原本的文字不一致，容易被看出來。
作者的想法是，meme 的文字本來就在圖裡，那 trigger 可以直接放在文字的位置。`,
  // 7 Contributions
  `貢獻有三個。第一，這是第一篇針對仇恨迷因偵測的 backdoor attack。第二，提出 Cross-Modal Trigger，一個 trigger 同時影響圖像和文字。第三，Trigger Augmentor，用來降低乾淨 meme 被誤觸發的機率。`,
  // 8 Threat model
  `威脅模型是 black-box。攻擊者可以拿到一部分訓練資料來投毒，論文用 1%，但不能改模型架構或 loss。推論時只能輸入圖片，文字是系統用 OCR 讀的。
目標是把 hateful 判成 non-hateful，同時要有效、不容易被發現，而且不能影響乾淨資料的準確率。`,
  // 9 Trigger pattern
  `這是方法的核心。trigger 就是兩個小白點，放在文字的結尾。
對圖像來說，它是右下角的兩個小方塊，圖像 encoder 看得到。OCR 讀文字的時候，會把它讀成 “..”，文字 encoder 也看得到。所以一個 trigger 同時出現在兩個模態。
用兩個點，是因為單個點或三個點本來就是標點，容易誤觸發；兩個點很小，看起來像表情，不影響句意。`,
  // 10 Injection
  `位置和大小的決定方式是這樣：先用 OCR 拿到文字框，找到文字結尾；大小是文字高度的 1/8；超出圖片邊界就往回放，最後畫上兩個白點。
這樣每張 meme 的 trigger 都會跟著它的文字走。`,
  // 11 False activation
  `但這樣有個問題：真實的 meme 本來就常有點。論文附錄統計，大約 32% 的 meme 含有句點或刪節號。
純白的兩個點和它們太像，乾淨的 meme 也會觸發後門，CDA 就下降了。所以 trigger 要和真實的點有所區別。`,
  // 12 Augmentor mechanism
  `Trigger Augmentor 就是要解決剛剛的誤觸發，做法分三步。
先把初始 trigger 加到 meme 上，訓練一個 ResNet-152 去分辨乾淨的和有 trigger 的 meme。接著取出它對有 trigger 的 meme 產生的特徵，reshape 成 trigger 的大小。最後用 λ 把這個特徵和原本的白點 J 混合，得到最終的 trigger，再像之前一樣畫兩個在文字結尾。
這樣的 trigger 看起來還是兩個小點，但帶有分類器認得出的細節，和真實的句點不一樣。`,
  // 13 Augmentor lambda
  `右邊是 λ 從 0.1 到 1.0 的變化。λ 越小越接近白點，到 0.1 的時候已經擋不住誤觸發；λ 越大差異越明顯，但也越容易被看見。論文取 0.2 當折衷。`,
  // 14 Pipeline
  `把整個流程串起來：(a) 製作毒樣本，(b) 毒樣本混進乾淨資料訓練偵測器，(c) 推論時加上 trigger 發動攻擊。
接下來用公式看一下 (b) 的訓練目標。`,
  // 15 Training objective
  `前面的流程圖 (b) 是用毒樣本訓練偵測器，這頁用公式說明模型為什麼會學到 trigger。
投毒就是把圖加上 trigger，OCR 讀出來的文字也跟著帶 trigger。訓練的目標分兩項：前一項是乾淨樣本，照常學，所以 CDA 不會掉；後一項是加了 trigger 的毒樣本，標籤是 non-hateful，模型就學到「有 trigger 就輸出 non-hateful」，這就是 ASR 的來源。
這是我把論文 Eq. (3) 簡化後的寫法。接下來是實驗。`,
  // 16 Setup
  `實驗用三個資料集、六個受害模型，其中 Mr.Harm 有用到 LLM。Baseline 只有 TrojVQA，因為它是目前唯一的多模態 backdoor 方法。
情境分兩種：手動輸入文字，和 OCR 自動擷取文字。後者比較接近實際情況，也比較難。`,
  // 17 Main result
  `這是六個偵測器的平均 ASR，根據 Table 2 計算。
手動輸入文字的時候，CMT 的 ASR 大多在 0.92 到 0.99。
換成 OCR 自動擷取，所有方法都下降，MAMI 下降最多，CMT 只有 0.52，但仍然高於 TrojVQA 的 0.27。HarMeme 也是 CMT 最高。
另外，FBHM 上 CMT w/o TA 的 ASR 比 CMT 高一點，所以 Augmentor 主要改善的是 CDA，不是 ASR。`,
  // 18 Defense
  `防禦用的是 Neural Polarizer，在 VisualBERT 上測。
FBHM 上，CMT 的 ASR 還是 1.000。作者的解釋是 TrojVQA 的兩個 trigger 差異大，容易被過濾掉，而 CMT 和內容融合得比較好。
但 MAMI 上三種方法都降得很低，HarMeme 上 CMT 還比 TrojVQA 低，所以對防禦的強健性並不是每個資料集都成立。`,
  // 19 Stealth
  `隱蔽性方面，圖像的 PSNR 和 LPIPS 都比 TrojVQA 好；文字只多了 “..”，困惑度和語意相似度也比較好。
有兩點要注意：CMT w/o TA 的 PSNR 其實更高；Table 4 的 ΔGE 方向和內文對不上，所以這頁沒有放。`,
  // 20 Ablation patterns
  `消融實驗比較了幾種 trigger。FIBA 是頻域的隱形攻擊，PSNR 只有 29.9，ASR 和 CDA 都不理想。Consider 這種字 ASR 高，但太明顯。紅色或隨機顏色可以避免誤觸發，但顏色和文字不一致，隱蔽性下降。CMT 是在這幾個之間取得折衷。`,
  // 21 Ablation modal
  `再來看為什麼要跨模態。只在圖像，ASR 偏低，平均 0.77；只在文字，ASR 0.99，和 CMT 一樣，但 CDA 最低。
所以 CMT 的好處不在 ASR 更高，而是不需要手動修改文字，CDA 也比較好。這頁是 FBHM 的平均，根據 Table 6 計算。`,
  // 22 Takeaways
  `小結。第一，仇恨迷因偵測器可以被 1% 的毒資料攻擊。第二，把 trigger 做成圖中的文字，可以同時影響圖像和文字。第三，Trigger Augmentor 兼顧攻擊效果、隱蔽性和誤觸發。
接下來看論文的限制。`,
  // 23 OCR failure
  `先看 OCR。論文附錄統計了 OCR 容易失敗的情況：商標、斜體字和手寫字，每個資料集隨機抽 100 張。
FBHM 幾乎沒有，HarMeme 的商標是 10%，MAMI 的商標有 29%，論文說主要是圖片網站的 logo。
論文的結論是比例不高，不影響實用性。不過 MAMI 的 29% 剛好和它在自動 OCR 下 ASR 最低的結果吻合，這可能是原因之一，但論文沒有驗證，這是推論。`,
  // 24 Limitations
  `論文有幾個限制。第一，仍然依賴 OCR，自動流程下 ASR 下降很多。第二，防禦只測了一種。第三，baseline 和受害模型偏少。第四，表格和內文的數據有些不一致，引用時要小心。
這幾點也是改進方向的出發點。`,
  // 25 Ideas
  `論文的 Future Work 提到幾個方向，整理成三個候選。A，改善 OCR 的限制。B，實作論文 Sec. F 的輸入前處理防禦，測試 CMT 是否仍然有效。C，擴大到更多偵測器和資料集。
這頁是草案，討論後再修改。`,
  // 26 Our pick
  `（討論後填入：方向、動機、做法、驗證方式。）`,
  // 27 Closing
  `以上是報告，謝謝大家，歡迎提問。`,
];

export default [
  Cover,
  Agenda,
  WhatIsMeme,
  Backdoor101,
  AttackDemo,
  TwoProblems,
  Contributions,
  ThreatModel,
  TriggerPattern,
  Injection,
  FalseActivation,
  AugmentorMechanism,
  AugmentorLambda,
  Pipeline,
  TrainingObjective,
  Setup,
  MainResult,
  Defense,
  Stealth,
  AblationPatterns,
  AblationModal,
  Takeaways,
  OCRFailure,
  Limitations,
  Ideas,
  OurPick,
  Closing,
] satisfies Page[];
