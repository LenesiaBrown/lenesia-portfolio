function Hero() {
  return (
    <section className="relative pt-60 pb-24">     

      {/* Content container */}
      <div className="relative px-8 md:px-20">
        {/* Main heading - wide, bold, left aligned */}
        <h1 className="text-[42px] sm:text-[56px] md:text-[80px] leading-relaxed font-extrabold tracking-tight text-black">
          Hi, I&apos;m{" "}
          <span className="relative inline-block">
            {/* Blurred purple text underneath = glow in the shape of each letter */}
            <span
                className="absolute inset-0 text-purple-400 blur-lg opacity-90 shadow-[0_0_40px_rgba(196,181,253,0.55)]"
                aria-hidden="true"
            >
                Lenesia Brown
            </span>

            {/* Sharp main text on top */}
            <span className="relative z-10 text-black">
                Lenesia Brown
            </span>
        </span>
        </h1>

        {/* Role line - big and wide */}
        <p className="mt-6 text-2xl sm:text-3xl md:text-[60px] font-bold text-black">
          UI/UX Designer &amp; Front-End Developer
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-gray-700 text-base sm:text-2xl">
          Building clean, user-friendly web experiences that blend thoughtful design with modern development.
        </p>

        {/* Buttons */}
        <div className="mt-14 flex flex-wrap gap-6">
          {/* Primary button with purple outer glow on hover */}
          <button className="group relative inline-flex">
            {/* Outer glow halo (only on hover) */}
            <span
              className="absolute inset-[-14px] rounded-full bg-purple-500/0 blur-3xl
                         group-hover:bg-purple-500/45 group-hover:opacity-100
                         opacity-0 transition-all duration-300"
              aria-hidden="true"
            />
            {/* Actual button pill */}
            <a href="#projects">
                <span
                className="relative inline-flex items-center justify-center rounded-full
                            bg-white px-10 py-3 text-sm font-medium text-gray-900
                            shadow-[0_0_40px_rgba(196,181,253,0.55)]
                            border border-transparent
                            group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-purple-400
                            group-hover:text-white group-hover:border-purple-400
                            transition-all duration-300"
                >
                View My Work
                </span>
            </a>
          </button>

          {/* Secondary button - outlined pill */}
          <button
            className="inline-flex items-center justify-center rounded-full px-10 py-3 text-sm font-medium
                       text-gray-900 border border-black/50 bg-white
                       shadow-[0_18px_40px_rgba(15,23,42,0.12)]
                       hover:bg-neutral-100 transition"
          >
            <a href="#contact">
                Get In Touch
            </a>
          </button>
        </div>

        {/* Bouncing arrow under the buttons */}
        <div className="mt-16 text-5xl text-black animate-bounce">
          ↓
        </div>
      </div>
    </section>
  );
}

export default Hero;

