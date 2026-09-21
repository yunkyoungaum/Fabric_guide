/**
 * ─────────────────────────────────────────────────────────────
 *  가이드 목록 (Single Source of Truth) · Bilingual (KO/EN)
 * ─────────────────────────────────────────────────────────────
 *  새 가이드를 추가할 때는 이 파일의 GUIDES 배열에 항목 하나만 추가하세요.
 *  index.html(허브)은 이 배열을 읽어 카드를 자동 생성합니다.
 *
 *  필드 설명
 *   no          : 가이드 번호 (예: "03", "04-1")
 *   slug        : guides/ 하위 폴더명
 *   title       : 카드 제목 (한국어)
 *   title_en    : 카드 제목 (영어)
 *   summary     : 1~2문장 요약 (한국어)
 *   summary_en  : 1~2문장 요약 (영어)
 *   tags        : 배지 키워드 배열 (한국어)
 *   tags_en     : 배지 키워드 배열 (영어)
 *   updated     : 최종 수정일 (YYYY-MM-DD)
 *   status      : "published" | "draft"
 *   source      : (선택) 마크다운 원본 파일명
 * ─────────────────────────────────────────────────────────────
 */
window.GUIDES = [
  {
    no: "01",
    slug: "01-fabric-onboarding",
    title: "Microsoft Fabric 온보딩 가이드 — Capacity · Workspace · 테넌트 설정 · 권한",
    title_en: "Microsoft Fabric Onboarding Guide — Capacity · Workspace · Tenant Settings · Permissions",
    summary:
      "Fabric를 처음 도입할 때 필요한 용량(Capacity) 생성과 SKU 선택, 워크스페이스 구성, 온톨로지·Data Agent·Copilot 기능 활성화(테넌트 설정), 역할·권한 설계를 단계별로 정리합니다.",
    summary_en:
      "A step-by-step walkthrough for teams adopting Fabric: creating a capacity and choosing an SKU, setting up workspaces, enabling AI features (Copilot, Data Agent, ontology) via tenant settings, and designing roles and permissions.",
    tags: ["온보딩", "Capacity", "Workspace", "테넌트 설정", "권한"],
    tags_en: ["Onboarding", "Capacity", "Workspace", "Tenant settings", "Permissions"],
    updated: "2026-09-21",
    status: "published"
  },
  {
    no: "02",
    slug: "02-fabric-workloads-overview",
    title: "Fabric 워크로드 개요 — Lakehouse · Eventhouse · Semantic Model · Ontology · Agent",
    title_en: "Fabric Workloads Overview — Lakehouse · Eventhouse · Semantic Model · Ontology · Agent",
    summary:
      "작성 중인 목차입니다. Lakehouse·Eventhouse의 역할, Fabric의 Power BI 시맨틱 모델과 저장 모드(Import·DirectQuery·Direct Lake), Ontology·Data Agent·Operations Agent·Copilot의 관계와 선택 기준을 다룰 예정입니다.",
    summary_en:
      "Draft outline. Planned topics include Lakehouse and Eventhouse, Power BI semantic models in Fabric and their storage modes (Import, DirectQuery, Direct Lake), and how Ontology, Data Agent, Operations Agent, and Copilot relate.",
    tags: ["Lakehouse", "Eventhouse", "Semantic Model", "Ontology", "Data Agent", "Copilot"],
    tags_en: ["Lakehouse", "Eventhouse", "Semantic Model", "Ontology", "Data Agent", "Copilot"],
    updated: "2026-09-21",
    status: "draft"
  },
  {
    no: "03",
    slug: "03-fabric-ontology",
    title: "Fabric 온톨로지 심화 가이드",
    title_en: "Fabric Ontology Deep-Dive Guide",
    summary:
      "작성 중인 목차입니다. Fabric IQ의 Ontology(미리 보기)의 개념, 엔터티·관계 모델링, 데이터 바인딩, 시맨틱 레이어, 거버넌스와 재사용을 다룰 예정입니다.",
    summary_en:
      "Draft outline for Ontology (preview) in Fabric IQ: concepts, entity/relationship modeling, data bindings, the semantic layer, governance, and reuse. Detailed procedures are still to be written.",
    tags: ["Ontology", "시맨틱 레이어", "모델링", "지식 그래프", "거버넌스"],
    tags_en: ["Ontology", "Semantic layer", "Modeling", "Knowledge graph", "Governance"],
    updated: "2026-09-21",
    status: "draft"
  },
  {
    no: "04",
    slug: "04-fabric-data-agent",
    title: "Fabric Data Agent 가이드",
    title_en: "Fabric Data Agent Guide",
    summary:
      "작성 중인 목차입니다. Data Agent의 개념, 생성·구성, 지원 데이터 소스 연결, 지침·예제 튜닝, Microsoft 365 Copilot·Teams·API 연동을 다룰 예정입니다.",
    summary_en:
      "Draft outline covering Data Agent concepts, creation, supported data sources, instructions and example queries, and integration with Microsoft 365 Copilot, Teams, and APIs. Detailed procedures are still to be written.",
    tags: ["Data Agent", "Copilot", "자연어 질의", "NL2SQL", "대화형 분석"],
    tags_en: ["Data Agent", "Copilot", "NL query", "NL2SQL", "Conversational analytics"],
    updated: "2026-09-21",
    status: "draft"
  },
  {
    no: "05",
    slug: "05-retail-ontology-demo",
    title: "Retail Ontology Agent 데모 — 가이드 & 설명",
    title_en: "Retail Ontology Agent Demo — Guide & Explainer",
    summary:
      "Lakehouse · 외부 Delta 단축 · SharePoint Excel · Eventhouse를 활용한 리테일 데모 기록입니다. 온톨로지와 Data Agent로 PR9999 캠페인의 이벤트 비율과 재고 부족의 연관성을 살펴보고, 공식 바인딩 제한과 재현 시 주의사항을 구분합니다.",
    summary_en:
      "Records a retail demo using Lakehouse, external Delta shortcuts, SharePoint Excel, and Eventhouse. Ontology and Data Agent explore associations between PR9999 event ratios and inventory scarcity, with official binding restrictions and reproduction caveats distinguished from observations.",
    tags: ["Ontology", "Data Agent", "데모", "Lakehouse", "Eventhouse", "SharePoint"],
    tags_en: ["Ontology", "Data Agent", "Demo", "Lakehouse", "Eventhouse", "SharePoint"],
    updated: "2026-09-21",
    status: "published"
  }
];
