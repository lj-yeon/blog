import { Navigate, useNavigate, useParams } from "react-router-dom";
import IntroSection from "./portfolio/IntroSection";
import DescripSection from "./portfolio/DescripSection";

import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

const PortfolioDetail = ({ projects, basePath = "" }) => {
  const [loading, setLoading] = useState(true);
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const { folder } = useParams();
  const navigate = useNavigate();
  const idx = projects.findIndex((p) => p.folder === folder);
  const project = projects[idx];

  const [showNav, setShowNav] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1500);
      setTimeout(() => setIsLoadingVisible(false), 2500);
    };

    if (document.readyState === "complete") {
      // ✅ 이미 로딩 끝났으면 바로 처리
      handleLoad();
    } else {
      // ✅ 아직 안 끝났으면 이벤트 등록
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setShowNav(false);
      }, 300); // 1초 후에 다시 투명
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  const [transitionDir, setTransitionDir] = useState(null);

  const handleTransition = (dir) => {
    setTransitionDir(dir);
    setTimeout(() => {
      if (dir === "left" && idx > 0)
        navigate(
          `${basePath ? `/${basePath}` : ""}/portfolio/${
            projects[idx - 1].folder
          }`
        );
      if (dir === "right" && idx < projects.length - 1)
        navigate(
          `${basePath ? `/${basePath}` : ""}/portfolio/${
            projects[idx + 1].folder
          }`
        );
      setTransitionDir(null);
    }, 300);
  };

  // 페이지가 바뀔 때마다 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [idx]);

  return (
    <div className="portfolio-detail">
      {isLoadingVisible && <Loading isLoading={loading} />}

      {/* 검정 오버레이 */}
      {transitionDir && (
        <div className={`black-transition ${transitionDir}`}></div>
      )}
      {project.link && (
        <button
          className="link-go"
          onClick={() => window.open(project.link, "_blank")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/link-solid.svg`}
            alt="홈페이지 바로가기"
          />
          바로가기 링크
          {project.testAccount && (
            <div className="testAccount">
              <h4>테스트 계정</h4>
              아이디 : {project.testAccount.id}
              <br />
              비밀번호 : {project.testAccount.password}
            </div>
          )}
        </button>
      )}
      <button
        className="home-go"
        onClick={() => (window.location.href = `/${basePath}`)}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/home-button.png`}
          alt="홈으로 돌아가기"
        />
      </button>

      <IntroSection
        title={project.title}
        smalltitle={project.smalltitle}
        period={project.period}
        image={project.image}
        description={project.description}
        stack={project.stack}
        folder={project.folder}
      />
      <DescripSection
        timeline={project.timeline}
        folder={project.folder}
        imgCount={project.imgCount}
      />
      <div className={`prev-next${showNav ? " visible" : ""}`}>
        <button
          className="prev-go"
          onClick={() => handleTransition("left")}
          disabled={idx === 0}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/angle-left-solid.svg`}
            alt="이전"
          />
        </button>
        <button
          className="next-go"
          onClick={() => handleTransition("right")}
          disabled={idx === projects.length - 1}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/angle-left-solid.svg`}
            alt="다음"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioDetail;
