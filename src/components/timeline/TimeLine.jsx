import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";

export default function TimeLine() {
  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
