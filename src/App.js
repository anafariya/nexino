import "./App.css";
import Header from "./components/header/Header";
import Header2 from "./components/header2/Header2";
import HrDashboard from "./components/hrDashboard/HrDashboard";
import LeftSideBar from "./components/leftSidebar/LeftSideBar";
import RightSideBar from "./components/rightSideBar/RightSideBar";
function App() {
  return (
    <div className="App w-full overflow-x-hidden">
      <Header />
      <div className="flex">
        <div className="w-[4vw]"><LeftSideBar/></div>
        
        <div className="w-[96vw]">
          <Header2 />
          <div className="flex">
            <HrDashboard className="w-[70%]" />
            <RightSideBar className="w-[30%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
