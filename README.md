# portfolio-yoon

Vite 6 기반의 개인 포트폴리오 웹사이트입니다. React 18, TypeScript(엄격 모드), Tailwind CSS v4, Framer Motion으로 구성되어 있습니다.

## 요구 사항

- [Node.js](https://nodejs.org/) 20 이상 권장
- npm

## 설치

```bash
npm install
```

## 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 실행 → 기본적으로 `http://localhost:5173` |
| `npm run build` | TypeScript 검사 후 `dist/`에 프로덕션 빌드 |
| `npm run preview` | 빌드 결과를 로컬에서 미리 보기 |

## 프로젝트 구조

콘텐츠(소개, 경력, 프로젝트 등)는 `src/data/portfolio.ts` 한 파일에서 관리합니다. UI는 `src/components/`의 섹션 컴포넌트가 해당 데이터를 읽어 렌더링합니다.

## 기술 스택

- **빌드**: Vite 6  
- **UI**: React 18, Tailwind CSS v4(`@tailwindcss/vite`, `@theme`는 `src/index.css`)  
- **애니메이션**: Framer Motion  
- **아이콘**: Lucide React  

## 라이선스

비공개(`package.json`의 `"private": true`) 프로젝트입니다.
