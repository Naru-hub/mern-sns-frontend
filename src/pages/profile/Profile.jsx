import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Topbar from "../../components/topbar/Topbar";
import "./Profile .css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </div>
    </>
  );
}
