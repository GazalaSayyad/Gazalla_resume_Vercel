// ============================================================
// RESUME DATA -- Edit this single file to customize your entire resume.
// Replace all placeholder data with your real information.
// ============================================================

export const resumeData = {
  // ──────────────────────────────────────────────
  //  PERSONAL INFO
  // ──────────────────────────────────────────────
  personal: {
    name: "Gazala Sayyad",
    title: "AI architect | Gen AI Engineer | Data Scientist",
    photo: "/images/profile.jpg",
    summary:
      "An innovative AI Engineer with over 5 years of experience specializing in Multi-Agent systems, Generative AI (RAG), and Large Language Model fine-tuning. Proven track record of deploying scalable, production-grade AI solutions across insurance, healthcare, and finance sectors using robust CI/CD and MLOps frameworks.",
    location: "Pune,Maharashtra,India",
    email: "gazalashaikh999@gmail.com",
    resumePdfUrl: "/resume/Gazala_resume.pdf",
  },

  // ──────────────────────────────────────────────
  //  SOCIAL LINKS  (set to "" to hide a link)
  // ──────────────────────────────────────────────
  socials: {
    github: "https://github.com/GazalaSayyad",
    linkedin: "https://linkedin.com/in/gazalashaikh999",
    twitter: "https://medium.com/@gazalashaikh999",
  },

  navLogo: "AC",

  // ──────────────────────────────────────────────
  //  WORK EXPERIENCE
  // ──────────────────────────────────────────────
  experience: [
    {
      role: "Gen AI Engineer",
      company: "AXA GBS",
      slug: "axa-gbs",
      companyUrl: "https://example.com",
      period: "2024 -- Present",
      description:
        "Developed a sophisticated Multi-Agent Natural Language to SQL system and advanced RAG-based HR chatbots, integrating human-in-the-loop alignment and the RAGAS evaluation framework. Leveraged Azure App Services and OpenShift to deploy secure, high-precision AI solutions for healthcare and insurance pricing.",
      technologies: ["Python", "Azure App Services", "LangGraph", "RAGAS", "SQL", "OpenShift", "Jenkins", "Chain of Density"],
    },
    {
      role: "AI Developer",
      company: "Forage AI",
      slug: "forage-ai",
      companyUrl: "https://example.com",
      period: "2020 -- 2022",
      description:
        "Architected high-accuracy business clustering and financial document classification systems using Llama-3 and Mistral, achieving 95% precision through QLoRA fine-tuning. Successfully implemented GPT-4 Vision APIs and vector databases like Pinecone and ChromaDB to build expert search engines and automated OCR pipelines.",
      technologies: ["Llama-3", "Mistral", "QLoRA", "PEFT", "Pinecone", "ChromaDB", "LangChain", "Tesseract OCR", "Docker"],
    },
    {
      role: "Data Engineer",
      company: "Neurapses",
      slug: "neurapse",
      companyUrl: "https://example.com",
      period: "2020 -- 2022",
      description:
        "Managed the end-to-end lifecycle of data-driven applications, including the deployment of a recommendation engine and real-time sentiment analysis dashboards using BERT. Optimized large-scale data ingestion and storage using Elasticsearch, Kafka, and PySpark, ensuring seamless integration within Agile CI/CD environments.",
      technologies: ["PySpark", "Elasticsearch", "Kafka", "FastAPI", "MongoDB", "BERT", "Logstash", "Power BI", "Azure DevOps"],
    },
    
  ],

  // ──────────────────────────────────────────────
  //  EDUCATION
  // ──────────────────────────────────────────────
  education: [
    {
      degree: "Master of Enginerring in E & TC",
      school: "Pune University",
      period: "2016 -- 208",
      gpa: "9.8",
      highlights: [
        "Artificial Neural Network",
        "Embedded system with Internet of Things",
      
      ],
    },
    {
      degree: "Advanced Diploma in AI ML",
      school: "IIIT Hydrabad",
      period: "2019 -- 2020",
      gpa: "8.9",
      highlights: [
        "Machine learning Algorithms",
        "CNN,GAN,Deep learning",
        "Amazon Alexa chatbot",
      ],
    },
  ],

  // ──────────────────────────────────────────────
  //  CERTIFICATIONS
  // ──────────────────────────────────────────────
  certifications: [

    { name: "AI-102 Microsoft Certified : Azure AI Engineer Associate", issuer: "Microsoft", date: "2025" },                                                                                                                                         ", issuer: "Google Cloud", date: "2023" },
    { name: "DP-100 Microsoft Certified : Data Scientist Associate", issuer: "Microsoft", date: "2022" },                                                                                                                                   ", issuer: "CNCF", date: "2023" },
    { name: "AI-100 Microsoft Certified : AI Fundamentals", issuer: "Microsoft", date: "2021" },
  ],

  // ──────────────────────────────────────────────
  //  PROJECTS
  // ──────────────────────────────────────────────
  projects: [
    {
      title: "Multiagent test case generation",
      description:
        "Real-time collaborative workspace with live document editing, video conferencing, and project management. Built for distributed teams with enterprise-grade security.",
      tags: ["python","ADK","sequential agent","human in loop"],
      liveUrl: "https://cloudsync.example.com",
      githubUrl: "https://github.com/GazalaSayyad/Multiagent_test-case-generation-",
      featured: true,
    },
    {
      title: "A2A Healthcare Agents",
      description:
        "Agent-to-Agent* (A2A) architecture for a healthcare system using multiple frameworks and patterns. It showcases how different agent implementations (with and without frameworks) can communicate, coordinate, and collaborate through standardized protocols.",
      tags: ["A2A","MCP","ADK","Microsoft Agent Framework","Langgraph","Sequential agents", "Python",  "FastAPI"],
      liveUrl: "https://fintrack.example.com",
      githubUrl: "https://github.com/GazalaSayyad/A2A_healthcare_agentwith_mcp",
      featured: true,
    },
    
    
  ],

  // ──────────────────────────────────────────────
  //  TECHNOLOGY STACK
  // ──────────────────────────────────────────────
  techStack: [
    {
      name: "Gen AI & LLMs",
      technologies: ["Langchain", "Langgraph", "Google ADK","Multiagents pattern","advanced prompt engineering","Agentic RAG"],
    },
    {
      name: "Backend",
      technologies: ["Python",  "GraphQL", "REST APIs", "FastAPI"],
    },
    {
      name: "Cloud & DevOps",
      technologies: ["AWS","Azure","Google cloud", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel","openshift"],
    },
    {
      name: "Databases & Tools",
      technologies: ["PostgreSQL", "MongoDB", "Elastic Search","Kibana","Logstash","Git"],
    },
  ],


  
  // additional details for companies with more content
  companyDetails: {
    "axa-gbs": {
      bulletPoints: [
        
      ],
      awards: [
        
      ],
      projects: [
      { description: "● Developed a Multi-Agent Natural Language to SQL System that converts natural language queries into structured SQL statements, enabling non-technical users to interact with databases and receive intuitive, visual results." },
      { description: "● Engineered Adaptive Response Generation to dynamically provide tabular data, text summaries, and graphical visualizations (pie charts, bar charts, line graphs) based on user query context." },
      { description: "● Integrated Real-Time Data Updates to ensure accurate representation of information through interactive reports and visual dashboards." },
      { description: "● Deployed Multi-Agent System using a sequential agent-to-agent (A2A) communication protocol and Query GPT, with a CI/CD pipeline on Azure App Services." },
      { description: "● Delivered a proof-of-concept (PoC) for healthcare entities, leveraging Chain of Density (CoD) and few-shot advanced prompting techniques to enhance summarization quality in medical records and reports." },
      { description: "● This included implementing agent-to-agent communication for summarization and translation, and using an MCP tool to fetch data from databases." },
      { description: "● Developed advanced pricing models for insurance using machine learning and Generative AI-based RAG systems, with a focus on graph nodes. Deployed these solutions using a Jenkins pipeline on OpenShift." },
      { description: "● Engaged in client and stakeholder meetings, gathered insights, and delivered tailored solutions on schedule." },
      { description: "● Implemented Retrieval-Augmented Generation (RAG) for company policy document processing, enhancing accuracy in AI-driven HR policy automation." },
      { description: "● Integrated Conversational Summary Buffer Memory in the RAG-based HR policy chatbot to maintain context across interactions and improve user experience." },
      { description: "● Evaluated AI-generated outputs using RAGAS framework alongside human assessment to ensure precision, compliance, and contextual relevance." },
      { description: "● Integrated human alignment methodologies within the RAGS framework, fine-tuning policy retrieval models to better reflect organizational needs." },
      { description: "● Used Large Language Models (LLMs) as judges alongside RAGAS for comparative evaluations, improving response quality and decision-making." },
      { description: "● Added Guardrails for safety, ensuring ethical and responsible AI-driven document retrieval, mitigating risks related to policy misinterpretation." },
      { description: "● Implemented validators to check AI-generated responses for toxicity, bias, and factual accuracy, ensuring reliable information output." }
    ],
      photos: [
        
      ],
    },
    "forage-ai": {
      awards: [],
      projects: [
      { description: "● Researched and selected appropriate machine learning models based on data characteristics." },
      { description: "● Prepared high-quality datasets tailored for effective model training, ensuring alignment with project goals." },
      { description: "● Developed and fine-tuned deep learning models for diverse applications, including computer vision and natural language processing tasks." },
      { description: "● Integrated business clustering using Language Model (LLM) techniques to categorize and organize unstructured data effectively." },
      { description: "● Achieved a remarkable 95% accuracy in business clustering by combining K-means clustering algorithms with LLM capabilities (Llama-3, Mistral LLM), ensuring precise categorization of diverse business data." },
      { description: "● Leveraged LLM's contextual understanding to enhance clustering accuracy and provide nuanced insights into business data relationships." },
      { description: "● Utilized transfer learning and domain-specific knowledge to refine the Mistral model's ability to extract relevant information, classify data into specified categories, and derive actionable insights from financial documents." },
      { description: "● Designed and implemented the POC to demonstrate the effectiveness of GPT-4 vision API in various scenarios, including image recognition, object detection, and text extraction from documents." },
      { description: "● Led the hands-on fine-tuning of a Language Model (LLM) for Generative (Open Book) Question-Answering dataset using QLORA and PEFT in Python, improving its precision and relevance." },
      { description: "● Familiar with fine-tuning Llama2 and Falcon models as per business requirements." },
      { description: "● Finetuned Llama2 model with Instruction tuning that involves quantizing pretrained LLM to just 4 bits and small adaptors using just single GPU." },
      { description: "● Experience building scalable applications with LLMs, using frameworks such as LangChain." },
      { description: "● Hands-on experience with implementation of RAG techniques and Vector database as chroma DB with GPT-4 models for Proof of Concept (POC)." },
      { description: "● Expertise in implementing Langchain QA retriever chains for private unstructured document question answering." },
      { description: "● Implemented Advanced RAG system using GPT-4 API for a healthcare expert search engine." },
      { description: "● Integrated sentiment analysis tools to gauge the sentiment expressed in the generated content, providing valuable insights into the emotional tone conveyed in the responses." },
      { description: "● Integrated Pinecone vector database for efficient information retrieval, ensuring a nuanced and tailored healthcare solution as per users' queries." },
      { description: "● Implemented document classification for financial documents using Deep-learning / Transformer model. Categorized content into specified categories based on client requirements." },
      { description: "● Collaborated closely with cross-functional teams to implement innovative solutions using transformer models, particularly for entity and information extraction tasks." },
      { description: "● Designed and implemented a robust parsing system for extracting crucial information from invoices." },
      { description: "● Proficient in unsupervised clustering of text data from website links, enabling meaningful insights and data organization." },
      { description: "● Conducted text summarization of website content within clustering projects for efficient data analysis." },
      { description: "● Utilized Python libraries to perform hands-on PDF-to-image conversion, enabling efficient text and image extraction for model training." },
      { description: "● Demonstrated proficiency in Optical Character Recognition (OCR) using tools like Tesseract to accurately extract text from various sources, including images and documents." },
      { description: "● Trained and deployed advanced object segmentation models using deep learning techniques, packaging them within Docker containers for streamlined integration and scalability in production environments." },
      { description: "● Engaged in continuous model training and retraining to drive consistent performance improvements." },
      { description: "● Implemented post-processing steps within the machine learning pipeline to ensure and maintain data quality throughout the process." },
      { description: "● Collaborated on team-wide initiatives to enhance model development practices, sharing insights and best practices." },
      { description: "● Integrated optimized models into scalable production workflows, enhancing overall system efficiency." }
    ],
          
      photos: [
        "/images/forage_award.JPG",
        "/images/forage_certicate.png",
      ],
    },
    "designstudio-co": {
      bulletPoints: [],
      awards: [],
      projects: [],
      photos: [],
    },
    "neurapse": {
      bulletPoints: [
     
      ],
      awards: [
        
      ],
      projects: [
        { description: "Managed full project lifecycles, from designing and experimenting with models to deploying and maintaining production solutions. Played a key role in establishing CI/CD pipelines using Azure DevOps and Jenkins." },
        { description: "Applied statistical and data mining techniques like boosting, generalized linear models/regression, random forests, and social network analysis to gain insights from data. Utilized data cleaning, analysis, and visualization methods." },
        { description: "Successfully deployed a Recommendation Engine in production, which conditionally suggests menu items based on user history, contributing to increased average order size." },
        { description: "Proficiently utilized and optimized Elastic search 7.0 indices to store and visualize data, including geo-location queries and mapping. Managed data ingestion into Elasticsearch using Logstash." },
        { description: "Implemented Elasticsearch solutions, improving data storage efficiency and data ingestion processes using Logstash." },
        { description: "Demonstrated expertise in Kafka usage and CI/CD pipelines via Azure DevOps and Jenkins. Adapted well to dynamic data science project environments following agile methodologies." },
        { description: "Experienced with NOSQL technologies like MongoDB and SQLite. Developed APIs using FAST API for efficient model inferencing and data sharing within the team." },
        { description: "Utilized Apache Zeppelin notebook and developed user-defined functions (UDFs) in PySpark to address specific business needs." },
        { description: "Leveraged Social Media Data for Topic Modeling and Twitter Sentiment Analysis, extracting valuable insights from Twitter data." },
        { description: "Hands-on experience with Hugging Face Transformer models, including BERT." },
        { description: "Conducted advanced Twitter analysis using state-of-the-art BERT models for sentiment analysis and LDA for topic modeling." },
        { description: "Visualized sentiment and topic analysis outcomes using interactive dashboards crafted with Plotly and Power BI." },
        { description: "Developed dashboards that provided clear insights into Twitter sentiments and trending topics, enhancing engagement and decision-making." },
      ],
      photos: ["/images/neurapses_award.jpg",],
    },
  },
}
