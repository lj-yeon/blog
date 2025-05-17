import { useEffect, useRef } from "react";

const IntroSection = ({
  title,
  smalltitle,
  description,
  period,
  stack = [],
  credentials,
  folder,
}) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 16;
    }
  }, []);

  return (
    <section className="intro-section">
      <div className="intro-img">
        <img
          className="vinyl"
          src={`${process.env.PUBLIC_URL}/images/portfolio/vinyl.png`}
          alt=""
        />
        <video
          className="intro"
          src={`${process.env.PUBLIC_URL}/images/portfolio/${folder}/${folder}.mp4`}
          autoPlay
          loop
          muted
          ref={videoRef}
        />
      </div>
      <div className="intro-description">
        <h2>{smalltitle}</h2>
        <h1>{title}</h1>
        <ul>
          <li>
            <span>Work</span>
            {period}
          </li>
          <li>
            <span>Tool</span>
            {stack.map((stack, index) => (
              <p key={index} className="stack-item">
                {stack}
              </p>
            ))}
          </li>
        </ul>

        <p>{description}</p>
      </div>
    </section>
  );
};

export default IntroSection;
