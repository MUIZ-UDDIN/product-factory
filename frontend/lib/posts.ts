export interface PostComment {
  author: string;
  text: string;
}

export interface FeedPost {
  id: string;
  creatorName: string;
  creatorHandle: string;
  gradient: string;
  caption: string;
  likes: number;
  timeAgo: string;
  comments: PostComment[];
}

const C = {
  aria: "linear-gradient(160deg, #8a8a8f, #4b4b52 45%, #232329)",
  sakura: "linear-gradient(160deg, #c96f6f, #8a4a52 45%, #3a2228)",
  marcus: "linear-gradient(160deg, #5a5a5a, #2e2e2e 45%, #111111)",
  amara: "linear-gradient(160deg, #b98a5a, #7a5533 45%, #2e2013)",
  lin: "linear-gradient(160deg, #7a8a9a, #4a5a6a 45%, #1f2730)",
  oliver: "linear-gradient(160deg, #6a7a8a, #39454f 45%, #161b20)",
  nova: "linear-gradient(160deg, #7a6a9a, #4a3a6a 45%, #1e1728)",
};

export const FEED_POSTS: FeedPost[] = [
  {
    id: "f1",
    creatorName: "aria.silver",
    creatorHandle: "aria.silver",
    gradient: C.aria,
    caption: "Curating the essentials. Less is always more when it comes to everyday luxury.",
    likes: 12847,
    timeAgo: "2h",
    comments: [{ author: "@lin.chen", text: "The palette is unreal." }],
  },
  {
    id: "f2",
    creatorName: "sakura.tokyo",
    creatorHandle: "sakura.tokyo",
    gradient: C.sakura,
    caption: "Found the most incredible space in Shibuya. Architecture that makes you pause and breathe.",
    likes: 8923,
    timeAgo: "4h",
    comments: [{ author: "@aria.silver", text: "Adding this to the travel list." }],
  },
  {
    id: "f3",
    creatorName: "marcus.noir",
    creatorHandle: "marcus.noir",
    gradient: C.marcus,
    caption: "Somewhere between the sky and the sea. This is what freedom looks like from above.",
    likes: 21456,
    timeAgo: "6h",
    comments: [{ author: "@nova.edge", text: "Unreal light." }],
  },
  {
    id: "f4",
    creatorName: "amara.gold",
    creatorHandle: "amara.gold",
    gradient: C.amara,
    caption: "Morning rituals. The first sip always hits different when the light is just right.",
    likes: 6234,
    timeAgo: "8h",
    comments: [{ author: "@marcus.noir", text: "Now I want coffee." }],
  },
  {
    id: "f5",
    creatorName: "lin.chen",
    creatorHandle: "lin.chen",
    gradient: C.lin,
    caption: "Chasing golden hour in the Sahara. Some moments exist only in the space between day and night.",
    likes: 15678,
    timeAgo: "12h",
    comments: [{ author: "@sakura.tokyo", text: "This is unreal." }],
  },
  {
    id: "f6",
    creatorName: "oliver.sun",
    creatorHandle: "oliver.sun",
    gradient: C.oliver,
    caption: "Brunch done right. Every morning should feel this intentional.",
    likes: 9342,
    timeAgo: "14h",
    comments: [{ author: "@amara.gold", text: "That plating though." }],
  },
  {
    id: "f7",
    creatorName: "nova.edge",
    creatorHandle: "nova.edge",
    gradient: C.nova,
    caption: "Edge of the world vibes. Infinity pools hit different when you are on a cliff.",
    likes: 18234,
    timeAgo: "16h",
    comments: [{ author: "@lin.chen", text: "Need this exact view." }],
  },
  {
    id: "f8",
    creatorName: "marcus.noir",
    creatorHandle: "marcus.noir",
    gradient: C.marcus,
    caption: "The road has no end. Neither does ambition.",
    likes: 24567,
    timeAgo: "1d",
    comments: [{ author: "@oliver.sun", text: "Philosophy in a caption." }],
  },
];

export const SUGGESTED = [
  { handle: "sakura.tokyo", name: "Sakura Tokyo", meta: "Suggested for you", gradient: C.sakura },
  { handle: "marcus.noir", name: "Marcus Noir", meta: "Followed by aria.silver", gradient: C.marcus },
  { handle: "amara.gold", name: "Amara Gold", meta: "Suggested for you", gradient: C.amara },
  { handle: "lin.chen", name: "Lin Chen", meta: "Followed by marcus.noir", gradient: C.lin },
  { handle: "oliver.sun", name: "Oliver Sun", meta: "New to Instagran", gradient: C.oliver },
  { handle: "nova.edge", name: "Nova Edge", meta: "Suggested for you", gradient: C.nova },
];