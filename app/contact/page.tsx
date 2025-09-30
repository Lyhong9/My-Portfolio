import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen p-4 pt-20 md:ml-64 md:p-12 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold md:mb-8 md:text-5xl">Get In Touch</h1>

          <p className="mb-8 text-base text-muted-foreground md:mb-12 md:text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out!
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-xl font-bold md:text-2xl">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-1 text-sm font-medium text-muted-foreground">Email</h3>
                    <a href="mailto:hello@example.com" className="text-lg text-accent hover:underline">
                      hello@example.com
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-medium text-muted-foreground">Social Media</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold md:text-2xl">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-md border border-border bg-background px-4 py-2 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
