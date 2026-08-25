export interface Creator {
  id: string;
  handle: string;
  name: string;
  niche: string;
  followers: string;
  bio: string;
  gradient: string;
  image: string;
}

export const CREATORS: Creator[] = [
  {
    id: "1",
    handle: "aria.silver",
    name: "aria",
    niche: "Editorial fashion",
    followers: "1.2M followers",
    bio: "Looks, silhouettes, and the quiet politics of a well-fitted coat.",
    gradient: "linear-gradient(160deg, #8a8a8f, #4b4b52 45%, #232329)",
    image: "/ai-influencer-1-DVgnwWKz.jpg",
  },
  {
    id: "2",
    handle: "sakura.tokyo",
    name: "sakura",
    niche: "Travel",
    followers: "890K followers",
    bio: "One city a month, photographed before sunrise.",
    gradient: "linear-gradient(160deg, #c96f6f, #8a4a52 45%, #3a2228)",
    image: "/ai-influencer-2-CG2TyG_i.jpg",
  },
  {
    id: "3",
    handle: "marcus.noir",
    name: "marcus",
    niche: "Architecture",
    followers: "2.1M followers",
    bio: "Concrete, light, and the geometry most people walk past.",
    gradient: "linear-gradient(160deg, #5a5a5a, #2e2e2e 45%, #111111)",
    image: "/ai-influencer-3-CS_EPHIM.jpg",
  },
  {
    id: "4",
    handle: "amara.gold",
    name: "amara",
    niche: "Food",
    followers: "670K followers",
    bio: "Street food, shot like still life.",
    gradient: "linear-gradient(160deg, #b98a5a, #7a5533 45%, #2e2013)",
    image: "/ai-influencer-4-CwJh_GSU.jpg",
  },
  {
    id: "5",
    handle: "lin.chen",
    name: "lin",
    niche: "Design",
    followers: "1.5M followers",
    bio: "Objects with one clear idea each.",
    gradient: "linear-gradient(160deg, #7a8a9a, #4a5a6a 45%, #1f2730)",
    image: "/ai-influencer-5-GLFwNmpI.jpg",
  },
  {
    id: "6",
    handle: "oliver.sun",
    name: "oliver",
    niche: "Technology",
    followers: "430K followers",
    bio: "Gadgets that disappear into good use.",
    gradient: "linear-gradient(160deg, #6a7a8a, #39454f 45%, #161b20)",
    image: "/ai-influencer-7-BmeArZXq.jpg",
  },
  {
    id: "7",
    handle: "nova.edge",
    name: "nova",
    niche: "Contemporary art",
    followers: "980K followers",
    bio: "Installations that ask for a second look.",
    gradient: "linear-gradient(160deg, #7a6a9a, #4a3a6a 45%, #1e1728)",
    image: "/ai-influencer-8-Br-MnxR3.jpg",
  },
];

export const TRENDING: { id: string; title: string; creator: string; gradient: string; image: string }[] = [
  { id: "t1", title: "The Suit Economy", creator: "aria", gradient: "linear-gradient(160deg, #8a8a8f, #232329)", image: "/post-1-ClUyyPX-.jpg" },
  { id: "t2", title: "Neon Kyoto", creator: "sakura", gradient: "linear-gradient(160deg, #c96f6f, #3a2228)", image: "/post-3-pPXAxerm.jpg" },
  { id: "t3", title: "Concrete Gardens", creator: "marcus", gradient: "linear-gradient(160deg, #5a5a5a, #111111)", image: "/post-5-LYIWaCFq.jpg" },
  { id: "t4", title: "The Night Market Index", creator: "amara", gradient: "linear-gradient(160deg, #b98a5a, #2e2013)", image: "/post-7-CWoSUcbf.jpg" },
  { id: "t5", title: "Objects in Repose", creator: "lin", gradient: "linear-gradient(160deg, #7a8a9a, #1f2730)", image: "/post-11-BN5eAMNr.jpg" },
  { id: "t6", title: "Machines That Leave", creator: "oliver", gradient: "linear-gradient(160deg, #6a7a8a, #161b20)", image: "/post-12-Foj8YWiv.jpg" },
];