import React from "react";
import "@/styles/timeline.scss";

const timelineData = [
  {
    status: "開星高校",
    years: "2012-2015",
    details: "テニス部に所属し、全国大会に２度出場しました。"
  },
  {
    status: "関西外国語大学",
    years: "2015-2020",
    details: 
    "語学、航空を中心に学びました。４回生時には休学し、オーストラリア シドニーのホテルにて、コンシェルジュとして3ヶ月間インターンシップに参加しました。"
  },
  {
    status: "株式会社ドッドウエル ビー・エム・エス",
    years: "2020-2024",
    details: "主にマンションに導入する防犯カメラシステムの新規開拓及びルート営業に4年間従事しました。"
  },
  {
    status: "現在",
    years: "2024-",
    details: "プログラミングスクール「RUNTEQ」にて、Ruby on Railsを中心にプログラミング学習を行いながら、SE転職を目指しています。"
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="about" className="min-h-screen section-anchor-offset">
      <h2 className="text-3xl font-bold">経歴</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3 className="timeline-title">
                {item.status}<br />
                {item.years}
              </h3>
              <p className="timeline-details">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;