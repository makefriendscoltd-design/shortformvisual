import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        AUTOMATION PIPELINE ACTIVE
      </div>
      <h1 className="hero__title">
        <span className="gradient-text">숏폼 콘텐츠</span>
        <br />
        자동화 시스템
      </h1>
      <p className="hero__subtitle">
        소스 영상에서 Instagram · YouTube 업로드까지 — AI가 스크립트를 작성하고,
        음성을 합성하고, 영상을 편집하는 완전 자동화 파이프라인
      </p>
      <div className="hero__stats">
        <div className="hero__stat">
          <div className="hero__stat-value gradient-text">6</div>
          <div className="hero__stat-label">Channels</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-value gradient-text">10+</div>
          <div className="hero__stat-label">Pipeline Steps</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-value gradient-text">6</div>
          <div className="hero__stat-label">AI Models</div>
        </div>
        <div className="hero__stat">
          <div className="hero__stat-value gradient-text">24/7</div>
          <div className="hero__stat-label">Always On</div>
        </div>
      </div>
    </section>
  );
}
