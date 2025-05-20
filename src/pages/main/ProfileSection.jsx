const ProfileSection = ({ profile }) => {
  // profile이 배열이 아니면 배열로 변환
  const profiles = Array.isArray(profile) ? profile : [profile];

  return (
    <>
      {profiles.map((profile, idx) => (
        <section
          key={idx}
          className="profile-section"
          style={{ backgroundColor: profile.color }}
        >
          <img
            className="icon"
            src={`${process.env.PUBLIC_URL}/images/main/${
              idx === 0 ? "star" : "heart"
            }.png`}
            alt="홈페이지 바로가기"
          />
          <img
            className="icon"
            src={`${process.env.PUBLIC_URL}/images/main/${
              idx === 0 ? "star" : "heart"
            }.png`}
            alt="홈페이지 바로가기"
          />
          <div className="profile-imgcard">
            <img
              src={profile.image}
              alt={`${profile.name} 프로필 이미지`}
              className="profile-image"
            />

            <div className="contact box-wrap">
              <h2>{profile.englishName}</h2>
              <p>👤 {profile.name}</p>
              <p>📬 {profile.email}</p>
              {profile.github && (
                <p>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐈‍⬛ {profile.github}
                  </a>
                </p>
              )}
              <p>☎️ {profile.phone}</p>
            </div>
          </div>
          <div className="profile-infocard">
            <h4>
              🏢
              {` `}CAREER
            </h4>
            <div className="career box-wrap">
              <ul className="career-list ">
                {profile.career &&
                  profile.career.map((career, idx) => (
                    <li key={idx}>
                      <span className="career-desc">{career}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="skill">
              {Object.entries(profile.skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4>
                    {idx === 0 ? "⭐" : "🖤"}
                    {` `}
                    {category.toUpperCase()}
                  </h4>
                  <ul className="box-wrap">
                    {items.map((skills, index) => (
                      <li key={index}>
                        -{` `}
                        {` `}
                        {skills}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProfileSection;
