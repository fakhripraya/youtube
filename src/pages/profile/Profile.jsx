import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Background from "../../components/background";

export default function Profile() {
  return (
    <>
      <Topbar />
      <Background />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://d1e00ek4ebabms.cloudfront.net/production/83159443-2aa6-4798-8237-38b9bae23726.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://cdn.discordapp.com/attachments/923260530578292817/926118988809916486/1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">ElenaKOngz#8360</h4>
              <br />
              <span className="profileInfoDesc">We are going to the moon!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed isUser={true} />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
