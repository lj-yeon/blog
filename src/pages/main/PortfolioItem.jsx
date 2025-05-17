import React from "react";

const PortfolioItem = ({
  title,
  stack = [],
  folder,
  onMouseEnter,
  onMouseLeave,
  isHovered,
  isSiblingHovered,
  onClick,
}) => {
  return (
    <div
      className={`portfolio-item${isHovered ? " hovered" : ""}${
        isSiblingHovered ? " sibling-hovered" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <div className="portfolio-image">
        <img
          className="intro"
          src={`${process.env.PUBLIC_URL}/images/portfolio/${folder}/${folder}1.png`}
          alt=""
        />
      </div>
      <h3 className="portfolio-title">{title}</h3>
      <ul className="portfolio-stack">
        {stack.map((stack, index) => (
          <li key={index} className="stack-item">
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioItem;
