# 숏폼 자동화 시각화 — 작업 과정 기록

## 프로젝트 개요
- **목적**: 숏폼 콘텐츠 자동화 시스템의 프로세스를 시각적으로 보여주는 웹 대시보드
- **배포 URL**: https://shortform-visualizer.vercel.app
- **기술 스택**: Vite + React, Vanilla CSS, Canvas API
- **시작일**: 2026-03-24

---

## 1단계: 초기 파이프라인 시각화

### 분석한 원본 프로젝트
- `D:\coding\ccidainsta` — Instagram 자동화 (Python/FastAPI)
- `D:\coding\momcuinsta` — Instagram 자동화 (Python/FastAPI)
- `D:\coding\familyinsta` — Instagram 자동화 (Python/FastAPI)
- `D:\coding\coupang` — 쿠팡 리뷰 자동화 (Node.js/Express)

### 공통 10단계 파이프라인 도출
1. YouTube URL 입력 → 2. 영상 다운로드 → 3. AI 스크립트 생성 → 4. 사용자 확인
5. TTS 음성 합성 → 6. 오디오 처리 → 7. 자막 생성 → 8. 영상 합성
9. 캡션 생성 → 10. Instagram 업로드

### 생성한 파일
- `src/components/PipelineMap.jsx` + `.css` — 리니어 파이프라인 시각화
- `src/components/ProjectCard.jsx` + `.css` — 프로젝트별 상세 카드
- `src/components/Hero.jsx` + `.css` — 히어로 섹션

---

## 2단계: 코스믹 테마 리디자인

### 변경 요청
- 프로젝트명 → Channel A~F (6개로 확장)
- YouTube URL → 소스 URL
- Instagram 업로드 → IG · YT 업로드
- 디자인: 우주 행성 + 옵시디언 네트워크 느낌

### 구현 내용
- **Canvas 별빛 배경**: 200개 별 + 반짝임 애니메이션
- **네뷸라 효과**: 3개의 색상 오브 (보라/시안/핑크), `filter: blur(120px)`
- **오비탈 네트워크**: Core Engine 중심, 6개 채널이 행성처럼 공전
- **동심원 링**: 3개 링이 각각 다른 속도로 회전 (60s/90s/120s)
- **별자리 파이프라인**: 10단계가 빔 애니메이션으로 연결

### 파일 변경
- `src/components/CosmicNetwork.jsx` + `.css` — 새로운 핵심 시각화 (PipelineMap 대체)
- `src/components/Hero.jsx` — 6채널 반영
- `src/index.css` — 우주 다크 테마

---

## 3단계: 인터랙티브 채널 파이프라인

### 변경 요청
채널 클릭 시 해당 채널의 프로세스가 슈루룩 펼쳐지는 연출

### 구현 내용
- **채널별 파이프라인 데이터**: 각 채널마다 조금씩 다른 단계
  - Channel A: OpenAI 스크립트, 사용자 확인
  - Channel B: Claude 스크립트, 오디오 믹싱
  - Channel C: Streamlit 대시보드 확인
  - Channel D: 레퍼런스 영상 → AI 제품 식별 → DM 모니터링 (9단계)
  - Channel E: 자동 승인 시스템
  - Channel F: Gemini 스크립트, 오디오 마스터링
- **swooshIn 애니메이션**: `translateX(40px) scale(0.7) blur(6px)` → `translateX(0) scale(1) blur(0)`
- **디밍 효과**: 비선택 채널 자동으로 투명도 낮아짐
- **채널 컬러 연산**: `color-mix()` 활용한 동적 컬러링

---

## 4단계: 실시간 텔레그램 로그 피드

### 변경 요청
실제로 텔레그램 봇으로 받는 자동화 알림을 시뮬레이션하는 화면 연출

### 구현 내용
- **42개 순환 메시지**: URL, 상태, 성공, 업로드 4가지 타입
- **2.2초 간격 자동 등장**: `setInterval` + 상태 관리
- **LIVE 인디케이터**: 녹색 펄스 애니메이션
- **메시지 타입별 스타일**:
  - 🔗 URL → 파란색 모노스페이스
  - ✅ 성공 → 밝은 텍스트
  - 📱 업로드 → 초록 하이라이트 + 펄스
- **채널별 컬러 뱃지** (A~F) + 실시간 타임스탬프
- **msgSlideIn 애니메이션**: 새 메시지 위에서 슬라이드

### 파일 추가
- `src/components/LiveFeed.jsx` + `.css`

---

## 5단계: 소행성 통계 분기

### 변경 요청
채널 클릭 시 소행성처럼 가지가 뻗으며 통계 표시

### 구현 내용
- **채널별 4개 통계 노드**: 제작 영상, 팔로워, 운영일, 특수 지표
- **asteroidPop 애니메이션**: `scale(0.3) blur(6px)` → `scale(1) blur(0)`
- **연결선**: 행성에서 소행성까지 그라데이션 라인
- **스태거드 딜레이**: 0.08초 간격으로 순차 등장

### 채널별 통계 예시
| 채널 | 영상 | 팔로워 | 운영일 | 특수 |
|------|------|--------|--------|------|
| A | 847 | +12.4K | 142일 | 2.1M 조회 |
| B | 623 | +8.7K | 98일 | 890K 좋아요 |
| C | 1,204 | +21.3K | 187일 | 5계정 동시 |
| D | 312 | ₩4.2M 수익 | 67일 | 1,847 DM |
| E | 534 | +6.1K | 112일 | 99.2% 승인률 |
| F | 276 | +3.8K | 54일 | 680K 조회 |

---

## 프로젝트 구조

```
shortform-visualizer/
├── index.html
├── package.json
├── vite.config.js
├── docs/
│   └── work-process.md        ← 이 파일
└── src/
    ├── App.jsx                 — 메인 앱 (Hero + CosmicNetwork + LiveFeed)
    ├── App.css
    ├── index.css               — 글로벌 우주 테마
    ├── main.jsx
    └── components/
        ├── Hero.jsx            — 히어로 섹션
        ├── Hero.css
        ├── CosmicNetwork.jsx   — 핵심: 오비탈 네트워크 + 파이프라인 + 소행성
        ├── CosmicNetwork.css
        ├── LiveFeed.jsx        — 실시간 텔레그램 로그 시뮬레이션
        └── LiveFeed.css
```

## 핵심 CSS 기법
- `Canvas API` — 별빛 애니메이션 (성능 최적화)
- `color-mix(in srgb, ...)` — CSS 동적 컬러 연산
- `radial-gradient` — 행성/오브 글로우 효과
- `backdrop-filter: blur()` — 글래스모피즘
- `cubic-bezier(0.16, 1, 0.3, 1)` — 스프링 이징 커브
- CSS Custom Properties (`--color`, `--glow`, `--delay`) — 동적 스타일링

## 핵심 React 패턴
- `useRef` + `requestAnimationFrame` — Canvas 별빛 루프
- `useState` + 조건부 className — 채널 선택/디밍/확장 상태
- `setInterval` + `useEffect` — 라이브 피드 자동 메시지 추가
- 인라인 `transform` 연산 — 행성/소행성 위치 계산 (삼각함수)
