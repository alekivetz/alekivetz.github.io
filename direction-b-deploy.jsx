
const { useState: useStateBD, useEffect: useEffectBD, useRef: useRefBD } = React;

function ProjectRowBDeploy({ project, idx }) {
  const [hover, setHover] = useStateBD(false);
  const [imgFailed, setImgFailed] = useStateBD(false);
  return (
    <a
      className="b-card"
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-accent={project.accent}
    >
      <div className="b-card-head">
        <span className="b-card-id">/{String(idx + 1).padStart(2, "0")}</span>
        <span className="b-card-dot" />
        <span className="b-card-status">{project.context || "active"}</span>
      </div>
      <div className="b-card-preview">
        {imgFailed ? (
          <div className="b-card-placeholder">// {project.id}.png</div>
        ) : (
          <img
            className="b-card-img"
            src={`images/${project.id}.png`}
            alt={`${project.title} screenshot`}
            onError={() => setImgFailed(true)}
          />
        )}
        <div className={`b-card-hoverpane ${hover ? "is-hover" : ""}`}>
          <div className="b-card-hover-row">
            <span>repo</span>
            <span>github.com/alekivetz/{project.id}</span>
          </div>
          <div className="b-card-hover-row">
            <span>stack</span>
            <span>{project.tags.join(" · ")}</span>
          </div>
          <div className="b-card-hover-row">
            <span>action</span>
            <span className="b-card-hover-cta">open repo →</span>
          </div>
        </div>
      </div>
      <h3 className="b-card-title">{project.title}</h3>
      <p className="b-card-blurb">{project.blurb}</p>
      <ul className="b-card-tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </a>
  );
}

function DirectionBDeploy() {
  const p = window.PROFILE;
  const projects = window.PROJECTS;
  const [filter, setFilter] = useStateBD("all");

  const photoRef = useRefBD(null);

  useEffectBD(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); },
      { threshold: 0.3 }
    );
    if (photoRef.current) observer.observe(photoRef.current);
    return () => observer.disconnect();
  }, []);

  const allTags = Array.from(new Set(projects.flatMap((x) => x.tags))).sort();
  const visible =
    filter === "all" ? projects : projects.filter((x) => x.tags.includes(filter));

  return (
    <div className="b-root">
      <header className="b-header">
      <div className="b-header-mark">alekivetz.portfolio</div>
        <nav className="b-nav">
          <a href="#index">index</a>
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href={p.github} target="_blank" rel="noreferrer">github</a>
          <a href={`mailto:${p.email}`}>email</a>
        </nav>
      </header>

      <section className="b-hero">
        <p className="b-hero-eyebrow">Edmonton · Open to roles</p>
        <h1 className="b-hero-title">{p.name}</h1>
        <p className="b-hero-statement">Making data useful for people who don't speak data.</p>
        <p className="b-hero-role">{p.role}</p>
        <ul className="b-hero-stack">
          <li>Python</li>
          <li>SQL</li>
          <li>PySpark</li>
          <li>pandas</li>
          <li>Docker</li>
          <li>Git</li>
          <li className="b-stack-break" />
          <li>Snowflake</li>
          <li>Microsoft Fabric</li>
          <li>GCP</li>
          <li>dbt</li>
          <li className="b-stack-break" />
          <li>Power BI</li>
          <li>DAX</li>
          <li>Streamlit</li>
          <li>Flask</li>
          <li className="b-stack-break" />
          <li>scikit-learn</li>
          <li>XGBoost</li>
          <li>MLflow</li>
          <li>DVC</li>
          <li>HuggingFace</li>
        </ul>
      </section>

      <section id="index" className="b-work">
        <div className="b-toolbar">
          <div className="b-toolbar-left">
            <span className="b-toolbar-label">projects</span>
            <span className="b-count">[{visible.length}]</span>
          </div>
          <div className="b-filters">
            <button
              className={filter === "all" ? "is-on" : ""}
              onClick={(e) => { e.preventDefault(); setFilter("all"); }}
            >all</button>
            {allTags.map((t) => (
              <button
                key={t}
                className={filter === t ? "is-on" : ""}
                onClick={(e) => { e.preventDefault(); setFilter(t); }}
              >{t}</button>
            ))}
          </div>
        </div>
        <div className="b-grid">
          {visible.map((proj, i) => (
            <ProjectRowBDeploy key={proj.id} project={proj} idx={i} />
          ))}
        </div>
      </section>

      <section id="about" className="b-about">
        <div className="b-about-meta">About Me</div>
        <div className="b-about-grid">
          <div className="b-about-prose">
            <p>
              Data analyst and ML practitioner based in Edmonton with a
              BSc in Mathematics from MacEwan and a Machine Learning Analyst
              Diploma from NorQuest College. I work the seam between data
              engineering and analytics. Building the pipeline, modeling on
              top of it, and packaging the result so a non-technical
              stakeholder can act on it.
            </p>
            <p>
              Across recent projects I&apos;ve shipped production-ready data
              pipelines, models, and deployed ML applications using
              Snowflake, dbt, Python, and GCP. I default to a medallion
              architecture for keeping raw, cleaned, and ready-to-use data
              clearly separated, and I care about validation and governance
              at every layer.
            </p>
            <p>
              Before tech I spent over a decade in restaurants, including
              cash-team and financial reconciliation work as an assistant
              manager at Landmark Cinemas. That gives me a ground-level
              understanding of the operational challenges service teams
              face, and it shows up in the analytics problems I&apos;m drawn
              to.
            </p>
            <p>
              Currently looking for roles in data analytics, data science,
              or data engineering.
            </p>
          </div>
          <div className="b-about-right">
          <img src="images/angela.png" alt="Angela Lekivetz" className="b-about-photo b-fade-in" ref={photoRef} />            <dl className="b-about-kv">
              <dt>email</dt>
              <dd><a href={`mailto:${p.email}`}>{p.email}</a></dd>
              <dt>phone</dt>
              <dd>{p.phone}</dd>
              <dt>github</dt>
              <dd><a href={p.github} target="_blank" rel="noreferrer">@alekivetz</a></dd>
              <dt>linkedin</dt>
              <dd><a href={p.linkedin} target="_blank" rel="noreferrer">/in/angela-lekivetz</a></dd>
            </dl>
          </div>
        </div>
      </section>

      <section id="experience" className="b-experience">
        <div className="b-about-meta">Experience</div>
        <div className="b-exp-grid">
          <div className="b-exp-col">
            <h4 className="b-exp-label">Education</h4>
            <ul className="b-exp-list">
              <li>
                <div className="b-exp-head">
                  <span>NorQuest College</span>
                  <span className="b-exp-when">2024 to 2025</span>
                </div>
                <div className="b-exp-sub">Diploma, Machine Learning · GPA 3.9</div>
              </li>
              <li>
                <div className="b-exp-head">
                  <span>MacEwan University</span>
                  <span className="b-exp-when">2015 to 2020</span>
                </div>
                <div className="b-exp-sub">BSc Mathematics · GPA 3.8</div>
              </li>
            </ul>
          </div>
          <div className="b-exp-col">
            <h4 className="b-exp-label">Work</h4>
            <ul className="b-exp-list">
              <li>
                <div className="b-exp-head">
                  <span>Server / Shift Leader / Bartender</span>
                  <span className="b-exp-when">2015 to present</span>
                </div>
                <div className="b-exp-sub">Various restaurants · Edmonton</div>
                <p className="b-exp-note">Daily revenue and cash reconciliation; directed teams of up to 10 in high-volume service.</p>
              </li>
              <li>
                <div className="b-exp-head">
                  <span>Assistant Manager</span>
                  <span className="b-exp-when">2011 to 2015</span>
                </div>
                <div className="b-exp-sub">Landmark Cinemas</div>
                <p className="b-exp-note">Office administration and financial controls for a team of 10 to 20. Zero cash-discrepancy incidents.</p>
              </li>
            </ul>
          </div>
          <div className="b-exp-col">
            <h4 className="b-exp-label">Volunteer</h4>
            <ul className="b-exp-list">
              <li>
                <div className="b-exp-head">
                  <span>Upper Bound (Amii)</span>
                  <span className="b-exp-when">May 2025</span>
                </div>
                <div className="b-exp-sub">Volunteer · Edmonton</div>
                <p className="b-exp-note">Event coordination at Alberta&apos;s leading AI/ML conference.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="b-footer">
        <span>Let's work together —  <a href={`mailto:${p.email}`}>{p.email}</a></span>
        <span>© 2026 · {p.name}</span>
      </footer>
    </div>
  );
}

window.DirectionBDeploy = DirectionBDeploy;
