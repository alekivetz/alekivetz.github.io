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
  id: "injury-intelligence",
  title: "Injury Intelligence",
  context: "Personal Project · May 2026",
  blurb:
    "NLP pipeline over 4,427 OSHA severe injury reports. Text classification comparing TF-IDF + Logistic Regression against a fine-tuned DistilBERT model, tracked with MLflow. RAG Q&A interface embeds narratives with sentence-transformers into a FAISS index, with Claude answering queries grounded in retrieved records.",
  tags: ["Python", "HuggingFace", "FAISS", "MLflow", "Anthropic", "Streamlit"],
  repo: "https://github.com/alekivetz/injury-intelligence",
  accent: "rose",
  },
  {
    id: "canadian-labour-analytics",
    title: "Canadian Labour Analytics",
    context: "Personal Project · Mar to Apr 2026",
    blurb:
      "Population-level labour-market forecasting on 7.4M rows of StatsCan LFS microdata in Snowflake. Built a dbt Core medallion architecture with survey-weighted gold tables, kept compute under a $3 X-Small warehouse budget. Six-page Power BI dashboard tracks unemployment shifts across five years.",
    tags: ["Snowflake", "dbt Core", "Python", "Power BI"],
    repo: "https://github.com/alekivetz/canadian-labour-analytics",
    accent: "teal",
  },
  {
    id: "canada-restaurant-analytics",
    title: "Canada Restaurant Analytics",
    context: "Personal Project · Feb to Mar 2026",
    blurb:
      "Three-layer medallion architecture in SQL Server unifying Google Places, Yelp Fusion, and StatsCan census data into a competitive intelligence platform. 2,332 linked restaurants across 178 neighbourhoods, surfaced through a five-page Power BI dashboard.",
    tags: ["SQL Server", "Docker", "Power BI", "Python", "APIs"],
    repo: "https://github.com/alekivetz/canada-restaurant-analytics",
    accent: "amber",
  },
  {
    id: "go-predict",
    title: "GoPredict · Vehicle Days on Market",
    context: "NorQuest College · Jan to Dec 2025",
    blurb:
      "Segmented Random Forest forecasting days on market for a major Canadian dealership network. R² 0.82 to 0.89 across three MSRP tiers. Containerized full pipeline with MLflow plus DVC, deployed to GCP, served via Flask REST API with Swagger UI.",
    tags: ["scikit-learn", "MLflow", "DVC", "Docker", "GCP", "Flask", "Streamlit", "Python", "Power BI"],
    repo: "https://github.com/alekivetz/go-predict",
    accent: "mauve",
  },
  {
    id: "banff-traffic-management",
    title: "Banff Traffic Management System",
    context: "NorQuest College · Sept to Dec 2025",
    blurb:
      "Led integration of traffic and parking prediction, model explainability, and a RAG chatbot into a single Streamlit app for Banff National Park (4-person ML team). XGBoost regression on 7.3M rows of time-series data, with a 35% MAE reduction over baseline.",
    tags: ["XGBoost", "Streamlit", "GCP", "RAG", "Python"],
    repo: "https://github.com/alekivetz/banff-traffic-management",
    accent: "forest",
  },
  {
    id: "lego-piece-detection",
    title: "LEGO Piece Detection & Counting",
    context: "NorQuest College · Sept to Dec 2025",
    blurb:
      "Two-phase computer vision pipeline for detecting and counting LEGO pieces. Phase 1 benchmarked classical segmentation techniques (thresholding, edge detection, color-based) using OpenCV. Phase 2 fine-tuned Faster R-CNN on a 600-class Kaggle LEGO dataset, achieving mAP@0.5 of 0.976 and precision of 0.935.",
    tags: ["Python", "OpenCV", "PyTorch", "Faster R-CNN", "Computer Vision"],
    repo: "https://github.com/alekivetz/lego-piece-detection",
    accent: "steel",
  },
  {
    id: "hydrogen-quest",
    title: "Hydrogen Quest",
    context: "NorQuest College · Sept to Dec 2024",
    blurb:
      "Pygame simulation game set across Western Canada where players build a sustainable hydrogen transportation network. Collect fuel cells, construct refuelling stations, and convert fossil fuel vehicles to reach 5,000 hydrogen points across 5 cities.",
    tags: ["Python", "Pygame"],
    repo: "https://github.com/alekivetz/Hydrogen-Quest",
    accent: "coral",
  },
];

window.PROFILE = PROFILE;
window.PROJECTS = PROJECTS;