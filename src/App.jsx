import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PortfolioDetail from "./pages/PortfolioDetail";
import "./style/global.scss";
import profiles from "./data/profile";
import projects, {
  jaeyeonProjects,
  teamProjects,
  wonhoProjects,
} from "./data/projects";

function App() {
  const wonhoProfile = profiles.find((p) => p.name === "이원호");
  const jaeyeonProfile = profiles.find((p) => p.name === "이재연");
  const teamProfile = profiles.find((p) => p.name === "팀슬립");

  const wonhoAndTeam = [...wonhoProjects, ...teamProjects];
  const jaeyeonAndTeam = [...jaeyeonProjects, ...teamProjects];

  return (
    <Router>
      <Routes>
        {/* 전체 메인 */}
        <Route
          path="/"
          heroProfile={teamProfile}
          element={<MainPage projects={projects} />}
        />

        {/* 원호 메인 */}
        <Route
          path="/wonho"
          element={
            <MainPage heroProfile={wonhoProfile} projects={wonhoAndTeam} />
          }
        />

        {/* 재연 메인 */}
        <Route
          path="/jaeyeon"
          element={
            <MainPage heroProfile={jaeyeonProfile} projects={jaeyeonAndTeam} />
          }
        />

        {/* 팀 메인 */}
        <Route path="/team" element={<MainPage projects={teamProjects} />} />

        {/* ///////////////////////////////////////////// */}

        {/* 포트폴리오 상세 - 전체 */}
        <Route
          path="/portfolio/:folder"
          element={<PortfolioDetail projects={projects} />}
        />

        {/* 포트폴리오 상세 - 원호+팀 */}
        <Route
          path="/wonho/portfolio/:folder"
          element={<PortfolioDetail projects={wonhoAndTeam} basePath="wonho" />}
        />

        {/* 포트폴리오 상세 - 재연+팀 */}
        <Route
          path="/jaeyeon/portfolio/:folder"
          element={
            <PortfolioDetail projects={jaeyeonAndTeam} basePath="jaeyeon" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
