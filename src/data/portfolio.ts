export const personal = {
  name: '최윤정',
  role: '백엔드 · 풀스택 웹 개발자',
  yearsExp: '4년차',
  email: 'yeshan0224@kakao.com',
  github: 'https://github.com/Layton0-0',
  githubUser: 'Layton0-0',
  blog: 'https://layton0-0.tistory.com/',
  blogDisplay: 'layton0-0.tistory.com',
  description:
    'Spring Boot 기반 엔터프라이즈 시스템 개발 4년차. 타이어 생산관리 코어부터 AWS 마이그레이션, CI/CD 파이프라인, AI 보조 개발까지 — 개발의 전 사이클을 직접 담당합니다.',
  heroTags: ['Java', 'Spring Boot', 'AWS', 'Docker', 'Vibe Coding'],
}

export const stats = [
  { value: '4+', label: '년 개발 경력' },
  { value: '6+', label: '담당 프로젝트' },
  { value: '1인', label: 'Vibe Coding 프로젝트' },
]

export const specialties = [
  { title: 'Spring Boot 백엔드', desc: '엔터프라이즈급 API 설계 및 시스템 연동' },
  { title: 'CI/CD 자동화', desc: 'Jenkins · Docker · GitHub Actions 파이프라인' },
  { title: 'AWS & 클라우드 인프라', desc: 'EC2 · Docker Compose 기반 WAS 운영 및 이전' },
  { title: 'DB 최적화', desc: 'Oracle View · Query 튜닝 · 대용량 데이터 설계' },
  { title: 'AI 보조 개발', desc: 'Cursor + Claude Code Harness 기반 Vibe Coding 실무 적용' },
  { title: '시스템 연동', desc: 'SAP EAI · Firebase · 외부 API 통합 아키텍처' },
]

export const impactStats = [
  {
    value: '2주 → 1초',
    label: '시뮬레이터 처리 속도',
    desc: 'DB Link + API + Jenkins Batch 구성',
  },
  {
    value: '월 2,000건 → 0',
    label: '중복 인증 요청 제거',
    desc: 'Oracle View 설계 및 자동화 연동',
  },
  {
    value: '100%',
    label: '수작업 자동화 대체',
    desc: '타이어 메타데이터 자동 추천 시스템',
  },
  {
    value: '8개월 → 2개월',
    label: '개발 일정 단축',
    desc: 'Cursor + Claude Code Vibe Coding 실무 전면 도입',
  },
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
    items: ['Java', 'Spring Boot', 'MyBatis', 'Spring Data JPA', 'Spring Security', 'WebFlux'],
  },
  {
    category: 'Frontend',
    tag: 'Frontend',
    color: 'purple',
    items: ['React', 'TypeScript', 'JSP', 'JavaScript', 'jQuery', 'HTML/CSS'],
  },
  {
    category: 'Database',
    tag: 'Database',
    color: 'orange',
    items: ['Oracle RDS', 'MySQL', 'MariaDB', 'PostgreSQL', 'TimescaleDB', 'Redis'],
  },
  {
    category: 'Infra & DevOps',
    tag: 'DevOps',
    color: 'teal',
    items: ['AWS EC2', 'Docker', 'Docker Compose', 'Jenkins', 'Nginx', 'Tomcat', 'Apache'],
  },
  {
    category: 'Monitoring',
    tag: 'Monitoring',
    color: 'green',
    items: ['Prometheus', 'Grafana'],
  },
  {
    category: 'AI & Tools',
    tag: 'AI/ML',
    color: 'indigo',
    items: ['Ollama + Gemma3', 'Cursor', 'Claude Code', 'WebClient', 'MapStruct', 'JWT'],
  },
]

export interface ExperienceProject {
  title: string
  period: string
  description: string
  highlight?: string
  bullets: string[]
  badges: string[]
}

export const experience = {
  company: '(주)한국네트웍스',
  role: '웹 개발자 · 백엔드/풀스택',
  period: '2022.09 – 현재',
  duration: '약 3년',
  client: '주요 고객사: 한국타이어앤테크놀로지',
  projects: [
    {
      title: '제조 대기업 생산직 전용 모바일 그룹웨어 리뉴얼',
      period: '2023.09 – 현재 (병행)',
      description:
        '한국타이어앤테크놀로지 전사 생산직 대상 레거시 모바일 그룹웨어를 신규 백엔드·관리자 웹·연동 아키텍처로 전환. 모바일 앱 API·Admin Web·외부 시스템 연동·배포 자동화 전 영역 담당.',
      highlight:
        'Harness 기법 기반 Vibe Coding(Cursor + Claude Code) 실무 전면 도입으로 기존 8개월 예정 일정을 2개월 타겟으로 단축 진행 중.',
      bullets: [
        'WebSocket 실시간 채팅, Firebase 앱 Push 알림 백엔드 API 개발',
        'AWS EC2 + Docker 기반 WAS 구축 및 Jenkins 파이프라인 자동화',
        '릴리스 배포, 장애 대응, 사용자 관리, 시스템 안정화 운영',
        'AI 보조 개발 사이클(설계 → 구현 → 검증) 전 과정에 Cursor + Claude Code 적용',
      ],
      badges: ['Spring Boot', 'WebSocket', 'Firebase', 'AWS EC2', 'Docker', 'Jenkins'],
    },
    {
      title: '타이어 생산 관리 시스템 · 운영 및 고도화',
      period: '2023.09 – 현재',
      description:
        '타이어 고유 정보(Master Data) 생성·버전 관리 코어 시스템 유지보수 및 연구소·공장·판매 시스템 간 데이터 연동 API 개발. 물리 서버에서 AWS로의 이전 안정화 참여.',
      bullets: [
        '타이어 스펙 수익성 시뮬레이터 연동 — DB Link + API + Jenkins Batch로 수기 계산 대비 2주 → 1초 이내 단축',
        '양산 목표시장 SAP 자동 연동 — 결재 완료 시 Jenkins → Spring EAI → SAP 자동 반영, 휴먼 에러 제거',
        '타이어 메타데이터 자동 추천 — Oracle View 기반 조건 매칭으로 연구소 수작업 100% 대체',
        '지역별 품질 인증서 연동 자동화 — Oracle View 설계로 중복 인증 요청 월 2,000건 → 0건 감소',
        'IDC → AWS Amazon Linux 서버 이전 안정화, Prometheus/Grafana 모니터링 구축',
      ],
      badges: [
        'Spring Boot',
        'MyBatis',
        'Oracle RDS',
        'Jenkins',
        'Docker',
        'AWS EC2',
        'Prometheus',
        'Grafana',
        'SAP EAI',
      ],
    },
    {
      title: '전사 그룹웨어 · 사내 메신저 운영',
      period: '2022.12 – 2023.08',
      description:
        '글로벌 그룹사 인원이 사용하는 메일·전자결재·조직도 시스템 운영. 장애 대응, 사용자 관리, 시스템 최적화 담당.',
      bullets: [],
      badges: ['Linux', 'Apache', 'Tomcat', 'Oracle DB', 'IBM Notes'],
    },
  ] as ExperienceProject[],
}

export interface Project {
  name: string
  period: string
  type: string
  description: string
  bullets: string[]
  badges: string[]
  highlightBadge: string | null
  github: string | null
}

export const projects: Project[] = [
  {
    name: 'Neekly Report',
    period: '2025.07 – 2025.08',
    type: '팀 프로젝트 (3인 · Backend + 인프라 담당)',
    description:
      '자연어 입력에서 LLM으로 일정을 자동 추출·구조화하고 AI 기반 주간 리포트를 생성하는 스마트 캘린더 시스템.',
    bullets: [
      'Local Ollama + Gemma3:12b 로컬 배포로 데이터 보안 강화, 자연어 → JSON 구조화 파이프라인 구축',
      '@Async + TransactionSynchronization으로 즉시 응답 + 백그라운드 LLM 처리 아키텍처 설계',
      'Spring Security + JWT (Access/Refresh Token), Custom EntryPoint로 Stateless 인증 구현',
      'Jenkins Pipeline + Docker Compose + Oracle Cloud Ubuntu 기반 CI/CD 및 실서비스 환경 구축',
    ],
    badges: [
      'LLM · AI',
      'Spring Boot 3.5',
      'Java 21',
      'Spring Data JPA',
      'MariaDB',
      'Ollama',
      'Docker Compose',
      'Jenkins',
      'Oracle Cloud',
    ],
    highlightBadge: 'LLM · AI',
    github: null,
  },
  {
    name: '주식 자동 매매 수익 분석 시스템',
    period: '2025.03 – 2025.04',
    type: '1인 Vibe Coding (Cursor + Claude Code)',
    description:
      '한국투자증권 Open API를 연동한 주식 투자 수익 분석 및 알고리즘 자동 매매 시스템. 기획·설계·개발·배포 전 과정을 1인으로 완성한 멀티 서비스 분산 아키텍처.',
    bullets: [
      'Spring Boot 3.2 + Java 17 기반 매매 API Backend, Resilience4j Circuit Breaker로 외부 API 안정화',
      'Python 기반 데이터 수집 서비스 · ML 예측 서비스 분리 구성 (investment-data-collector, investment-prediction-service)',
      'React 18 + Vite + TypeScript + Tailwind 대시보드 프론트엔드, PostgreSQL/TimescaleDB 시계열 데이터 관리',
      'Docker Compose + GitHub Actions + Nginx CI/CD 인프라, Redis 캐시로 시장 데이터 응답 최적화',
    ],
    badges: [
      'Vibe Coding',
      'Spring Boot 3.2',
      'Java 17',
      'React 18',
      'TypeScript',
      'Python',
      'PostgreSQL',
      'TimescaleDB',
      'Redis',
      'Docker',
      'GitHub Actions',
    ],
    highlightBadge: 'Vibe Coding',
    github: 'https://github.com/Layton0-0/auto-investment-project',
  },
  {
    name: 'TripDream · 브루맵 · 시반',
    period: '2022.04 – 2023.08',
    type: '교육 과정 및 팀 프로젝트',
    description:
      '여행 일정 웹서비스(TripDream), 주변 술집 추천(브루맵), 운동 루틴 추천 앱(시반). Spring Boot + JPA 기반, JWT 인증·AWS S3·Kakao 지도 API·React Native 활용.',
    bullets: [],
    badges: ['Spring Boot', 'JPA', 'React Native', 'MySQL', 'Docker', 'JWT', 'AWS S3', 'Kakao Maps API'],
    highlightBadge: null,
    github: null,
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
    detail: '독일 교환학생 파견 · 수업 언어: 영어',
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
    meta: '2025.11 – 2027.11 · 독일 교환학생 경험 (영어 수업)',
    type: 'lang',
  },
]
