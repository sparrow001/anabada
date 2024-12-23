import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              ANABADA
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/store"
              data-testid="nav-cart-link"
            >
              All Products
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/categories/toys"
              data-testid="nav-cart-link"
            >
              Toys
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/categories/clothes"
              data-testid="nav-cart-link"
            >
              Clothes
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/categories/utility"
              data-testid="nav-cart-link"
            >
              Utilities
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base flex gap-2"
              href="/categories/books"
              data-testid="nav-cart-link"
            >
              Books
            </LocalizedClientLink>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

        </nav>
      </header>
    </div>
  )
}
