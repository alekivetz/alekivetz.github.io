// Angela Lekivetz, real project and profile data.

const PROFILE = {
  name: "Angela Lekivetz",
  role: "Data Analyst · ML Practitioner · Data Engineer",
  tagline:
    "Data analyst and ML practitioner with hands-on experience in Snowflake, dbt, Python, and GCP, building production-ready data pipelines and deployed ML applications across multiple projects.",
  location: "Edmonton, AB",
  phone: "(780) 718-7862",
  github: "https://github.com/alekivetz",
  linkedin: "https://linkedin.com/in/angela-lekivetz-b87243293/",
  email: "angela.lekivetz@gmail.com",
};

const PROJECTS = [
  {
    id: "canada-restaurant-analytics",
    title: "Canada Restaurant Analytics",
    context: "Personal Project · Feb to Mar 2026",
    blurb:
      "Three-layer medallion architecture in SQL Server unifying Google Places, Yelp Fusion, and StatsCan census data into a competitive intelligence platform. 2,332 linked restaurants across 178 neighbourhoods, surfaced through a five-page Power BI dashboard.",
    tags: ["SQL Server", "Docker", "Power BI", "Python", "APIs"],
    repo: "https://github.com/alekivetz/canada-restaurant-analytics",
    accent: "amber",
    swatch: ["#c98a4b", "#7a4a2a", "#3a2418"],
  },
  {
    id: "canadian-labour-analytics",
    title: "Canadian Labour Analytics",
    context: "Personal Project · Mar to Apr 2026",
    blurb:
      "Population-level labour-market forecasting on 7.4M rows of StatsCan LFS microdata in Snowflake. Built a dbt Core medallion architecture with survey-weighted gold tables, kept compute under a $3 X-Small warehouse budget. Six-page Power BI dashboard tracks unemployment shifts across five years.",
    tags: ["Snowflake", "dbt Core", "Python", "Power BI"],
    repo: "https://github.com/alekivetz/canadian-labour-analytics",
    accent: "sage",
    swatch: ["#8aa37a", "#4a5a3e", "#2a3024"],
  },
  {
    id: "go-predict",
    title: "GoPredict · Vehicle Days on Market",
    context: "NorQuest College · Jan to Dec 2025",
    blurb:
      "Segmented Random Forest forecasting days on market for a major Canadian dealership network. R² 0.82 to 0.89 across three MSRP tiers. Containerized full pipeline with MLflow plus DVC, deployed to GCP, served via Flask REST API with Swagger UI.",
    tags: ["scikit-learn", "MLflow", "DVC", "Docker", "GCP", "Flask", "Streamlit"],
    repo: "https://github.com/alekivetz/go-predict",
    accent: "rose",
    swatch: ["#c47e7a", "#7a3e3a", "#3a201f"],
  },
  {
    id: "banff-traffic-management",
    title: "Banff Traffic Management System",
    context: "NorQuest College · Sept to Dec 2025",
    blurb:
      "Led integration of traffic and parking prediction, model explainability, and a RAG chatbot into a single Streamlit app for Banff National Park (4-person ML team). XGBoost regression on 7.3M rows of time-series data, with a 35% MAE reduction over baseline.",
    tags: ["XGBoost", "Streamlit", "GCP", "RAG", "Python"],
    repo: "https://github.com/alekivetz/banff-traffic-management",
    accent: "amber",
    swatch: ["#c98a4b", "#7a4a2a", "#3a2418"],
  },
];

window.PROFILE = PROFILE;
window.PROJECTS = PROJECTS;
