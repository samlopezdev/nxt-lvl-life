import SummaryItem from "./SummaryItem";

export default function SummarySection() {
  return (
    <section className="bg-[url('pastelcity-full.webp')] bg-cover bg-center bg-no-repeat px-5 py-20 text-light-green md:px-10 xl:bg-none">
      <h2 className="mb-16 text-balance text-center text-4xl font-semibold uppercase [transition:.3s_ease] lg:text-5xl xl:text-dark-green">
        More About Nxt Level Life
      </h2>

      <div className="flex-none gap-8 md:px-16 xl:flex">
        <div className="w-2/5">
          <img
            src="pastelcity-square.webp"
            loading="lazy"
            className="hidden h-auto rounded-lg shadow-2xl xl:block"
          />
        </div>

        <div className="m-auto w-full xl:w-3/5">
          <SummaryItem
            title="The Importance of NxtLvlLife"
            paragraph="NxtLvlLife is a tool designed to help you discover a greater sense of purpose and direction. Whether you're just starting your journey or looking for clarity after retirement, NxtLvlLife provides a place for you to envision your future in vivid detail. It encourages you to define your dreams and take realistic steps toward achieving them. With this approach, you can create a future that aligns with your true desires and helps you move closer to your ideal self."
          />

          <SummaryItem
            title="Design Custom Panels"
            paragraph="After making an account, start by creating a few panels! These panels should represent different areas of your life that matter most to you— whether it's your career, relationships, health, or personal growth. Use images, quotes, videos, or any other media that help bring these dreams to life. Be unapologetically creative and let your desires guide you. The purpose of this is to visually express what your ideal future looks like in these areas by creating a virtual vision board that captures your unfiltered dreams."
          />

          <SummaryItem
            title="The Power of Visualization"
            paragraph="Creating detailed panels goes beyond just being a fun activity— it’s a powerful tool for manifesting your goals. By immersing yourself in the images and ideas on your panels daily, you're engaging in the act of visualizing your success. This consistent practice trains your mind to naturally gravitate toward actions that move you closer to your goals. It helps to reinforce positive neural pathways in your brain, promoting new behaviors and habits that align with your aspirations. "
          />

          <SummaryItem
            title="Understand Your 'Why'"
            paragraph="As you build out your panels, take a moment to reflect on the deeper motivations behind your desires. Why do you want to achieve this vision for your life? This kind of self-awareness is critical. Understanding the reasons behind your goals will provide clarity and purpose, which will help you in staying focused and committed to pursuing your objectives even when challenges arise."
          />

          <SummaryItem
            title="Set Actionable Goals"
            paragraph="For each area of your life represented by your panels, set clear, actionable goals that align with your aspirations. These goals should be specific, measurable, and achievable, creating a roadmap to guide your progress. Incorporate these goals into your daily routines so that you’re consistently working toward your ideal future. The key is to make your goals tangible and manageable, breaking down large aspirations into smaller, achievable steps."
          />

          <SummaryItem
            title="Overcoming Fear"
            paragraph="The fear of change, failure, or judgment is natural, but it should never stop you from pursuing your dreams. Starting something new sometimes feels intimidating, but remember that growth often comes from discomfort. The initial fear you feel in the beginning will eventually fade, but the regret of not pursuing your dreams when you have the chance will stay with you forever. In life, you get to choose which kind of pain to face- the pain of discipline or the pain of regret. Stay focused on your goals, trust your ability to succeed, and keep moving forward despite the fear."
          />
        </div>
      </div>
    </section>
  );
}
