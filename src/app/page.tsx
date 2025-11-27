import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24">
        <Container>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16">
            <div className="flex-1 space-y-6">
              <Badge variant="secondary" className="text-sm">
                Available for new projects
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Full Stack Developer <br />
                <span className="text-muted-foreground">Web + AI Automation</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                I build high-performance web applications and automate business workflows using Next.js, Node.js, and n8n.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/resume">
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Avatar Placeholder */}
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-muted bg-muted md:h-80 md:w-80">
              {/* Replace with actual image */}
              <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                Avatar
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights Section */}
      <section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">3+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">20+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold">24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Support Availability</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}
