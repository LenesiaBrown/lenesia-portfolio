import mbj from "../assets/mbj-revamp.png";
import donation from "../assets/food-donation.png";
import portfolio from "../assets/portfolio.png";


function Projects() {
  return (
    <section id="projects" className="pt-24 pb-28 px-6 md:px-20">
      {/* Heading + subtitle */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Featured Projects
        </h2>

        <div className="mt-2 h-[3px] w-40 rounded-full bg-gradient-to-r from-purple-300 to-purple-500" />

        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          A selection of my recent work showcasing various technologies and design approaches.
        </p>
      </div>

      {/* Projects grid */}
      <div className="max-w-6xl mx-auto mt-12 grid gap-10 md:grid-cols-3">

        {/* Project Card */}
        {[
          {
            image: mbj,
            title: "Sangsters International Airport's Website Revamp",
            description:
              "A complete revamp that gives visitors a contemporary, user-focused experience. React and Tailwind CSS were used to revamp the UI with responsive layouts and reusable components, improving accessibility, visual clarity, and navigation flow.",
            tags: ["React", "Vite", "Tailwind CSS", "Figma"],
            demo: "https://sangster-redesign.netlify.app/",
            code: "https://github.com/LenesiaBrown/Sangster-Redesign-New",
            prototype: "https://www.figma.com/proto/p71h6ZwnH8ZbrWvgljI3NZ/Revamp-of-Sangster-International-Airport?node-id=1-2&p=f&t=w1aNg78P00Bf1ywl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
            design: "https://www.figma.com/design/p71h6ZwnH8ZbrWvgljI3NZ/Revamp-of-Sangster-International-Airport?node-id=0-1&t=B3Yn5ZMDswQXVzTZ-1",
            old:"https://www.mbjairport.com/"            
          },
          {
            image: donation,
            title: "Food Donation Wep App",
            description:
              "Connects food providers, such as farmers, restaurants, and grocery stores, with organisations and volunteers responsible for redistributing food, including food banks, shelters, and food transportation volunteers.",
            tags: ["Figma"],
            prototype: "https://www.figma.com/proto/LT2dohPcemzQUgYHPmfnN2/FoodShare-Connect?node-id=11-2&p=f&t=GQvcuWTVbAiOK5E3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A2",
            design: "https://www.figma.com/design/LT2dohPcemzQUgYHPmfnN2/FoodShare-Connect?node-id=0-1&t=WL1MBwnaJvHL92Xp-1"
          },
          {
            image: portfolio,
            title: "My Personal Portfolio Webpage",
            description:
                "A modern portfolio showcasing my design expertise and frontend development skills. Built with React and Tailwind CSS.",
            tags: ["React", "Vite", "Tailwind CSS"],
            demo: "", 
            code: "https://github.com/LenesiaBrown/lenesia-portfolio",
            },

       
        ].map((project, index) => (
          <div
            key={index}
            className="group relative rounded-[28px] border border-black/10 bg-white 
            shadow-[0_24px_80px_rgba(15,23,42,0.10)] overflow-hidden
            transition-all duration-500
            hover:shadow-[0_0_90px_rgba(196,181,253,0.55)]"
          >
            {/* Purple glow overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-0 
            group-hover:opacity-100 transition-opacity duration-500
            bg-[radial-gradient(circle_at_center,_rgba(196,181,253,0.55),_transparent_70%)] blur-3xl" />

            <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

            {/* Card content */}
            <div className="relative p-6 md:p-7 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-700 mb-5">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-black/20 bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>


              <div className="mt-auto flex flex-wrap gap-3 text-sm">                
                <div className="flex gap-3 w-full md:w-auto">
                {/* Live Demo */}
                {project.demo && (
                    <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/70 px-4 py-2 bg-white hover:bg-neutral-100 transition"
                    >
                    <span>↗</span>
                    <span>Live Demo</span>
                    </a>
                )}

                {/* Code */}
                {project.code && (
                    <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/70 px-4 py-2 bg-white hover:bg-neutral-100 transition"
                    >
                    <span>{"</>"}</span>
                    <span>Code</span>
                    </a>
                )}
                </div>    

                {/* Prototype */}
                {project.prototype && (
                    <a
                    href={project.prototype}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/70 px-4 py-2 bg-white hover:bg-neutral-100 transition"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10 15.577L15.577 12L10 8.423zM4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zm0-1h14.769q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6H4.615q-.23 0-.423.192T4 6.616v10.769q0 .23.192.423t.423.192M4 18V6z"></path>
                    </svg>
                     <span>Prototype</span>
                    </a>
                )}

                {/* Design File */}
                {project.design && (
                    <a
                    href={project.design}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/70 px-4 py-2 bg-white hover:bg-neutral-100 transition"
                    >
                   <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 36 36">
                        <path fill="currentColor" d="M9 17.41V27h9.59l-2-2H11v-5.59z" className="clr-i-outline clr-i-outline-path-1"></path>
                        <path fill="currentColor" d="M34.87 32.29L32 29.38V32H4v-4.15h2v-1.6H4V19.6h2V18H4v-6.4h2V10H4V4.41l15.94 15.85v-2.82L3.71 1.29A1 1 0 0 0 2 2v31a1 1 0 0 0 1 1h31.16a1 1 0 0 0 .71-1.71" className="clr-i-outline clr-i-outline-path-2"></path>
                        <path fill="currentColor" d="M24 30h4a2 2 0 0 0 2-2V8.7l-2.3-4.23a2 2 0 0 0-1.76-1a2 2 0 0 0-1.76 1.08L22 8.72V28a2 2 0 0 0 2 2m0-20.8l1.94-3.77L28 9.21V24h-4Zm0 16.43h4v2.44h-4Z" className="clr-i-outline clr-i-outline-path-3"></path>
                        <path fill="none" d="M0 0h36v36H0z"></path>
                    </svg>
                     <span>Design File</span>
                    </a>
                )}

                {/* Old Design */}
                {project.old && (
                    <div className="w-full">
                    <a
                        href={project.old}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-black/70 px-4 py-2 bg-white hover:bg-neutral-100 transition"
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.85} d="M12 7h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm0 0L8 3m4 4l4-4"></path>
                            </svg>
                        </span>
                        <span>Old Design</span>
                    </a>
                    </div>
                )}

                </div>


            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;

