import { useEffect, useRef, useState } from "react";

const DescripSection = ({ timeline, folder, imgCount }) => {
  const itemRefs = useRef([]);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!timeline) return;

    // 기존 show 클래스 제거 (페이지가 바뀔 때마다)
    itemRefs.current.forEach((el) => {
      if (el) el.classList.remove("show");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [timeline]);

  return (
    <section className="descrip-section">
      <div>
        <h2>작업화면</h2>
        <h3>
          이미지 클릭 시 크게 볼 수 있습니다. 단, 작업화면이 현재와 다를 수
          있습니다. <br />* 저작권 이슈가 있는 경우 첨부하지 않았습니다.
        </h3>
        {imgCount && (
          <div className="preview-images">
            {Array.from({ length: imgCount }, (_, idx) => (
              <img
                key={idx}
                className={`preview-image preview-image-${idx + 1}`}
                src={`${
                  process.env.PUBLIC_URL
                }/images/portfolio/${folder}/${folder}${idx + 1}.png`}
                alt={`Preview ${idx + 1}`}
                onClick={() =>
                  setModalImg(
                    `${
                      process.env.PUBLIC_URL
                    }/images/portfolio/${folder}/${folder}${idx + 1}.png`
                  )
                }
              />
            ))}
          </div>
        )}
        {/* 모달 */}
        {modalImg && (
          <div className="img-modal" onClick={() => setModalImg(null)}>
            <button
              className="img-modal-close"
              onClick={() => setModalImg(null)}
            >
              ×
            </button>

            <img src={modalImg} alt="크게보기" />
          </div>
        )}
      </div>
      <div className="timeline-list">
        <h2>Timeline</h2>
        {timeline &&
          timeline.map((step, idx) => (
            <div
              className="timeline-item"
              key={idx}
              ref={(el) => (itemRefs.current[idx] = el)}
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <h3 className="timeline-number">{idx + 1}</h3>
              <div className="timeline-title">
                {step.title}
                {step.duration && (
                  <span className="timeline-duration">{step.duration}</span>
                )}
              </div>

              <div className="timeline-detail">{step.detail}</div>
            </div>
          ))}
      </div>

      <img
        className="star star1"
        src={`${process.env.PUBLIC_URL}/images/portfolio/star1.png`}
        alt=""
      />
      <img
        className="star star2"
        src={`${process.env.PUBLIC_URL}/images/portfolio/star1.png`}
        alt=""
      />
    </section>
  );
};

export default DescripSection;
