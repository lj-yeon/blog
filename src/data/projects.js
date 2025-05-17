const teamProjects = [
  {
    owner: "team",
    smalltitle: "치과 병원 운영 통합 관리 시스템",
    title: "Dentotal",
    description:
      "중소규모 치과 병원의 재고, 약품, 기공물, 조직 관리를 하나의 시스템에서 처리할 수 있도록 제작된 통합 관리 솔루션입니다. 병원 실무자의 요구사항을 직접 인터뷰를 통해 수집하여 기능에 반영했으며, 기획부터 디자인 협의, 개발까지 모든 과정에 참여하였습니다. 현재 실제 병원 환경에서 사용 중입니다.",
    period: "2023 12 ~ 2024 06",
    folder: "dentotal",
    imgCount: 3,
    timeline: [
      {
        title: "요구사항 인터뷰 및 구조 기획",
        duration: "4주",
        detail:
          "병원 운영자와의 인터뷰를 통해 실제 업무 흐름을 파악하고 기능 목록 및 시스템 구조를 설계함",
      },
      {
        title: "기획안 정리 및 화면 디자인 협업",
        duration: "4주",
        detail:
          "요구사항을 바탕으로 각 기능별 화면 흐름 및 UI 구성안 정의. 직원분과 협업하여 직관적이고 일관된 화면 설계 진행",
      },
      {
        title: "프론트엔드 및 백엔드 개발",
        duration: "5개월",
        detail:
          "재고, 기공, 배송, 조직 관리 기능 등 병원 내 전반적인 관리 기능 개발. 기공물 요청 처리 프로세스, 사용자 권한 시스템 구현",
      },
      {
        title: "운영 및 피드백 반영",
        detail:
          "실제 병원에 배포하여 실사용 중이며, 요청사항에 따라 기능 및 UI를 지속 개선함",
      },
    ],
    stack: ["React", "Node", "Express", "AWS"],
    link: "https://dentotal.co.kr",
  },
  {
    owner: "team",
    title: "퍼널스 공식 홈페이지 개발",
    description:
      "회사 분할로 인해 단기간 내 구축이 필요한 상황에서 유동적으로 요구사항이 변경되는 환경 속에서도 빠르게 구조를 설계하고 개발한 공식 웹사이트입니다. 페이지 구성과 기능 구현을 기획과 동시에 진행하며, 실시간 피드백을 반영하는 민첩한 개발 경험을 수행했습니다.",
    period: "2024 06 ~ 08",
    folder: "funnels",
    timeline: [
      {
        title: "기획 수신 및 화면 구성 정리",
        duration: "2주",
        detail:
          "회사 측에서 전달받은 자료를 기반으로 전체 레이아웃 구성 및 필요 콘텐츠 정리",
      },
      {
        title: "프론트엔드 및 백엔드 개발",
        duration: "2주",
        detail:
          "회사 소개, 서비스 소개, 문의 폼, 리드 수집 기능 구현. 콘텐츠 수정이 가능한 관리자 페이지 구현",
      },
      {
        title: "요구 반영 및 배포",
        duration: "4주",
        detail:
          "빈번하게 바뀌는 요구사항에 맞춰 구조 및 동작을 지속 수정하며 운영",
      },
    ],
    stack: ["React", "Node", "Express", "AWS"],
    link: "https://funnels.co.kr",
  },
  {
    owner: "team",
    title: "마케팅/리드 기반 통합 관리 솔루션",
    description:
      "랜딩페이지에서 발생하는 리드 데이터를 수집하고, 랜딩 페이지 제작부터 통계 분석까지 내부에서 한 번에 처리할 수 있도록 제작 중인 사내 솔루션입니다. 마케팅팀의 실무 요구사항을 바탕으로 기능을 설계하고 반복적인 수작업을 줄이는 방향으로 시스템을 개발하고 있습니다.",
    period: "2024 09 ~ ",
    folder: "funnelsolution",
    imgCount: 5,
    timeline: [
      {
        title: "요구 수집 및 기능 기획",
        duration: "3주",
        detail:
          "마케팅팀과 협업하여 랜딩 페이지 템플릿, 리드 수집 구조, 필터/검색 조건 등을 정의",
      },
      {
        title: "개발 진행 및 운영 반영",
        duration: "12주",
        detail:
          "랜딩 페이지 자동 생성 기능, 리드 관리 테이블, 통계 시각화 기능 개발. 내부 사용자가 직접 활용할 수 있는 관리 화면 구성 및 테스트 중. 대규모 데이터 처리 및 화면 구성 기획 및 개발",
      },
      {
        title: "요구 반영 및 배포",
        detail:
          "빈번하게 바뀌는 요구사항에 맞춰 구조 및 동작을 지속 수정하며 운영중",
      },
    ],
    stack: ["React", "Node", "Express", "AWS"],
    link: "https://blog.funnelsolution.co.kr/",
    testLink: "https://blog.smilevent.co.kr/999/999/aaaaaa",
    credentials: {
      id: "test1",
      password: "a12341234",
    },
  },
  {
    owner: "team",
    title: "사내 요청 기반 기타 개발 및 유지보수",
    description:
      "정규 프로젝트 외에도 사내 요청에 따라 다양한 기술 환경에 대응하며 유지보수, 자동화 도구(RPA) 개발, 외부 연동 등을 처리하고 있습니다.",
    period: "2023 12 ~ ",
    folder: "etc",
    timeline: [
      {
        title: "레거시 환경 유지보수",
        detail:
          "Cafe24, PHP, ASP 등 다양한 레거시 환경에서의 기능 수정 및 유지보수",
      },
      {
        title: "매크로 자동화 프로그램 제작",
        detail: "수기 업무를 대체하기 위한 간단한 매크로 자동화 프로그램 제작",
      },
      {
        title: "외부 연동 개발",
        detail: "외부 파트너사와의 연동을 위한 데이터 정제 및 API 연동 개발",
      },
      {
        title: "외부 랜딩페이지 개발",
        detail: "외부 파트너사 랜딩페이지 개발",
      },
    ],
  },
];
const wonhoProjects = [
  {
    title: "SAT 영어 시험 문제 개발(FE)",
    owner: "wonho",
    period: "2023 01 ~ 03",
    description:
      "SAT 시험 준비를 위한 영어 문제지를 손쉽게 생성하고 관리할 수 있도록 제작된 웹 기반 서비스입니다. 학습자의 수준과 요구에 맞춘 시험지를 빠르게 구성할 수 있도록 설계되었으며, 백엔드는 Java Spring Boot 기반으로 구축되었습니다. 프론트엔드는 React로 구현되었고, 서버 개발은 Java 경력 5년차 개발자와 협업하여 API 명세 조율 및 데이터 구조 정의 등 전반적인 개발 프로세스를 함께 진행했습니다.",
    folder: "english",
    imgCount: 3,
    timeline: [
      {
        title: "시험지 구조와 주요 기능 기획",
        duration: "2주",
      },
      {
        title: "프론트엔드 개발",
        duration: "6주",
      },
      {
        title: "유지보수 및 피드백 반영",
        duration: "1~2주",
      },
    ],
    stack: ["React"],
    link: "https://sharonsat.com/",
  },
  {
    title: "크로프트 스마트팜 대시보드 개발(FE)",
    owner: "wonho",
    period: "2023 03 ~ 06",
    folder: "croft",
    imgCount: 2,
    description:
      "스마트팜 현장의 온습도, 조도, 이산화탄소 농도 등의 실시간 데이터를 시각적으로 확인하고, 작물 생장 환경을 효율적으로 관리할 수 있도록 제작된 대시보드형 웹 서비스입니다. 다양한 환경 센서 데이터를 한눈에 파악할 수 있도록 정보 구조와 시각적 표현에 중점을 두었습니다.",
    timeline: [
      {
        title: "프론트엔드 개발",
        duration: "12주",
      },
    ],
    stack: ["React", "tailwindcss", "ECharts", "React-Query", "Recoil"],
    link: "https://www.notion.so/089ff8c90e6a4549b75dc777eff7734d?p=cb1c27d1d36a48749a3d31f4b042d3d3&pm=c",
  },
  {
    title: "엘리스 수학 시험 프로그램 개발(FE)",
    owner: "wonho",
    period: "2023 06 ~ 09",
    description:
      "엘리스 교육 플랫폼 내에서 실제로 운영되는 온라인 수학 시험 프로그램의 프론트엔드 개발을 맡아 진행한 프로젝트입니다. 문제 출제, 응시, 채점까지의 흐름을 화면 상에 구현하였으며, 교육 현장에서 실제로 사용되는 기능을 개발하면서 높은 완성도를 요구받는 경험이었습니다.",
    folder: "elis",
    imgCount: 4,
    timeline: [
      {
        title: "요구사항 공유 및 화면 구조 이해",
        duration: "1주",
      },
      {
        title: "프론트엔드 개발 및 반응형 구현",
        duration: "8주",
      },
      {
        title: "피드백 반영 및 마무리",
        duration: "3주",
      },
    ],
    stack: ["React", "react-query", "typeScript"],
    link: "https://www.notion.so/089ff8c90e6a4549b75dc777eff7734d?p=ff73a8bc30aa4ef492b5cd8bf404c3a7&pm=c",
  },
  {
    title: "운행일지 시스템 개발(FE, BE)",
    owner: "wonho",
    period: "2023 09 ~ 12",
    description:
      "사내 운전자(택시기사, 배달기사 등)가 자신의 운행 내역과 수익을 손쉽게 기록하고 관리할 수 있도록 제작된 웹 기반 운행일지 시스템입니다. 사용자가 운행 정보를 직접 입력하고 일별, 주별 통계로 확인할 수 있도록 구성하였으며, 결제 및 손익계산서를 조회할 수 있는 기능도 포함되어 있습니다. 소규모 팀 내에서 기획부터 백엔드, 프론트엔드 개발까지 전 과정을 담당하였습니다.",
    folder: "drive",
    imgCount: 6,
    timeline: [
      {
        title: "기획 및 요구사항 정리",
        duration: "2주",
      },
      {
        title: "프론트엔드 및 백엔드 개발",
        duration: "10주",
      },
      {
        title: "피드백 반영 및 마무리",
        duration: "2주",
      },
    ],
    stack: ["node.js", "React", "AWS"],
    link: "https://krdriver.com",
  },
];
const jaeyeonProjects = [];
// 전체 프로젝트 배열
const projects = [...teamProjects, ...wonhoProjects, ...jaeyeonProjects];
// owner별 export
export { teamProjects, wonhoProjects, jaeyeonProjects };
export default projects;
