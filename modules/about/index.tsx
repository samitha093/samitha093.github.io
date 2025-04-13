import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFastify,
  SiJavascript,
  SiNestjs,
  SiSocketdotio,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto space-y-8 px-6 md:px-16 lg:px-32 md:space-y-12">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <div className="relative z-10 max-w-xl space-y-6">
              <h2 className="text-4xl font-medium lg:text-5xl">
                Turning Ideas into Digital Masterpieces 🚀
              </h2>
              <p>
                Hey there! 👋 I&apos;m Lakshan, a passionate Full-Stack
                Developer who loves solving problems and building powerful
                web-based solutions. Whether you’re a startup, a growing
                business, or an enterprise, I create custom web solutions to
                help you scale, streamline operations, and boost your online
                presence.
              </p>
            </div>
            <p>
              <div className="space-y-4 ps-4 mb-3">
                <div>
                  💡 Custom Web Solutions – Tailored to meet your business
                  needs.
                </div>
                <div>
                  🚀 High-Performance Development – Scalable and efficient
                  applications.
                </div>
                <div>
                  🔗 Seamless Integrations – Connecting systems for better
                  workflow.
                </div>
                <div>
                  🛠 Automation & Optimization – Reducing manual work with smart
                  solutions.
                </div>
                <div>
                  📈 Business Growth Focused – Tech-driven strategies for
                  success.
                </div>
              </div>
              Let’s bring your vision to life and make an impact together! 💻✨
            </p>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <div className="flex flex-wrap gap-4">
                {/* <div className="p-4 border rounded-lg">
                  <SiJavascript className="size-20" />
                </div> */}
                {/* <div className="p-4 border rounded-lg">
                  <FaJava className="size-20" />
                </div> */}
                <div className="p-4 border rounded-lg">
                  <FaNodeJs className="size-20" />
                </div>
                {/* <div className="p-4 border rounded-lg">
                  <SiSpringboot className="size-20" />
                </div> */}
                <div className="p-4 border rounded-lg">
                  <SiNestjs className="size-20" />
                </div>
                <div className="p-4 border rounded-lg">
                  <SiFastify className="size-20" />
                </div>
                <div className="p-4 border rounded-lg">
                  <SiExpress className="size-20" />
                </div>
                <div className="p-4 border rounded-lg">
                  <SiSocketdotio className="size-20" />
                </div>
                <div className="p-4 border rounded-lg">
                  <FaReact className="size-20" />
                </div>
                <div className="p-4 border rounded-lg">
                  <SiTailwindcss className="size-20" />
                </div>
              </div>

              <div className="mb-12 mt-12 grid grid-cols-3 gap-2 md:mb-0">
                <div className="space-y-4 border p-5 flex flex-col justify-center items-center rounded-lg">
                  <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                    +12
                  </div>
                  <p>Completed Projects</p>
                </div>
                <div className="space-y-4 border p-5 flex flex-col justify-center items-center rounded-lg">
                  <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                    +5
                  </div>
                  <p>Happy Clients</p>
                </div>
                <div className="space-y-4 border p-5 flex flex-col justify-center items-center rounded-lg">
                  <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                    +8
                  </div>
                  <p>Innovative Solutions</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
