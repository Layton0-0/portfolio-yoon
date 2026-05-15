export const personal = {
  name: '최윤정',
  nameEn: 'Choi Yunjung',
  role: 'Backend / Full-Stack Developer',
  yearsExp: '4년차',
  email: 'yeshan0224@kakao.com',
  github: 'https://github.com/Layton0-0',
  githubUser: 'Layton0-0',
  blog: 'https://layton0-0.tistory.com/',
  blogDisplay: 'layton0-0.tistory.com',
  subtitle:
    'Spring Boot 기반 엔터프라이즈 시스템을 설계·운영하고,\nAI 보조 개발 방법론으로 개발 속도의 한계를 넘는 백엔드/풀스택 개발자입니다.',
  heroTags: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Vibe Coding'],
}

// 숫자 형태(value)만 카운터 애니메이션 / 특수 형태는 페이드인
export const stats = [
  { value: '4',     unit: '년차',  label: '실무 개발 경력' },
  { value: '3',     unit: '개',    label: '동시 운영 시스템' },
  { value: '40',    unit: '%',     label: '쿼리 성능 개선' },
  { value: '2,000', unit: '건→0', label: '월 중복 요청 제거' },
  { value: '8→2',   unit: '개월',  label: 'AI 도입 일정 단축' },
]

export const specialties = [
  { title: 'Spring Boot 백엔드', desc: '엔터프라이즈급 API 설계 및 시스템 연동' },
  { title: 'CI/CD 자동화', desc: 'Jenkins · Docker · GitLab 파이프라인' },
  { title: 'AWS & 클라우드 인프라', desc: 'EC2 · Docker Compose WAS 운영 및 이전' },
  { title: 'DB 최적화', desc: 'Oracle · Query 튜닝 · 대용량 데이터 설계' },
  { title: 'AI 보조 개발', desc: 'Cursor + Claude Code Harness 기반 Vibe Coding' },
  { title: '시스템 연동', desc: 'SAP EAI · Firebase · 외부 API 통합 아키텍처' },
]

export interface TechCategory {
  category: string
  tag: string
  color: string
  items: string[]
}

export const techStack: TechCategory[] = [
  {
    category: 'Backend',
    tag: 'Backend',
    color: 'blue',
    items: ['Java', 'Spring Boot', 'MyBatis', 'Spring Data JPA', 'Spring Security', 'REST API', 'WebSocket / STOMP'],
  },
  {
    category: 'Frontend',
    tag: 'Frontend',
    color: 'purple',
    items: ['React', 'TypeScript', 'JSP', 'JavaScript', 'jQuery', 'HTML / CSS', 'AG Grid'],
  },
  {
    category: 'Database',
    tag: 'Database',
    color: 'orange',
    items: ['Oracle (RDS)', 'MySQL', 'MariaDB', 'MSSQL', 'Oracle DB Link', 'SQL Tuning'],
  },
  {
    category: 'Infra · DevOps',
    tag: 'DevOps',
    color: 'teal',
    items: ['AWS EC2 / ALB', 'Docker', 'Docker Compose', 'Jenkins', 'Tomcat', 'Apache', 'Linux', 'GitLab CI', 'Cloudflare Workers'],
  },
  {
    category: 'Monitoring',
    tag: 'Monitoring',
    color: 'green',
    items: ['Prometheus', 'Grafana', 'Node Exporter', 'SQL Exporter'],
  },
  {
    category: 'AI · LLM',
    tag: 'AI/LLM',
    color: 'indigo',
    items: ['Cursor', 'Claude Code', 'Ollama (Gemma3:12b)', 'Harness 기법 · Vibe Coding', 'LLM 파이프라인 설계', '프롬프트 엔지니어링'],
  },
  {
    category: '협업 · 문서화',
    tag: '협업',
    color: 'violet',
    items: ['Swagger / OpenAPI', 'Jira', 'Confluence', 'Git / GitLab', '사내 Wiki 운영'],
  },
]

export interface Achievement {
  title: string
  before?: string
  after?: string
  metric1?: string
  metric2?: string
  metric3?: string
  desc: string
}

export interface ExperienceProject {
  title: string
  period: string
  badge: string
  badgeColor?: 'green' | 'blue'
  role: string
  description: string
  highlight?: string
  achievements?: Achievement[]
  bullets: string[]
  additionalBullets?: string[]
  badges: string[]
}

export const experience = {
  company: '(주)한국네트웍스',
  role: '웹 개발자 · Backend / Full-Stack',
  period: '2022.09 – 현재',
  client: '주요 고객사: 한국타이어앤테크놀로지',
  projects: [
    {
      title: '제조 대기업 생산직 전용 모바일 그룹웨어 리뉴얼',
      period: '2026.04 – 2026.06',
      badge: '진행 중',
      badgeColor: 'green',
      role: 'Backend API · Admin Web · 인프라 · 배포 자동화 전담',
      description:
        '한국타이어 전사 생산직 대상 레거시 그룹웨어를 신규 아키텍처로 전환. API·관리자 웹·AWS·Jenkins 전 영역 단독 담당.',
      highlight: '8개월 일정을 2개월로 단축 — Harness 기법 Vibe Coding 실무 전면 도입',
      bullets: [
        'Spring Boot 기반 모바일 REST API 설계·구현',
        'JSP + MyBatis 관리자 웹 개발',
        'AWS EC2 + Oracle RDS + MSSQL RDS 인프라 구성',
        'Tomcat9 + Jenkins 배포 파이프라인 구축',
        'Cursor + Claude Code AI 워크플로우 설계·적용',
      ],
      badges: ['Spring Boot', 'JSP', 'MyBatis', 'AWS EC2', 'Oracle RDS', 'MSSQL RDS', 'Tomcat9', 'Docker', 'Jenkins', 'Cursor', 'Claude Code'],
    },
    {
      title: '임직원 카풀 모바일 앱 백엔드 API 개발',
      period: '2025.08 – 2025.12',
      badge: '완료',
      role: 'Backend 전담 · iOS / Android 앱 협업',
      description:
        '사내 카풀 매칭 앱 백엔드 API 전담. IDM 연동으로 별도 회원가입 없이 사내 계정 인증 구현.',
      bullets: [
        'IDM + EAI Batch 연동 — 임직원 계정 자동 동기화',
        'Custom Exception + 표준 Response 구조 설계',
        'WebSocket + STOMP 실시간 채팅 구현',
        'Firebase FCM Push 알림 — iOS / Android 분기',
        '휴대폰 번호 암호화·복호화 개인정보 처리',
        'Swagger API 문서 자동화',
        'GitLab + Jenkins 자동 배포 파이프라인',
      ],
      badges: ['Spring Boot', 'MyBatis', 'WebSocket', 'STOMP', 'Firebase FCM', 'AWS EC2', 'Oracle RDS', 'Docker', 'Jenkins', 'Swagger'],
    },
    {
      title: '타이어 생산관리·영업관리·수익관리 시스템 운영 및 고도화',
      period: '2023.09 – 현재',
      badge: '운영 중',
      badgeColor: 'blue',
      role: 'Backend / Full-Stack · 운영·유지보수·연간 고도화',
      description:
        '타이어 Master Data 코어 시스템 포함 3개 시스템 운영·고도화. 연구소·공장·SAP·수익성 분석을 잇는 연동 구조 전담.',
      achievements: [
        {
          title: '수익성 시뮬레이터 연동',
          before: '수기 계산 2주',
          after: 'API 연동 5초',
          desc: 'Oracle DB Link + REST API 연계 구조 설계',
        },
        {
          title: 'SAP 자동 연동',
          before: '수기 입력 · 휴먼 에러 반복',
          after: '휴먼 에러 0건',
          desc: '결재완료 → Jenkins → SOAP → SAP 자동 반영',
        },
        {
          title: '메타데이터 자동 추천',
          before: '연구소 100% 수작업',
          after: '수작업 100% 자동화',
          desc: 'Oracle View 조건 매칭 + AG Grid 자동 채움',
        },
        {
          title: '대용량 쿼리 튜닝',
          metric1: '성능 40% 개선',
          metric2: '메모리 40% 감소',
          metric3: 'I/O 35% 감소',
          desc: 'CTE 재설계 · 힌트(MATERIALIZE, INDEX) · JOIN 최적화',
        },
        {
          title: '중복 인증 요청 제거',
          before: '월 2,000건',
          after: '0건',
          desc: '지역별 품질 인증서 연동 자동화',
        },
        {
          title: '모니터링 환경 구축',
          desc: 'Docker Compose 기반 Prometheus + Grafana + Node/SQL Exporter',
        },
      ],
      additionalBullets: [
        '메가존클라우드 협업 — 온프레미스 IDC → AWS EC2 이전',
        '해외 법인 대상 영문 장애 안내 및 운영 커뮤니케이션',
      ],
      bullets: [],
      badges: ['Spring Boot', 'MyBatis', 'Oracle RDS', 'Jenkins', 'Docker', 'AWS EC2', 'ALB', 'Prometheus', 'Grafana', 'SAP EAI', 'AG Grid'],
    },
    {
      title: '전사 그룹웨어 · 사내 메신저 운영',
      period: '2022.12 – 2023.08',
      badge: '완료',
      role: 'System Operator',
      description:
        '글로벌 그룹사 전 임직원 메일·전자결재·조직도 시스템 운영. 총 26대 다국가 서버 통합 관리.',
      bullets: [
        '글로벌 26대 서버 장애 대응 및 계정 관리',
        '해외 IT 담당자와 영어로 장애 원인 협의',
        '시차 고려 점검 일정 조율',
      ],
      badges: ['Linux', 'Apache', 'Tomcat', 'Oracle DB', 'IBM Notes'],
    },
  ] as ExperienceProject[],
}

export const vibeCoding = {
  intro:
    '단순히 AI 툴을 쓰는 것과, AI와 개발하는 것은 다릅니다. Harness 기법을 기반으로 Cursor와 Claude Code를 실무 전 과정에 적용하고 있습니다.',
  steps: [
    {
      step: 1,
      title: '설계 의도 구조화',
      desc: '요구사항·제약·아키텍처 맥락을 AI가 이해할 수 있는 형태로 정리',
    },
    {
      step: 2,
      title: 'AI 협업 구현',
      desc: 'Cursor / Claude Code로 반복 패턴 자동화, 보일러플레이트 제거',
    },
    {
      step: 3,
      title: '원리 기반 검증',
      desc: '생성 코드의 이유와 리스크를 직접 판단 — 원리 기반 품질 보장',
    },
  ],
  evidence: [
    { label: '실무 적용', value: '그룹웨어 리뉴얼', detail: '8개월 → 2개월' },
    { label: '사내 최초 도입', value: 'AI 개발 도구 공식화', detail: '팀 설득 → 전사 확산' },
    { label: '단독 풀스택', value: '자동 매매 시스템', detail: 'Spring Boot + Python + React' },
  ],
  tools: [
    { name: 'Cursor', role: 'AI 코드 에디터 — 컨텍스트 기반 구현 자동화' },
    { name: 'Claude Code', role: 'CLI 에이전트 — 설계 검증·리팩토링·문서화' },
  ],
}

export interface TechDecision {
  decision: string
  reason: string
}

export interface Project {
  name: string
  subtitle?: string
  period: string
  type: string
  liveUrl?: string
  description: string
  vibeCodingNote?: string
  bullets: string[]
  techDecisions?: TechDecision[]
  badges: string[]
  highlightBadge: string | null
  github: string | null
}

export const projects: Project[] = [
  {
    name: 'Neekly Report',
    subtitle: 'LLM 기반 자연어 일정 추출 · 주간 리포트 자동화',
    period: '2025.07 – 2025.08',
    type: '팀 프로젝트 (3인 · Backend + 인프라 담당)',
    description: '자연어에서 LLM으로 일정을 추출·구조화하고 AI 주간 리포트를 자동 생성하는 서비스.',
    bullets: [
      'Ollama + Gemma3:12b 로컬 배포 — 자연어 → JSON 파이프라인',
      '@Async + TransactionSynchronization — 즉시 응답 + 백그라운드 처리',
      'Spring Security + JWT (Access/Refresh) Stateless 인증',
      'Jenkins + Docker Compose + Oracle Cloud CI/CD',
    ],
    techDecisions: [
      {
        decision: 'Ollama 로컬 배포',
        reason: '사용자 입력에 개인정보 포함 가능 → 외부 API 전송 차단',
      },
      {
        decision: '@Async + TransactionSynchronization',
        reason: 'LLM 응답 지연 해결 — 커밋 완료 시점에 백그라운드 처리 시작',
      },
      {
        decision: 'JWT Access + Refresh 분리',
        reason: '보안(단기 만료)과 UX(재발급 자동화) 균형',
      },
    ],
    badges: ['LLM · AI', 'Spring Boot 3.5', 'Java 21', 'JPA', 'MariaDB', 'Ollama', 'Compose', 'Jenkins'],
    highlightBadge: 'LLM · AI',
    github: 'https://github.com/spec-up-project/BACKEND/tree/dev',
  },
  {
    name: '주식 자동 매매 수익 분석 시스템',
    subtitle: '한국투자증권 Open API 기반 자동 매매 · 수익 분석',
    period: '2025.03 – 2025.04',
    type: '1인 Vibe Coding (Cursor + Claude Code)',
    description:
      '한국투자증권 Open API 연동 자동 매매 시스템. 기획·설계·개발·배포 전 과정 1인 완성.',
    vibeCodingNote:
      '설계 의도를 AI에 구조화 전달 → 결과를 원리 수준에서 검증. 멀티 스택 전 영역을 빠르게 완성한 1인 사례.',
    bullets: [
      'Spring Boot 매매 API — 한국투자증권 Open API 연동',
      'Python 데이터 수집·예측 서비스 분리 구성',
      'React + Vite 수익 분석 대시보드',
      'Docker Compose + GitHub Actions CI/CD',
    ],
    badges: ['Vibe Coding', 'Spring Boot 3.2', 'Python', 'React 18', 'TypeScript', 'MariaDB', 'Docker'],
    highlightBadge: 'Vibe Coding',
    github: 'https://github.com/Layton0-0/auto-investment-project',
  },
]

export const education = [
  {
    school: '아주대학교',
    detail: '미디어학과 (주전공) · 영어영문학과 (부전공)',
    period: '2016.03 – 2020.02',
  },
  {
    school: 'HfWU Nuertingen-Geislingen University',
    detail: '독일 교환학생 · 수업 언어: 영어',
    period: '2018.06 – 2019.02',
  },
  {
    school: 'K-digital · 지능형 웹서비스 풀스택 개발',
    detail: '삼성멀티캠퍼스 · 960시간',
    period: '2021.12 – 2022.06',
  },
]

export const certifications = [
  { name: '정보처리기사', meta: '취득 2022.06.17', type: 'cert' },
  {
    name: 'TOEIC Speaking · Intermediate High',
    meta: '2025.11 – 2027.11 · 독일 교환학생 경험',
    type: 'lang',
  },
]
