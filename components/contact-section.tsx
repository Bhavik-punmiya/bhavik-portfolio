import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="mb-8 md:mb-16">
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8 lg:px-10">


        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0">
          {/* Left Column - Text */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              Let's Start a Project Together
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
              Ready to bring your ideas to life? Let's connect and create something amazing.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex items-start space-x-6">
            {/* Avatar */}
            <Avatar className="w-16 h-16 border-2 border-border">
              <AvatarImage src="/avatar.jpg" alt="Bhavik Punmiya" />
              <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">BP</AvatarFallback>
            </Avatar>

            {/* Contact Details */}
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-xl font-semibold">Bhavik Punmiya</h3>
                <p className="text-sm text-muted-foreground">Software Developer</p>
              </div>

              <div className="flex items-center space-x-4">
                {/* Email */}
                <a
                  href="mailto:Bhavikpunmiya@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Bhavikpunmiya@gmail.com</span>
                </a>

                {/* Social Icons */}
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 hover:bg-[#0077b5] hover:text-white transition-colors"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/bhavik-punmiya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 hover:bg-[#333] hover:text-white transition-colors"
                    asChild
                  >
                    <a 
                      href="https://github.com/Bhavik-punmiya" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 hover:bg-[#1da1f2] hover:text-white transition-colors"
                    asChild
                  >
                    <a
                      href="https://twitter.com/bhavikpunmiya1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 hover:bg-[#ff0000] hover:text-white transition-colors"
                    asChild
                  >
                    <a
                      href="https://www.youtube.com/@bhavikpunmiya9641/videos"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
