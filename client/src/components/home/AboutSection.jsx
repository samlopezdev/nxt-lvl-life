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
          Many people go through life without a clear sense of direction. To
          create a fulfilling life, it&apos;s important to contemplate on what genuinely
          brings you happiness and a sense of purpose. This involves reflecting
          on past experiences, identifying your passions, and recognizing the
          activities, relationships, and goals that make you feel the most
          alive.
        </p>
        <p className="mb-6 text-justify text-sm md:text-base">
          <span className="font-semibold">Nxt Lvl Life</span> was designed to help
          you create a clear picture of the life you want by crafting customized
          Panels that target various aspects of your life. This provides you
          with a much clearer understanding of your goals and the steps needed
          to achieve them! When you allow your heart and desires to govern the
          creative process without holding back, it becomes easier for that
          vision to inherently influence your day-to-day decisions.
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
