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
    "title": "ModTea - Modular Home Bar Rack",
    "slug": "wine-cabinet",
    "summary": "A modular cabinet design exploring form, personalization, and spatial presence.",
    "focus": ["Personal Expression"],
    "output": ["Product", "Furniture"],
    "method": ["Prototype", "Making"],
    "keywords": ["modular", "form design", "personalization", "cabinet", "spatial presence"],
    "visibleTags": ["Product", "Furniture", "Modular"],
    "thumbnail": "/projects/modbar/thumb.jpg",
    "coverImage": "/projects/modbar/cover.jpg",
    "gallery": [
      "/projects/modbar/gallery-01.jpg",
      "/projects/modbar/gallery-02.jpg",
      "/projects/modbar/gallery-03.jpg",
      "/projects/modbar/gallery-04.jpg",
      "/projects/modbar/gallery-05.jpg",
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "As home bartending becomes increasingly popular among young people, limited living space and a growing variety of tools often lead to cluttered surfaces and a lack of atmosphere. ModBar responds to these challenges through zoned organization and a flexible modular structure, allowing it to adapt to different spatial needs. Its warm material palette and softly considered form create a cozy, relaxed mood, transforming storage into part of the home bar experience. Beyond bartending tools and bottles, the rack can also accommodate everyday items, making it suitable for both social moments and daily living. Overall, ModBar balances order, flexibility, and ambiance, supporting young users in creating a more organized and enjoyable home bartending space."
      }
    ]
  },
  {
    "title": "Toadflare - Wearable device",
    "slug": "toadflare-wearable-device",
    "summary": "A wearable device that turns suppressed anger into visible presence through breath-driven inflation.",
    "focus": ["Personal Expression"],
    "output": ["Installation"],
    "method": ["Speculative", "Making", "Prototype"],
    "keywords": ["installation", "art", "speculative design", "personal expression", "making"],
    "visibleTags": ["Installation", "Speculative", "Artistic"],
    "thumbnail": "/projects/toadflare-wearable-device/thumb.jpg",
    "coverImage": "/projects/toadflare-wearable-device/cover.jpg",
    "gallery": [
      "/projects/toadflare-wearable-device/gallery-01.jpg",
      "/projects/toadflare-wearable-device/gallery-02.jpg",
      "/projects/toadflare-wearable-device/gallery-03.jpg",
      "/projects/toadflare-wearable-device/gallery-04.jpg",
      "/projects/toadflare-wearable-device/gallery-05.jpg",
      "/projects/toadflare-wearable-device/gallery-06.jpg",
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "In social life, a sense of existence is often shaped by recognition from others. When this recognition is absent, the self can become muted, producing a feeling of being overlooked or emotionally erased. In such moments, impulse may emerge as a raw expression of the inner self, yet it is often restrained by social norms and fear of judgment. This wearable device responds to that tension between suppression and expression. By sensing angry or intensified breathing triggered by neglect, it activates an inflatable airbag that expands outward, echoing the defensive display of a toad puffing up its body. The device transforms an invisible emotional state into a visible bodily presence, making internal tension perceptible in physical space. In this way, it acts not only as a wearable object, but also as a medium through which suppressed feelings are externalised and the right to be noticed is reclaimed."
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
    "thumbnail": "/projects/pop-pop-healing-tableware/thumb.jpg",
    "coverImage": "/projects/pop-pop-healing-tableware/cover.jpg",
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
        "text": "POP!POP! is a tableware concept designed for young people living under constant pressure and fast-paced routines. In everyday life, meals are often one of the few moments of pause, yet they rarely function as genuine opportunities for emotional release. Responding to this condition, POP!POP! introduces a soft, smooth, deformable, and repeatable tactile experience into daily eating and drinking rituals.Its warm, animal-like forms create a gentle and comforting presence, encouraging users to naturally pinch, press, and poke the objects while dining. These small and often unconscious gestures are transformed into subtle moments of sensory relief. In this way, POP!POP! reimagines tableware not only as a functional object, but also as a soothing companion that supports self-soothing and emotional release within everyday life."
      }
    ]
  },
  {
    "title": "MoodTea - Immersive Space",
    "slug": "moodtea-immersive-space",
    "summary": "An AR tea-drinking space that supports relaxation, emotional wellbeing, and immersive tea experiences.",
    "focus": ["Wellbeing"],
    "output": ["Furniture", "Product"],
    "method": ["Prototype", "Making"],
    "keywords": ["tea table", "interactive space", "wellbeing", "healing", "health", "furniture"],
    "visibleTags": ["Furniture", "Wellbeing", "Interactive Space"],
    "thumbnail": "/projects/moodtea-immersive-space/thumb.jpg",
    "coverImage": "/projects/moodtea-immersive-space/cover.jpg",
    "gallery": [
      "/projects/moodtea-immersive-space/gallery-01.jpg",
      "/projects/moodtea-immersive-space/gallery-02.jpg",
      "/projects/moodtea-immersive-space/gallery-03.jpg",
      "/projects/moodtea-immersive-space/gallery-04.jpg",
      "/projects/moodtea-immersive-space/gallery-05.jpg",
      "/projects/moodtea-immersive-space/gallery-06.jpg",
      "/projects/moodtea-immersive-space/gallery-07.jpg",
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "This project addresses the growing experience of Chronic Fatigue Syndrome among young people, a condition often associated with emotional strain and physical fatigue. While tea has the potential to relieve these symptoms, many young people engage with it less frequently due to limited familiarity and a lack of engaging sensory experience. In response, the design proposes an AR tea-drinking space that guides users in choosing teas based on their emotional and physical condition, while creating an immersive visual environment that transforms tea drinking into a more soothing, restorative, and emotionally supportive experience."
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
    "title": "CarryHelp - A Multimodal Inclusive Assistance System",
    "slug": "carryhelp",
    "summary": "A co-designed multimodal help system for visually impaired public-space users.",
    "focus": ["Disability", "Public Service"],
    "output": ["Service/System", "Interface"],
    "method": ["Co-design", "User Research", "Prototype"],
    "keywords": ["co-design", "blind", "low vision", "public setting", "assistive system", "HCI", "iteration"],
    "visibleTags": ["Co-design", "Disability", "Public Service"],
    "thumbnail": "/projects/carryhelp/thumb.jpg",
    "coverImage": "/projects/carryhelp/cover.jpg",
    "gallery": [
      "/projects/carryhelp/gallery-01.jpg",
      "/projects/carryhelp/gallery-02.jpg",
      "/projects/carryhelp/gallery-03.jpg",
      "/projects/carryhelp/gallery-04.jpg",
      "/projects/carryhelp/gallery-05.jpg",
      "/projects/carryhelp/gallery-06.jpg",
      "/projects/carryhelp/gallery-07.jpg",
      "/projects/carryhelp/gallery-08.jpg",
      "/projects/carryhelp/gallery-09.jpg",
      "/projects/carryhelp/gallery-10.jpg",
      "/projects/carryhelp/gallery-11.jpg",
    ],
    "detailSections": [
      {
        "title": "Overview",
        "text": "CarryHelp is a co-designed multimodal assistance system that enables blind and low-vision users to request help discreetly and independently in public venues. Developed through interviews, concept testing, and prototype evaluation with visually impaired co-designers, the system combines a fixed help point, a portable help device, multimodal feedback, and a staff-side response system. Through tactile, audio, visual, and location-based interactions, CarryHelp aims to make public-space assistance more dignified, efficient, and user-led."
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
