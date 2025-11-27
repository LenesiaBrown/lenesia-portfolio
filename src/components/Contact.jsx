function Contact() {
  return (
    <section id="contact" className="pt-24 pb-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Let&apos;s Build Something Together
        </h2>

        <div className="mt-2 mx-auto h-[3px] w-44 rounded-full bg-gradient-to-r from-purple-300 to-purple-500" />

        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          I&apos;m always open to new projects, collaborations, or opportunities.
          Feel free to reach out using the form below or by email.
        </p>
      </div>

      {/* Contact card */}
      <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-[20px] border border-black/15 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
        {/* Email Row */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="#d3aafd" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path>
            </svg>
          </span>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="text-lg font-semibold text-black">
              <a
                href="mailto:lenesia.brown@example.com"
                className="hover:underline"
              >
                lenesiabrownbusiness@gmail.com
              </a>
            </p>
          </div>
        </div>

        <hr className="my-6 border-black/15" />

        {/* Contact form */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-800 mb-4">
            Or send me a message
          </p>

          
          <form
            action="https://formspree.io/f/mjkqgwlw"
            method="POST"
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-300"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full rounded-lg border border-black/20 px-3 py-2 text-sm outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-300 resize-none"
                placeholder="Tell me a bit about your project or idea..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full px-8 py-2.5 text-sm font-medium
                         bg-black text-white hover:bg-neutral-900 transition shadow-[0_12px_30px_rgba(15,23,42,0.35)]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-sm font-medium text-gray-800 mb-3">
            Connect with me
          </p>

          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/LenesiaBrown"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/25 hover:bg-neutral-100 transition text-sm"
              aria-label="GitHub"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"></path>
                </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lenesia-brown-28730920b/"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-black/25 hover:bg-neutral-100 transition text-xs font-semibold"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"></path>
            </svg>
            </a>
            
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-black/70 mt-16">
        © {new Date().getFullYear()} Lenesia Brown. All rights reserved.
      </p>
    </section>
  );
}

export default Contact;
