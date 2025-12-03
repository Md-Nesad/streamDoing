export default function TitleAndSubTitle({ title, subtitle }) {
  return (
    <div aria-label="rate transaction header" className="mb-5">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-md text-[#636363]">{subtitle}</p>
    </div>
  );
}
