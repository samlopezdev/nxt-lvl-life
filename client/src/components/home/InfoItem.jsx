// eslint-disable-next-line react/prop-types
export default function InfoItem({ title, paragraph, icon }) {
  return (
    <div className="flex flex-col items-center mb-16 md:w-1/4">
      <i className={`${icon} text-center text-[8rem] text-accent mb-6`}></i>
      <div className="">
        <h3 className="mb-5 text-balance text-center text-xl font-semibold uppercase">
          {title}
        </h3>
        <p className="text-center text-base">{paragraph}</p>
      </div>
    </div>
  );
}