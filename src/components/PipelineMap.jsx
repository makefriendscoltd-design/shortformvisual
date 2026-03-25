import React from 'react';
import { useEffect, useRef } from 'react';
import './PipelineMap.css';

const PROJECTS = [
    {
        id: 'ccida',
        name: 'ccidainsta',
        desc: '공용 인스타 자동화 엔진 — FastAPI 기반 API 인터페이스',
        color: 'purple',
        icon: '🚀',
        tech: ['FastAPI', 'OpenAI', 'ElevenLabs', 'instagrapi'],
        steps: [
            { icon: '🔗', label: 'YouTube URL 입력' },
            { icon: '📥', label: '영상 다운로드' },
            { icon: '🤖', label: 'AI 스크립트 생성' },
            { icon: '👤', label: '사용자 확인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 처리' },
            { icon: '📝', label: '자막(SRT) 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'Instagram 업로드' },
        ],
    },
    {
        id: 'momcu',
        name: 'momcuinsta',
        desc: '맘큐 계정 콘텐츠 자동 생성 및 업로드',
        color: 'pink',
        icon: '💖',
        tech: ['Anthropic', 'ElevenLabs', 'MoviePy', 'yt-dlp'],
        steps: [
            { icon: '🔗', label: 'YouTube URL 입력' },
            { icon: '📥', label: '영상 다운로드' },
            { icon: '🤖', label: 'AI 스크립트 생성' },
            { icon: '👤', label: '사용자 확인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 처리' },
            { icon: '📝', label: '자막(SRT) 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'Instagram 업로드' },
        ],
    },
    {
        id: 'family',
        name: 'familyinsta',
        desc: '패밀리 계정 다중 관리 — Streamlit UI + FastAPI',
        color: 'cyan',
        icon: '👨‍👩‍👧‍👦',
        tech: ['FastAPI', 'Streamlit', 'OpenAI', 'instagrapi'],
        steps: [
            { icon: '🔗', label: 'YouTube URL 입력' },
            { icon: '📥', label: '영상 다운로드' },
            { icon: '🤖', label: 'AI 스크립트 생성' },
            { icon: '👤', label: '사용자 확인' },
            { icon: '🎙️', label: 'TTS 음성 합성' },
            { icon: '🎚️', label: '오디오 처리' },
            { icon: '📝', label: '자막(SRT) 생성' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '✍️', label: '캡션 생성' },
            { icon: '📱', label: 'Instagram 업로드' },
        ],
    },
    {
        id: 'coupang',
        name: 'coupang',
        desc: '쿠팡 파트너스 제품 영상 자동 제작 + DM 모니터링',
        color: 'orange',
        icon: '🛒',
        tech: ['Vite+React', 'Express', 'Gemini AI', 'ElevenLabs'],
        steps: [
            { icon: '🎥', label: '레퍼런스 영상' },
            { icon: '🔍', label: 'AI 제품 식별' },
            { icon: '📹', label: '원본 영상 검색' },
            { icon: '📄', label: '스크립트 생성' },
            { icon: '🎙️', label: 'TTS + 자막' },
            { icon: '🎬', label: '영상 합성' },
            { icon: '🔗', label: '쿠팡 링크 생성' },
            { icon: '📱', label: 'IG/YT 업로드' },
            { icon: '💬', label: 'DM 모니터링' },
        ],
    },
];

const SHARED_TECH = [
    { icon: '🎬', name: 'MoviePy', desc: '영상 합성 엔진' },
    { icon: '📥', name: 'yt-dlp', desc: '영상 다운로드' },
    { icon: '🎙️', name: 'ElevenLabs', desc: 'AI 음성 합성' },
    { icon: '🤖', name: 'OpenAI / Gemini', desc: 'AI 스크립트 생성' },
    { icon: '📱', name: 'instagrapi', desc: 'Instagram API' },
    { icon: '⚡', name: 'FastAPI', desc: '백엔드 서버' },
    { icon: '🤖', name: 'Telegram Bot', desc: '원격 제어' },
    { icon: '🎵', name: 'FFmpeg', desc: '오디오/비디오 처리' },
];

function StepNode({ step, color, index, delay }) {
    return (
        <div className="step-node" style={{ animationDelay: `${delay}ms` }}>
            <div className={`step-node__circle step-node__circle--${color}`}>
                <span className={`step-node__pulse step-node__pulse--${color}`}
                    style={{ animationDelay: `${delay + 500}ms` }} />
                <span>{step.icon}</span>
                <span className="step-node__number">{index + 1}</span>
            </div>
            <span className="step-node__label">{step.label}</span>
        </div>
    );
}

function Connector({ color, delay }) {
    return (
        <div className="step-connector" style={{ animationDelay: `${delay}ms` }}>
            <div className={`step-connector__line step-connector__line--${color}`}>
                <div
                    className={`step-connector__particle step-connector__particle--${color}`}
                    style={{ animationDelay: `${delay}ms` }}
                />
            </div>
        </div>
    );
}

function ProjectPipeline({ project }) {
    return (
        <div className="pipeline-project">
            <div className="pipeline-project__header">
                <div className={`pipeline-project__icon pipeline-project__icon--${project.id === 'coupang' ? 'coupang' : project.id === 'family' ? 'family' : project.id === 'momcu' ? 'momcu' : 'ccida'}`}>
                    {project.icon}
                </div>
                <div className="pipeline-project__info">
                    <div className="pipeline-project__name">{project.name}</div>
                    <div className="pipeline-project__desc">{project.desc}</div>
                </div>
                <div className="pipeline-project__tech">
                    {project.tech.map((t) => (
                        <span key={t} className="pipeline-project__tech-tag">{t}</span>
                    ))}
                </div>
            </div>

            <div className="pipeline-flow">
                <div className="pipeline-steps">
                    {project.steps.map((step, i) => (
                        <React.Fragment key={i}>
                            <StepNode
                                step={step}
                                color={project.color}
                                index={i}
                                delay={i * 120}
                            />
                            {i < project.steps.length - 1 && (
                                <Connector color={project.color} delay={i * 120 + 60} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function PipelineMap() {
    return (
        <section className="pipeline-section section">
            <h2 className="pipeline-section__title">
                <span className="gradient-text">자동화 파이프라인</span>
            </h2>
            <p className="pipeline-section__desc">
                각 프로젝트의 영상 생성 과정을 단계별로 시각화합니다
            </p>

            {PROJECTS.map((project) => (
                <ProjectPipeline key={project.id} project={project} />
            ))}

            <div className="shared-tech">
                <h3 className="shared-tech__title">공통 기술 스택</h3>
                <div className="shared-tech__grid">
                    {SHARED_TECH.map((tech) => (
                        <div key={tech.name} className="shared-tech__item">
                            <span className="shared-tech__item-icon">{tech.icon}</span>
                            <div>
                                <div className="shared-tech__item-name">{tech.name}</div>
                                <div className="shared-tech__item-desc">{tech.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
