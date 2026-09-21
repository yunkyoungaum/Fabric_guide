/**
 * ─────────────────────────────────────────────────────────────
 *  가이드 목록 (Single Source of Truth)
 * ─────────────────────────────────────────────────────────────
 *  새 가이드를 추가할 때는 이 파일의 GUIDES 배열에 항목 하나만 추가하세요.
 *  index.html(허브)은 이 배열을 읽어 카드를 자동 생성합니다.
 *
 *  필드 설명
 *   no       : 가이드 번호 (예: "03", "04-1")
 *   slug     : guides/ 하위 폴더명
 *   title    : 카드 제목
 *   summary  : 1~2문장 요약
 *   tags     : 배지로 표시될 키워드 배열
 *   updated  : 최종 수정일 (YYYY-MM-DD)
 *   status   : "published" | "draft"  (draft는 카드에 DRAFT 배지 표시)
 *   source   : (선택) 마크다운 원본 파일명. 있으면 "원본(.md)" 링크 노출
 * ─────────────────────────────────────────────────────────────
 */
window.GUIDES = [
  {
    no: "01",
    slug: "01-fabric-onboarding",
    title: "Microsoft Fabric 온보딩 가이드 — Capacity · Workspace · 테넌트 설정 · 권한",
    summary:
      "Fabric를 처음 도입할 때 필요한 용량(Capacity) 생성과 SKU 선택, 워크스페이스 구성, 온톨로지·Data Agent·Copilot 기능 활성화(테넌트 설정), 역할·권한 설계를 단계별로 정리합니다.",
    tags: ["온보딩", "Capacity", "Workspace", "테넌트 설정", "권한"],
    updated: "2026-09-21",
    status: "draft",
    source: "source.md"
  },
  {
    no: "02",
    slug: "02-fabric-workloads-overview",
    title: "Fabric 워크로드 개요 — Lakehouse · Eventhouse · Semantic Model · Ontology · Agent",
    summary:
      "OneLake 위에서 동작하는 핵심 아이템을 한눈에 정리합니다. Lakehouse·Eventhouse의 역할, Fabric Semantic Model과 Power BI 시맨틱 모델 비교, Ontology·Data Agent·Operation Agent·Copilot의 관계와 선택 기준을 다룹니다.",
    tags: ["Lakehouse", "Eventhouse", "Semantic Model", "Ontology", "Data Agent", "Copilot"],
    updated: "2026-09-21",
    status: "draft",
    source: "source.md"
  },
  {
    no: "03",
    slug: "03-fabric-ontology",
    title: "Fabric 온톨로지 심화 가이드",
    summary:
      "온톨로지의 개념과 필요성부터 엔터티·관계 모델링, 데이터 소스 매핑, 시맨틱 레이어 구성, 거버넌스와 재사용까지 온톨로지를 실무에 적용하는 방법을 심화해서 다룹니다.",
    tags: ["Ontology", "시맨틱 레이어", "모델링", "지식 그래프", "거버넌스"],
    updated: "2026-09-21",
    status: "draft",
    source: "source.md"
  },
  {
    no: "04",
    slug: "04-fabric-data-agent",
    title: "Fabric Data Agent 가이드",
    summary:
      "자연어로 데이터를 질의하는 Data Agent의 개념부터 생성·구성, 데이터 소스(Lakehouse·Warehouse·Semantic Model·KQL) 연결, 지침·예제 튜닝, Copilot·Teams·API를 통한 소비까지 정리합니다.",
    tags: ["Data Agent", "Copilot", "자연어 질의", "NL2SQL", "대화형 분석"],
    updated: "2026-09-21",
    status: "draft",
    source: "source.md"
  }
];
