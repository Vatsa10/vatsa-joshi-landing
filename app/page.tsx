import PortfolioClient from "./portfolio-client";
import HeroNeural from "./hero-neural";

const RESUME_URL = "/uploads/VatsaJoshi_Resume.pdf";

export default function Home() {
  return (
    <>
      <div className="cursor-ring" aria-hidden="true"></div>
      <div className="cursor-dot" aria-hidden="true"></div>

      <header className="rail">
        <div className="rail-inner">
          <a href="/" className="mono-mark" aria-label="Vatsa Joshi — home">
            <span className="mark-box">VJ</span>
          </a>
          <span className="availability"><span className="dot"></span></span>
          <nav>
            <a href="#about" data-n="01">About</a>
            <a href="#now" data-n="02">Now</a>
            <a href="#experience" data-n="03">Experience</a>
            <a href="#projects" data-n="04">Projects</a>
            <a href="#contact" data-n="05">Contact</a>
            <a className="resume-link" href={RESUME_URL} target="_blank" rel="noopener">Résumé ↗</a>
          </nav>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="navDrawer"
            type="button"
          >
            <span className="bar" aria-hidden="true"></span>
          </button>
          <div className="rail-socials" aria-label="Social links">
            <a
              href="https://www.linkedin.com/in/vatsa-joshi/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href="https://github.com/Vatsa10"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.41-1.31.75-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Left edge social rail — fixed, desktop only */}
      <aside className="edge-rail" aria-label="Social links">
        <a
          className="edge-link"
          href="https://www.linkedin.com/in/vatsa-joshi/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn — Vatsa Joshi"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
          <span className="edge-label">LinkedIn</span>
        </a>
        <a
          className="edge-link"
          href="https://github.com/Vatsa10"
          target="_blank"
          rel="noopener"
          aria-label="GitHub — Vatsa10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
            <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.41-1.31.75-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .3" />
          </svg>
          <span className="edge-label">GitHub</span>
        </a>
        <span className="edge-spine" aria-hidden="true" />
      </aside>

      {/* Mobile drawer */}
      <div className="nav-backdrop" id="navBackdrop" aria-hidden="true"></div>
      <aside
        className="nav-drawer"
        id="navDrawer"
        aria-label="Mobile navigation"
        aria-hidden="true"
      >
        <div className="drawer-head">
          <a href="/" className="mono-mark drawer-mark" aria-label="Vatsa Joshi — home">
            <span className="mark-box">VJ</span>
            <span className="drawer-eyebrow">Menu</span>
          </a>
          <button
            className="drawer-close"
            id="drawerClose"
            type="button"
            aria-label="Close menu"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav className="drawer-nav">
          <a href="#about"><span className="n">01</span><span className="l">About</span></a>
          <a href="#now"><span className="n">02</span><span className="l">Now</span></a>
          <a href="#experience"><span className="n">03</span><span className="l">Experience</span></a>
          <a href="#projects"><span className="n">04</span><span className="l">Projects</span></a>
          <a href="#contact"><span className="n">05</span><span className="l">Contact</span></a>
          <a className="resume-link" href={RESUME_URL} target="_blank" rel="noopener">
            <span className="n">↗</span><span className="l">Résumé</span>
          </a>
        </nav>
        <div className="drawer-foot">
          <span className="drawer-avail"><span className="dot"></span>Available — Q3 2026</span>
          <span className="drawer-loc">Bengaluru · IN</span>
        </div>
      </aside>

      <main>
      {/* HERO */}
      <section className="hero wrap" id="home">
        <HeroNeural />
        <div className="hero-canvas-meta" aria-hidden="true">
          <span className="hcm-cell"><span className="hcm-k">model</span><span className="hcm-v">vatsa-llm · 7B</span></span>
          <span className="hcm-cell"><span className="hcm-k">ctx</span><span className="hcm-v">128k</span></span>
          <span className="hcm-cell"><span className="hcm-k">layers</span><span className="hcm-v">[4·6·7·6·4]</span></span>
          <span className="hcm-cell"><span className="hcm-k">temp</span><span className="hcm-v">0.42</span></span>
          <span className="hcm-cell"><span className="hcm-k">tok/s</span><span className="hcm-v" id="tokRate" suppressHydrationWarning>142</span></span>
          <span className="hcm-cell"><span className="hcm-k">clock</span><span className="hcm-v" id="hcClock" suppressHydrationWarning>00:00:00</span></span>
        </div>

        <h1 className="display word-reveal">
          <span className="w"><span>Vatsa</span></span>{" "}
          <span className="w"><span>Joshi<span style={{ color: "var(--accent)" }}>.</span></span></span><br />
          <span className="w"><span className="serif">building</span></span>{" "}
          <span className="w"><span>agents</span></span>{" "}
          <span className="w"><span>that</span></span>{" "}
          <span className="w"><span className="stroke">ship.</span></span>
        </h1>

        <div className="hero-tagrow">
          <p className="tag-lede reveal">
            Full-stack engineer working at the seam between <em>large language models</em>, multi-agent systems, and the messy production infrastructure that has to carry them. Previously shipped legal AI at <b>Promact</b>. Open to roles.
          </p>
          <div className="tag-meta reveal">
            <div className="row"><span className="k">Role</span><span className="v">Software Engineer (AI)</span></div>
            <div className="row"><span className="k">Focus</span><span className="v">Agentic systems · RAG · LLM fine-tuning</span></div>
            <div className="row"><span className="k">Stack</span><span className="v">Python · TypeScript · Rust</span></div>
            <div className="row"><span className="k">Based</span><span className="v">Bengaluru, Karnataka (IN)</span></div>
          </div>
        </div>

        <div className="cta-row reveal">
          <a className="btn primary" href={RESUME_URL} target="_blank" rel="noopener">
            Résumé <span className="arrow">↗</span>
          </a>
          <a className="btn" href="#projects">
            See the work <span className="arrow">→</span>
          </a>
          <a className="btn" href="mailto:vatsajoshi2@gmail.com">
            Say hi <span className="arrow">✉</span>
          </a>
        </div>

        {/* Live-ish agent panel */}
        <div className="agent-panel reveal">
          <div>
            <div className="agent-label">Orchestrator</div>
            <div style={{ fontWeight: 500 }}>vatsa.agent</div>
            <div style={{ color: "var(--muted)", marginTop: 4 }}>status: idle · 04:12 UTC</div>
          </div>
          <div className="agent-stream">
            <div className="agent-label agent-label-row">
              <span>Stream</span>
              <svg
                className="signal-bars"
                width="26"
                height="12"
                viewBox="0 0 26 12"
                aria-hidden="true"
              >
                <rect x="0" y="4" width="2" height="8" />
                <rect x="4" y="2" width="2" height="10" />
                <rect x="8" y="0" width="2" height="12" />
                <rect x="12" y="3" width="2" height="9" />
                <rect x="16" y="1" width="2" height="11" />
                <rect x="20" y="5" width="2" height="7" />
                <rect x="24" y="3" width="2" height="9" />
              </svg>
            </div>
            <div className="agent-log" id="agentLog" suppressHydrationWarning>
              <div className="line"><span className="tok">&gt;</span> boot orchestrator.py ...</div>
            </div>
          </div>
          <div>
            <div className="agent-label">Context</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 10px", fontSize: "10.5px" }}>
              <span style={{ color: "var(--muted)" }}>tools</span><span>17</span>
              <span style={{ color: "var(--muted)" }}>tokens</span><span>1.2M</span>
              <span style={{ color: "var(--muted)" }}>runs</span><span>4,318</span>
              <span style={{ color: "var(--muted)" }}>uptime</span><span style={{ color: "var(--ok)" }}>99.2%</span>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
          <span className="scroll-hint-label">Scroll</span>
          <span className="scroll-hint-line" aria-hidden="true"></span>
          <span className="scroll-hint-arrow" aria-hidden="true">↓</span>
        </a>
      </section>

      {/* ABOUT */}
      <section className="block wrap" id="about">
        <div className="section-head reveal">
          <span className="num">01 — ABOUT</span>
          <h2>The <span className="serif">human</span><br />behind the agents.</h2>
          <div className="meta">Vatsa Joshi<br />22 · India</div>
        </div>

        <div className="grid-12 about-grid reveal stagger">
          <div className="about-photo">
            <div className="frame">
              <span className="tape">EXHIBIT A</span>
              <img src="/assets/vatsa.jpg" alt="Vatsa Joshi speaking at Navrachana University" />
            </div>
            <div className="cap">↳ speaking @ Navrachana University, 2025</div>
          </div>

          <div className="about-body">
            <p className="lede">
              I build <em>end-to-end</em> software — from low-level model implementations to production full-stack systems — with a founder&apos;s bias for shipping.
            </p>
            <p>
              Computer science undergraduate at Navrachana University, graduating September 2026. I&apos;ve spent the last three years working across the AI/ML and SaaS industries as an intern, contractor, and now a full-time trainee — specializing in agentic systems, retrieval pipelines, and the boring-but-critical infrastructure that makes LLMs behave in production.
            </p>
            <p>
              The stuff I actually care about: multi-agent architectures with real coordination logic, RAG systems that don&apos;t hallucinate, fine-tuning small models for specific domains, and writing transformers from scratch in Rust when nobody asked me to.
            </p>
            <div className="keyvals">
              <div><span className="k">Degree</span>B.Tech Computer Science<br />Navrachana University · 2022–2026</div>
              <div><span className="k">Interests</span>Agents, systems, low-level ML, research</div>
              <div><span className="k">Reading</span>Distributed systems, compiler internals</div>
              <div><span className="k">Ships</span>GitHub @Vatsa10 · 40+ repos</div>
            </div>
          </div>
        </div>
      </section>

      {/* NOW — current role */}
      <section className="block wrap" id="now">
        <div className="section-head reveal">
          <span className="num">02 — NOW</span>
          <h2>Between builds. <span className="serif">Looking</span><br />for what&apos;s next.</h2>
          <div className="meta">Wrapped at Promact<br />Open to roles · 2026</div>
        </div>

        <div className="now-wrap reveal">
          <div className="now-tape" aria-hidden="true">
            <div className="ticker">
              <span>● Available</span><span>Open to full-time roles</span><span>AI Engineer</span><span>Agentic systems</span><span>RAG · Fine-tuning</span><span>Remote / Hybrid / Relocate</span><span>Reach out ↗</span>
              <span>● Available</span><span>Open to full-time roles</span><span>AI Engineer</span><span>Agentic systems</span><span>RAG · Fine-tuning</span><span>Remote / Hybrid / Relocate</span><span>Reach out ↗</span>
            </div>
          </div>
          <div className="now-grid">
            <div className="now-left">
              <div className="role">Looking for the<br /><span className="serif">next</span> build<span style={{ color: "var(--accent)" }}>.</span></div>
              <div className="where">Tenure complete · Promact · 2026</div>
              <p>
                Just wrapped my tenure at <b>Promact</b> contributing to <b>BharatLaw.ai</b> — designing AI systems that read, parse, and draft across millions of Indian legal documents. Now open to full-time AI engineering roles where I can keep shipping agentic systems and production-grade LLM infra.
              </p>
              <ul className="bullets">
                <li>Built end-to-end AI-driven Document Management Systems — translation, parsing, indexing, retrieval across 22+ languages.</li>
                <li>Cut legal NER extraction cost 25× — from ₹1/doc to 6-7 paisa — across an 80-lakh Indian court judgment corpus. Replaced a 7-stage LLM pipeline with a 2-call Gemini-2.5-Flash-Lite architecture.</li>
                <li>Shipped a multi-agent <b>Petition Writer</b> drafting structured legal petitions from case inputs, with iterative human-in-the-loop clarification.</li>
                <li>Designed a legal intelligence platform — judge profiling, case-brief-driven litigation strategy, lawyer compatibility analysis — agents coordinating vector similarity, LLM reasoning, and live web search.</li>
              </ul>
              <div className="now-cta">
                <a className="btn primary" href="mailto:vatsajoshi2@gmail.com?subject=Role%20Opportunity">
                  Hire me <span className="arrow">→</span>
                </a>
                <a className="btn" href={RESUME_URL} target="_blank" rel="noopener">
                  Résumé <span className="arrow">↗</span>
                </a>
              </div>
            </div>
            <div className="now-right">
              <div className="product"><small>Status</small>Open to opportunities</div>
              <div className="spec-list">
                <div className="r"><span className="k">Seeking</span><span className="v">AI Engineer · Full-time</span></div>
                <div className="r"><span className="k">Focus</span><span className="v">Agentic systems · RAG · LLM infra</span></div>
                <div className="r"><span className="k">Stack</span><span className="v">Python · TypeScript · Rust</span></div>
                <div className="r"><span className="k">Last role</span><span className="v">SWE Trainee (AI), Promact · Jan–2026 → ended</span></div>
                <div className="r"><span className="k">Location</span><span className="v">Bengaluru · open to relocate</span></div>
                <div className="r"><span className="k">Mode</span><span className="v">On-site · Hybrid · Remote</span></div>
                <div className="r"><span className="k">Notice</span><span className="v">Immediate</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="block wrap" id="experience">
        <div className="section-head reveal">
          <span className="num">03 — EXPERIENCE</span>
          <h2>A short <span className="serif">trail</span><br />of roles.</h2>
          <div className="meta">2023 → Present<br />5 positions</div>
        </div>

        <div className="xp reveal stagger">
          <div className="xp-row">
            <div className="xp-date">JAN — MAY 2026</div>
            <div className="xp-role">Software Engineer (AI)<span className="co">Promact · Vadodara</span></div>
            <div className="xp-desc">BharatLaw.ai — multi-agent petition drafting, legal intelligence platform, end-to-end document systems.</div>
            <div className="xp-side">Full-time<br />Completed</div>
          </div>
          <div className="xp-row">
            <div className="xp-date">JUN — DEC 2025</div>
            <div className="xp-role">Full-Stack Developer<span className="co">Hiraeth Tech · Vadodara</span></div>
            <div className="xp-desc">Built scalable products with NestJS, Next.js, PostgreSQL. Retrofitted GenAI services — RAG chatbots, LLM-powered assistants, vector search — onto existing client production websites without breaking live deployments.</div>
            <div className="xp-side">Internship<br />6 months</div>
          </div>
          <div className="xp-row">
            <div className="xp-date">MAR — MAY 2025</div>
            <div className="xp-role">Deep Learning Engineer<span className="co">Prodigal AI · Remote</span></div>
            <div className="xp-desc">CNNs for image classification (92% accuracy), fine-tuned transformer models, real-time object detection with YOLO / SSD.</div>
            <div className="xp-side">Internship<br />3 months</div>
          </div>
          <div className="xp-row">
            <div className="xp-date">FEB — APR 2025</div>
            <div className="xp-role">AI / ML Engineer<span className="co">Sparks To Ideas · Remote</span></div>
            <div className="xp-desc">XGBoost churn prediction at 95% accuracy; built an AI content intelligence pipeline with FAISS (HNSW) deduplication using multilingual embeddings.</div>
            <div className="xp-side">Internship<br />3 months</div>
          </div>
          <div className="xp-row">
            <div className="xp-date">MAY — JUL 2024</div>
            <div className="xp-role">Summer Intern, Backend<span className="co">PAM Infotech · Vadodara</span></div>
            <div className="xp-desc">Java backend work, legacy migration to modern stack, server-side performance optimization.</div>
            <div className="xp-side">Internship<br />3 months</div>
          </div>
          <div className="xp-row">
            <div className="xp-date">MAY — JUL 2023</div>
            <div className="xp-role">Web Application Developer<span className="co">Jeenweb Technologists</span></div>
            <div className="xp-desc">First role — React frontends, backend integration, end-to-end web apps. Where it all started.</div>
            <div className="xp-side">Internship<br />3 months</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="block wrap" id="projects">
        <div className="section-head reveal">
          <span className="num">04 — PROJECTS</span>
          <h2>Things I&apos;ve <span className="serif">built</span><br />on purpose.</h2>
          <div className="meta">Selected work<br />2023 → 2026</div>
        </div>

        <div className="filters reveal" id="filters">
          <button className="chip active" data-filter="all">All <span className="c">[19]</span></button>
          <button className="chip" data-filter="agents">Agents <span className="c">[08]</span></button>
          <button className="chip" data-filter="rag">RAG &amp; Memory <span className="c">[05]</span></button>
          <button className="chip" data-filter="fine-tuning">Fine-tuning <span className="c">[04]</span></button>
          <button className="chip" data-filter="vision">Vision / Mobile <span className="c">[02]</span></button>
        </div>

        <div className="projects-grid" id="projectsGrid">
          {/* Agents */}
          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/Booky" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 01</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Conversational multi-agent appointment booking — real-time availability, automated email confirmations. Orchestrator + DB + Notifier.</div>
            <div className="p-title">Booky</div>
            <div className="p-tags"><span className="p-tag">Multi-Agent</span><span className="p-tag">Flask</span><span className="p-tag">SQLite</span></div>
          </a>

          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 02</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">N8N-inspired agentic workflow automation with a visual node builder and AI-powered conditional routing between agents.</div>
            <div className="p-title">FloWork</div>
            <div className="p-tags"><span className="p-tag">LangGraph</span><span className="p-tag">Groq</span><span className="p-tag">Next.js</span></div>
          </a>

          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 03</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Agentic recruitment chatbot — candidate screening, dynamic technical assessment generation, sentiment-based evaluation.</div>
            <div className="p-title">Hiring Assistant</div>
            <div className="p-tags"><span className="p-tag">CrewAI</span><span className="p-tag">Gemini 2.0</span><span className="p-tag">Streamlit</span></div>
          </a>

          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 04</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Personal AI agent automating Gmail, Google Calendar, and Tasks via Workspace APIs with OAuth 2.1 and real-time chat.</div>
            <div className="p-title">PersonAI</div>
            <div className="p-tags"><span className="p-tag">Groq</span><span className="p-tag">LangChain</span><span className="p-tag">FastMCP</span></div>
          </a>

          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/ecomm-agent" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 05</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Multi-agent WhatsApp shopping assistant for product discovery, price comparison, and informed purchase decisions.</div>
            <div className="p-title">Ecommerce Agent</div>
            <div className="p-tags"><span className="p-tag">LangGraph</span><span className="p-tag">LLM</span><span className="p-tag">WhatsApp</span></div>
          </a>

          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/TradeXpert" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 06</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Enterprise financial analytics platform — four-agent orchestration (ingestion, quantitative, qualitative, synthesis) generating deep equity reports with event-driven workflows.</div>
            <div className="p-title">TradeXpert</div>
            <div className="p-tags"><span className="p-tag">Multi-Agent</span><span className="p-tag">Gemini</span><span className="p-tag">Inngest</span></div>
          </a>

          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/fn-gemma" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 07</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Hybrid AI router orchestrating on-device FunctionGemma-270M with Gemini 2.5 Flash Lite — 99% function-calling accuracy under 550ms across 30 cases. 3-tier pre-routing, post-process cleanup, multi-intent handling.</div>
            <div className="p-title">fn-gemma Router</div>
            <div className="p-tags"><span className="p-tag">FunctionGemma</span><span className="p-tag">Gemini 2.5</span><span className="p-tag">Hybrid</span></div>
          </a>

          <a className="p-card" data-cat="agents" href="https://github.com/Vatsa10/Deep-Research" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 08</span><span className="p-cat">Agents</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Multi-agent deep research service on AgentScope. Custom async DAG executor, MoE query routing, hybrid Qdrant/Turso memory, parallel ReAct web-agents, fact-checker + critic loop with up to 3 re-plan iterations.</div>
            <div className="p-title">Deep Research</div>
            <div className="p-tags"><span className="p-tag">AgentScope</span><span className="p-tag">DAG · MoE</span><span className="p-tag">Qdrant</span></div>
          </a>

          {/* RAG / Memory / Document Intelligence */}
          <a className="p-card" data-cat="rag" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 09</span><span className="p-cat">RAG &amp; Memory</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Enterprise legal document parser — 22+ language OCR, RAG-ready semantic chunking, and Elasticsearch indexing.</div>
            <div className="p-title">LegalOCR</div>
            <div className="p-tags"><span className="p-tag">PaddleOCR</span><span className="p-tag">FastAPI</span><span className="p-tag">Elasticsearch</span></div>
          </a>

          <a className="p-card" data-cat="rag" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 10</span><span className="p-cat">RAG &amp; Memory</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Multi-channel AI memory unifying conversations across web, WhatsApp, email, and phone with probabilistic identity linking.</div>
            <div className="p-title">Synapse</div>
            <div className="p-tags"><span className="p-tag">Next.js</span><span className="p-tag">Qdrant</span><span className="p-tag">Upstash</span></div>
          </a>

          <a className="p-card" data-cat="rag" href="https://github.com/Vatsa10/Financial-Analyzer" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 11</span><span className="p-cat">RAG &amp; Memory</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Multi-agent system converting financial documents — 10-K / 10-Q, SEC filings, earnings transcripts — into actionable intelligence.</div>
            <div className="p-title">Finance Advisor</div>
            <div className="p-tags"><span className="p-tag">RAG</span><span className="p-tag">Multi-Agent</span><span className="p-tag">LLM</span></div>
          </a>

          <a className="p-card" data-cat="rag" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 12</span><span className="p-cat">RAG &amp; Memory</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Voice-first AI email assistant — read, summarize, star, and compose your inbox via natural conversation. Hands-free.</div>
            <div className="p-title">Email Voice AI</div>
            <div className="p-tags"><span className="p-tag">LangGraph</span><span className="p-tag">Deepgram</span><span className="p-tag">Gmail API</span></div>
          </a>

          <a className="p-card" data-cat="rag" href="https://github.com/Vatsa10/NyayCheck" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 13</span><span className="p-cat">RAG &amp; Memory</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Mobile-first legal health platform for Indian citizens — rule-based scoring, RAG-powered Q&amp;A, AI document generation, and web-grounded lawyer search in Hindi + English.</div>
            <div className="p-title">NyayCheck</div>
            <div className="p-tags"><span className="p-tag">Next.js</span><span className="p-tag">RAG</span><span className="p-tag">Turso · Drizzle</span></div>
          </a>

          {/* Fine-tuning */}
          <a className="p-card" data-cat="fine-tuning" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 14</span><span className="p-cat">Fine-tuning</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Fine-tuned Qwen3.5-0.8B on 1.5k Hindi → Gujarati pairs using ZeRO-2/3 multi-GPU distributed training.</div>
            <div className="p-title">Hindi2Guj</div>
            <div className="p-tags"><span className="p-tag">Qwen3.5</span><span className="p-tag">DeepSpeed</span><span className="p-tag">Accelerate</span></div>
          </a>

          <a className="p-card" data-cat="fine-tuning" href="https://github.com/Vatsa10/Gemma3-Finetune" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 15</span><span className="p-cat">Fine-tuning</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Fine-tuned Gemma 3 (4B) on FineTome-100k for enhanced instruction-following via LoRA / QLoRA on a single Colab T4.</div>
            <div className="p-title">Gemma 3 Tune</div>
            <div className="p-tags"><span className="p-tag">Unsloth</span><span className="p-tag">LoRA</span><span className="p-tag">HuggingFace</span></div>
          </a>

          <a className="p-card" data-cat="fine-tuning" href="https://github.com/Vatsa10/Rustformer" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 16</span><span className="p-cat">Fine-tuning</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Complete transformer architecture implemented from scratch in Rust, for performance-focused inference research.</div>
            <div className="p-title">Rustformer</div>
            <div className="p-tags"><span className="p-tag">Rust</span><span className="p-tag">Transformer</span><span className="p-tag">From Scratch</span></div>
          </a>

          <a className="p-card" data-cat="fine-tuning" href="https://github.com/Vatsa10/autoslm" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 17</span><span className="p-cat">Fine-tuning</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Open-source re-implementation of Pioneer Agent (arXiv:2604.09791, Fastino Labs). Closed-loop autonomous system for continually improving SLMs in production — LLM agent diagnoses failures, synthesizes corrective curriculum, retrains under regression constraints. PEFT + TRL, multi-provider via LiteLLM.</div>
            <div className="p-title">AutoSLM</div>
            <div className="p-tags"><span className="p-tag">PEFT · TRL</span><span className="p-tag">LiteLLM</span><span className="p-tag">Self-Improving</span></div>
          </a>

          {/* Vision / Mobile */}
          <a className="p-card" data-cat="vision" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 18</span><span className="p-cat">Vision / Mobile</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">2nd place at Tinkerthon 3.0 + 1-year SSIP Gujarat research grant. Fine-tuned DL models for deepfake video classification.</div>
            <div className="p-title">Deepfake Detector</div>
            <div className="p-tags"><span className="p-tag">EfficientNetB7</span><span className="p-tag">BiLSTM</span><span className="p-tag">CV</span></div>
          </a>

          <a className="p-card" data-cat="vision" href="https://github.com/Vatsa10/" target="_blank" rel="noopener">
            <div className="p-top"><span className="p-num">P · 19</span><span className="p-cat">Vision / Mobile</span></div>
            <div className="p-arrow">↗</div>
            <div className="p-desc">Mobile health app that translates lab reports into plain language — with fully on-device medical transformer inference.</div>
            <div className="p-title">AarogyaKosh</div>
            <div className="p-tags"><span className="p-tag">React Native</span><span className="p-tag">FastAPI</span><span className="p-tag">On-device</span></div>
          </a>

        </div>
      </section>

      {/* STACK */}
      <section className="block wrap" id="stack">
        <div className="section-head reveal">
          <span className="num">05 — STACK</span>
          <h2>Tools of the <span className="serif">trade</span>.</h2>
          <div className="meta">Working knowledge<br />Updated 2026</div>
        </div>

        <div className="stack-grid reveal stagger">
          <div className="stack-col">
            <h4>Languages</h4>
            <ul>
              <li>Python</li><li>TypeScript</li><li>Rust</li><li>Java</li><li>C</li>
            </ul>
          </div>
          <div className="stack-col">
            <h4>AI / ML</h4>
            <ul>
              <li>PyTorch</li><li>TensorFlow</li><li>HuggingFace</li><li>Unsloth</li><li>Scikit-learn</li>
            </ul>
          </div>
          <div className="stack-col">
            <h4>LLM &amp; Agents</h4>
            <ul>
              <li>LangChain</li><li>LangGraph</li><li>CrewAI</li><li>RAG / CAG</li><li>LoRA · QLoRA</li><li>FAISS · Groq</li>
            </ul>
          </div>
          <div className="stack-col">
            <h4>Backend &amp; Cloud</h4>
            <ul>
              <li>FastAPI</li><li>NestJS</li><li>Node.js</li><li>Docker</li><li>AWS</li><li>PostgreSQL · Mongo · ES</li>
            </ul>
          </div>
          <div className="stack-col">
            <h4>Frontend</h4>
            <ul>
              <li>Next.js</li><li>React</li><li>React Native</li><li>Tailwind</li>
            </ul>
          </div>
          <div className="stack-col">
            <h4>Vision</h4>
            <ul>
              <li>OpenCV</li><li>YOLO / SSD</li><li>PaddleOCR</li><li>Diffusers</li>
            </ul>
          </div>
          <div className="stack-col">
            <h4>Data &amp; Infra</h4>
            <ul>
              <li>Elasticsearch</li><li>Qdrant</li><li>Upstash Redis</li><li>Inngest</li>
            </ul>
          </div>
          <div className="stack-col">
            <h4>Practices</h4>
            <ul>
              <li>End-to-end ownership</li><li>Human-in-the-loop</li><li>Shipping &gt; perfecting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AWARDS & EDU */}
      <section className="block wrap" id="awards">
        <div className="section-head reveal">
          <span className="num">06 — AWARDS / EDU / PUBS</span>
          <h2>Honours &amp; <span className="serif">paper trail</span>.</h2>
          <div className="meta">2020 → Present</div>
        </div>

        <div className="awards reveal stagger">
          <div className="award">
            <div className="trophy">②</div>
            <h3>Tinkerthon 3.0</h3>
            <p>Second place for a Deepfake Video Detection System. Fine-tuned DL pipeline selected among top hackathon submissions.</p>
            <span className="meta">Feb 2025 · Hackathon</span>
          </div>
          <div className="award">
            <div className="trophy">§</div>
            <h3>SSIP Gujarat Grant</h3>
            <p>One-year research grant from SSIP Gujarat to further develop the deepfake detection project into a production-ready tool.</p>
            <span className="meta">2025 · Research funding</span>
          </div>
          <div className="award">
            <div className="trophy">★</div>
            <h3>Odoo × NMIT Hackathon</h3>
            <p>Top 5 finish out of 3,300 competing teams — rapid product design and implementation against a shared brief.</p>
            <span className="meta">2024 · Hackathon</span>
          </div>
          <div className="award">
            <div className="trophy">▲</div>
            <h3>B.Tech · Computer Science</h3>
            <p>Navrachana University, Vadodara. Specialisation in Software Engineering &amp; AI. Research on quantum-dot memory, EfficientNetB7 + BiLSTM for deepfake detection, and stable-diffusion VAEs.</p>
            <span className="meta">2022 → Sep 2026</span>
          </div>
          <div className="award">
            <div className="trophy">¶</div>
            <h3>Rabin-Karp Algorithm</h3>
            <p>Report &amp; analysis of the Rabin-Karp string-matching algorithm. Published on ResearchGate.<br />DOI: 10.13140/RG.2.2.24592.01283</p>
            <span className="meta">Publication · ResearchGate</span>
          </div>
          <div className="award">
            <div className="trophy">¶</div>
            <h3>Blockchain Technology</h3>
            <p>Survey paper exploring blockchain architecture, cryptographic foundations, and cross-industry applications.<br />DOI: 10.13140/RG.2.2.32465.75365</p>
            <span className="meta">Publication · ResearchGate</span>
          </div>
          <a
            className="award award-link"
            href="https://ieeexplore.ieee.org/document/11486188"
            target="_blank"
            rel="noopener"
          >
            <div className="trophy">¶</div>
            <h3>EfficientNetB7 &amp; Bi-LSTM for Deepfake Detection <span className="award-arrow">↗</span></h3>
            <p>Hybrid spatial-temporal pipeline for deepfake video classification — EfficientNetB7 frame features fed into a Bi-LSTM for sequence-level reasoning. <b>First author.</b></p>
            <span className="meta">Publication · IEEE Xplore · 2025</span>
          </a>
          <div className="award">
            <div className="trophy">❝</div>
            <h3>Self-Adaptive Context RAG</h3>
            <p>Invited talk on a RAG architecture that tunes its retrieval context on the fly — delivered to the Google Developers Group community.</p>
            <span className="meta">Talk · Google Developers Group</span>
          </div>
          <div className="award">
            <div className="trophy">❝</div>
            <h3>Agentic AI</h3>
            <p>Gave a workshop on multi-agent systems, tool-use patterns, and shipping agentic AI into production. Navrachana University.</p>
            <span className="meta">Workshop · Navrachana University</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact wrap" id="contact">
        <div className="section-head reveal" style={{ marginBottom: 32 }}>
          <span className="num">07 — CONTACT</span>
          <h2 style={{ visibility: "hidden" }}>.</h2>
          <div className="meta">Open to: full-time · collab<br />Reply time ~24h</div>
        </div>

        <h2 className="contact-big word-reveal">
          <span className="w"><span>Let&apos;s</span></span>{" "}
          <span className="w"><span className="serif">build</span></span>{" "}
          <span className="w"><span>something</span></span>{" "}
          <span className="w"><span>that</span></span>{" "}
          <span className="w"><span>ships<span style={{ color: "var(--accent)" }}>.</span></span></span>
        </h2>

        <div className="contact-grid reveal stagger">
          <a className="contact-link" href="mailto:vatsajoshi2@gmail.com">
            <span className="k">E-mail</span>
            <span className="v">vatsajoshi2@gmail.com</span>
          </a>
          <a className="contact-link" href="tel:+919737557799">
            <span className="k">Phone</span>
            <span className="v">+91 97375 57799</span>
          </a>
          <a className="contact-link" href="https://github.com/Vatsa10" target="_blank" rel="noopener">
            <span className="k">GitHub</span>
            <span className="v">@Vatsa10 ↗</span>
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/vatsa10/" target="_blank" rel="noopener">
            <span className="k">LinkedIn</span>
            <span className="v">in/vatsa10 ↗</span>
          </a>
        </div>

        <footer>
          <span>© Vatsa Joshi · 2026</span>
          <span>Built in Bengaluru · Last deploy 05/2026</span>
          <span><a href="#home">Back to top ↑</a></span>
        </footer>
      </section>
      </main>

      <PortfolioClient />
    </>
  );
}
