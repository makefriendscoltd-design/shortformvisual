import './ProjectCard.css';

const CARDS = [
    {
        id: 'ccida',
        color: 'purple',
        icon: '🚀',
        name: 'ccidainsta',
        desc: 'FastAPI 기반의 공용 인스타그램 자동화 엔진. 텔레그램 봇과 웹 대시보드를 통해 원격으로 제어하며, YouTube 영상을 Instagram Reels로 자동 변환합니다.',
        details: [
            { icon: '🤖', text: '<strong>AI 엔진:</strong> OpenAI GPT로 스크립트 생성, ElevenLabs로 한국어 음성 합성' },
            { icon: '🎬', text: '<strong>영상 처리:</strong> MoviePy 기반 9:16 크롭, 속도 조절, 헤드카피 오버레이, 자막 합성' },
            { icon: '📡', text: '<strong>제어 방식:</strong> Telegram Bot (양방향), FastAPI Web Dashboard' },
            { icon: '⏰', text: '<strong>자동화:</strong> 예약 업로드, 제작 큐, Watchdog 무중단 운영' },
        ],
    },
    {
        id: 'momcu',
        color: 'pink',
        icon: '💖',
        name: 'momcuinsta',
        desc: '맘큐 계정 전용 콘텐츠 자동 생성 시스템. Anthropic Claude AI와 ElevenLabs를 결합하여 차별화된 콘텐츠를 생산합니다.',
        details: [
            { icon: '🤖', text: '<strong>AI 엔진:</strong> Anthropic Claude 스크립트, ElevenLabs 음성 합성' },
            { icon: '🎬', text: '<strong>영상 처리:</strong> yt-dlp 다운로드, MoviePy 편집, SRT 자막 자동 생성' },
            { icon: '📡', text: '<strong>제어 방식:</strong> Telegram Bot + Web Server 이중 인터페이스' },
            { icon: '📊', text: '<strong>특징:</strong> 계정별 상태 관리, 업로드 큐 자동 처리' },
        ],
    },
    {
        id: 'family',
        color: 'cyan',
        icon: '👨‍👩‍👧‍👦',
        name: 'familyinsta',
        desc: '패밀리 인스타그램 계정들을 대규모로 관리하는 시스템. Streamlit UI로 직관적 제어, FastAPI로 안정적 백엔드를 제공합니다.',
        details: [
            { icon: '🖥️', text: '<strong>UI:</strong> Streamlit 대시보드로 운영자가 직관적으로 다중 계정 관리' },
            { icon: '🤖', text: '<strong>AI 엔진:</strong> OpenAI GPT + ElevenLabs 음성, YouTube 자동 업로드' },
            { icon: '📡', text: '<strong>백엔드:</strong> FastAPI 서버 + Telegram Bot 원격 제어' },
            { icon: '👥', text: '<strong>특징:</strong> 다중 IG 계정 동시 운영, 계정별 세션 관리' },
        ],
    },
    {
        id: 'coupang',
        color: 'orange',
        icon: '🛒',
        name: 'coupang',
        desc: '쿠팡 파트너스 숏폼 자동 제작 도구. 레퍼런스 영상에서 제품을 AI로 식별하고, 리뷰 영상을 자동 생성한 뒤 어필리에이트 링크와 함께 배포합니다.',
        details: [
            { icon: '🔍', text: '<strong>AI 식별:</strong> Gemini AI가 영상에서 제품명, 가격, 특징을 자동 추출' },
            { icon: '🎬', text: '<strong>영상 제작:</strong> Vite+React 프론트 + Express 백엔드, ElevenLabs TTS' },
            { icon: '💰', text: '<strong>수익화:</strong> 쿠팡 파트너스 어필리에이트 링크 자동 생성' },
            { icon: '💬', text: '<strong>DM 자동화:</strong> 댓글 키워드 감지 → 자동 DM으로 구매 링크 전송' },
        ],
    },
];

function ProjectCard({ card }) {
    return (
        <div className={`project-card project-card--${card.color}`}>
            <div className="project-card__header">
                <span className="project-card__icon">{card.icon}</span>
                <span className="project-card__name">{card.name}</span>
            </div>
            <p className="project-card__desc">{card.desc}</p>
            <div className="project-card__details">
                {card.details.map((d, i) => (
                    <div key={i} className="project-card__detail">
                        <span className="project-card__detail-icon">{d.icon}</span>
                        <span
                            className="project-card__detail-text"
                            dangerouslySetInnerHTML={{ __html: d.text }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ProjectCards() {
    return (
        <section className="project-cards-section section">
            <h2 className="project-cards-section__title">
                <span className="gradient-text">프로젝트 상세</span>
            </h2>
            <p className="project-cards-section__desc">
                각 프로젝트의 기술 스택과 핵심 기능
            </p>
            <div className="project-cards-grid">
                {CARDS.map((card) => (
                    <ProjectCard key={card.id} card={card} />
                ))}
            </div>
        </section>
    );
}
