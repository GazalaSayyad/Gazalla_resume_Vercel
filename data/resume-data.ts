export const resumeData = {
  personal: {
    name: "Gazala Sayyad",
    title: "AI Architect | Gen AI Engineer | Data Scientist",
    photo: "/images/gazala_pic.jpeg",
    summary:
      "An innovative AI Engineer with over 5 years of experience specializing in multi-agent systems, Generative AI (RAG), and LLM fine-tuning. Proven track record of deploying scalable AI solutions across insurance, healthcare, and finance using robust CI/CD and MLOps frameworks.",
    location: "Pune, Maharashtra, India",
    email: "gazalashaikh999@gmail.com",
    resumePdfUrl: "/resume/Gazala_resume.pdf",
  },

  socials: {
    github: "https://github.com/GazalaSayyad",
    linkedin: "https://linkedin.com/in/gazalashaikh999",
    twitter: "https://medium.com/@gazalashaikh999",
  },

  navLogo: "GS",

  experience: [
    {
      role: "Gen AI Engineer",
      company: "AXA GBS",
      slug: "axa-gbs",
      period: "2024 -- Present",
      description:
        "Developed a multi-agent Natural Language to SQL system and advanced RAG HR chatbots with human alignment and RAGAS evaluation. Deployed secure AI solutions for healthcare and insurance pricing on Azure App Services and OpenShift.",
      technologies: ["Python", "Azure App Services", "LangGraph", "RAGAS", "SQL", "OpenShift", "Jenkins", "Chain of Density"],
    },
    {
      role: "AI Developer",
      company: "Forage AI",
      slug: "forage-ai",
      period: "2020 -- 2022",
      description:
        "Architected high-accuracy business clustering and financial document classification systems using Llama and Mistral, achieving 95% precision with QLoRA fine-tuning. Implemented GPT-4 Vision APIs and vector databases for expert search and OCR pipelines.",
      technologies: ["Llama", "Mistral", "QLoRA", "PEFT", "Pinecone", "ChromaDB", "LangChain", "Tesseract OCR", "Docker"],
    },
    {
      role: "Data Engineer",
      company: "Neurapses",
      slug: "neurapse",
      period: "2020 -- 2022",
      description:
        "Managed full lifecycle data applications including recommendation engines and sentiment dashboards. Optimized ingestion and storage using Elasticsearch, Kafka, and PySpark in agile CI/CD environments.",
      technologies: ["PySpark", "Elasticsearch", "Kafka", "FastAPI", "MongoDB", "BERT", "Logstash", "Power BI", "Azure DevOps"],
    },
  ],

  education: [
    {
      degree: "Master of Engineering in E&TC",
      school: "Pune University",
      period: "2016 -- 2018",
      gpa: "9.8",
      highlights: ["Artificial Neural Networks", "Embedded Systems with Internet of Things"],
    },
    {
      degree: "Advanced Diploma in AI/ML",
      school: "IIIT Hyderabad",
      period: "2019 -- 2020",
      gpa: "8.9",
      highlights: ["Machine Learning Algorithms", "CNN, GAN, Deep Learning", "Amazon Alexa chatbot"],
    },
  ],

  certifications: [
    {
      name: "AI-102 Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2025",
      
    },
    {
      name: "DP-100 Microsoft Certified: Data Scientist Associate",
      issuer: "Microsoft",
      date: "2022",
      
    },
    {
      name: "AI-100 Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2021",
     
    },
  ],

  projects: [
    {
      title: "Multiagent Test Case Generation",
      description:
        "Built a multi-agent workflow for automated test-case generation using sequential orchestration and human-in-the-loop validation.",
      tags: ["Python", "ADK", "Sequential Agents", "Human in Loop"],
      liveUrl: "",
      githubUrl: "https://github.com/GazalaSayyad/Multiagent_test-case-generation-",
      featured: true,
    },
    {
      title: "A2A Healthcare Agents",
      description:
        "Implemented an agent-to-agent healthcare architecture where different agent frameworks communicate and collaborate through standardized protocols.",
      tags: ["A2A", "MCP", "ADK", "Microsoft Agent Framework", "LangGraph", "Python", "FastAPI"],
      liveUrl: "",
      githubUrl: "https://github.com/GazalaSayyad/A2A_healthcare_agentwith_mcp",
      featured: true,
    },
  ],

  techStack: [
    {
      name: "Gen AI & LLMs",
      technologies: ["LangChain", "LangGraph", "Google ADK", "Multi-agent Patterns", "Advanced Prompt Engineering", "Agentic RAG"],
    },
    {
      name: "Backend",
      technologies: ["Python", "GraphQL", "REST APIs", "FastAPI"],
    },
    {
      name: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform", "Vercel", "OpenShift"],
    },
    {
      name: "Databases & Tools",
      technologies: ["PostgreSQL", "MongoDB", "Elasticsearch", "Kibana", "Logstash", "Git"],
    },
  ],

  companyDetails: {
    "axa-gbs": {
      bulletPoints: [],
      awards: [],
      projects: [
        {
          description:
            "Developed a multi-agent Natural Language to SQL system that converts natural-language queries into SQL and provides intuitive visual outputs.",
        },
        {
          description:
            "Engineered adaptive response generation to return tabular data, summaries, and visualizations such as pie, bar, and line charts.",
        },
        {
          description:
            "Integrated real-time data updates to ensure accurate reporting through interactive dashboards.",
        },
        {
          description:
            "Deployed sequential A2A multi-agent systems with Query GPT through CI/CD on Azure App Services.",
        },
        {
          description:
            "Delivered a healthcare proof of concept using Chain of Density and few-shot prompting for better summarization quality.",
        },
        {
          description:
            "Implemented agent-to-agent communication for summarization and translation, with MCP tools fetching data from databases.",
        },
        {
          description:
            "Built insurance pricing models using ML and GenAI-based RAG with graph-centric modeling, deployed via Jenkins on OpenShift.",
        },
        {
          description:
            "Gathered requirements directly from stakeholders and delivered tailored solutions on schedule.",
        },
        {
          description:
            "Implemented RAG for policy document processing to improve AI-driven HR policy automation.",
        },
        {
          description:
            "Added conversational buffer memory in the RAG HR chatbot to preserve context across interactions.",
        },
        {
          description:
            "Evaluated outputs with RAGAS and human review to improve precision, compliance, and relevance.",
        },
        {
          description:
            "Integrated human-alignment methods to refine policy retrieval quality and organizational fit.",
        },
        {
          description:
            "Used LLM-as-judge patterns along with RAGAS for stronger comparative evaluation and response quality.",
        },
        {
          description:
            "Added guardrails and validators for toxicity, bias, and factual consistency in generated responses.",
        },
      ],
      photos: []
    },

    "forage-ai": {
      bulletPoints: [],
      awards: [],
      projects: [
      {
        description:
          "Researched and selected appropriate machine learning models based on data characteristics.",
      },
      {
        description:
          "Prepared high-quality datasets tailored for effective model training, ensuring alignment with project goals.",
      },
      {
        description:
          "Developed and fine-tuned deep learning models for diverse applications, including computer vision and natural language processing tasks.",
      },
      {
        description:
          "Integrated business clustering using Language Model (LLM) techniques to categorize and organize unstructured data effectively.",
      },
      {
        description:
          "Achieved 95% accuracy in business clustering by combining K-means clustering algorithms with LLM capabilities (Llama-3, Mistral LLM), ensuring precise categorization of diverse business data.",
      },
      {
        description:
          "Leveraged LLM's contextual understanding to enhance clustering accuracy and provide nuanced insights into business data relationships.",
      },
      {
        description:
          "Utilized transfer learning and domain-specific knowledge to refine the Mistral model's ability to extract relevant information, classify data into specified categories, and derive actionable insights from financial documents.",
      },
      {
        description:
          "Designed and implemented a POC to demonstrate the effectiveness of GPT-4 Vision API in scenarios including image recognition, object detection, and text extraction from documents.",
      },
      {
        description:
          "Led fine-tuning of a Language Model (LLM) for Generative Question-Answering datasets using QLORA and PEFT in Python, improving precision and relevance.",
      },
      {
        description:
          "Familiar with fine-tuning Llama2 and Falcon models as per business requirements.",
      },
      {
        description:
          "Fine-tuned Llama2 model with instruction tuning, quantizing pretrained LLM to 4 bits and using small adaptors on a single GPU.",
      },
      {
        description:
          "Experienced in building scalable applications with LLMs using frameworks such as LangChain.",
      },
      {
        description:
          "Implemented RAG techniques with vector databases like ChromaDB and GPT-4 models for Proof of Concept (POC).",
      },
      {
        description:
          "Expertise in implementing LangChain QA retriever chains for private unstructured document question answering.",
      },
      {
        description:
          "Implemented advanced RAG system using GPT-4 API for a healthcare expert search engine.",
      },
      {
        description:
          "Integrated sentiment analysis tools to gauge emotional tone in generated content, providing valuable insights.",
      },
      {
        description:
          "Integrated Pinecone vector database for efficient information retrieval, enabling tailored healthcare solutions.",
      },
      {
        description:
          "Implemented document classification for financial documents using deep learning/transformer models, categorizing content into specified client-driven categories.",
      },
      {
        description:
          "Collaborated with cross-functional teams to implement innovative solutions using transformer models for entity and information extraction tasks.",
      },
      {
        description:
          "Designed and implemented a robust parsing system for extracting crucial information from invoices.",
      },
      {
        description:
          "Proficient in unsupervised clustering of text data from website links, enabling meaningful insights and data organization.",
      },
      {
        description:
          "Conducted text summarization of website content within clustering projects for efficient data analysis.",
      },
      {
        description:
          "Utilized Python libraries for PDF-to-image conversion, enabling efficient text and image extraction for model training.",
      },
      {
        description:
          "Demonstrated proficiency in Optical Character Recognition (OCR) using tools like Tesseract to accurately extract text from images and documents.",
      },
      {
        description:
          "Trained and deployed advanced object segmentation models using deep learning techniques, packaged within Docker containers for scalable production integration.",
      },
      {
        description:
          "Engaged in continuous model training and retraining to drive consistent performance improvements.",
      },
      {
        description:
          "Implemented post-processing steps within the machine learning pipeline to ensure and maintain data quality.",
      },
      {
        description:
          "Collaborated on team-wide initiatives to enhance model development practices, sharing insights and best practices.",
      },
      {
        description:
          "Integrated optimized models into scalable production workflows, enhancing overall system efficiency.",
      },
    ],
  
      photos: ["/images/forage_award.JPG", "/images/forage_certicate.png"],
    },

    neurapse: {
      bulletPoints: [],
      awards: [],
      projects: [
    {
      description:
        "Managed full project lifecycles, from designing and experimenting with models to deploying and maintaining production solutions. Played a key role in establishing CI/CD pipelines using Azure DevOps and Jenkins.",
    },
    {
      description:
        "Applied statistical and data mining techniques like boosting, generalized linear models/regression, random forests, and social network analysis to gain insights from data. Utilized data cleaning, analysis, and visualization methods.",
    },
    {
      description:
        "Successfully deployed a Recommendation Engine in production, which conditionally suggests menu items based on user history, contributing to increased average order size.",
    },
    {
      description:
        "Proficiently utilized and optimized Elasticsearch 7.0 indices to store and visualize data, including geo-location queries and mapping. Managed data ingestion into Elasticsearch using Logstash.",
    },
    {
      description:
        "Implemented Elasticsearch solutions, improving data storage efficiency and data ingestion processes using Logstash.",
    },
    {
      description:
        "Demonstrated expertise in Kafka usage and CI/CD pipelines via Azure DevOps and Jenkins. Adapted well to dynamic data science project environments following agile methodologies.",
    },
    {
      description:
        "Experienced with NoSQL technologies like MongoDB and SQLite. Developed APIs using FastAPI for efficient model inferencing and data sharing within the team.",
    },
    {
      description:
        "Utilized Apache Zeppelin notebook and developed user-defined functions (UDFs) in PySpark to address specific business needs.",
    },
    {
      description:
        "Leveraged social media data for topic modeling and Twitter sentiment analysis, extracting valuable insights from Twitter data.",
    },
    {
      description:
        "Hands-on experience with Hugging Face Transformer models, including BERT.",
    },
    {
      description:
        "Conducted advanced Twitter analysis using state-of-the-art BERT models for sentiment analysis and LDA for topic modeling.",
    },
    {
      description:
        "Visualized sentiment and topic analysis outcomes using interactive dashboards crafted with Plotly and Power BI.",
    },
    {
      description:
        "Developed dashboards that provided clear insights into Twitter sentiments and trending topics, enhancing engagement and decision-making.",
    },
],
      photos: ["/images/neurapses_award.jpg"],
    },
  },
}
