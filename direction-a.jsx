// Direction A. Editorial warm dark.
// Asymmetric, serif display headers, generous whitespace, hover preview swatches.

const { useState } = React;

function PreviewSwatch({ colors }) {
  return (
    <div className="a-preview" aria-hidden="true">
      <div className="a-preview-bars">
        {[68, 42, 88, 30, 60, 75].map((h, i) => (
          <span key={i} style={{ height: `${h}%`, background: colors[i % 3] }} />
        ))}
      </div>
      <div className="a-preview-line">
        <svg viewBox="0 0 200 60" preserveAspectRatio="none">
          <path
            d="M0,40 C30,20 50,55 80,30 S140,10 200,25"
            fill="none"
            stroke={colors[0]}
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function ProjectCardA({ project, idx }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      className="a-card"
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-accent={project.accent}
    >
      <div className="a-card-frame">
        <div
          className="a-card-imgwrap"
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
          onDragOver={(e) => e.stopPropagation()}
          onDrop={(e) => e.stopPropagation()}
        >
          <image-slot
            id={`a-${project.id}`}
            shape="rect"
            placeholder={`Drop a screenshot for ${project.title}`}
          />
        </div>
        <div className={`a-card-overlay ${hover ? "is-hover" : ""}`}>
          <span className="a-arrow">↗</span>
          <span className="a-overlay-label">View on GitHub</span>
        </div>
      </div>
      <div className="a-card-body">
        <div className="a-card-meta">
          <span className="a-card-num">{String(idx + 1).padStart(2, "0")}</span>
          {project.context && <span className="a-card-context">{project.context}</span>}
        </div>
        <h3 className="a-card-title">{project.title}</h3>
        <p className="a-card-blurb">{project.blurb}</p>
        <ul className="a-card-tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}

function DirectionA() {
  const p = window.PROFILE;
  const projects = window.PROJECTS;
  return (
    <div className="a-root" data-screen-label="Direction A. Editorial">
      <header className="a-header">
        <div className="a-header-mark">AL</div>
        <nav className="a-nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={`mailto:${p.email}`}>Email</a>
        </nav>
      </header>

      <section className="a-hero">
        <div className="a-hero-eyebrow">Portfolio · 2026</div>
        <h1 className="a-hero-title">
          <span className="a-hero-name">{p.name}</span>
          <span className="a-hero-role">
            data analytics, data science, &amp; data engineering.
          </span>
        </h1>
        <p className="a-hero-tagline">{p.tagline}</p>
        <div className="a-hero-meta">
          <span>📍 {p.location}</span>
          <span>·</span>
          <span>Open to roles</span>
        </div>
      </section>

      <section id="work" className="a-work">
        <div className="a-section-head">
          <span className="a-section-num">01</span>
          <h2 className="a-section-title">Selected work</h2>
          <span className="a-section-count">{projects.length} projects</span>
        </div>
        <div className="a-grid">
          {projects.map((proj, i) => (
            <ProjectCardA key={proj.id} project={proj} idx={i} />
          ))}
        </div>
      </section>

      <section id="about" className="a-about">
        <div className="a-section-head">
          <span className="a-section-num">02</span>
          <h2 className="a-section-title">About</h2>
        </div>
        <div className="a-about-body">
          <p>
            I&apos;m a data analyst and ML practitioner based in Edmonton,
            with a BSc in Mathematics from MacEwan University and a Machine
            Learning Analyst Diploma from NorQuest College. I&apos;m most at
            home where the pipeline meets the dashboard. Wrangling raw feeds,
            modeling them into something trustworthy, and packaging the
            result so a non-technical stakeholder can act on it.
          </p>
          <p>
            Across recent projects I&apos;ve built production-ready data
            pipelines, models, and deployed ML applications using
            Snowflake, dbt, Python, and GCP. I lean on the medallion
            architecture as a default for keeping raw, cleaned, and
            ready-to-use data clearly separated, and I care a lot about
            validation, governance, and reproducibility at every layer.
          </p>
          <p>
            Before tech, I spent over a decade in the restaurant industry,
            including cash-team and financial reconciliation work as an
            assistant manager at Landmark Cinemas. That gives me a
            ground-level understanding of the operational challenges service
            teams face every day, and it shows up in the kinds of analytics
            problems I&apos;m drawn to.
          </p>
          <p>
            Right now I&apos;m looking for roles in data analytics, data
            science, or data engineering. If any of the projects above
            resonate, I&apos;d love to chat.
          </p>
        </div>
        <div className="a-skills">
          <div className="a-skills-col">
            <h4>Languages</h4>
            <ul>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="a-skills-col">
            <h4>ML &amp; Data</h4>
            <ul>
              <li>Pandas, NumPy</li>
              <li>scikit-learn, XGBoost</li>
              <li>Sentence Transformers</li>
              <li>FLAN-T5</li>
              <li>Plotly, Matplotlib, Seaborn</li>
            </ul>
          </div>
          <div className="a-skills-col">
            <h4>Data Stack</h4>
            <ul>
              <li>Snowflake</li>
              <li>dbt Core</li>
              <li>SQL Server</li>
              <li>Medallion architecture</li>
            </ul>
          </div>
          <div className="a-skills-col">
            <h4>MLOps</h4>
            <ul>
              <li>Docker</li>
              <li>GCP</li>
              <li>MLflow, DVC</li>
              <li>Git</li>
              <li>Flask, REST APIs</li>
            </ul>
          </div>
          <div className="a-skills-col">
            <h4>BI &amp; Apps</h4>
            <ul>
              <li>Power BI</li>
              <li>Excel</li>
              <li>Streamlit</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="a-experience">
        <div className="a-section-head">
          <span className="a-section-num">03</span>
          <h2 className="a-section-title">Education &amp; experience</h2>
        </div>
        <div className="a-exp-grid">
          <div className="a-exp-col">
            <h4 className="a-exp-label">Education</h4>
            <ul className="a-exp-list">
              <li>
                <div className="a-exp-head">
                  <span className="a-exp-title">Diploma, Machine Learning</span>
                  <span className="a-exp-when">Jan 2024 to Dec 2025</span>
                </div>
                <div className="a-exp-sub">NorQuest College · Edmonton, AB · GPA 3.9</div>
              </li>
              <li>
                <div className="a-exp-head">
                  <span className="a-exp-title">BSc Mathematics</span>
                  <span className="a-exp-when">Sept 2015 to Apr 2020</span>
                </div>
                <div className="a-exp-sub">MacEwan University · Edmonton, AB · GPA 3.8</div>
              </li>
            </ul>
          </div>
          <div className="a-exp-col">
            <h4 className="a-exp-label">Work</h4>
            <ul className="a-exp-list">
              <li>
                <div className="a-exp-head">
                  <span className="a-exp-title">Server / Shift Leader / Bartender</span>
                  <span className="a-exp-when">Jul 2015 to Present</span>
                </div>
                <div className="a-exp-sub">Various Restaurants · Edmonton</div>
                <p className="a-exp-note">Daily revenue and cash reconciliation across high-volume service periods; directed teams of up to 10 across full shifts at high-revenue locations.</p>
              </li>
              <li>
                <div className="a-exp-head">
                  <span className="a-exp-title">Assistant Manager</span>
                  <span className="a-exp-when">Apr 2011 to Jul 2015</span>
                </div>
                <div className="a-exp-sub">Landmark Cinemas</div>
                <p className="a-exp-note">Owned office administration and financial controls for a team of 10 to 20. Daily financial reporting, cash reconciliation, and regulatory compliance, with zero cash-discrepancy incidents during tenure.</p>
              </li>
            </ul>
            <h4 className="a-exp-label" style={{ marginTop: 32 }}>Volunteer</h4>
            <ul className="a-exp-list">
              <li>
                <div className="a-exp-head">
                  <span className="a-exp-title">Upper Bound Conference (Amii)</span>
                  <span className="a-exp-when">May 2025</span>
                </div>
                <div className="a-exp-sub">Volunteer · Edmonton, AB</div>
                <p className="a-exp-note">Supported event coordination at Alberta&apos;s leading AI/ML conference; engaged with researchers, industry, and students across technical and non-technical backgrounds.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="a-footer">
        <div className="a-footer-cta">
          <span>Let&apos;s talk.</span>
          <a href={`mailto:${p.email}`}>{p.email}</a>
        </div>
        <div className="a-footer-meta">
          <span>© 2026 {p.name}</span>
          <span>·</span>
          <a href={p.github} target="_blank" rel="noreferrer">
            github.com/alekivetz
          </a>
          <span>·</span>
          <a href={p.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <span>·</span>
          <span>{p.phone}</span>
        </div>
      </footer>
    </div>
  );
}

window.DirectionA = DirectionA;
