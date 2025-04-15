import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TimelineItem } from "@/components/timeline-item";
import { SkillCategory } from "@/components/skill-category";
import { AnimatedText } from "@/components/animated-text";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
          <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Erkan Ercan
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#timeline"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Timeline
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="default"
            size="sm"
            asChild
            className="hidden md:inline-flex gap-2 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white border-0"
          >
            <Link href="/Erkan_Ercan_CV.pdf" target="_blank">
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="md:hidden border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white"
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24 flex flex-col items-center text-center relative">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-purple-900/20 via-black to-black rounded-3xl opacity-70"></div>

          {/* Animated circles */}
          <div className="absolute -z-10 h-full w-full overflow-hidden">
            <div className="absolute -top-40 -right-20 h-80 w-80 rounded-full bg-purple-900/20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-pink-900/20 blur-3xl"></div>
          </div>

          <Avatar className="h-32 w-32 mb-8 ring-2 ring-purple-500/50 ring-offset-4 ring-offset-black">
            <AvatarImage src="/pp.png" alt="Erkan Ercan" />
            <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-700 text-white text-xl">
              EE
            </AvatarFallback>
          </Avatar>

          <AnimatedText className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Erkan Ercan
          </AnimatedText>

          <h2 className="text-xl md:text-2xl font-medium text-zinc-400 mb-6">
            Senior Software Engineer
          </h2>

          <div className="flex items-center justify-center gap-2 mb-8 text-zinc-400">
            <MapPin className="h-4 w-4" />
            <span>Turkey</span>
          </div>

          <p className="max-w-[42rem] text-zinc-400 mb-10 text-lg">
            Passionate software engineer with 6+ years of experience building
            scalable web applications and helping development teams.
          </p>

          <div className="flex gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
              <Link href="#timeline">View My Journey</Link>
            </Button>
            <Button
              variant="default"
              asChild
              className="gap-2 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white border-0"
            >
              <Link href="/Erkan_Ercan_CV.pdf" target="_blank">
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 border-t border-zinc-800">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg">
                I&apos;m a senior software engineer with expertise in building
                modern web applications. With over 6 years of experience,
                I&apos;ve worked across the full stack, from designing
                responsive UIs to implementing scalable backend services.
              </p>
              <p>
                My approach combines technical excellence with a strong focus on
                user experience. I enjoy solving complex problems and
                continuously learning new technologies to stay at the forefront
                of web development.
              </p>
              <p>
                When I&apos;m not coding, you can find me chit-chatting with my
                dog Freya, reading tech blogs, or contributing to open-source
                projects.
              </p>
            </div>
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden relative">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <CardContent className="p-6 pt-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2 text-white">Email</h3>
                    <p className="text-sm text-zinc-400">
                      erkanercandev@gmail.com
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-white">Location</h3>
                    <p className="text-sm text-zinc-400">Turkey</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-white">Connect</h3>
                    <div className="flex gap-3 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
                      >
                        <Link
                          href="https://github.com/erkanercan"
                          target="_blank"
                        >
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
                      >
                        <Link
                          href="https://www.linkedin.com/in/erkan-ercan/"
                          target="_blank"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
                      >
                        <Link href="mailto:erkanercandev@gmail.com">
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          id="timeline"
          className="py-16 md:py-24 border-t border-zinc-800 relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-purple-900/5 via-black to-black"></div>

          <h2 className="text-3xl font-bold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            My Journey
          </h2>

          <div className="relative border-l border-purple-700/50 ml-4 md:ml-6 pl-8 md:pl-12 space-y-16">
            {/* Work Experience */}
            <TimelineItem
              date="Aug 2023 - Present"
              title="Senior Software Engineer"
              subtitle="DefineX"
              type="work"
              content="Working for Garanti BBVA, a leading bank in Turkey, on several projects to develop internal applications. Focused on building scalable and maintainable frontend applications using React and TypeScript."
              tags={[
                "React",
                "TypeScript",
                "Lit Element",
                "Vite",
                "Custom Web Components",
                "RESTful APIs",
              ]}
            />

            <TimelineItem
              date="May 2022 - Jul 2023"
              title="Software Engineer"
              subtitle="TokenSuite"
              type="work"
              content="Worked for many projects, including a decentralized finance (DeFi) platform and a non-fungible token (NFT) marketplace. Focused on building scalable backend services and integrating with frontend applications."
              tags={[
                "TypeScript",
                "Node.js",
                "Nest.js",
                "GraphQL",
                "Redis",
                "React",
                "Next.js",
                "Web3.js",
                "Ethereum",
                "Webpack",
                "Rollup",
                "AWS",
              ]}
            />

            <TimelineItem
              date="Nov 2021 - Apr 2022"
              title="Software Engineer"
              subtitle="Confidential Blockchain Company"
              type="work"
              content="Worked on a blockchain-based application, focusing on developing a real-time data processing system using Node.js and GraphQL, and integrating with various blockchain networks."
              tags={[
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "GraphQL",
                "Redis",
                "React",
                "Next.js",
                "Web3.js",
                "Ethereum",
              ]}
            />

            <TimelineItem
              date="Oct 2018 - Oct 2021"
              title="Junior Engineer"
              subtitle="Fill-Labs"
              type="work"
              content="Contributed to the development of multiple customer-facing applications for high-profile clients."
              tags={[
                "TypeScript",
                "React",
                "HTML/CSS",
                "Golang",
                "MySQL",
                "Docker",
                "RESTful APIs",
              ]}
            />

            <TimelineItem
              date="Jul 2018 - Aug 2018"
              title="Software Development Intern"
              subtitle="ING Turkiye"
              type="work"
              content="Summer internship where I assisted in developing internal tools and gained hands-on experience with professional software development practices."
              tags={["JavaScript", "RPA", "MySQL", "Git"]}
            />

            <TimelineItem
              date=""
              title="B.S. Computer Science"
              subtitle="Sivas Cumhuriyet University"
              type="education"
              content="Active member of the Computer Science Club and Google Developers Group. Participated in hackathons and coding competitions."
              tags={[
                "Algorithms",
                "Data Structures",
                "Database Management",
                "Software Engineering",
                "Computer Networks",
                "Operating Systems",
                "Computer Architecture",
              ]}
            />
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-16 md:py-24 border-t border-zinc-800"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SkillCategory
              title="Frontend Development"
              skills={[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML/CSS",
                "Tailwind CSS",
                "Redux",
                "Styled Components",
                "Lit Element",
                "Web Components",
                "Webpack",
                "Vite",
                "Rollup",
                "Jest",
              ]}
            />
            <SkillCategory
              title="Backend Development"
              skills={[
                "Node.js",
                "Express",
                "RESTful APIs",
                "GraphQL",
                "SQL",
                "NoSQL",
                "Nest.js",
                "Golang",
                "Redis",
              ]}
            />
            <SkillCategory
              title="DevOps & Tools"
              skills={[
                "Git",
                "Docker",
                "AWS",
                "CI/CD",
                "Jest",
                "Cypress",
                "Agile/Scrum",
              ]}
            />
          </div>
        </section>

        {/* Projects Section - Commented Out */}
        {/* 
        <section id="projects" className="py-16 md:py-24 border-t border-zinc-800">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
              technologies={["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
              year="2022"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates and team workspaces."
              technologies={["React", "Firebase", "Redux", "Material UI"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
              year="2020"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="An interactive weather dashboard that displays current and forecasted weather data for multiple locations."
              technologies={["JavaScript", "Chart.js", "Weather API", "CSS"]}
              imageUrl="/placeholder.svg?height=200&width=400"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
              year="2019"
            />
          </div>
        </section>
        */}

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 md:py-24 border-t border-zinc-800 relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-black to-purple-900/10"></div>

          <h2 className="text-3xl font-bold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-lg text-zinc-300">
                I&apos;m always open to discussing new positions, projects,
                creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4 text-zinc-300">
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-purple-500/50 transition-colors">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>erkanercandev@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-purple-500/50 transition-colors">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>Turkey</span>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-purple-500 hover:bg-zinc-800"
                  >
                    <Link href="https://github.com/erkanercan" target="_blank">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-purple-500 hover:bg-zinc-800"
                  >
                    <Link
                      href="https://www.linkedin.com/in/erkan-ercan/"
                      target="_blank"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full border-zinc-700 text-zinc-400 hover:text-white hover:border-purple-500 hover:bg-zinc-800"
                  >
                    <Link href="mailto:erkanercandev@gmail.com">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 md:py-12">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-zinc-500 md:text-left">
            © {new Date().getFullYear()} Erkan Ercan. None of the rights are
            reserved. I do not care about copyrights of this website. You can
            use it as you want.
          </p>
        </div>
      </footer>
    </div>
  );
}
