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
    status: "published",
    source: "source.md"
  },
  {
    no: "02",
    slug: "02-fabric-workloads-overview",
    title: "Fabric 워크로드 개요 — Lakehouse · Eventhouse · Semantic Model · Ontology · Agent",
    title_en: "Fabric Workloads Overview — Lakehouse · Eventhouse · Semantic Model · Ontology · Agent",
    summary:
      "OneLake 위에서 동작하는 핵심 아이템을 한눈에 정리합니다. Lakehouse·Eventhouse의 역할, Fabric Semantic Model과 Power BI 시맨틱 모델 비교, Ontology·Data Agent·Operation Agent·Copilot의 관계와 선택 기준을 다룹니다.",
    summary_en:
      "A one-page map of the core items that run on OneLake. Covers the roles of Lakehouse and Eventhouse, Fabric Semantic Model vs. Power BI semantic models, and how Ontology, Data Agent, Operation Agent, and Copilot relate and when to use each.",
    tags: ["Lakehouse", "Eventhouse", "Semantic Model", "Ontology", "Data Agent", "Copilot"],
    tags_en: ["Lakehouse", "Eventhouse", "Semantic Model", "Ontology", "Data Agent", "Copilot"],
    updated: "2026-09-21",
    status: "draft",
    source: "source.md"
  },
  {
    no: "03",
    slug: "03-fabric-ontology",
    title: "Fabric 온톨로지 심화 가이드",
    title_en: "Fabric Ontology Deep-Dive Guide",
    summary:
      "온톨로지의 개념과 필요성부터 엔터티·관계 모델링, 데이터 소스 매핑, 시맨틱 레이어 구성, 거버넌스와 재사용까지 온톨로지를 실무에 적용하는 방법을 심화해서 다룹니다.",
    summary_en:
      "A deep dive into applying ontology in practice: from the concept and why it matters to entity/relationship modeling, data source mapping, building a semantic layer, and governance and reuse.",
    tags: ["Ontology", "시맨틱 레이어", "모델링", "지식 그래프", "거버넌스"],
    tags_en: ["Ontology", "Semantic layer", "Modeling", "Knowledge graph", "Governance"],
    updated: "2026-09-21",
    status: "draft",
    source: "source.md"
  },
  {
    no: "04",
    slug: "04-fabric-data-agent",
    title: "Fabric Data Agent 가이드",
    title_en: "Fabric Data Agent Guide",
    summary:
      "자연어로 데이터를 질의하는 Data Agent의 개념부터 생성·구성, 데이터 소스(Lakehouse·Warehouse·Semantic Model·KQL) 연결, 지침·예제 튜닝, Copilot·Teams·API를 통한 소비까지 정리합니다.",
    summary_en:
      "Everything about Data Agent — from the concept of querying data in natural language to creating and configuring it, connecting data sources (Lakehouse, Warehouse, Semantic Model, KQL), tuning instructions and examples, and consuming it through Copilot, Teams, and APIs.",
    tags: ["Data Agent", "Copilot", "자연어 질의", "NL2SQL", "대화형 분석"],
    tags_en: ["Data Agent", "Copilot", "NL query", "NL2SQL", "Conversational analytics"],
    updated: "2026-09-21",
    status: "draft",
    source: "source.md"
  },
  {
    no: "05",
    slug: "05-retail-ontology-demo",
    title: "Retail Ontology Agent 데모 — 가이드 & 설명",
    title_en: "Retail Ontology Agent Demo — Guide & Explainer",
    summary:
      "Lakehouse 관리형 Delta · ADLS 단축 · SharePoint Excel · Eventhouse 네 계층을 하나의 온톨로지로 묶고, Data Agent가 자연어로 'PR9999 캠페인이 왜 재고 부족으로 전환에 실패했는가'를 근거와 함께 도출하는 실제 데모의 구조·데이터·시나리오·운영을 문서화합니다.",
    summary_en:
      "Documents a real demo that unifies four layers (Lakehouse managed Delta, ADLS shortcut, SharePoint Excel, Eventhouse) into one ontology, where a Data Agent derives — with evidence — why campaign PR9999 failed to convert due to inventory scarcity. Covers architecture, data, scenario, and operations.",
    tags: ["Ontology", "Data Agent", "데모", "Lakehouse", "Eventhouse", "SharePoint"],
    tags_en: ["Ontology", "Data Agent", "Demo", "Lakehouse", "Eventhouse", "SharePoint"],
    updated: "2026-09-21",
    status: "published",
    source: "source.md"
  }
];
