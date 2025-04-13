import {
  ShoppingCart,
  PackageCheck,
  Users2,
  BarChart3,
  BadgePercent,
  Layers3,
  CreditCard,
  Truck,
} from "lucide-react";
import Image from "next/image";

export default function EcommerceSection() {
  return (
    <section className="py-10" id="ecommerce">
      <div className="mx-auto space-y-16 px-6 md:px-16 lg:px-32">
        <h2 className="text-4xl font-semibold tracking-tight lg:text-5xl">
          🛒 Full Functional E-commerce Solution
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
            <p className="text-lg font-medium text-foreground">
              A powerful, complete e-commerce platform tailored to scale your
              business.
            </p>
            <p>
              Manage products, customers, and orders efficiently with real-time
              analytics, promotions, and smooth shopping experience.
            </p>

            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Online Storefront
                  </h3>
                </div>
                <p>
                  Beautiful UI for browsing, searching, and purchasing products.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <PackageCheck className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Inventory Management
                  </h3>
                </div>
                <p>
                  Track stock levels, SKUs, product variants, and availability.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users2 className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Customer Management
                  </h3>
                </div>
                <p>
                  Manage customer data, profiles, and communication securely.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Sales & Analytics
                  </h3>
                </div>
                <p>
                  Visual reports to monitor performance and customer behavior.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BadgePercent className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Discounts & Offers
                  </h3>
                </div>
                <p>
                  Create promotional campaigns, coupon codes, and seasonal
                  deals.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Layers3 className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Order Management
                  </h3>
                </div>
                <p>View, update, and process all customer orders easily.</p>
              </div>

              {/* Feature 7 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CreditCard className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Secure Checkout
                  </h3>
                </div>
                <p>
                  Multiple payment gateways with full security and flexibility.
                </p>
              </div>

              {/* Feature 8 */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Truck className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">
                    Shipping Integration
                  </h3>
                </div>
                <p>
                  Real-time tracking and delivery options with custom zones.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[67/34] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-b from-zinc-300/40 to-transparent dark:from-zinc-700/30">
              <Image
                src="/e-com.webp"
                className="rounded-[15px]"
                alt="ecommerce dark preview"
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
