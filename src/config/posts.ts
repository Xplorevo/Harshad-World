// Blog posts. Content is authored here — edit freely, the blog pages,
// sitemap entries and SEO metadata all read from this single list.

export interface PostSection {
  heading: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  title: string;
  /** Meta description, <=160 chars. */
  description: string;
  /** ISO date of publication. */
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  sections: PostSection[];
}

export const posts: Post[] = [
  {
    slug: "building-xplorevo-traveltech-for-students",
    title: "Building Xplorevo: TravelTech for Students",
    description:
      "How Xplorevo went from a student-travel frustration in Pune to a TravelTech product, and the product decisions that shaped it.",
    date: "2026-06-18",
    readingTime: "5 min read",
    tags: ["Startups", "Xplorevo", "Product"],
    excerpt:
      "Why student travel in India is broken, and how we designed Xplorevo around trust, budget and group planning instead of yet another booking form.",
    sections: [
      {
        heading: "The problem we kept running into",
        paragraphs: [
          "Every trip my friends and I planned started the same way: twenty tabs, three group chats, and a spreadsheet nobody updated. Student travel is not a booking problem, it is a coordination problem. The money is tight, the group is large, and the decisions are social.",
          "Existing platforms optimise for a single traveller with a credit card. That is a different person from a group of six students splitting costs and arguing about dates.",
        ],
      },
      {
        heading: "What we chose to build first",
        paragraphs: [
          "Xplorevo started with the smallest useful slice: curated, budget-transparent trips with everything a student needs to say yes in one screen. No hidden add-ons, no pricing that changes after you commit.",
          "The second slice was group logic — shared itineraries, split visibility on cost, and a plan that stays correct when one person drops out.",
        ],
      },
      {
        heading: "Lessons for other founders",
        paragraphs: [
          "Talk to your users where they already are. Most of our early insight came from campus conversations, not surveys.",
          "Ship the boring parts well. Clear pricing beat every clever feature we prototyped.",
        ],
      },
    ],
  },
  {
    slug: "yojanaradar-ai-for-government-schemes",
    title: "YojanaRadar: Using AI to Make Government Schemes Findable",
    description:
      "Behind YojanaRadar — an AI project that matches citizens with the government schemes they actually qualify for.",
    date: "2026-07-02",
    readingTime: "6 min read",
    tags: ["AI", "YojanaRadar", "Public Tech"],
    excerpt:
      "Thousands of schemes exist. Almost nobody can find the right one. Here is how we approached matching, language and trust.",
    sections: [
      {
        heading: "Discovery is the real barrier",
        paragraphs: [
          "India runs an enormous number of welfare and support schemes. The benefit is real, but the information is scattered across portals, PDFs and regional sites. For most people, the blocker is not eligibility — it is discovery.",
          "YojanaRadar treats that as a search and matching problem rather than a content problem.",
        ],
      },
      {
        heading: "How the matching works",
        paragraphs: [
          "A short profile — state, age bracket, occupation, income band — narrows the space first with plain rules. Language models then handle the messy part: reading scheme text and explaining, in simple language, why a scheme fits.",
          "Keeping deterministic filters ahead of the model matters. It keeps results explainable and stops the system from inventing eligibility.",
        ],
      },
      {
        heading: "Trust is a feature",
        paragraphs: [
          "Every result links back to its official source. If a user cannot verify a claim in one click, the answer is not finished.",
        ],
      },
    ],
  },
  {
    slug: "ai-full-stack-shipping-to-deployment",
    title: "AI Full Stack: Shipping Projects All the Way to Deployment",
    description:
      "The stack and habits I use to take AI products from an empty repo to a live, monitored deployment.",
    date: "2026-07-24",
    readingTime: "5 min read",
    tags: ["AI", "Engineering", "Deployment"],
    excerpt:
      "Most side projects die between 'it works locally' and 'it is live'. Here is the workflow that closes that gap.",
    sections: [
      {
        heading: "Pick a stack you can deploy in an hour",
        paragraphs: [
          "React and TypeScript on the front, a managed backend for data and auth, and an AI gateway for model calls. The point is not novelty — it is that every piece has an obvious deployment story.",
        ],
      },
      {
        heading: "Treat prompts like code",
        paragraphs: [
          "Prompts live in the repo, get reviewed, and change with a commit message. Model behaviour drifts; version history is how you find out what changed.",
          "Keep model calls on the server. Keys never belong in the browser.",
        ],
      },
      {
        heading: "Deploy on day one",
        paragraphs: [
          "Put the empty shell online before writing features. Everything after that is an increment on a real URL, which is also the fastest way to get feedback from people who are not you.",
        ],
      },
    ],
  },
  {
    slug: "mentoring-student-founders",
    title: "What I Learned Mentoring Student Founders",
    description:
      "Notes from mentoring students and early founders through E-Cell, Unstop and Changemaker Academy.",
    date: "2026-08-14",
    readingTime: "4 min read",
    tags: ["Mentorship", "Community", "Startups"],
    excerpt:
      "Patterns I see again and again in student startups — and the questions that unblock them fastest.",
    sections: [
      {
        heading: "Most ideas are not too small, they are too vague",
        paragraphs: [
          "The first question I ask is who exactly the user is and where you can find ten of them this week. If that answer takes more than a sentence, the idea is not ready for a build.",
        ],
      },
      {
        heading: "Execution beats the pitch deck",
        paragraphs: [
          "Teams that ship a rough version in two weeks learn more than teams that polish slides for two months. Judges, users and investors all respond to evidence.",
        ],
      },
      {
        heading: "Build a team before you need one",
        paragraphs: [
          "The strongest campus startups I have worked with had a small, committed core long before they had a product. Culture is easier to set early than to repair later.",
        ],
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
