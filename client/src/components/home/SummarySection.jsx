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
            paragraph="NxtLvlLife is a resource aimed at helping individuals discover a deeper sense of purpose and direction. Whether you're just beginning your journey in life or seeking clarity in your later years, NxtLvlLife offers a space for anyone to envision their future in vivid detail. It encourages you to define your dreams and take realistic steps toward achieving them. With this approach, you can create a future that aligns with your true desires and helps you move closer to your ideal self."
          />

          <SummaryItem
            title="Design Custom Panels"
            paragraph="After making an account, start by creating a few panels! These panels should represent different areas of your life that matter most to you— whether it's your profession, lifestyle choices, or financial goals. Use images that inspire you to bring these dreams to life! Be unapologetically creative and let your desires guide you. The goal here is to vividly illustrate your ideal future by creating a virtual vision board that captures your unfiltered dreams."
          />

          <SummaryItem
            title="The Power of Visualization"
            paragraph="Creating detailed panels goes beyond just being a fun activity— it’s a powerful tool for manifesting your goals. By immersing yourself in the concepts and ideas on your panels, you actively engage in the act of visualizing your success! This practice reinforces positive neural pathways in your brain, promoting new behaviors and habits that align with your ambitions. By making this a regular routine, you train your mind to instinctively gravitate toward actions that bring you closer to your goals."
          />

          <SummaryItem
            title="Set Actionable Goals"
            paragraph="Establish clear and actionable goals for each aspect of your life that align with your aspirations. These goals ought to be specific, measurable, and attainable, acting as a roadmap to guide your progress. Incorporate these goals into your daily routines so you’re consistently working toward your envisioned future. The key is to make your goals concrete and manageable, by breaking down larger ambitions into smaller, achievable steps."
          />

          <SummaryItem
            title="Understand Your 'Why'"
            paragraph="As you create your panels, take a moment to consider the underlying motivations driving your desires. What inspires you to chase this particular vision for your life? What compels you to pursue these goals? This self-awareness is crucial for defining your intentions and instilling a sense of purpose. This clarity will help you remain focused and committed to your objectives, even in the face of obstacles."
          />

          <SummaryItem
            title="Overcoming Fear"
            paragraph="Many people struggle with the fear of failure, change, or criticism, but these feelings shouldn't hold you back from pursuing your dreams. It's important to recognize that true growth often comes from stepping outside your comfort zone. While your initial anxiety of starting something new may feel overwhelming, the lasting regret of not chasing your goals while you can, will linger much longer. Ultimately, you have the choice to endure the discomfort of discipline or the pain of regret. Stay focused on your objectives, trust your ability to succeed, and keep moving forward despite the fear."
          />
        </div>
      </div>
    </section>
  );
}
