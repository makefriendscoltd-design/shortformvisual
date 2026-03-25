import { useState, useEffect, useRef } from 'react';
import './LiveFeed.css';

const FEED_MESSAGES = [
    { type: 'url', ch: 'A', text: 'https://youtu.be/xK3d9a_VR...' },
    { type: 'status', ch: 'A', text: '📥 영상 다운로드 중...' },
    { type: 'success', ch: 'A', text: '✅ 영상 다운로드 완료 (1080p, 4:32)' },
    { type: 'status', ch: 'B', text: '🤖 AI 스크립트 생성 중...' },
    { type: 'url', ch: 'C', text: 'https://youtu.be/r7mQ9x2...' },
    { type: 'success', ch: 'B', text: '✅ 스크립트 작성 완료 (847자)' },
    { type: 'status', ch: 'A', text: '🧠 OpenAI GPT-4o 스크립트 생성 중...' },
    { type: 'success', ch: 'C', text: '✅ 영상 수집 완료' },
    { type: 'status', ch: 'D', text: '🔍 Gemini AI 제품 분석 중...' },
    { type: 'success', ch: 'A', text: '✅ 스크립트 작성 완료 (1,240자)' },
    { type: 'status', ch: 'A', text: '🎙️ ElevenLabs TTS 음성 합성 중...' },
    { type: 'url', ch: 'E', text: 'https://youtu.be/kP2sL8n...' },
    { type: 'success', ch: 'D', text: '✅ 제품 식별: "삼성 갤럭시 S25 Ultra" — ₩1,699,000' },
    { type: 'success', ch: 'A', text: '✅ TTS 합성 완료 (01:52)' },
    { type: 'status', ch: 'C', text: '🧠 Claude 스크립트 생성 중...' },
    { type: 'status', ch: 'A', text: '📝 SRT 자막 파일 생성 중...' },
    { type: 'success', ch: 'E', text: '✅ 영상 다운로드 완료' },
    { type: 'success', ch: 'A', text: '✅ 자막 생성 완료 (38개 라인)' },
    { type: 'status', ch: 'F', text: '🔮 Gemini 스크립트 작성 중...' },
    { type: 'status', ch: 'A', text: '🎬 MoviePy 영상 합성 중... (9:16 크롭)' },
    { type: 'success', ch: 'C', text: '✅ Claude 스크립트 완료 (932자)' },
    { type: 'status', ch: 'B', text: '🎙️ ElevenLabs 음성 합성 중...' },
    { type: 'url', ch: 'F', text: 'https://youtu.be/w9xQ1mA...' },
    { type: 'success', ch: 'A', text: '✅ 영상 합성 완료 (00:58, 1080x1920)' },
    { type: 'status', ch: 'A', text: '✍️ 캡션 생성 중...' },
    { type: 'success', ch: 'B', text: '✅ 음성 합성 완료 (02:15)' },
    { type: 'status', ch: 'D', text: '🎬 리뷰 영상 제작 중...' },
    { type: 'success', ch: 'A', text: '✅ 캡션 작성 완료' },
    { type: 'upload', ch: 'A', text: '📱 Instagram Reels 업로드 완료!' },
    { type: 'upload', ch: 'A', text: '📺 YouTube Shorts 업로드 완료!' },
    { type: 'status', ch: 'E', text: '🤖 AI 스크립트 자동 생성 중...' },
    { type: 'success', ch: 'D', text: '✅ 리뷰 영상 완성 (01:24)' },
    { type: 'upload', ch: 'D', text: '📱 IG 업로드 + 쿠팡 링크 생성 완료!' },
    { type: 'status', ch: 'D', text: '💬 DM 모니터링 시작...' },
    { type: 'success', ch: 'F', text: '✅ Gemini 스크립트 완료 (1,085자)' },
    { type: 'status', ch: 'C', text: '🎬 영상 합성 중...' },
    { type: 'url', ch: 'A', text: 'https://youtu.be/j8nRz4k...' },
    { type: 'success', ch: 'E', text: '✅ 자동 승인 완료 — 영상 합성 시작' },
    { type: 'upload', ch: 'B', text: '📱 Instagram Reels 업로드 완료!' },
    { type: 'success', ch: 'C', text: '✅ 영상 합성 완료' },
    { type: 'upload', ch: 'C', text: '📱 Instagram · YouTube 업로드 완료!' },
    { type: 'status', ch: 'F', text: '🎙️ ElevenLabs 음성 합성 중...' },
];

const CHANNEL_COLORS = {
    A: '#a78bfa', B: '#f472b6', C: '#22d3ee',
    D: '#fb923c', E: '#34d399', F: '#60a5fa',
};

function getTimeString(offset) {
    const d = new Date();
    d.setSeconds(d.getSeconds() - offset);
    return d.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

export default function LiveFeed() {
    const [messages, setMessages] = useState([]);
    const [msgIndex, setMsgIndex] = useState(0);
    const feedRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setMsgIndex(prev => {
                const next = prev >= FEED_MESSAGES.length - 1 ? 0 : prev + 1;
                const msg = FEED_MESSAGES[next];
                const newMsg = {
                    ...msg,
                    id: Date.now() + Math.random(),
                    time: getTimeString(0),
                };
                setMessages(prev => {
                    const updated = [newMsg, ...prev];
                    return updated.slice(0, 15); // keep last 15
                });
                return next;
            });
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    // Auto-scroll to top on new message
    useEffect(() => {
        if (feedRef.current) {
            feedRef.current.scrollTop = 0;
        }
    }, [messages]);

    return (
        <section className="livefeed-section">
            <div className="livefeed-header">
                <div className="livefeed-header__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
                    </svg>
                </div>
                <div>
                    <h2 className="livefeed-header__title">실시간 자동화 로그</h2>
                    <p className="livefeed-header__sub">Telegram Bot 알림 시뮬레이션</p>
                </div>
                <div className="livefeed-header__live">
                    <span className="livefeed-header__live-dot" />
                    LIVE
                </div>
            </div>

            <div className="livefeed-feed" ref={feedRef}>
                {messages.map((msg, i) => (
                    <div
                        key={msg.id}
                        className={`feed-msg feed-msg--${msg.type} ${i === 0 ? 'feed-msg--new' : ''}`}
                        style={{ '--ch-color': CHANNEL_COLORS[msg.ch] }}
                    >
                        <div className="feed-msg__left">
                            <span className="feed-msg__ch" style={{ color: CHANNEL_COLORS[msg.ch] }}>
                                {msg.ch}
                            </span>
                            <span className="feed-msg__time">{msg.time}</span>
                        </div>
                        <div className="feed-msg__content">
                            {msg.type === 'url' && <span className="feed-msg__url-icon">🔗</span>}
                            {msg.type === 'upload' && <span className="feed-msg__upload-pulse" style={{ background: CHANNEL_COLORS[msg.ch] }} />}
                            <span className={`feed-msg__text ${msg.type === 'url' ? 'feed-msg__text--url' : ''}`}>
                                {msg.text}
                            </span>
                        </div>
                    </div>
                ))}
                {messages.length === 0 && (
                    <div className="feed-msg feed-msg--empty">
                        <span className="feed-msg__text">대기 중...</span>
                    </div>
                )}
            </div>
        </section>
    );
}
