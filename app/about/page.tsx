import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="ml-64 min-h-screen p-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-bold">About Me</h1>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>

            <p>
              Currently, I'm a Senior Front-End Engineer specializing in accessibility. I contribute to the creation and
              maintenance of UI components that power modern web applications, ensuring our platform meets web
              accessibility standards and best practices to deliver an inclusive user experience.
            </p>

            <p>
              In the past, I've had the opportunity to develop software across a variety of settings — from advertising
              agencies and large corporations to start-ups and small digital product studios. Additionally, I also
              released a comprehensive video course a few years ago, guiding learners through building a web app.
            </p>
          </div>

          <section className="mt-16">
            <h2 className="mb-6 text-3xl font-bold">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">Senior Frontend Engineer</h3>
                  <span className="text-sm text-muted-foreground">2024 — Present</span>
                </div>
                <p className="mb-2 text-accent">Company Name</p>
                <p className="text-muted-foreground">
                  Build and maintain critical components used to construct frontend applications across the whole
                  product. Work closely with cross-functional teams to implement and advocate for best practices in web
                  accessibility.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    JavaScript
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    TypeScript
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">React</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Next.js</span>
                </div>
              </div>

              <div className="border-l-2 border-border pl-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <span className="text-sm text-muted-foreground">2022 — 2024</span>
                </div>
                <p className="mb-2 text-muted-foreground">Previous Company</p>
                <p className="text-muted-foreground">
                  Developed and maintained web applications for various clients, focusing on responsive design and
                  optimal user experience.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="mb-6 text-3xl font-bold">Skills</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">Tools</h3>
                <p className="text-sm text-muted-foreground">Git, GitHub, VS Code, Figma, Vercel, npm, Webpack</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">Backend</h3>
                <p className="text-sm text-muted-foreground">Node.js, Express, REST APIs, GraphQL, PostgreSQL</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">Other</h3>
                <p className="text-sm text-muted-foreground">
                  Web Accessibility, Responsive Design, Performance Optimization
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
