const profiles = [
  {
    id: 1,
    name: "이원호",
    englishName: "LEE WONHO",
    email: "wonho.dev@example.com",
    github: "https://github.com/wonho", // 실제 주소로 변경 가능
    image: "/images/wonho.jpg",
    color: "#ebebeb",
    phone: "010-8868-0490",
    career: [
      "22.09 ~ 23.03 - SK플래닛 웹 풀스택 개발자 양성 교육",
      "23.1 ~ 12 - 크몽 웹서비스 외주(기획, 디자인, 개발)",
      "23.12 ~ 현재 - 퍼널스 개발팀(기획 및 개발)",
    ],
    skills: {
      frontend: [
        "JavaScript (ES6+)",
        "React (Hooks, Redux, React-query)",
        "HTML5 / CSS3 / SCSS",
        "Redux, Recoil",
        "반응형 웹 개발 (Media Query, Flex/Grid 등)",
        "결제, 차트, 알림톡 등 다양한 외부 라이브러리 활용",
      ],
      backend: [
        "Node.js + Express",
        "Prisma ORM",
        "JWT 기반 인증/인가 로직 구현",
        "파일 업로드, 데이터 필터링/정렬/페이징 처리",
        "외부 API 연동",
      ],
      database: [
        "MySQL",
        "SQL 쿼리 작성 및 최적화 (JOIN, GROUP BY, 날짜 필터링 등)",
        "DB 설계 및 테이블 관계 모델링",
        "Prisma를 통한 타입 안전한 DB 접근",
      ],
      etc: [
        "AWS EC2 / RDS / S3 환경 구축 및 운영",
        "PHP, ASP (기존 시스템 유지보수 수준)",
        "RPA (매크로 자동화) 소규모 개발 경험",
      ],
    },
  },
  {
    id: 2,
    name: "이재연",
    englishName: "LEE JAEYEON",

    email: "lj_yeon_@naver.com",
    phone: "010-4113-4306",
    imageBackground: "/images/main/jback.jpg",
    image: "/images/main/jfront.jpg",
    color: "#f6f6f6",
    career: [
      "20.03 ~ 22.10 - 디자인 및 홍보",
      "22.10 ~ 23.05 - UI/UX디자인&웹퍼블리셔 과정 수료",
      "23.06 ~ 23.12 - 웹개발전문가 과정 수료",
      "23.12 ~ 현재 - 크몽 웹서비스 외주(기획, 디자인, 개발)",
      "23.12 ~ 현재 - 퍼널스 개발팀(기획 및 개발)",
    ],
    skills: {
      frontend: [
        "JavaScript (ES6+)",
        "React (Hooks, Redux, React-query)",
        "HTML5 / CSS3 / SCSS",
        "반응형 웹 개발 (Media Query, Flex/Grid 등)",
        "결제, 차트 등 다양한 외부 라이브러리 활용",
      ],
      backend: [
        "Node.js + Express",
        "Prisma ORM",
        "JWT 기반 인증/인가 로직 구현",
        "파일 업로드, 데이터 필터링/정렬/페이징 처리",
        "외부 API 연동",
      ],
      database: [
        "MySQL",
        "SQL 쿼리 작성 및 최적화 (JOIN, GROUP BY, 날짜 필터링 등)",
        "DB 설계 및 테이블 관계 모델링",
        "Prisma를 통한 타입 안전한 DB 접근",
      ],
      etc: [
        "AWS EC2 / RDS / S3 환경 구축 및 운영",
        "PHP, ASP (기존 시스템 유지보수 수준)",
        "RPA (매크로 자동화) 소규모 개발 경험",
      ],
    },
  },
  {
    id: 3,
    name: "팀슬립",
    englishName: "teamSleep",

    email: "lj_yeon_@naver.com",
    phone: "010-4113-4306",
    imageBackground: "/images/main/jback.jpg",
    image: "/images/main/jfront.jpg",
    color: "#f6f6f6",
    career: [
      "20.03 ~ 22.10 - 디자인 및 홍보",
      "22.10 ~ 23.05 - UI/UX디자인&웹퍼블리셔 과정 수료",
      "23.06 ~ 23.12 - 웹개발전문가 과정 수료",
      "23.12 ~ 현재 - 크몽 웹서비스 외주(기획, 디자인, 개발)",
      "23.12 ~ 현재 - 퍼널스 개발팀(기획 및 개발)",
    ],
    skills: {
      frontend: [
        "JavaScript (ES6+)",
        "React (Hooks, Redux, React-query)",
        "HTML5 / CSS3 / SCSS",
        "반응형 웹 개발 (Media Query, Flex/Grid 등)",
        "결제, 차트 등 다양한 외부 라이브러리 활용",
      ],
      backend: [
        "Node.js + Express",
        "Prisma ORM",
        "JWT 기반 인증/인가 로직 구현",
        "파일 업로드, 데이터 필터링/정렬/페이징 처리",
        "외부 API 연동",
      ],
      database: [
        "MySQL",
        "SQL 쿼리 작성 및 최적화 (JOIN, GROUP BY, 날짜 필터링 등)",
        "DB 설계 및 테이블 관계 모델링",
        "Prisma를 통한 타입 안전한 DB 접근",
      ],
      etc: [
        "AWS EC2 / RDS / S3 환경 구축 및 운영",
        "PHP, ASP (기존 시스템 유지보수 수준)",
        "RPA (매크로 자동화) 소규모 개발 경험",
      ],
    },
  },
];

export default profiles;
