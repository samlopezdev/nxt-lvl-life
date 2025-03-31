export default function About() {
  return (
    <section
      id="start"
      className="flex-none gap-8 bg-[url('greenlandscape-full.webp')] bg-cover bg-center bg-no-repeat pb-32 pt-20 text-white md:px-10 xl:flex xl:items-center xl:justify-center xl:bg-none xl:text-dark-green"
    >
      <div className="rounded-xl border-2 border-white/40 p-10 shadow-xl backdrop-blur-md xl:w-1/2 xl:border-none xl:text-dark-green xl:shadow-none">
        <h2 className="mb-8 text-balance text-center text-4xl font-semibold uppercase [transition:.3s_ease] lg:text-5xl">
          Where Do You See Yourself In 5 Years?
        </h2>
        <p className="mb-6 text-justify text-sm md:text-base">
          Many people go through life without a clear sense of purpose. To
          create the life you want, it&apos;s important to reflect on what
          brings you happiness and fulfillment. This involves reflecting on past
          experiences, identifying your passions, and recognizing the
          activities, relationships, and goals that make you feel the most alive.
        </p>
        <p className="mb-6 text-justify text-sm md:text-base">
          <span className="font-semibold">NxtLvlLife</span> was
          designed to help you create a clear picture of the life you want by
          crafting customized vision boards that target various aspects of your
          life. This can provide you with a much clearer understanding of your
          goals and the steps needed to achieve them! By letting your heart and
          desires govern the creative process without holding back, you
          inheritly let this vision influence your day-to-day desicions.
        </p>
      </div>
      <div className="w-1/3">
        <img
          src="greenlandscape-square.webp"
          loading="lazy"
          className="hidden h-auto rounded-lg shadow-2xl xl:block"
        />
      </div>
    </section>
  );
}
