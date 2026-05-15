# 포트폴리오 웹사이트 콘텐츠 명세
# src/data/portfolio.ts 기준 데이터 설계

---

## 1. HERO / INTRO 섹션

### 기본 정보
```
name: "최윤정"
nameEn: "Choi Yunjung"
title: "Backend / Full-Stack Developer"
tagline: "운영이 설계를 증명한다"
years: "4년차"
```

### 한 줄 소개 (subtitle)
```
Spring Boot 기반 엔터프라이즈 시스템을 설계·운영하고,
AI 보조 개발 방법론으로 개발 속도의 한계를 직접 실험하는 백엔드 개발자입니다.
```

### About (3~4문장, 섹션 본문용)
```
Java / Spring Boot 기반 백엔드 개발자로, 운영 중인 시스템을 안정적으로
유지·개선하는 일을 중심으로 커리어를 쌓아왔습니다.

제조 대기업 핵심 시스템의 연동 API 설계부터 AWS 인프라 구성, CI/CD 파이프라인
운영까지 개발 전 사이클을 직접 담당했습니다.

Harness 기법 기반 Vibe Coding(Cursor + Claude Code)을 실무에 전면 도입해
8개월 일정을 2개월로 단축하는 등, AI와 협업하는 개발 방식을 방법론 수준으로
내재화했습니다. 사내 최초 AI 개발 도구 공식 도입팀을 이끌어 전사 확산으로
이어진 경험이 있습니다.
```

### 연락처
```
email: "yeshan0224@naver.com"
github: "https://github.com/Layton0-0"
blog: "https://layton0-0.tistory.com"
```

---

## 2. STATS / 숫자로 보는 나 섹션
(히어로 바로 아래 임팩트 수치 배너 — 애니메이션 카운터 효과 추천)

```
[
  { value: "4",     unit: "년차",  label: "실무 개발 경력" },
  { value: "3",     unit: "개",    label: "동시 운영 시스템" },
  { value: "40",    unit: "%",     label: "쿼리 성능 개선" },
  { value: "2,000", unit: "건→0", label: "월 중복 요청 제거" },
  { value: "8→2",   unit: "개월",  label: "AI 도입 일정 단축" },
]
```

---

## 3. SKILLS 섹션

### 카테고리별 구성
```typescript
skills: [
  {
    category: "Backend",
    icon: "Server",  // Lucide icon name
    items: ["Java", "Spring Boot", "MyBatis", "Spring Data JPA",
            "Spring Security", "REST API", "WebSocket / STOMP"]
  },
  {
    category: "Frontend",
    icon: "Monitor",
    items: ["React", "TypeScript", "JSP", "JavaScript", "jQuery",
            "HTML / CSS", "AG Grid"]
  },
  {
    category: "Database",
    icon: "Database",
    items: ["Oracle (RDS)", "MySQL", "MariaDB", "MSSQL",
            "Oracle DB Link", "SQL Tuning"]
  },
  {
    category: "Infra · DevOps",
    icon: "Cloud",
    items: ["AWS EC2 / ALB", "Docker", "Docker Compose",
            "Jenkins", "Tomcat", "Apache", "Linux",
            "GitLab CI", "Cloudflare Workers"]
  },
  {
    category: "Monitoring",
    icon: "BarChart2",
    items: ["Prometheus", "Grafana", "Node Exporter",
            "SQL Exporter"]
  },
  {
    category: "AI · LLM",
    icon: "Cpu",
    items: ["Cursor", "Claude Code", "Ollama (Gemma3:12b)",
            "Harness 기법 · Vibe Coding", "LLM 파이프라인 설계",
            "프롬프트 엔지니어링"]
  },
  {
    category: "협업 · 문서화",
    icon: "FileText",
    items: ["Swagger / OpenAPI", "Jira", "Confluence",
            "Git / GitLab", "사내 Wiki 운영 문서화"]
  }
]
```

---

## 4. EXPERIENCE 섹션

### 회사 정보
```
company: "(주)한국네트웍스"
period: "2022.09 – 현재"
role: "웹 개발자 · Backend / Full-Stack"
client: "주요 고객사: 한국타이어앤테크놀로지"
```

### 업무 항목 (최신순, 타임라인 형태 권장)

---

#### [1] 생산직 전용 모바일 그룹웨어 리뉴얼
```
title: "제조 대기업 생산직 전용 모바일 그룹웨어 리뉴얼"
period: "2026.04 – 2026.06  (오픈 7월 초 타겟)"
badge: "진행 중"
badgeColor: "green"
role: "Backend API · Admin Web · 인프라 · 배포 자동화 전담"

summary:
  한국타이어앤테크놀로지 전사 생산직 대상 레거시 모바일 그룹웨어를
  신규 아키텍처로 전환하는 프로젝트. 백엔드 API, 관리자 웹, AWS 인프라,
  Jenkins 배포 자동화 전 영역 단독 담당.

highlight:
  "Harness 기법 기반 Vibe Coding 실무 전면 도입 → 8개월 일정을 2개월로 단축"

bullets:
  - Spring Boot 기반 모바일 앱 전용 REST API 설계 및 구현
  - JSP + MyBatis 기반 관리자 웹 시스템 개발
  - AWS EC2 + Oracle RDS + MSSQL RDS 인프라 구성
  - Tomcat9 + Jenkins 배포 자동화 파이프라인 구축
  - Cursor + Claude Code 기반 AI 협업 개발 워크플로우 설계·적용

stack: ["Spring Boot", "JSP", "MyBatis", "AWS EC2", "Oracle RDS",
        "MSSQL RDS", "Tomcat9", "Docker", "Jenkins",
        "Cursor", "Claude Code"]
```

---

#### [2] 임직원 카풀 모바일 앱 Backend API
```
title: "임직원 카풀 모바일 앱 백엔드 API 개발"
period: "2025.08 – 2025.12"
badge: "완료"
role: "Backend 전담 · iOS/Android 앱 개발자 협업"

summary:
  사내 임직원 카풀 매칭 모바일 앱의 백엔드 API 전담 설계·개발.
  IDM 인사 데이터 연동으로 별도 회원가입 없이 사내 계정 기반 인증 구현.

bullets:
  - 사내 IDM + EAI Batch 연동으로 임직원 계정 자동 동기화
  - Custom Business Exception + 표준 Response 구조 설계로 앱 협업 효율 향상
  - WebSocket + STOMP 기반 실시간 채팅 (Pub/Sub 구조)
  - Firebase FCM 연동 Push 알림 API · iOS / Android 플랫폼별 분기
  - 휴대폰 번호 암호화 / 복호화로 개인정보 보호
  - Swagger 기반 API 문서 자동화 (테스트용 예시 Request / Response 포함)
  - GitLab + Tomcat + Jenkins 자동 배포 파이프라인 구축

stack: ["Spring Boot", "MyBatis", "WebSocket", "STOMP",
        "Firebase FCM", "AWS EC2", "Oracle RDS", "Docker",
        "Jenkins", "Swagger"]
```

---

#### [3] 타이어 3개 시스템 운영 및 고도화
```
title: "타이어 생산관리·영업관리·수익관리 시스템 운영 및 고도화"
period: "2023.09 – 현재"
badge: "운영 중"
badgeColor: "blue"
role: "Backend / Full-Stack · 운영·유지보수·연간 고도화"

summary:
  한국타이어앤테크놀로지의 타이어 Master Data 코어 시스템을 포함해
  3개 시스템 운영·유지보수·고도화 개발. 연구소·공장·판매·SAP·수익성 분석
  시스템을 잇는 복잡한 연동 구조 전반 담당.

achievements:  ← 이 블록은 카드/강조 박스로 시각화 추천
  [
    {
      title: "수익성 시뮬레이터 연동",
      before: "수기 계산 2주",
      after: "API 연동 5초",
      desc: "Oracle DB Link + REST API 연계 구조 설계"
    },
    {
      title: "SAP 자동 연동",
      before: "수기 입력 → 휴먼 에러 반복",
      after: "휴먼 에러 0건",
      desc: "결재완료 → Jenkins → wsdl2java SOAP → SAP 자동 반영"
    },
    {
      title: "메타데이터 자동 추천",
      before: "연구소 100% 수작업",
      after: "수작업 100% 대체",
      desc: "Oracle View 조건 매칭 + AG Grid 자동 채움"
    },
    {
      title: "대용량 쿼리 튜닝",
      metric1: "성능 40% 개선",
      metric2: "메모리 40% 감소",
      metric3: "I/O 35% 감소",
      desc: "SAP 22만 건 · 타 시스템 115만 건 규모\nCTE 재설계 · 힌트(MATERIALIZE, INDEX, LEADING, USE_NL) · JOIN 최적화"
    },
    {
      title: "중복 인증 요청 제거",
      before: "월 2,000건",
      after: "0건",
      desc: "지역별 품질 인증서 연동 자동화"
    },
    {
      title: "모니터링 환경 구축",
      desc: "Docker Compose 기반 Prometheus + Node Exporter + SQL Exporter\n오픈소스 대안 검토·도입 및 사내 운영 가이드 문서화"
    }
  ]

additionalBullets:
  - 메가존클라우드 협업 온프레미스 IDC → AWS EC2 + RDS 이전 안정화
  - 해외 지법인 사용자 대상 영문 메일·채팅 장애 안내 및 운영 커뮤니케이션

stack: ["Spring Boot", "MyBatis", "Oracle RDS", "Jenkins", "Docker",
        "AWS EC2", "ALB", "Prometheus", "Grafana",
        "SAP EAI", "SOAP / wsdl2java", "AG Grid"]
```

---

#### [4] 전사 그룹웨어·사내 메신저 운영
```
title: "전사 그룹웨어 · 사내 메신저 운영"
period: "2022.12 – 2023.08"
badge: "완료"
role: "System Operator"

summary:
  글로벌 그룹사 전 임직원이 사용하는 메일·전자결재·조직도 시스템 운영.
  한국 10대, 중국 8대, 미국 4대, 유럽 4대 — 총 26대 다국가 서버 통합 관리.

bullets:
  - 글로벌 26대 서버 환경 장애 대응 및 사용자 계정 관리
  - 해외 법인 IT 담당자·현지 인력과 영어로 장애 원인 공유·조치 협의
  - 시차를 고려한 장애 대응 및 점검 일정 조율

stack: ["Linux", "Apache", "Tomcat", "Oracle DB", "IBM Notes"]
```

---

## 5. PROJECTS 섹션

### [개인 1] Neekly Report
```
title: "Neekly Report"
subtitle: "LLM 기반 자연어 일정 추출 · 주간 리포트 자동화 서비스"
period: "2025.07 – 2025.08"
type: "personal"
team: "3인 (Backend 2, Frontend 1)"
role: "Backend API · 인프라 전담"
liveUrl: "neekly-report.cloud"  ← 있으면 기재

description:
  사용자가 입력한 자연어 텍스트에서 LLM이 시간·일정 정보를 추출하고
  구조화된 캘린더 데이터로 변환하는 서비스. AI 기반 주간 리포트 자동 생성.

techDecisions:  ← '왜 이 선택인가' 카드 - 포트폴리오 차별화 핵심
  [
    {
      decision: "외부 API 대신 Ollama 로컬 배포",
      reason: "사용자의 자연어 입력에 개인정보 포함 가능성 → 데이터 서버 외부 전송 차단"
    },
    {
      decision: "@Async + TransactionSynchronization 조합",
      reason: "LLM 응답 지연(수초) 해결. 즉시 응답 반환 후 커밋 완료 시점에 백그라운드 처리 시작 → 데이터 정합성 보장"
    },
    {
      decision: "JWT Access + Refresh Token 분리",
      reason: "보안(단기 만료)과 UX(재발급 자동화) 균형. Custom EntryPoint로 인증 실패 응답 일관화"
    }
  ]

bullets:
  - Local Ollama + Gemma3:12b 로컬 배포, 자연어 → JSON 구조화 파이프라인
  - Spring WebClient 기반 비동기 LLM 호출 및 타임아웃 처리
  - Spring Security + JWT Stateless 인증 시스템
  - MapStruct 기반 Entity-DTO 매핑 자동화
  - Jenkins Pipeline + Docker Compose CI/CD, Oracle Cloud Ubuntu 실서비스 운영

stack: ["Spring Boot 3.5", "Java 21", "Spring Data JPA", "Spring Security",
        "MariaDB", "Ollama", "Gemma3:12b", "WebClient", "MapStruct",
        "Docker Compose", "Jenkins", "Oracle Cloud"]
```

---

### [개인 2] 주식 자동 매매 수익 분석 시스템
```
title: "주식 자동 매매 수익 분석 시스템"
subtitle: "한국투자증권 Open API 기반 자동 매매 · 수익 분석 서비스"
period: "개인 프로젝트 · 단독 개발 · 배포 완료"
type: "personal"
team: "1인 (단독)"
role: "기획 · 설계 · 개발 · 배포 전 과정"

highlight:
  "Harness 기법 기반 Vibe Coding으로 Spring Boot + Python + React
   멀티 서비스 아키텍처를 혼자 기획·개발·배포까지 완성"

architecture:
  services:
    - name: "investment-backend"
      desc: "Spring Boot 매매 API 서버 · 한국투자증권 Open API 연동"
    - name: "investment-data-collector"
      desc: "Python 시세 데이터 수집 서비스"
    - name: "investment-prediction-service"
      desc: "Python 수익 예측 모델 서비스"
    - name: "investment-frontend"
      desc: "React + Vite 수익 분석 대시보드"

bullets:
  - 한국투자증권 Open API 연동 매매 실행·포지션 관리 Backend
  - Python 기반 데이터 수집·예측 서비스를 Spring Boot와 독립 분리
  - React + Vite 기반 실시간 수익 분석 대시보드
  - 전 서비스 배포 인프라 단독 구성

vibeCodingNote:
  "설계 의도를 AI에 구조화해 전달하고 생성 결과를 원리 수준에서
   검증하는 워크플로우로, 1인이 멀티 스택 전 영역을 빠르게 완성한 사례"

stack: ["Spring Boot", "Python", "React", "Vite", "TypeScript",
        "MariaDB", "한국투자증권 Open API", "Cursor", "Claude Code"]
```

---

### [팀 프로젝트] TripDream / 브루맵 / 시반 (교육·팀 과제 묶음)
```
title: "교육 과정 팀 프로젝트"
type: "education"
projects:
  [
    {
      name: "TripDream",
      period: "2023.07 – 2023.08",
      desc: "여행 일정 웹서비스. JWT 인증, AWS S3 이미지 저장, Oracle Cloud + Docker + Jenkins 배포.",
      stack: ["Spring Boot", "JPA", "Spring Security", "MySQL", "Docker", "Jenkins"]
    },
    {
      name: "브루맵",
      period: "2022.04 – 2022.05",
      desc: "주변 술집 추천 서비스. Kakao 지도 API 연동, Git Flow 협업.",
      stack: ["Spring Boot", "JPA", "Thymeleaf", "MySQL", "Kakao Map API"]
    },
    {
      name: "시반",
      period: "2022.05 – 2022.06",
      desc: "운동 루틴 추천 모바일 앱. React Native 크로스 플랫폼(iOS/Android) 지원.",
      stack: ["Spring Boot", "JPA", "React Native", "MySQL"]
    }
  ]
```

---

## 6. VIBE CODING 섹션 (독립 섹션 — 강력 추천)
*다우기술 포함 AI 개발 도구 우대 회사 대상 차별화 포인트*

```
sectionTitle: "AI와 협업하는 개발 방식"

intro:
  단순히 AI 툴을 쓰는 것과, AI와 개발하는 것은 다릅니다.
  Harness 기법을 기반으로 Cursor와 Claude Code를 실무 전 과정에 적용하고 있습니다.

methodology:  ← 3단계 플로우 다이어그램으로 시각화 추천
  steps:
    1. "설계 의도 구조화 — 요구사항·제약 조건·아키텍처 맥락을 AI가 이해할 수 있는 형태로 정리"
    2. "AI 협업 구현 — Cursor / Claude Code로 반복 패턴 자동화, 보일러플레이트 제거"
    3. "원리 기반 검증 — 생성된 코드의 이유와 리스크를 직접 판단, 원리부터 학습한 기반으로 품질 보장"

evidence:  ← 수치 카드
  [
    { label: "실무 적용", value: "그룹웨어 리뉴얼 프로젝트", detail: "8개월 → 2개월" },
    { label: "사내 최초 도입", value: "AI 개발 도구 공식 도입", detail: "팀 설득 → 전사 확산" },
    { label: "단독 풀스택", value: "자동 매매 시스템", detail: "Spring Boot + Python + React 혼자 완성" }
  ]

tools:
  [
    { name: "Cursor", role: "AI 코드 에디터 — 컨텍스트 기반 구현 자동화" },
    { name: "Claude Code", role: "CLI 에이전트 — 설계 검증·리팩토링·문서화" }
  ]
```

---

## 7. EDUCATION & CERTIFICATE 섹션

```
education:
  [
    {
      school: "아주대학교",
      major: "미디어학과 (주전공) · 영어영문학과 (부전공)",
      period: "2016.03 – 2020.02"
    },
    {
      school: "HfWU Nuertingen-Geislingen University",
      major: "독일 교환학생 · 수업 언어: 영어",
      period: "2018.06 – 2019.02"
    },
    {
      school: "K-digital · 지능형 웹서비스 풀스택 개발",
      major: "삼성멀티캠퍼스 · 960시간",
      period: "2021.12 – 2022.06"
    }
  ]

certificates:
  [
    { name: "정보처리기사", date: "2022.06.17" },
    { name: "TOEIC Speaking Intermediate High", date: "2025.11 – 2027.11" }
  ]
```

---

## 8. 페이지 구성 순서 및 UX 제안

```
① Hero           — 이름 · 타이틀 · 한 줄 소개 · CTA 버튼(GitHub / 블로그 / 이메일)
② Stats 배너      — 숫자로 보는 나 (카운터 애니메이션)
③ About          — 3~4문장 소개 + AI 개발 방법론 한 줄 언급
④ Skills         — 카테고리 카드 그리드
⑤ Experience     — 타임라인 형태, 항목 클릭 시 상세 펼침(accordion)
   └ 성과 항목은 before/after 카드로 시각화
⑥ Vibe Coding    — 독립 섹션 (차별화 포인트, 배경색 다르게)
⑦ Projects       — 카드 그리드, 기술 선택 이유(techDecisions) 포함
⑧ Education      — 심플 리스트
⑨ Contact        — 이메일 · GitHub · 블로그
```

---

## 9. 추가 제안 사항

### 넣으면 경쟁력 올라가는 것들

1. **아키텍처 다이어그램** (SVG 또는 이미지)
   - 타이어 시스템 연동 구조도 (연구소 → 코어 → SAP/EAI 흐름)
   - Neekly Report LLM 파이프라인 구조도
   - 자동 매매 멀티 서비스 구조도

2. **기술 선택 이유 (Why 카드)**
   - 면접관이 가장 주목하는 포인트
   - "왜 Ollama 로컬인가", "왜 MyBatis인가", "왜 DB Link인가"
   - 각 프로젝트 카드 안에 토글/탭으로 넣기

3. **블로그 최신 글 연동**
   - tistory RSS 파싱 또는 직접 링크 카드
   - 학습 지속성 어필

4. **다크/라이트 모드**
   - Tailwind v4 기본 지원, Framer Motion으로 전환 애니메이션

5. **OG 태그 / SEO**
   - title: "최윤정 | Backend Developer Portfolio"
   - description: "Spring Boot · AWS · AI 보조 개발 · 4년차 백엔드 개발자"
   - og:image: 프로필 이미지 또는 커스텀 배너

### 빼도 되는 것
- 교육 과정 팀 프로젝트 3개는 하나의 묶음 카드로 축약 (지면 낭비 방지)
- 스킬 섹션에 "IDE" 같은 도구 카테고리는 AI 개발 도구 카테고리로 흡수
