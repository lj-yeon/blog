import React, { useEffect, useRef, useState } from "react";
import Hero from "./main/Hero";
import ProfileSection from "./main/ProfileSection";
import PortfolioList from "./main/PortfolioList";
import Loading from "./Loading";

const MainPage = ({ heroProfile, projects, basePath }) => {
  const [loading, setLoading] = useState(true);
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const heroRef = useRef(null);

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
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setShowTop(heroBottom < 0); // Hero가 화면 위로 사라지면 true
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main">
      {isLoadingVisible && <Loading isLoading={loading} />}

      <div ref={heroRef}>
        <Hero isReady={!loading} profile={heroProfile} />
      </div>
      <PortfolioList
        profile={heroProfile}
        projects={projects}
        basePath={basePath}
      />
      <ProfileSection profile={heroProfile} />
      {showTop && (
        <button className="top-btn" onClick={handleTop}>
          TOP
        </button>
      )}
    </div>
  );
};

export default MainPage;
