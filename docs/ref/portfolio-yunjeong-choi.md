# 최윤정 · 백엔드 / 풀스택 웹 개발자

**이메일**: yeshan0224@kakao.com  
**GitHub**: https://github.com/Layton0-0  
**블로그**: https://layton0-0.tistory.com/  

---

## About Me

Spring Boot 기반 엔터프라이즈 시스템 개발 및 운영 경험을 보유한 4년차 백엔드·풀스택 개발자입니다.  
타이어 생산관리 코어 시스템부터 시스템 간 연동 API, AWS 기반 서버 이전, CI/CD 파이프라인 구축까지 전 사이클을 담당했습니다.

**Harness 기법 기반 AI 보조 개발(Vibe Coding)을 실무에 적극 도입**하고 있습니다. Cursor와 Claude Code를 활용한 체계적인 AI 주도 개발 방식으로, 단순 자동완성을 넘어 설계·구현·검증 전 과정에서 AI와 협업하는 개발 사이클을 구축했습니다. 실무 프로젝트에 적용해 **기존 1년 예정 일정을 2개월 타겟으로 단축**하는 등 실질적인 생산성 향상을 만들어내고 있습니다.

---

## Tech Stack

| 영역 | 기술 |
|---|---|
| Backend | Java, Spring Boot, MyBatis, Spring Data JPA, Spring Security |
| Frontend | React, JSP, JavaScript, jQuery, HTML/CSS |
| Database | Oracle (RDS), MySQL, MariaDB |
| Infra · DevOps | AWS EC2 (Amazon Linux), Docker, Docker Compose, Jenkins, Tomcat, Apache |
| Monitoring | Prometheus, Grafana |
| AI · 기타 | Ollama + Gemma3, WebClient, MapStruct, JWT |
| AI 개발 도구 | Cursor, Claude Code · Harness 기법 기반 Vibe Coding |

---

## 경력

### (주)한국네트웍스 · 웹 개발자  
**2022.09 – 현재** | 주요 고객사: 한국타이어앤테크놀로지

---

#### 타이어 생산 관리 시스템 · 운영 및 고도화 `2023.09 – 현재`

타이어 고유 정보(Master Data) 생성·버전 관리 코어 시스템 유지보수 및 연구소·공장·판매 시스템 간 데이터 연동 API 개발. 물리 서버에서 AWS로의 이전 안정화 참여.

- **타이어 스펙 수익성 시뮬레이터 연동** — DB Link + API + Jenkins Batch 구성으로 수기 계산 대비 **2주 → 1초 이내**로 단축, 개발 일정 조율 속도 향상
- **양산 목표시장 SAP 자동 연동** — 결재 완료 시 Jenkins → Spring EAI → SAP 자동 반영, 휴먼 에러 및 데이터 시점 차이 제거
- **타이어 메타데이터 자동 추천** — Oracle View 기반 조건 매칭으로 연구소 수작업 **100% 대체**, 업무 효율 극대화
- **지역별 품질 인증서 연동 자동화** — Oracle View 설계 및 연동으로 중복 인증 요청 **월 2,000건 → 0건** 감소
- IDC → AWS Amazon Linux 서버 이전 안정화, Spring Boot 엔드포인트 변경 및 Prometheus / Grafana 모니터링 구축

`Spring Boot` `MyBatis` `Oracle RDS` `Jenkins` `Docker` `AWS EC2` `Prometheus` `Grafana` `SAP EAI`

---

#### 제조 대기업 생산직 전용 모바일 그룹웨어 리뉴얼 `2023.09 – 현재 (병행)`

한국타이어앤테크놀로지 전사 생산직 대상 레거시 모바일 그룹웨어를 신규 백엔드·관리자 웹·연동 아키텍처로 전환. 모바일 앱 API·Admin Web·외부 시스템 연동·배포 자동화 전 영역 담당.  
**Harness 기법 기반 Vibe Coding(Cursor + Claude Code)을 실무 전면 도입, 기존 1년 예정 일정을 2개월 타겟으로 단축 진행 중.**

- WebSocket 실시간 채팅, Firebase 앱 Push 알림 백엔드 API 개발
- AWS EC2 + Docker 기반 WAS 구축 및 Jenkins 파이프라인 자동화
- 릴리스·장애 대응, 사용자 관리, 시스템 안정화 운영
- AI 보조 개발 사이클(설계 → 구현 → 검증) 전 과정에 Cursor + Claude Code 적용, 반복 작업 자동화 및 코드 품질 유지

`Spring Boot` `WebSocket` `Firebase` `AWS EC2` `Docker` `Jenkins`

---

#### 전사 그룹웨어 · 사내 메신저 운영 `2022.12 – 2023.08`

글로벌 그룹사 인원이 사용하는 메일·전자결재·조직도 시스템 운영. 장애 대응, 사용자 관리, 시스템 최적화 담당.

`Linux` `Apache` `Tomcat` `Oracle DB` `IBM Notes`

---

## 개인 프로젝트

### Neekly Report `2025.07 – 2025.08`

자연어 입력에서 LLM으로 일정을 자동 추출·구조화하고 AI 기반 주간 리포트를 생성하는 스마트 캘린더 시스템.  
Backend + 인프라 담당 (3인 팀: Backend 2, Frontend 1)

- Local Ollama + Gemma3:12b 로컬 배포로 데이터 보안 강화, 프롬프트 엔지니어링을 통한 자연어 → JSON 구조화 파이프라인 구축
- @Async + TransactionSynchronization 활용 즉시 응답 + 백그라운드 LLM 처리 아키텍처 설계
- Spring Security + JWT (Access/Refresh Token), Custom AuthenticationEntryPoint로 Stateless 인증 시스템 구현
- Jenkins Pipeline + Docker Compose + Oracle Cloud Ubuntu 기반 CI/CD 및 실서비스 운영 환경 구축 (가비아 도메인 연동)

`Spring Boot 3.5` `Java 21` `Spring Data JPA` `MariaDB` `Ollama + Gemma3` `Docker Compose` `Jenkins` `Oracle Cloud`

---

### 주식 자동 매매 수익 분석 시스템 `개인 프로젝트 · 단독 개발`

한국투자증권 Open API를 연동한 주식 투자 수익 분석 및 자동 매매 시스템.  
**Harness 기법 기반 Vibe Coding으로 기획·설계·개발·배포 전 과정을 혼자 완성** — 멀티 서비스 아키텍처(Backend + 데이터 수집 + 예측 서비스 + 프론트엔드)를 단독 구현한 사례.

- Spring Boot 기반 매매 API 연동 Backend, Python 기반 데이터 수집·예측 서비스 분리 구성
- React + Vite 기반 대시보드 프론트엔드, MariaDB 기반 데이터 관리
- 배포 인프라까지 단독 완성 — AI 보조 개발로 풀스택 전 영역을 1인이 빠르게 커버

`Spring Boot` `Python` `React` `MariaDB` `한국투자증권 Open API` `Cursor` `Claude Code`

---

### TripDream · 브루맵 · 시반 `2022.04 – 2023.08`

여행 일정 웹서비스(TripDream), 주변 술집 추천(브루맵), 운동 루틴 추천 앱(시반) — 교육 과정 및 팀 프로젝트.  
Spring Boot + JPA 기반, 각각 JWT 인증·AWS S3·Kakao 지도 API·React Native 활용.

`Spring Boot` `JPA` `React Native` `MySQL` `Docker` `JWT`

---

## 학력 · 교육

| | | |
|---|---|---|
| **아주대학교** | 미디어학과 (주전공) · 영어영문학과 (부전공) | 2016.03 – 2020.02 |
| **HfWU Nuertingen-Geislingen University** | 독일 교환학생 파견 · 수업 언어: 영어 | 2018.06 – 2019.02 |
| **K-digital · 지능형 웹서비스 풀스택 개발** | 삼성멀티캠퍼스 · 960시간 | 2021.12 – 2022.06 |

---

## 자격 · 어학

- **정보처리기사** — 2022.06.17 취득
- **TOEIC Speaking Intermediate High** — 2025.11 ~ 2027.11 유효 / 독일 교환학생 (영어 수업) 경험
