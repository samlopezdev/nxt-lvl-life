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
            "Create a custom list of categories that resonate with you! Consider various areas of your life, like your profession, lifestyle choices, and financial goals. Set specific goals within each category and include motivating images to inspire your vision."
          }
        />

        <InfoItem
          icon={"bx bxs-palette"}
          title={`Personalization is Key`}
          paragraph={
            "Make vision boards to bring your dream to life! Whether it's snapshots of the city you dream of living in, the delicious foods you wish to try, or even the aesthetic you want to embody. Envisioning yourself in that desired reality is a crucial step toward achieving it."
          }
          className="col-span-2"
        />

        <InfoItem
          icon={"bx bxs-badge-check"}
          title={`Consistency Beats Perfection`}
          paragraph={
            "To transform your vision boards into reality, you must establish systems that align with your objectives. Simply adding images of the gym to your vision board won't won't be effective unless you actively commit to visiting the gym."
          }
        />
      </div>
    </section>
  );
}
