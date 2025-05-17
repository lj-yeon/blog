import React, { useEffect, useState } from "react";
import profiles from "../../data/profile"; // 프로필 데이터 가져오기

function Hero({ isReady, profile }) {
  const currentYear = new Date().getFullYear();
  const portfolioLetters = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];
  const imagePath = "/images/main/";

  const [floating, setFloating] = useState(false);

  useEffect(() => {
    if (!isReady) return; // ✅ 로딩 안 끝났으면 아무 것도 안 함

    const timer = setTimeout(() => {
      setFloating(true); // ✅ 로딩 후 2.5초 뒤에 floating 활성화
    }, 1500);

    return () => clearTimeout(timer);
  }, [isReady]);

  // useEffect(() => {
  //   // 1. 1.5초 후 floating true로 변경 (bounceDropRotate 애니메이션 길이와 동일)
  //   const timer = setTimeout(() => setFloating(true), 2500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className="hero">
      <div className="portfolio-letters">
        {portfolioLetters.map((letter, idx) => (
          <img
            key={idx}
            className={`portfolio-letter ${floating ? "floating" : "bounce"}`}
            src={`${imagePath}${letter}.png`}
            alt={letter}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="portfolio-text">
        <h1 className="title">
          {currentYear}
          <br /> PORTFOLIO
        </h1>
        <div>
          <ul>
            <li>FrontEnd</li>
            <li>BackEnd</li>
          </ul>
          <ul>
            <li>{profile.phone}</li>
            <li>{profile.email}</li>
          </ul>
        </div>
        <div></div>
        <h1 className="name">{profile.englishName}</h1>
      </div>
      {/* 스크롤 유도 아이콘 */}
      <div className="scroll-down-indicator">
        <img
          src={process.env.PUBLIC_URL + "/images/main/scroll-down.png"}
          alt="아래로 스크롤"
        />
      </div>
    </section>
  );
}

export default Hero;
