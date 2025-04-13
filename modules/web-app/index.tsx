import {
  Layers,
  Activity,
  CalendarClock,
  ClipboardList,
  Settings,
  Database,
} from "lucide-react";
import Image from "next/image";

export default function WebAppSection() {
  return (
    <section className="py-10" id="web-app">
      <div className="mx-auto space-y-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl">
          🧩 Interactive Web Application
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative order-1 lg:order-none">
            <div className="aspect-[67/34] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-b from-zinc-300/40 to-transparent dark:from-zinc-700/30">
              <Image
                src="/web-app.webp"
                className="rounded-[15px]"
                alt="web app dark preview"
                width={1206}
                height={612}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg font-medium text-foreground">
              Go beyond static websites with dynamic, functional web apps.
            </p>
            <p>
              Designed to represent your business and allow customers to
              interact with your services directly through powerful online
              tools.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Multi-page Interface
                  </h3>
                </div>
                <p>Dynamic pages for services, users, and business needs.</p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    User Interaction
                  </h3>
                </div>
                <p>Let users engage with tools, forms, and data online.</p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CalendarClock className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Booking or Scheduling
                  </h3>
                </div>
                <p>Allow customers to book services or appointments easily.</p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ClipboardList className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Forms & Requests
                  </h3>
                </div>
                <p>
                  Clients can submit requests or feedback through smart forms.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Settings className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Admin Panel
                  </h3>
                </div>
                <p>Manage site content and settings with an easy backend.</p>
              </div>

              {/* Feature 6 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Database className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Data Handling
                  </h3>
                </div>
                <p>Save, fetch, and manage data securely and efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
