// eslint-disable-next-line react/prop-types
export default function SummaryItem({ title, paragraph }) {
    return (
      <details
        name="exclusive"
        className="mb-5 block max-h-14 list-inside rounded-[0.3rem] border-[1px] border-solid border-[#d0fbef] bg-gradient-to-tl from-secondary to-primary px-4 py-3 drop-shadow-xl transition-[max-height] duration-500 ease-in-out marker:content-[''] open:max-h-full"
      >
        <summary className="flex cursor-pointer select-none items-center gap-3 text-lg font-semibold uppercase md:text-2xl">
          <i className="bx bxs-right-arrow rotate-90 [transition:.5s_ease]"></i>
          { title }
        </summary>
        <p className="md:text-md mt-3 text-balance text-sm lg:text-lg">
          { paragraph }
        </p>
      </details>
    );
}