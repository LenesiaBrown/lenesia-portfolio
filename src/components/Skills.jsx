function Skills() {
  return (
    <section id="skills" className="pt-24 pb-28 px-6 md:px-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Skills & Expertise
        </h2>

        {/* Purple underline */}
        <div className="mt-2 h-[3px] w-36 rounded-full bg-gradient-to-r from-purple-300 to-purple-500" />
        
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          A diverse toolkit for building modern web applications with exceptional user experiences
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12 justify-items-center">
        
        {/* Card */}
        <div className="relative p-8 rounded-[24px] border border-black/10 bg-white backdrop-blur-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(196,181,253,0.6),_transparent_70%)] blur-2xl" />
          
          <h3 className="text-xl font-semibold mb-5">Frontend Development</h3>
          <div className="flex flex-wrap gap-3">
            {["React","Vue.js","JavaScript","HTML5","CSS3","Tailwind CSS"].map(skill => (
              <span key={skill} className="px-4 py-1.5 text-sm rounded-full border border-black/20 bg-white shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="relative p-8 rounded-[24px] border border-black/10 bg-white backdrop-blur-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(196,181,253,0.6),_transparent_70%)] blur-2xl" />
          
          <h3 className="text-xl font-semibold mb-5">UI/UX Design</h3>
          <div className="flex flex-wrap gap-3">
            {["Figma","Wireframing","Prototyping","Design Systems"].map(skill => (
              <span key={skill} className="px-4 py-1.5 text-sm rounded-full border border-black/20 bg-white shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="relative p-8 rounded-[24px] border border-black/10 bg-white backdrop-blur-sm overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,_rgba(196,181,253,0.6),_transparent_70%)] blur-2xl" />
          
          <h3 className="text-xl font-semibold mb-5">Tools & Workflow</h3>
          <div className="flex flex-wrap gap-3">
            {["Git","GitHub","VS Code","Vite"].map(skill => (
              <span key={skill} className="px-4 py-1.5 text-sm rounded-full border border-black/20 bg-white shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
