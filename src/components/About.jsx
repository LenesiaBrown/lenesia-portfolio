function About() {
  return (
    <section id="about" className="pt-24 pb-24 px-6 md:px-20">
      {/* Section heading */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          About Me
        </h2>

        {/* Purple underline */}
        <div className="mt-2 h-[3px] w-24 rounded-full bg-gradient-to-r from-purple-300 to-purple-500" />
      </div>

      {/* Card wrapper with soft purple glow */}
      <div className="relative max-w-5xl mx-auto mt-10">
        {/* Purple glow behind the card */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-[32px]
                     bg-[radial-gradient(circle_at_center,_rgba(196,181,253,0.8),_transparent_70%)]
                     blur-3xl"
          aria-hidden="true"
        />

        {/* Actual card */}
        <div className="rounded-[32px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] px-8 py-10 md:px-10 md:py-12 text-[15px] leading-relaxed text-gray-900">
          <p className="mb-4">
            I&apos;m a UI/UX designer and front-end developer passionate about creating clean,
            accessible, and user-friendly web experiences. My work lives at the intersection of
            design and code, where I bring ideas to life through thoughtful interfaces and
            modern development.
          </p>

          <p className="mb-4">
            With experience in HTML, CSS, JavaScript, React, and design tools like Figma, I focus
            on building responsive interfaces that prioritize usability and accessibility. I believe
            great design should feel intuitive while still looking polished and intentional.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
