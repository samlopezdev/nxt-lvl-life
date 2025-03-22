import InfoItem from "./InfoItem"

export default function InfoSection() {
  return (
    <section className="px-12 pt-28 text-dark-green md:px-0 lg:px-16">
      <h2 className="mb-20 text-balance text-center text-4xl font-semibold uppercase [transition:.3s_ease] lg:text-5xl xl:text-dark-green">
        Design a Fullfilling Life
      </h2>
      <div className="flex flex-col flex-wrap items-center justify-evenly  md:flex-row">
        <InfoItem
          icon={"bx bxs-category-alt"}
          title={`Categorize Your Goals`}
          paragraph={
            "Create a custom list of categories that resonate with you and add detailed goals and images for each one. This can include topics like health, career, personal growth, lifestyle, etc! "
          }
        />

        <InfoItem
          icon={"bx bxs-palette"}
          title={`Personalization is Key`}
          paragraph={
            "Find images that reflect YOUR aspirations! Like pictures of the city you dream of living in, the foods you want to enjoy, and the aesthetic you want to embody. It's important to visualize yourself in that desired reality. "
          }
          className="col-span-2"
        />

        <InfoItem
          icon={"bx bxs-badge-check"}
          title={`Consistency Beats Perfection`}
          paragraph={
            "To turn your ideal vision into reality, you must establish systems that support your goals. Simply adding images of the gym to your vision board won't won't be effective unless you actively commit to visiting the gym."
          }
        />
      </div>
    </section>
  );
}
