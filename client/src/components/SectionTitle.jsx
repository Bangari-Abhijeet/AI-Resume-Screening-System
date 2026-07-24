function SectionTitle({ title, subtitle, as = "h2" }) {
  const Tag = as;
  return (
    <div className="mb-10 text-center">
      <Tag className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</Tag>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
