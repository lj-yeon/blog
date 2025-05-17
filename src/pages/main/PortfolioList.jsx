// pages/PortfolioList.jsx
import { useEffect, useState } from "react";
import PortfolioItem from "./PortfolioItem";
import { useNavigate } from "react-router-dom";

const PortfolioList = ({ projects = [], basePath = "" }) => {
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 3;

  const [page, setPage] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [autoIdx, setAutoIdx] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const currentItems = projects.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const handleDotClick = (idx) => {
    setPage(idx);
    setAutoIdx(0); // 슬라이드가 바뀌면 자동호버 인덱스를 0으로 초기화
  };
  // 자동 hover 효과
  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(() => {
      setAutoIdx((prev) => (prev + 1) % currentItems.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [isAuto, currentItems.length]);

  // 마우스 올리면 자동 멈춤, 내리면 다시 자동
  const handleMouseEnter = (idx) => {
    setIsAuto(false);
    setHoveredIdx(idx);
  };
  const handleMouseLeave = () => {
    setIsAuto(true);
    setHoveredIdx(null);
  };

  return (
    <section
      id="portfolio-list"
      className="portfolio-list"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/portfolio/portfolioBack.png"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s",
      }}
    >
      <h2>Project</h2>
      <div className="portfolio-items">
        {currentItems.map((item, idx) => (
          <PortfolioItem
            key={item.folder}
            {...item}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            isHovered={isAuto ? autoIdx === idx : hoveredIdx === idx}
            isSiblingHovered={
              isAuto
                ? autoIdx !== idx
                : hoveredIdx !== null && hoveredIdx !== idx
            }
            onClick={() => navigate(`portfolio/${item.folder}`)}
          />
        ))}
      </div>
      <div className="slide-dots">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            className={`dot${page === idx ? " active" : ""}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`슬라이드 ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioList;
