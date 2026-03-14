export type PortfolioProject = {
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  stack: string[];
  impact: string;
  links: {
    github: string;
    caseStudy: string;
    demo: string;
  };
};

export type PortfolioExperience = {
  period: string;
  role: string;
  focus: string;
  highlights: string[];
};

export const personalInfo = {
  name: "Pratik Mehkarkar",
  title: "Android • AI • Cloud Engineer",
  tagline: "Building intelligent mobile systems and practical AI-powered products.",
  email: "your-email@example.com",
  github: "https://github.com/your-github",
  linkedin: "https://linkedin.com/in/your-linkedin",
  resume: "/resume-placeholder.pdf"
};

export const techStack = [
  {
    category: "Mobile",
    items: ["Kotlin", "Android", "Jetpack", "CameraX", "ML Kit"]
  },
  {
    category: "Backend / API",
    items: [".NET", "REST APIs", "SQL", "Postman"]
  },
  {
    category: "Cloud / DevOps",
    items: ["Azure", "Azure DevOps", "Event Hubs", "Firebase"]
  },
  {
    category: "AI / Data",
    items: ["Python", "PyTorch", "TFLite", "OCR", "Applied ML"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Android Studio", "Eclipse", "VS Code"]
  }
];

export const projects: PortfolioProject[] = [
  {
    title: "VIN Scanner",
    summary:
      "Full-screen VIN and stock scanner engineered for high-throughput enterprise inspections.",
    challenge:
      "Inspectors needed fast, reliable scans under inconsistent yard lighting with limited network access.",
    solution:
      "Built CameraX + ML Kit pipeline with scanner-box alignment, zoom control, offline decode, OCR fallback, and validation flow.",
    stack: ["Android", "Kotlin", "CameraX", "ML Kit", "Room DB"],
    impact:
      "Reduced manual entry friction and improved capture consistency during vehicle intake.",
    links: {
      github: "https://github.com/your-github/vin-scanner",
      caseStudy: "#",
      demo: "#"
    }
  },
  {
    title: "Fleet360 Telemetry Demo",
    summary:
      "Mobile telemetry concept connecting Android events to Azure cloud streams.",
    challenge:
      "Needed a clear demonstration of structured mobile telemetry flowing into a cloud-native pipeline.",
    solution:
      "Designed Android event model and pushed packets to Azure Event Hubs for downstream analytics workflows.",
    stack: ["Kotlin", "Azure Event Hubs", "JSON", "REST"],
    impact:
      "Showcases how mobile products can become cloud-observable systems.",
    links: {
      github: "https://github.com/your-github/fleet360-telemetry",
      caseStudy: "#",
      demo: "#"
    }
  },
  {
    title: "AI Damage Annotation Assistant",
    summary:
      "Applied AI concept for vehicle image understanding and annotation support.",
    challenge:
      "Damage review workflows are repetitive and require structured context for consistent decisions.",
    solution:
      "Explored practical annotation/detection flows that combine image preprocessing, model prompts, and operator feedback loops.",
    stack: ["Python", "PyTorch", "TFLite", "Computer Vision"],
    impact:
      "Demonstrates pragmatic AI thinking focused on operations, not hype.",
    links: {
      github: "https://github.com/your-github/ai-damage-assistant",
      caseStudy: "#",
      demo: "#"
    }
  },
  {
    title: "BugReporter AI Agent",
    summary:
      "Developer productivity concept that captures bug context and produces AI-assisted issue summaries.",
    challenge:
      "Bug reports often miss logs, reproducible context, or concise technical summaries.",
    solution:
      "Prototyped capture pipeline for logs/screen metadata with AI summarization for QA and engineering handoffs.",
    stack: ["Android", "AI Workflows", "Automation", "Observability"],
    impact:
      "Improves triage velocity and quality of communication across teams.",
    links: {
      github: "https://github.com/your-github/bugreporter-agent",
      caseStudy: "#",
      demo: "#"
    }
  },
  {
    title: ".NET + Azure CRUD API",
    summary:
      "Backend learning project for building cloud-ready REST services.",
    challenge:
      "Wanted deeper backend and cloud fluency to complement mobile engineering strengths.",
    solution:
      "Built SQL-backed CRUD APIs using .NET patterns and Azure-oriented deployment practices.",
    stack: [".NET", "C#", "SQL", "Azure"],
    impact:
      "Expands cross-stack capability for end-to-end product development.",
    links: {
      github: "https://github.com/your-github/dotnet-azure-crud",
      caseStudy: "#",
      demo: "#"
    }
  }
];

export const experience: PortfolioExperience[] = [
  {
    period: "Current",
    role: "Android Developer",
    focus:
      "Enterprise salvage-inspection and yard-operations apps with production support ownership.",
    highlights: [
      "Built CameraX image capture and scanner workflows",
      "Delivered VIN/barcode pipelines using CameraX + ML Kit",
      "Implemented dynamic JSON-driven forms with Firestore + Room DB",
      "Integrated backend APIs and internal enterprise tools"
    ]
  },
  {
    period: "Recent Journey",
    role: "Mobile + AI + Cloud Builder",
    focus:
      "Exploring practical AI systems, cloud integration, and developer tooling concepts.",
    highlights: [
      "Prototyped applied AI concepts for vehicle workflows",
      "Developed telemetry demos with Azure Event Hubs",
      "Strengthened .NET, SQL, and Azure DevOps fundamentals",
      "Worked with SOTI MobiControl / MDM-aware delivery contexts"
    ]
  }
];

export const exploring = [
  "AI-powered mobile experiences",
  "Azure cloud systems",
  "Intelligent scanner flows",
  "Developer productivity tooling",
  "Automation for QA and support operations"
];
