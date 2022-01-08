import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import Background from "../../components/background";

export default function Home() {
  return (
    <>
      <Topbar />
      <Background />
      <div className="homeContainer">
        <Sidebar />
        <Feed isUser={false} />
        <Rightbar />
      </div>
    </>
  );
}
