import React from "react";
import "@/styles/timeline.scss";

const timelineData = [
  {
    status: "開星高校",
    years: "2012-2015",
    details: "硬式テニス部に所属し、全国大会に2度出場しました。"
  },
  {
    status: "関西外国語大学",
    years: "2015-2020",
    details: 
    "語学を中心に学びました。4年生時には休学し、オーストラリア シドニーのホテルにて、コンシェルジュとして3ヶ月間勤務しました。"
  },
  {
    status: "株式会社ドッドウエル ビー・エム・エス",
    years: "2020-2024",
    details: "主にマンションへ導入する防犯カメラシステムの新規開拓及びルート営業に4年間従事しました。"
  },
  {
    status: "現在",
    years: "2024-",
    details: "プログラミングスクール「RUNTEQ」にて、Ruby on Railsを中心にプログラミング学習を行いながら、SE転職を目指しています。"
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="section-anchor-offset timeline">
      <h2 className="timeline-heading">経歴</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>
                <span className="status-text">{item.status}</span><br />
                <span className="year-text">{item.years}</span>
              </h3>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;