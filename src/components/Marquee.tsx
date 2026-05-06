type Props = { items: string[]; reverse?: boolean; dark?: boolean };
export function Marquee({ items, reverse, dark }: Props) {
  const seq = [...items, ...items];
  return (
    <div className={`marquee-host relative overflow-hidden border-y ${dark ? "border-white/10 bg-ink text-paper" : "border-ink/10 bg-paper text-ink"}`}>
      <div className={`flex w-max gap-12 whitespace-nowrap py-5 ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}>
        {seq.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl tracking-[0.2em]">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
