interface IconProps {
  className?: string;
}

function Svg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconSparkles(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3l1.9 5.7L19.5 11l-5.6 2.3L12 19l-1.9-5.7L4.5 11l5.6-2.3L12 3z" />
      <path d="M19 15l.7 2.1L21.5 18l-1.8.9L19 21l-.7-2.1L16.5 18l1.8-.9L19 15z" />
    </Svg>
  );
}
export function IconArrow(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Svg>
  );
}
export function IconBadgeCheck(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}
export function IconSearch(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </Svg>
  );
}
export function IconChart(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </Svg>
  );
}
export function IconDoc(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </Svg>
  );
}
export function IconFeed(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M12 17l5-5-2-2-3 3-1-1-2 2z" />
    </Svg>
  );
}
export function IconSkull(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="11" r="1" />
      <circle cx="15" cy="11" r="1" />
      <path d="M12 14c3 0 5.5-1.8 5.5-4.5S14.9 5 12 5s-5.5 1.8-5.5 4.5S9 14 12 14z" />
      <path d="M9 19h6" />
      <path d="M8.5 14v3.5a1.5 1.5 0 0 1-1.5 1.5H6a1 1 0 0 1-1-1v-1.2" />
      <path d="M15.5 14v3.5a1.5 1.5 0 0 0 1.5 1.5h1a1 1 0 0 0 1-1v-1.2" />
    </Svg>
  );
}
export function IconRadio(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 10h16v10H4z" />
      <path d="M4 10l12-5v5" />
      <circle cx="9" cy="15" r="2" />
      <path d="M16 13h2" />
      <path d="M16 17h2" />
    </Svg>
  );
}
export function IconScale(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 3v18" />
      <path d="M8 21h8" />
      <path d="M12 7l-6 2 2 6a4 4 0 0 0 8 0l2-6-6-2z" />
    </Svg>
  );
}
export function IconPlane(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M2 12l20-7-7 20-3-6-5-2z" />
      <path d="M12 19l7-7" />
    </Svg>
  );
}
export function IconFilm(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 3v18" />
      <path d="M17 3v18" />
      <path d="M7 12h10" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
    </Svg>
  );
}
export function IconShare(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 10.5l6.8-4" />
      <path d="M8.6 13.5l6.8 4" />
    </Svg>
  );
}
export function IconBriefcase(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </Svg>
  );
}
export function IconCalendar(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </Svg>
  );
}
export function IconRocket(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.5-6 11a22 22 0 0 1-4 2z" />
      <path d="M9 12H4s.6-3.3 2-4.5c1.6-1.3 6 0 6 0" />
      <path d="M12 15v5s3.3-.6 4.5-2c1.3-1.6 0-6 0-6" />
    </Svg>
  );
}
export function IconDatabase(p: IconProps) {
  return (
    <Svg {...p}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </Svg>
  );
}
export function IconMail(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Svg>
  );
}
export function IconUsers(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" />
      <path d="M16 4.5a4 4 0 0 1 0 7" />
      <path d="M18 13a6 6 0 0 1 4 6v2" />
    </Svg>
  );
}
export function IconHammer(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M15 12l-3.5-3.5a2 2 0 0 0-3 0L3 13v4l4 4 4.5-8.5a2 2 0 0 0 0-3L12 9l3 3" />
      <path d="M15 12l6-6a2 2 0 0 0 0-2.8 2 2 0 0 0-2.8 0l-6 6" />
      <path d="M14 18h7" />
    </Svg>
  );
}
export function IconMegaphone(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l6 5V4L6 9H4a1 1 0 0 0-1 1z" />
      <path d="M16 8a5 5 0 0 1 0 8" />
      <path d="M19 5a9 9 0 0 1 0 14" />
    </Svg>
  );
}
export function IconTarget(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </Svg>
  );
}
export function IconFlask(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M9 3h6" />
      <path d="M10 3v6l-5.5 9a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3" />
      <path d="M8 15h8" />
    </Svg>
  );
}
export function IconBolt(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M13 2L4.5 13.5H11l-1 8.5L19 10h-6.5L13 2z" />
    </Svg>
  );
}
export function IconBuilding(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 21V8l8-3v16" />
      <path d="M8 12h4" />
      <path d="M8 16h4" />
      <path d="M12 21V8" />
    </Svg>
  );
}
export function IconPlus(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </Svg>
  );
}
export function IconHeart(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M12 20.5C7 16.8 3.5 13.6 3.5 9.7 3.5 7 5.6 5 8.2 5c1.5 0 2.9.7 3.8 1.9C12.9 5.7 14.3 5 15.8 5 18.4 5 20.5 7 20.5 9.7c0 3.9-3.5 7.1-8.5 10.8z" />
    </Svg>
  );
}
export function IconComment(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.4 8.9 8.9 0 0 1-4.1-1L3 20l1.3-4.6A8 8 0 0 1 3 11.5 8.4 8.4 0 0 1 11.5 3.1 8.4 8.4 0 0 1 21 11.5z" />
    </Svg>
  );
}
export function IconHome(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </Svg>
  );
}
export function IconSend(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </Svg>
  );
}
export function IconMore(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </Svg>
  );
}
export function IconBookmark(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z" />
    </Svg>
  );
}
export function IconUser(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M3 21c0-4 4-8 9-8s9 4 9 8" />
    </Svg>
  );
}

export const ICONS = {
  sparkles: IconSparkles,
  arrow: IconArrow,
  search: IconSearch,
  chart: IconChart,
  doc: IconDoc,
  feed: IconFeed,
  skull: IconSkull,
  radio: IconRadio,
  scale: IconScale,
  plane: IconPlane,
  film: IconFilm,
  share: IconShare,
  briefcase: IconBriefcase,
  calendar: IconCalendar,
  rocket: IconRocket,
  database: IconDatabase,
  mail: IconMail,
  users: IconUsers,
  hammer: IconHammer,
  megaphone: IconMegaphone,
  target: IconTarget,
  flask: IconFlask,
  bolt: IconBolt,
  building: IconBuilding,
  plus: IconPlus,
  heart: IconHeart,
  comment: IconComment,
  home: IconHome,
  send: IconSend,
  more: IconMore,
  bookmark: IconBookmark,
  user: IconUser,
} as const;

export type IconName = keyof typeof ICONS;

export function IconGlyph({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name as IconName] ?? IconSparkles;
  return <Cmp className={className} />;
}
