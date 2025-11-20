import { LucideIcon, Sparkles, Brain, Workflow, Eye, MessageSquare, Database, Briefcase, Palette, Smartphone, Code, ShoppingCart, TestTube, LifeBuoy } from 'lucide-react'

export interface Service {
  slug: string
  title: string
  short: string
  category: 'ai' | 'traditional'
  icon: LucideIcon
  description: string
  features: string[]
  useCases: string[]
  benefits: string[]
}

export const services: Service[] = [
  {
    slug: 'generative-ai',
    title: 'Generative AI Solutions',
    short: 'Custom LLM integrations, RAG systems, and AI agents tailored to your business needs.',
    category: 'ai',
    icon: Sparkles,
    description: 'Transform your business with cutting-edge generative AI solutions. We build custom large language model integrations, retrieval-augmented generation (RAG) systems, and intelligent AI agents that understand your data and deliver real value. Our security-first approach ensures your sensitive information stays protected while leveraging the power of modern AI.',
    features: [
      'Custom LLM fine-tuning and deployment',
      'Retrieval-Augmented Generation (RAG) systems',
      'AI agents and autonomous workflows',
      'Prompt engineering and optimization',
      'Multi-modal AI (text, image, audio)',
      'Enterprise-grade security and compliance'
    ],
    useCases: [
      'Intelligent knowledge assistants',
      'Document Q&A and analysis',
      'Content generation and summarization',
      'Customer support automation',
      'Code generation and review',
      'Research and data synthesis'
    ],
    benefits: [
      'Reduce manual work by up to 80%',
      'Improve decision-making with AI insights',
      'Scale operations without scaling headcount',
      'Maintain data privacy and security'
    ]
  },
  {
    slug: 'ml-development',
    title: 'ML Model Development',
    short: 'End-to-end machine learning solutions from data preparation to model deployment.',
    category: 'ai',
    icon: Brain,
    description: 'Build powerful machine learning models tailored to your specific business challenges. From data preparation and feature engineering to model training, evaluation, and deployment, we handle the entire ML lifecycle. Our team specializes in both classical ML and deep learning approaches, ensuring you get the right solution for your needs.',
    features: [
      'Custom model architecture design',
      'Data preprocessing and feature engineering',
      'Model training and hyperparameter tuning',
      'Transfer learning and fine-tuning',
      'Model evaluation and validation',
      'A/B testing and experimentation'
    ],
    useCases: [
      'Predictive analytics and forecasting',
      'Recommendation systems',
      'Anomaly detection',
      'Classification and regression tasks',
      'Time series analysis',
      'Clustering and segmentation'
    ],
    benefits: [
      'Data-driven decision making',
      'Automated predictions and insights',
      'Improved accuracy over time',
      'Scalable ML infrastructure'
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    short: 'Streamline operations with intelligent automation and workflow optimization.',
    category: 'ai',
    icon: Workflow,
    description: 'Revolutionize your business processes with intelligent automation. We design and implement AI-powered workflows that handle repetitive tasks, process documents, make intelligent decisions, and optimize operations. Our automation solutions integrate seamlessly with your existing systems while providing the flexibility to scale as your needs grow.',
    features: [
      'Intelligent document processing',
      'Workflow automation and orchestration',
      'Business process optimization',
      'Robotic Process Automation (RPA) with AI',
      'Decision automation systems',
      'Integration with existing tools'
    ],
    useCases: [
      'Invoice and receipt processing',
      'Email classification and routing',
      'Data entry automation',
      'Report generation',
      'Compliance monitoring',
      'Quality assurance checks'
    ],
    benefits: [
      'Reduce operational costs by 60%+',
      'Eliminate human error',
      'Free up staff for strategic work',
      '24/7 automated operations'
    ]
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    short: 'Advanced image and video analysis solutions for real-world applications.',
    category: 'ai',
    icon: Eye,
    description: 'Unlock the power of visual intelligence with our computer vision solutions. We develop advanced systems for image and video analysis, object detection, facial recognition, and visual quality inspection. Whether you need to automate visual inspections, enhance security, or extract insights from visual data, our computer vision expertise delivers results.',
    features: [
      'Object detection and tracking',
      'Image classification and segmentation',
      'Facial recognition and analysis',
      'Optical Character Recognition (OCR)',
      'Video analytics and monitoring',
      'Quality inspection automation'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security and surveillance',
      'Retail analytics and inventory',
      'Medical image analysis',
      'Autonomous systems',
      'Document digitization'
    ],
    benefits: [
      'Real-time visual analysis',
      'Improved quality control',
      'Enhanced security measures',
      'Reduced inspection time'
    ]
  },
  {
    slug: 'nlp',
    title: 'Natural Language Processing',
    short: 'Extract insights from text data with advanced NLP and language understanding.',
    category: 'ai',
    icon: MessageSquare,
    description: 'Transform unstructured text into actionable insights with our natural language processing solutions. We build systems that understand, analyze, and generate human language, enabling you to extract value from documents, conversations, and text data at scale. From sentiment analysis to chatbots, we make language AI work for your business.',
    features: [
      'Text classification and categorization',
      'Sentiment and emotion analysis',
      'Named Entity Recognition (NER)',
      'Text summarization',
      'Conversational AI and chatbots',
      'Language translation'
    ],
    useCases: [
      'Customer feedback analysis',
      'Content moderation',
      'Chatbots and virtual assistants',
      'Document classification',
      'Social media monitoring',
      'Legal document analysis'
    ],
    benefits: [
      'Understand customer sentiment',
      'Automate text processing',
      'Improve customer service',
      'Extract insights from documents'
    ]
  },
  {
    slug: 'data-engineering-mlops',
    title: 'Data Engineering & MLOps',
    short: 'Robust data pipelines and ML infrastructure for production AI systems.',
    category: 'ai',
    icon: Database,
    description: 'Build the foundation for successful AI with our data engineering and MLOps services. We design and implement robust data pipelines, model deployment infrastructure, and monitoring systems that ensure your AI solutions run reliably at scale. Our MLOps practices bring DevOps principles to machine learning, enabling continuous integration and deployment of ML models.',
    features: [
      'Data pipeline design and implementation',
      'Model deployment and serving',
      'ML monitoring and observability',
      'Feature stores and data versioning',
      'CI/CD for ML models',
      'Infrastructure as Code (IaC)'
    ],
    useCases: [
      'Production ML model deployment',
      'Real-time data processing',
      'Model performance monitoring',
      'A/B testing infrastructure',
      'Data quality management',
      'Scalable ML platforms'
    ],
    benefits: [
      'Reliable ML in production',
      'Faster model deployment',
      'Reduced operational overhead',
      'Scalable infrastructure'
    ]
  },
  {
    slug: 'ai-app-recovery',
    title: 'AI App Recovery',
    short: 'Rescue stalled software, recover code, and get to production with AI-assisted recovery.',
    category: 'ai',
    icon: LifeBuoy,
    description: 'Too many projects get stuck in limbo after a freelancer or offshore team over-promises and under-delivers. You\'re left with half-finished code, broken builds, or—worst—no access at all. You are not alone: the Standish CHAOS report estimates roughly 66% of software projects fail to meet expectations, and industry analyses show 1.86 million abandoned apps in app stores. Users are unforgiving—88% say they abandon apps because of bugs, and typical apps lose 77% of users in three days, 90% in thirty days, 95% within three months. Our AI App Recovery service turns that risk into a plan and gets you back to shipping.',
    features: [
      'Codebase ingestion and mapping with AI analysis',
      'Environment reconstruction and build repair',
      'Static and dynamic code analysis',
      'Targeted test generation and coverage improvement',
      'Issue clustering and recovery roadmap',
      'CI/CD pipeline revival and automation'
    ],
    useCases: [
      'MVP rescue: complete core features and ship v1',
      'Mobile app salvage: fix crashes and pass store review',
      'AI project rescue: POC to production deployment',
      'E-commerce stabilization: checkout reliability and security',
      'Data pipeline recovery: repair ingestion and SLA compliance',
      'Freelancer abandonment: regain code access and control'
    ],
    benefits: [
      'Fast time-to-recovery with structured plan in days',
      'Regain control of IP, repositories, and environments',
      'Predictable milestones with weekly demos',
      'Higher code quality with tests, docs, and CI/CD',
      'Security-first approach to fixes and data handling'
    ]
  },
  {
    slug: 'it-business-solutions',
    title: 'IT Business Solutions',
    short: 'Comprehensive IT consulting and business solutions to optimize your operations.',
    category: 'traditional',
    icon: Briefcase,
    description: 'Transform your business with comprehensive IT solutions that drive efficiency and growth. We provide strategic IT consulting, system integration, and business process optimization to help you leverage technology effectively. Our holistic approach ensures your IT infrastructure aligns with your business goals and supports your digital transformation journey.',
    features: [
      'IT strategy and consulting',
      'System integration and migration',
      'Business process optimization',
      'Digital transformation planning',
      'Technology stack evaluation',
      'IT infrastructure assessment'
    ],
    useCases: [
      'Enterprise system integration',
      'Legacy system modernization',
      'Cloud migration strategy',
      'IT infrastructure optimization',
      'Digital workflow design',
      'Technology vendor selection'
    ],
    benefits: [
      'Aligned IT and business strategy',
      'Improved operational efficiency',
      'Reduced IT costs',
      'Future-ready infrastructure'
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'User-centered design that creates intuitive and engaging experiences.',
    category: 'traditional',
    icon: Palette,
    description: 'Create exceptional user experiences with our UI/UX design services. We combine user research, interaction design, and visual design to build interfaces that users love. From wireframes and prototypes to complete design systems, we ensure your digital products are both beautiful and functional, driving engagement and satisfaction.',
    features: [
      'User research and personas',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Design system creation',
      'Usability testing',
      'Responsive design'
    ],
    useCases: [
      'Web application design',
      'Mobile app interfaces',
      'Dashboard and analytics tools',
      'E-commerce experiences',
      'SaaS product design',
      'Design system development'
    ],
    benefits: [
      'Increased user engagement',
      'Higher conversion rates',
      'Reduced support costs',
      'Consistent brand experience'
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'Native and cross-platform mobile applications that users love.',
    category: 'traditional',
    icon: Smartphone,
    description: 'Build powerful mobile applications that deliver exceptional experiences on iOS and Android. Whether you need a native app for maximum performance or a cross-platform solution for faster deployment, we have the expertise to bring your mobile vision to life. Our apps are built with scalability, security, and user experience at the forefront.',
    features: [
      'Native iOS and Android development',
      'Cross-platform development (React Native, Flutter)',
      'Mobile UI/UX design',
      'App store optimization',
      'Push notifications and analytics',
      'Offline functionality'
    ],
    useCases: [
      'Consumer mobile apps',
      'Enterprise mobile solutions',
      'E-commerce mobile apps',
      'Social networking apps',
      'On-demand service apps',
      'Mobile games'
    ],
    benefits: [
      'Reach mobile-first users',
      'Native performance',
      'Offline capabilities',
      'Push notification engagement'
    ]
  },
  {
    slug: 'web-app-development',
    title: 'Web App Development',
    short: 'Modern, scalable web applications built with cutting-edge technologies.',
    category: 'traditional',
    icon: Code,
    description: 'Build modern web applications that scale with your business. We develop responsive, high-performance web apps using the latest technologies and best practices. From MVPs to enterprise-grade solutions, we deliver web applications that are secure, maintainable, and built to grow with your needs.',
    features: [
      'Full-stack web development',
      'Progressive Web Apps (PWA)',
      'Real-time applications',
      'API development and integration',
      'Database design and optimization',
      'Cloud deployment and scaling'
    ],
    useCases: [
      'SaaS platforms',
      'Enterprise web applications',
      'Customer portals',
      'Content management systems',
      'Collaboration tools',
      'Data visualization dashboards'
    ],
    benefits: [
      'Scalable architecture',
      'Cross-platform compatibility',
      'Fast performance',
      'Easy maintenance and updates'
    ]
  },
  {
    slug: 'ecommerce-integration',
    title: 'E-Commerce Integration',
    short: 'Complete e-commerce solutions with seamless payment and inventory management.',
    category: 'traditional',
    icon: ShoppingCart,
    description: 'Launch and scale your online business with our comprehensive e-commerce solutions. We build and integrate complete e-commerce platforms with payment processing, inventory management, and seamless shopping experiences. Whether you need a custom solution or integration with existing platforms, we help you sell more effectively online.',
    features: [
      'Custom e-commerce development',
      'Payment gateway integration',
      'Inventory management systems',
      'Shopping cart optimization',
      'Order management',
      'Multi-channel selling'
    ],
    useCases: [
      'Online retail stores',
      'B2B e-commerce platforms',
      'Subscription services',
      'Marketplace development',
      'Digital product sales',
      'Omnichannel retail'
    ],
    benefits: [
      'Increased online sales',
      'Streamlined operations',
      'Better customer experience',
      'Scalable platform'
    ]
  },
  {
    slug: 'qa-testing-automation',
    title: 'QA Testing & Automation',
    short: 'Comprehensive quality assurance with automated testing and CI/CD.',
    category: 'traditional',
    icon: TestTube,
    description: 'Ensure software quality with our comprehensive QA and testing services. We implement automated testing frameworks, performance testing, and continuous integration pipelines that catch issues early and ensure your software meets the highest quality standards. Our testing strategies reduce bugs, improve reliability, and accelerate your development cycle.',
    features: [
      'Automated testing frameworks',
      'Unit and integration testing',
      'End-to-end testing',
      'Performance and load testing',
      'Security testing',
      'CI/CD pipeline setup'
    ],
    useCases: [
      'Web application testing',
      'Mobile app testing',
      'API testing',
      'Regression testing',
      'Load and stress testing',
      'Security audits'
    ],
    benefits: [
      'Reduced bugs in production',
      'Faster release cycles',
      'Improved software reliability',
      'Lower maintenance costs'
    ]
  }
]

export const servicesBySlug = Object.fromEntries(
  services.map(s => [s.slug, s])
)

export const aiServices = services.filter(s => s.category === 'ai')
export const traditionalServices = services.filter(s => s.category === 'traditional')
