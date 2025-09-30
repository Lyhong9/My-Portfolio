import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 lg:ml-64 lg:pt-0">
        <div className="mx-auto max-w-4xl px-6 py-12 lg:p-12">
          <div className="flex min-h-[80vh] flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-accent">Your Name</span>
            </h1>
            <h2 className="mb-8 text-2xl font-medium text-muted-foreground sm:text-3xl">Front End Developer</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build accessible, pixel-perfect digital experiences for the web. Passionate about crafting beautiful
              interfaces that blend thoughtful design with robust engineering.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Get in touch
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Learn more
              </a>
            </div>
          </div>

          <section className="mt-24">
            <h3 className="mb-8 text-2xl font-bold">Featured Work</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent">
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src="/modern-web-dashboard-interface.jpg"
                    alt="Project 1 - Web Dashboard"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-card-foreground">E-Commerce Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive admin dashboard for managing products, orders, and analytics with real-time updates.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">React</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Next.js</span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent">
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src="/mobile-app-design-interface.jpg"
                    alt="Project 2 - Mobile App"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-card-foreground">Fitness Tracking App</h4>
                  <p className="text-sm text-muted-foreground">
                    Mobile-first fitness application with workout tracking, progress charts, and social features.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      React Native
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Firebase
                    </span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent">
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src="/portfolio-website-design.png"
                    alt="Project 3 - Portfolio Website"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-card-foreground">Creative Portfolio</h4>
                  <p className="text-sm text-muted-foreground">
                    A stunning portfolio website for a photographer with smooth animations and image galleries.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Next.js</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Tailwind
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Framer</span>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-accent">
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <Image
                    src="/ai-chatbot-interface.png"
                    alt="Project 4 - AI Chatbot"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-card-foreground">AI Customer Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent chatbot system with natural language processing for automated customer support.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Python</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">OpenAI</span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
