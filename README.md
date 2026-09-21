# Microsoft Fabric 실무 가이드 모음

Fabric 도입·운영에서 반복적으로 마주치는 주제를 **가이드 단위**로 정리하는 저장소입니다.

🔗 **사이트**: <https://yunkyoungaum.github.io/Fabric_guide/>

---

## 가이드 목록

| No | 가이드 | 주제 | 상태 | 링크 |
|----|--------|------|------|------|
| 01 | Microsoft Fabric 온보딩 가이드 | Capacity, Workspace, 테넌트 설정, 권한 | draft | [보기](https://yunkyoungaum.github.io/Fabric_guide/guides/01-fabric-onboarding/) |
| 02 | Fabric 워크로드 개요 | Lakehouse, Eventhouse, Semantic Model, Ontology, Data/Operation Agent, Copilot | draft | [보기](https://yunkyoungaum.github.io/Fabric_guide/guides/02-fabric-workloads-overview/) |
| 03 | Fabric 온톨로지 심화 가이드 | Ontology, 시맨틱 레이어, 모델링, 거버넌스 | draft | [보기](https://yunkyoungaum.github.io/Fabric_guide/guides/03-fabric-ontology/) |
| 04 | Fabric Data Agent 가이드 | Data Agent, 자연어 질의, 데이터 소스 연결, 소비 채널 | draft | [보기](https://yunkyoungaum.github.io/Fabric_guide/guides/04-fabric-data-agent/) |
| 05 | Retail Ontology Agent 데모 — 가이드 & 설명 | 온톨로지 데모, 4개 소스 통합, Data Agent 시나리오·운영 | published | [보기](https://yunkyoungaum.github.io/Fabric_guide/guides/05-retail-ontology-demo/) |

### 읽는 순서 추천

```
처음이라면          01 온보딩 → 02 워크로드 개요
개념 지도를 잡으려면  02 워크로드 개요
온톨로지를 파려면     02 → 03 온톨로지 심화
자연어 분석을 하려면  03 → 04 Data Agent
```

> 목록의 **정본(Single Source of Truth)은 [`guides.js`](guides.js)** 입니다.
> 루트 `index.html`(허브)은 이 파일을 읽어 카드를 자동 생성하므로, 허브 HTML을 직접 수정할 필요가 없습니다.

---

## 저장소 구조

```
.
├── index.html                  # 허브(랜딩) 페이지 — guides.js를 읽어 카드 자동 생성
├── guides.js                   # ★ 가이드 목록 정본. 새 가이드는 여기에 항목 추가
├── assets/
│   └── guide-nav.js            # 각 가이드 상단의 "← 가이드 목록" 링크 (공통)
├── guides/
│   ├── 01-fabric-onboarding/
│   │   ├── index.html
│   │   └── source.md
│   ├── 02-fabric-workloads-overview/
│   │   ├── index.html
│   │   └── source.md
│   ├── 03-fabric-ontology/
│   │   ├── index.html
│   │   └── source.md
│   ├── 04-fabric-data-agent/
│   │   ├── index.html
│   │   └── source.md
│   └── _template/
│       └── index.html          # 새 가이드 시작용 빈 템플릿
└── README.md
```

---

## 새 가이드 추가하는 방법

### 1단계 — 폴더 만들기

`guides/` 아래에 `<번호>-<영문 슬러그>` 형식으로 폴더를 만듭니다.

```bash
cp -r guides/_template guides/05-fabric-warehouse
```

### 2단계 — 문서 작성

`guides/05-fabric-warehouse/index.html`을 편집합니다.

- 템플릿에는 **Clawpilot 테마 변수(`--cp-*`)** 와 테마 자동 감지 스크립트가 이미 포함되어 있습니다.
- 색상은 반드시 `var(--cp-*)` 변수를 사용하고, 하드코딩된 hex 값은 쓰지 마세요.
- 문서 하단의 `<script src="../../assets/guide-nav.js"></script>` 는 **삭제하지 마세요** (목록으로 돌아가는 링크).
- 마크다운으로 먼저 작성했다면 같은 폴더에 `source.md`로 함께 커밋하면 유지보수가 편합니다.

### 3단계 — `guides.js`에 항목 추가

```js
window.GUIDES = [
  // ... 기존 항목 ...
  {
    no: "05",
    slug: "05-fabric-warehouse",
    title: "Fabric Warehouse 가이드",
    summary: "T-SQL 기반 웨어하우스의 설계와 Lakehouse와의 선택 기준을 정리합니다.",
    tags: ["Warehouse", "T-SQL"],
    updated: "2026-09-21",
    status: "published",   // 작성 중이면 "draft"
    source: "source.md"    // 마크다운 원본이 없으면 이 줄 생략
  }
];
```

| 필드 | 설명 |
|------|------|
| `no` | 가이드 번호 (정렬 기준). 하위 문서가 필요하면 `04-1` 형식 사용 가능 |
| `slug` | `guides/` 하위 폴더명과 **정확히 일치**해야 함 |
| `title` | 카드 제목 |
| `summary` | 1~2문장 요약 |
| `tags` | 배지로 표시될 키워드 배열 (허브 검색에도 사용) |
| `updated` | 최종 수정일 `YYYY-MM-DD` |
| `status` | `published` 또는 `draft` (draft는 배지 표시) |
| `source` | (선택) 마크다운 원본 파일명 |

### 4단계 — README 표에 한 줄 추가하고 커밋

```bash
git add .
git commit -m "docs: add guide 05 - Fabric Warehouse"
git push
```

GitHub Pages가 자동 배포합니다(보통 1~5분).

---

## GitHub Pages 배포 설정

저장소 **Settings → Pages** 에서 다음을 선택합니다.

- **Source**: `Deploy from a branch`
- **Branch**: `main` / `(root)`

저장하면 `https://yunkyoungaum.github.io/Fabric_guide/` 로 배포됩니다.

---

## 로컬 미리보기

`index.html`은 `guides.js`를 `<script src>`로 읽으므로 `file://`로 열어도 동작합니다.
실제 배포 환경과 동일하게 확인하려면 로컬 서버를 쓰는 편이 안전합니다.

```bash
python -m http.server 8000
# → http://localhost:8000
```

---

## 이중 언어(한국어 / English)

모든 페이지는 우측 상단 토글로 **한국어 ↔ English**를 전환합니다. 구현은 공용 자산 `assets/i18n.js` 하나로 처리됩니다.

- 페이지에 `<script src="assets/i18n.js"></script>`(허브) 또는 `../../assets/i18n.js`(가이드)를 넣으면 **언어 토글 바가 자동 삽입**됩니다.
- `<body>`에 기본값 `data-lang="ko"`를 둡니다.
- 콘텐츠는 언어별로 감쌉니다 — 한국어는 `<div class="lang-ko">…</div>`, 영어는 `<div class="lang-en">…</div>`. CSS가 현재 언어가 아닌 블록을 자동으로 숨깁니다.
- 선택한 언어는 `localStorage`와 URL `?lang=` 파라미터로 유지되어 **페이지를 이동해도 이어집니다**.
- 허브 카드의 이중 언어는 `guides.js`의 `title_en` · `summary_en` · `tags_en` 필드로 처리합니다(한국어 필드는 기존대로). 새 가이드를 추가할 때 이 EN 필드도 함께 채우세요.
- 새 가이드는 `guides/_template/index.html`을 복사하면 `lang-ko`/`lang-en` 뼈대와 토글이 이미 포함되어 있습니다.

## 작성 규칙

1. **테마 일관성** — 모든 가이드는 `--cp-*` CSS 변수를 사용합니다. 색상 하드코딩 금지.
1-1. **이중 언어** — 본문은 `lang-ko`/`lang-en` 블록으로 함께 작성하고, 카드용 EN 필드(`*_en`)도 `guides.js`에 채웁니다.
2. **폰트** — `"Segoe UI", Aptos, Calibri, ...` / 코드는 `Consolas, "Courier New", ...`
3. **자기완결형(self-contained)** — 가이드 1개는 HTML 파일 1개로 완결되게 유지합니다. 공통 자산은 `assets/`에만 둡니다.
4. **검증 가능한 내용** — 기능명·설정 경로·제품 용어는 공식 문서로 확인한 값을 사용하고, 참고 링크를 문서 말미에 남깁니다.
5. **번호는 재사용하지 않음** — 가이드를 폐기해도 번호는 비워두고 다음 번호를 씁니다.
