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
        { description: "Researched and selected machine learning models based on data characteristics." },
        { description: "Prepared high-quality datasets aligned to project outcomes for effective model training." },
        { description: "Developed and fine-tuned deep learning models for CV and NLP use cases." },
        { description: "Implemented LLM-based business clustering to organize unstructured data effectively." },
        { description: "Reached 95% clustering accuracy by combining K-means with Llama and Mistral models." },
        { description: "Used transfer learning and domain adaptation to improve classification of financial documents." },
        { description: "Built POCs for GPT-4 Vision in image recognition, object detection, and document text extraction." },
        { description: "Fine-tuned LLMs for open-book QA datasets using QLoRA and PEFT in Python." },
        { description: "Applied instruction tuning and 4-bit quantization workflows for efficient single-GPU training." },
        { description: "Built scalable LLM applications with LangChain and advanced RAG pipelines." },
        { description: "Implemented healthcare expert search with GPT-4 and Pinecone for contextual retrieval." },
        { description: "Delivered robust financial document classification and extraction solutions with transformers." },
        { description: "Built invoice parsing pipelines and OCR-based extraction using Tesseract." },
        { description: "Implemented unsupervised text clustering and website content summarization pipelines." },
        { description: "Trained and deployed object segmentation models in Dockerized production workflows." },
      ],
      photos: ["/images/forage_award.JPG", "/images/forage_certicate.png"],
    },

    neurapse: {
      bulletPoints: [],
      awards: [],
      projects: [
        {
          description:
            "Managed complete project lifecycles from model design and experimentation to deployment and maintenance in production.",
        },
        {
          description:
            "Established CI/CD pipelines using Azure DevOps and Jenkins to improve release reliability.",
        },
        {
          description:
            "Applied advanced statistical and data-mining methods including random forests and regression models.",
        },
        {
          description:
            "Deployed recommendation engines in production to improve user engagement and average order value.",
        },
        {
          description:
            "Optimized Elasticsearch indexing and ingestion pipelines with Logstash for better search analytics.",
        },
        {
          description:
            "Developed FastAPI services and PySpark UDFs to support scalable inference and business workflows.",
        },
        {
          description:
            "Built BERT-based sentiment and topic modeling dashboards with Plotly and Power BI.",
        },
      ],
      photos: ["/images/neurapses_award.jpg"],
    },
  },
}
