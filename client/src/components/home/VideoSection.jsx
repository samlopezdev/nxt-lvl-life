export default function Video() {
    return (
      <section className="bg-gradient-to-br from-primary from-40% to-secondary px-5 py-28">
        <h2 className="mb-16 text-balance text-center text-4xl font-semibold uppercase text-light-green [transition:.3s_ease] lg:text-5xl">
          Dreams Without <span className="text-accent-hover">Goals</span>, Are
          Just Dreams
        </h2>
        <iframe
          src="https://www.youtube.com/embed/0vGqf31zikQ?si=yLpXVdqTyMUm7UqZ"
          title="A YouTube video titled 'Don't Be Afraid to Fail Big, To Dream Big' where Denzel Washington gives speach about the importance of working hard to achieve goals everyday."
          loading="lazy"
          referrerPolicy="no-referrer"
          allowFullScreen
          className="m-auto aspect-video w-full rounded-xl shadow-lg md:w-3/4 xl:w-1/2"
        ></iframe>
      </section>
    );
}