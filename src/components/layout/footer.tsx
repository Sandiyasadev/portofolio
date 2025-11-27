import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <Container className="py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-lg font-bold">
                            Portfolio
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            Building digital experiences with modern technologies. Focused on performance, accessibility, and design.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Links</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/projects" className="hover:text-foreground">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-foreground">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Social</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 hover:text-foreground"
                                >
                                    <Github className="h-4 w-4" /> GitHub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 hover:text-foreground"
                                >
                                    <Linkedin className="h-4 w-4" /> LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 hover:text-foreground"
                                >
                                    <Twitter className="h-4 w-4" /> Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </div>
            </Container>
        </footer>
    )
}
