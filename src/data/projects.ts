/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectSection {
  title: string;
  text: string;
  image?: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  focus: string[];
  output: string[];
  method: string[];
  keywords: string[];
  visibleTags: string[];
  thumbnail: string;
  coverImage: string;
  gallery: string[];
  detailSections: ProjectSection[];
}

export const FOCUS_OPTIONS = [
  "Wellbeing",
  "Disability",
  "Public Service",
  "Cultural Heritage",
  "Sustainability",
  "Personal Expression",
];

export const OUTPUT_OPTIONS = [
  "Product",
  "Furniture",
  "Interface",
  "Service/System",
  "Installation",
  "Game",
  "Campaign",
  "Database/Visualization",
];

export const METHOD_OPTIONS = [
  "User Research",
  "Co-design",
  "Prototype",
  "Making",
  "AI-based",
  "Strategy",
  "Speculative",
];

export const projects: Project[] = [
  {
    "title": "Wine Cabinet",
    "slug": "wine-cabinet",
    "summary": "A modular cabinet design exploring form, personalization, and spatial presence.",
    "focus": ["Personal Expression"],
    "output": ["Product", "Furniture"],
    "method": ["Prototype", "Making"],
    "keywords": ["modular", "form design", "personalization", "cabinet", "spatial presence"],
    "visibleTags": ["Product", "Furniture", "Modular"],
    "thumbnail": "https://picsum.photos/seed/wine-cabinet/800/600",
    "coverImage": "https://picsum.photos/seed/wine-cabinet-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/wine-cabinet-1/1200/800",
      "https://picsum.photos/seed/wine-cabinet-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A furniture and product design project focused on modularity, formal exploration, and personalization."
      }
    ]
  },
  {
    "title": "Existence Installation",
    "slug": "existence-installation",
    "summary": "A speculative installation for personal expression through artistic experimentation and making.",
    "focus": ["Personal Expression"],
    "output": ["Installation"],
    "method": ["Speculative", "Making", "Prototype"],
    "keywords": ["installation", "art", "speculative design", "personal expression", "making"],
    "visibleTags": ["Installation", "Speculative", "Artistic"],
    "thumbnail": "https://picsum.photos/seed/existence/800/600",
    "coverImage": "https://picsum.photos/seed/existence-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/existence-1/1200/800",
      "https://picsum.photos/seed/existence-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "An artistic and speculative installation project centered on self-expression, material making, and conceptual exploration."
      }
    ]
  },
  {
    "title": "POP!POP! - Healing Tableware",
    "slug": "pop-pop-healing-tableware",
    "summary": "A tableware project exploring emotional comfort, healing, and tactile making.",
    "focus": ["Wellbeing"],
    "output": ["Product"],
    "method": ["Prototype", "Making"],
    "keywords": ["tableware", "mental health", "healing", "comfort", "making"],
    "visibleTags": ["Product", "Wellbeing", "Healing"],
    "thumbnail": "/projects/pop!pop!-healing tableware/thumb.jpg",
    "coverImage": "/projects/pop!pop!-healing tableware/cover.jpg",
    "gallery": [
      "/projects/pop-pop-healing-tableware/gallery-01.jpg",
      "/projects/pop-pop-healing-tableware/gallery-02.jpg",
      "/projects/pop-pop-healing-tableware/gallery-03.jpg",
      "/projects/pop-pop-healing-tableware/gallery-04.jpg",
      "/projects/pop-pop-healing-tableware/gallery-05.jpg",
      "/projects/pop-pop-healing-tableware/gallery-06.jpg",
      "/projects/pop-pop-healing-tableware/gallery-07.jpg",
      "/projects/pop-pop-healing-tableware/gallery-08.jpg",
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A product project that connects tactile form-making with emotional comfort and a healing dining experience."
      }
    ]
  },
  {
    "title": "Tea Table",
    "slug": "tea-table",
    "summary": "An interactive furniture concept that combines wellbeing, healing, and spatial experience.",
    "focus": ["Wellbeing"],
    "output": ["Furniture", "Product"],
    "method": ["Prototype", "Making"],
    "keywords": ["tea table", "interactive space", "wellbeing", "healing", "health", "furniture"],
    "visibleTags": ["Furniture", "Wellbeing", "Interactive Space"],
    "thumbnail": "https://picsum.photos/seed/teatable/800/600",
    "coverImage": "https://picsum.photos/seed/teatable-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/teatable-1/1200/800",
      "https://picsum.photos/seed/teatable-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A furniture and spatial interaction project designed around healing, sensory atmosphere, and wellbeing."
      }
    ]
  },
  {
    "title": "Emergency Childbirth Support System",
    "slug": "emergency-childbirth-support-system",
    "summary": "A public-interest support system combining service, product, and social care thinking.",
    "focus": ["Disability", "Public Service"],
    "output": ["Service/System", "Product"],
    "method": ["Prototype", "Strategy"],
    "keywords": ["disability", "public", "service design", "product system", "social care", "emergency childbirth"],
    "visibleTags": ["Public Service", "Service/System", "Social Care"],
    "thumbnail": "https://picsum.photos/seed/emergency/800/600",
    "coverImage": "https://picsum.photos/seed/emergency-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/emergency-1/1200/800",
      "https://picsum.photos/seed/emergency-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A system and service-oriented concept responding to public support needs through a combined product-service approach."
      }
    ]
  },
  {
    "title": "Blind Navigation",
    "slug": "blind-navigation",
    "summary": "An interface-led navigation project for blind and low-vision users informed by user research.",
    "focus": ["Disability"],
    "output": ["Interface"],
    "method": ["User Research", "Prototype"],
    "keywords": ["blind", "low vision", "navigation", "accessibility", "interface", "user research"],
    "visibleTags": ["Disability", "Interface", "User Research"],
    "thumbnail": "https://picsum.photos/seed/blind/800/600",
    "coverImage": "https://picsum.photos/seed/blind-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/blind-1/1200/800",
      "https://picsum.photos/seed/blind-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "An accessibility-focused navigation interface concept developed through user research and design iteration."
      }
    ]
  },
  {
    "title": "Mortise and Tenon Knowledge System",
    "slug": "mortise-and-tenon-knowledge-system",
    "summary": "A cultural heritage research project combining database design, visualization, and interactive interface thinking.",
    "focus": ["Cultural Heritage"],
    "output": ["Database/Visualization", "Interface"],
    "method": ["Strategy", "User Research"],
    "keywords": ["mortise and tenon", "database", "knowledge visualization", "heritage", "interface", "research"],
    "visibleTags": ["Cultural Heritage", "Database/Visualization", "Interface"],
    "thumbnail": "https://picsum.photos/seed/heritage/800/600",
    "coverImage": "https://picsum.photos/seed/heritage-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/heritage-1/1200/800",
      "https://picsum.photos/seed/heritage-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A research-led heritage project translating structured knowledge into an interactive database and interface experience."
      }
    ]
  },
  {
    "title": "Poetic Support for Depression",
    "slug": "poetic-support-for-depression",
    "summary": "An AI-based interface concept for mental wellbeing, combining user research and product strategy.",
    "focus": ["Wellbeing", "Disability"],
    "output": ["Interface"],
    "method": ["User Research", "AI-based", "Strategy"],
    "keywords": ["depression", "poetry", "mental wellbeing", "AI", "interface", "user research", "strategy"],
    "visibleTags": ["Wellbeing", "AI-based", "Interface"],
    "thumbnail": "https://picsum.photos/seed/poetic/800/600",
    "coverImage": "https://picsum.photos/seed/poetic-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/poetic-1/1200/800",
      "https://picsum.photos/seed/poetic-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A digital wellbeing concept that uses poetic interaction, AI support, and research-based strategy to shape a softer form of mental health interface."
      }
    ]
  },
  {
    "title": "CarryHelp",
    "slug": "carryhelp",
    "summary": "A co-designed assistive support concept for blind and low-vision users in public settings.",
    "focus": ["Disability", "Public Service"],
    "output": ["Service/System", "Interface"],
    "method": ["Co-design", "User Research", "Prototype"],
    "keywords": ["co-design", "blind", "low vision", "public setting", "assistive system", "HCI", "iteration"],
    "visibleTags": ["Co-design", "Disability", "Public Service"],
    "thumbnail": "https://picsum.photos/seed/carryhelp/800/600",
    "coverImage": "https://picsum.photos/seed/carryhelp-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/carryhelp-1/1200/800",
      "https://picsum.photos/seed/carryhelp-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A public assistive support concept co-designed around accessibility, dignity, and real-world usability for blind and low-vision users."
      }
    ]
  },
  {
    "title": "Social Anxiety Board Game",
    "slug": "social-anxiety-board-game",
    "summary": "A physical game concept exploring social anxiety, supported interaction, and inclusive play.",
    "focus": ["Wellbeing", "Disability"],
    "output": ["Game", "Product"],
    "method": ["Prototype", "Making"],
    "keywords": ["social anxiety", "board game", "inclusive play", "physical interaction", "card game", "wellbeing"],
    "visibleTags": ["Game", "Wellbeing", "Social Interaction"],
    "thumbnail": "https://picsum.photos/seed/boardgame/800/600",
    "coverImage": "https://picsum.photos/seed/boardgame-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/boardgame-1/1200/800",
      "https://picsum.photos/seed/boardgame-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A game-based concept using physical interaction and supported play to explore social anxiety and inclusion."
      }
    ]
  },
  {
    "title": "Food Recycling Campaign",
    "slug": "food-recycling-campaign",
    "summary": "A local sustainability campaign project combining social engagement and AI-supported ideas.",
    "focus": ["Sustainability", "Public Service"],
    "output": ["Campaign", "Service/System"],
    "method": ["Strategy", "AI-based", "User Research"],
    "keywords": ["food recycling", "campaign", "local community", "sustainability", "AI", "public engagement"],
    "visibleTags": ["Sustainability", "Campaign", "Local Community"],
    "thumbnail": "https://picsum.photos/seed/recycling/800/600",
    "coverImage": "https://picsum.photos/seed/recycling-cover/1920/1080",
    "gallery": [
      "https://picsum.photos/seed/recycling-1/1200/800",
      "https://picsum.photos/seed/recycling-2/1200/800"
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "A sustainability-oriented local campaign project combining research, public engagement, and AI-supported concept development."
      }
    ]
  }
];
