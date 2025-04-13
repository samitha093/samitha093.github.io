import {
  MonitorSmartphone,
  LayoutDashboard,
  UserCheck,
  Mail,
  FileText,
  SearchCheck,
} from "lucide-react";
import Image from "next/image";

export default function WebSiteSection() {
  return (
    <section className="py-10" id="solutions">
      <div className="mx-auto space-y-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl">
          💼 Business Profile Website
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg font-medium text-foreground">
              A sleek single-page website to represent your business online.
            </p>
            <p>
              Perfect for individuals or businesses who need a simple yet
              elegant online presence, with tailored design that reflects your
              brand identity.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MonitorSmartphone className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Responsive Design
                  </h3>
                </div>
                <p>Beautifully optimized for all screen sizes and devices.</p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Smooth User Experience
                  </h3>
                </div>
                <p>Clean navigation with fast load time and fluid layout.</p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <UserCheck className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Business Profile Section
                  </h3>
                </div>
                <p>
                  Showcase your business details in a structured, impactful
                  layout.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Contact Form Integration
                  </h3>
                </div>
                <p>
                  Let customers reach out easily with a secure contact form.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Content Layout
                  </h3>
                </div>
                <p>
                  Neatly structured content that aligns with your message and
                  goals.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <SearchCheck className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    SEO-friendly
                  </h3>
                </div>
                <p>
                  Search engine optimized structure to help you get discovered.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[67/34] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-b from-zinc-300/40 to-transparent dark:from-zinc-700/30">
              <Image
                src="/web-page.webp"
                className="rounded-[15px]"
                alt="business site dark preview"
                width={1206}
                height={612}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
