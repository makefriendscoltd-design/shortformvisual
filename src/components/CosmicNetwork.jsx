import React, { useRef, useEffect, useState } from 'react';
import './CosmicNetwork.css';

const CHANNELS = [
    {
        id: 'A', label: 'Channel A', color: '#a78bfa', glow: 'rgba(167,139,250,0.4)',
        tech: ['FastAPI', 'OpenAI', 'ElevenLabs'],
        stats: [
            { icon: '🎬', value: '847', label: '제작 영상' },
            { icon: '👥', value: '+12.4K', label: '팔로워 증가' },
            { icon: '📅', value: '142일', label: '자동화 운영' },
            { icon: '👁️', value: '2.1M', label: '총 조회수' },
        ],
        steps: [
            { icon: '🔗', label: '소스 URL' },
            { icon: '📥', label: '영상 다운로드' },
            { icon: '🤖', label: 'AI 스크립트 생성' },
            { icon: '👤', label: '사용자 확인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 처리' },
            { icon: '📝', label: '자막 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'IG · YT 업로드' },
        ],
    },
    {
        id: 'B', label: 'Channel B', color: '#f472b6', glow: 'rgba(244,114,182,0.4)',
        tech: ['Anthropic', 'ElevenLabs', 'MoviePy'],
        stats: [
            { icon: '🎬', value: '623', label: '제작 영상' },
            { icon: '👥', value: '+8.7K', label: '팔로워 증가' },
            { icon: '📅', value: '98일', label: '자동화 운영' },
            { icon: '❤️', value: '890K', label: '총 좋아요' },
        ],
        steps: [
            { icon: '🔗', label: '소스 URL' },
            { icon: '📥', label: '영상 다운로드' },
            { icon: '🧠', label: 'Claude 스크립트' },
            { icon: '👤', label: '사용자 확인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 믹싱' },
            { icon: '📝', label: '자막 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'IG · YT 업로드' },
        ],
    },
    {
        id: 'C', label: 'Channel C', color: '#22d3ee', glow: 'rgba(34,211,238,0.4)',
        tech: ['Streamlit', 'OpenAI', 'FastAPI'],
        stats: [
            { icon: '🎬', value: '1,204', label: '제작 영상' },
            { icon: '👥', value: '+21.3K', label: '팔로워 증가' },
            { icon: '📅', value: '187일', label: '자동화 운영' },
            { icon: '📊', value: '5계정', label: '동시 운영' },
        ],
        steps: [
            { icon: '🔗', label: '소스 URL' },
            { icon: '📥', label: '영상 다운로드' },
            { icon: '🤖', label: 'AI 스크립트 생성' },
            { icon: '🖥️', label: '대시보드 확인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 처리' },
            { icon: '📝', label: '자막 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'IG · YT 업로드' },
        ],
    },
    {
        id: 'D', label: 'Channel D', color: '#fb923c', glow: 'rgba(251,146,60,0.4)',
        tech: ['Gemini AI', 'Express', 'Vite+React'],
        stats: [
            { icon: '🎬', value: '312', label: '제작 영상' },
            { icon: '💰', value: '₩4.2M', label: '예상 수익' },
            { icon: '📅', value: '67일', label: '자동화 운영' },
            { icon: '💬', value: '1,847', label: 'DM 발송' },
        ],
        steps: [
            { icon: '🎥', label: '레퍼런스 영상' },
            { icon: '🔍', label: 'AI 제품 식별' },
            { icon: '📹', label: '원본 영상 검색' },
            { icon: '📄', label: '스크립트 생성' },
            { icon: '🎙️', label: 'TTS + 자막' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '🔗', label: '링크 생성' },
            { icon: '📱', label: 'IG · YT 업로드' },
            { icon: '💬', label: 'DM 모니터링' },
        ],
    },
    {
        id: 'E', label: 'Channel E', color: '#34d399', glow: 'rgba(52,211,153,0.4)',
        tech: ['OpenAI', 'MoviePy', 'Telegram'],
        stats: [
            { icon: '🎬', value: '534', label: '제작 영상' },
            { icon: '👥', value: '+6.1K', label: '팔로워 증가' },
            { icon: '📅', value: '112일', label: '자동화 운영' },
            { icon: '⚡', value: '99.2%', label: '자동 승인률' },
        ],
        steps: [
            { icon: '🔗', label: '소스 URL' },
            { icon: '📥', label: '영상 다운로드' },
            { icon: '🤖', label: 'AI 스크립트 생성' },
            { icon: '✅', label: '자동 승인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 처리' },
            { icon: '📝', label: '자막 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'IG · YT 업로드' },
        ],
    },
    {
        id: 'F', label: 'Channel F', color: '#60a5fa', glow: 'rgba(96,165,250,0.4)',
        tech: ['FastAPI', 'Gemini', 'ElevenLabs'],
        stats: [
            { icon: '🎬', value: '276', label: '제작 영상' },
            { icon: '👥', value: '+3.8K', label: '팔로워 증가' },
            { icon: '📅', value: '54일', label: '자동화 운영' },
            { icon: '👁️', value: '680K', label: '총 조회수' },
        ],
        steps: [
            { icon: '🔗', label: '소스 URL' },
            { icon: '📥', label: '영상 수집' },
            { icon: '🔮', label: 'Gemini 스크립트' },
            { icon: '👤', label: '사용자 확인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 마스터링' },
            { icon: '📝', label: '자막 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'IG · YT 업로드' },
        ],
    },
];

const SHARED_TECH = [
    { icon: '🎬', name: 'MoviePy' },
    { icon: '📥', name: 'yt-dlp' },
    { icon: '🎙️', name: 'ElevenLabs' },
    { icon: '🤖', name: 'OpenAI' },
    { icon: '🔮', name: 'Gemini' },
    { icon: '📱', name: 'instagrapi' },
    { icon: '⚡', name: 'FastAPI' },
    { icon: '🎵', name: 'FFmpeg' },
];

// ── Starfield ──
function useStarfield(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let stars = [];

        function resize() {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            createStars();
        }

        function createStars() {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            stars = Array.from({ length: 200 }, () => ({
                x: Math.random() * w, y: Math.random() * h,
                r: Math.random() * 1.2 + 0.3,
                speed: Math.random() * 0.15 + 0.02,
                opacity: Math.random() * 0.6 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinklePhase: Math.random() * Math.PI * 2,
            }));
        }

        function draw(t) {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);
            for (const s of stars) {
                const flicker = Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.3 + 0.7;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 210, 255, ${s.opacity * flicker})`;
                ctx.fill();
                s.y += s.speed;
                if (s.y > h + 5) { s.y = -5; s.x = Math.random() * w; }
            }
            animId = requestAnimationFrame(draw);
        }

        resize();
        animId = requestAnimationFrame(draw);
        window.addEventListener('resize', resize);
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, [canvasRef]);
}

export default function CosmicNetwork() {
    const starRef = useRef(null);
    const [selectedChannel, setSelectedChannel] = useState(null);

    useStarfield(starRef);

    const ORBIT_RADIUS = 250;
    const channelPositions = CHANNELS.map((ch, i) => {
        const angle = (i / CHANNELS.length) * Math.PI * 2 - Math.PI / 2;
        const x = Math.round(Math.cos(angle) * ORBIT_RADIUS);
        const y = Math.round(Math.sin(angle) * ORBIT_RADIUS);
        return { ...ch, angle, index: i, x, y };
    });

    const handlePlanetClick = (chId) => {
        setSelectedChannel(selectedChannel === chId ? null : chId);
    };

    const activeChannel = selectedChannel
        ? CHANNELS.find(ch => ch.id === selectedChannel)
        : null;

    return (
        <div className="cosmic-wrapper">
            <canvas ref={starRef} className="cosmic-stars" />
            <div className="nebula nebula--1" />
            <div className="nebula nebula--2" />
            <div className="nebula nebula--3" />

            {/* Orbital Network */}
            <section className="cosmic-section">
                <h2 className="cosmic-title">
                    <span className="gradient-text">자동화 파이프라인</span>
                </h2>
                <p className="cosmic-desc">채널을 클릭하면 프로세스가 펼쳐집니다</p>

                <div className="orbit-container">
                    {/* Core */}
                    <div className="orbit-core">
                        <div className="orbit-core__inner">
                            <span className="orbit-core__icon">⚙️</span>
                            <span className="orbit-core__label">Core<br />Engine</span>
                        </div>
                        <div className="orbit-core__ring orbit-core__ring--1" />
                        <div className="orbit-core__ring orbit-core__ring--2" />
                        <div className="orbit-core__ring orbit-core__ring--3" />
                    </div>

                    {/* Channel Planets */}
                    {channelPositions.map((ch) => {
                        const isSelected = selectedChannel === ch.id;
                        return (
                            <div
                                key={ch.id}
                                className={`orbit-planet ${isSelected ? 'orbit-planet--selected' : ''} ${selectedChannel && selectedChannel !== ch.id ? 'orbit-planet--dimmed' : ''}`}
                                style={{
                                    '--color': ch.color,
                                    '--glow': ch.glow,
                                    '--delay': `${ch.index * 0.5}s`,
                                    transform: `translate(-50%,-50%) translate(${ch.x}px, ${ch.y}px)`,
                                }}
                                onClick={() => handlePlanetClick(ch.id)}
                            >
                                <div className="orbit-planet__body">
                                    <span className="orbit-planet__letter">{ch.id}</span>
                                </div>
                                <div className="orbit-planet__label">{ch.label}</div>

                                {/* Asteroid stats — branch outward */}
                                {ch.stats.map((stat, si) => {
                                    const statAngle = (si / ch.stats.length) * Math.PI * 2 - Math.PI / 2;
                                    const statR = isSelected ? 90 : 0;
                                    const sx = Math.round(Math.cos(statAngle) * statR);
                                    const sy = Math.round(Math.sin(statAngle) * statR);
                                    return (
                                        <div
                                            key={si}
                                            className={`asteroid ${isSelected ? 'asteroid--visible' : ''}`}
                                            style={{
                                                '--ast-color': ch.color,
                                                '--ast-glow': ch.glow,
                                                '--ast-delay': `${si * 0.08}s`,
                                                transform: `translate(${sx}px, ${sy}px)`,
                                            }}
                                        >
                                            <div className="asteroid__connector" style={{
                                                width: isSelected ? `${statR - 20}px` : '0px',
                                                transform: `rotate(${statAngle}rad)`,
                                                transformOrigin: 'left center',
                                            }} />
                                            <div className="asteroid__body">
                                                <span className="asteroid__icon">{stat.icon}</span>
                                                <span className="asteroid__value">{stat.value}</span>
                                                <span className="asteroid__label">{stat.label}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}

                    {/* Tech badges */}
                    {SHARED_TECH.map((tech, i) => {
                        const techAngle = (i / SHARED_TECH.length) * Math.PI * 2 + Math.PI / 8;
                        const tx = Math.round(Math.cos(techAngle) * 170);
                        const ty = Math.round(Math.sin(techAngle) * 170);
                        return (
                            <div
                                key={tech.name}
                                className={`orbit-tech ${selectedChannel ? 'orbit-tech--dimmed' : ''}`}
                                style={{
                                    '--tech-delay': `${i * 0.3}s`,
                                    transform: `translate(-50%,-50%) translate(${tx}px, ${ty}px)`,
                                }}
                            >
                                <span className="orbit-tech__icon">{tech.icon}</span>
                                <span className="orbit-tech__name">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Expanded Pipeline — appears below orbit when channel is selected */}
                <div className={`expanded-pipeline ${activeChannel ? 'expanded-pipeline--visible' : ''}`}>
                    {activeChannel && (
                        <>
                            <div className="expanded-pipeline__header">
                                <div
                                    className="expanded-pipeline__dot"
                                    style={{ background: activeChannel.color, boxShadow: `0 0 12px ${activeChannel.glow}` }}
                                />
                                <h3 className="expanded-pipeline__name" style={{ color: activeChannel.color }}>
                                    {activeChannel.label}
                                </h3>
                                <div className="expanded-pipeline__techs">
                                    {activeChannel.tech.map(t => (
                                        <span key={t} className="expanded-pipeline__tech-tag">{t}</span>
                                    ))}
                                </div>
                                <button
                                    className="expanded-pipeline__close"
                                    onClick={() => setSelectedChannel(null)}
                                >✕</button>
                            </div>

                            <div className="expanded-pipeline__steps">
                                {activeChannel.steps.map((step, i) => (
                                    <React.Fragment key={i}>
                                        <div
                                            className="exp-step"
                                            style={{
                                                '--exp-color': activeChannel.color,
                                                '--exp-glow': activeChannel.glow,
                                                '--exp-delay': `${i * 0.06}s`,
                                            }}
                                        >
                                            <div className="exp-step__orb">
                                                <span>{step.icon}</span>
                                            </div>
                                            <div className="exp-step__info">
                                                <span className="exp-step__num">{String(i + 1).padStart(2, '0')}</span>
                                                <span className="exp-step__label">{step.label}</span>
                                            </div>
                                        </div>
                                        {i < activeChannel.steps.length - 1 && (
                                            <div className="exp-link" style={{ '--exp-delay': `${i * 0.06 + 0.03}s`, '--exp-color': activeChannel.color }}>
                                                <div className="exp-link__beam" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Bottom Channel Tags */}
            <section className="pipeline-section">
                <div className="channel-tags">
                    {CHANNELS.map((ch) => (
                        <div
                            key={ch.id}
                            className={`channel-tag ${selectedChannel === ch.id ? 'channel-tag--active' : ''}`}
                            style={{ '--tag-color': ch.color }}
                            onClick={() => handlePlanetClick(ch.id)}
                        >
                            <span className="channel-tag__dot" />
                            <span className="channel-tag__name">{ch.label}</span>
                            <span className="channel-tag__status">{selectedChannel === ch.id ? 'VIEWING' : 'ACTIVE'}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
