import InfoItem from "./InfoItem"

export default function InfoSection() {
  return (
    <section className="px-12 pt-28 text-dark-green md:px-0 lg:px-16">
      <h2 className="mb-20 text-balance text-center text-4xl font-semibold uppercase [transition:.3s_ease] lg:text-5xl xl:text-dark-green">
        Design a Fullfilling Life
      </h2>
      <div className="flex flex-col flex-wrap items-center justify-evenly md:flex-row">
        <InfoItem
          icon={"bx bxs-category-alt"}
          title={`Categorize Your Goals`}
          paragraph={
            "Create a custom list of categories that resonate with you! Set specific goals within each category and include motivating images to inspire your vision."
          }
        />

        <InfoItem
          icon={"bx bxs-palette"}
          title={`Personalization is Key`}
          paragraph={
            "Build detailed panels to bring your dream to life! Whether it's snapshots of the city you dream of living in, the type of aesthetic you want to embody, or even the delicious foods you wish to try."
          }
          className="col-span-2"
        />

        <InfoItem
          icon={"bx bxs-badge-check"}
          title={`Consistency Beats Perfection`}
          paragraph={
            "Establish habits that align with your objectives. Simply adding images of the gym to your vision board won't won't be effective unless you actively commit to visiting the gym."
          }
        />
      </div>
    </section>
  );
}
