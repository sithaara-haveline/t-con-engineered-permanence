import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Go home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TCON Industries — Fibre Reinforced Concrete Spacers" },
      { name: "description", content: "ISO 9001:2015 certified manufacturer of fibre reinforced concrete cover blocks and rebar spacers. Extra care for excellent creations." },
      { property: "og:title", content: "TCON Industries — Fibre Reinforced Concrete Spacers" },
      { property: "og:description", content: "ISO 9001:2015 certified manufacturer of fibre reinforced concrete cover blocks and rebar spacers. Extra care for excellent creations." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "TCON Industries — Fibre Reinforced Concrete Spacers" },
      { name: "twitter:description", content: "ISO 9001:2015 certified manufacturer of fibre reinforced concrete cover blocks and rebar spacers. Extra care for excellent creations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4108296-1d93-4062-bd78-58a147944901/id-preview-2c4c206e--fdc31f30-73b9-44b1-b3e9-275313dd9e54.lovable.app-1777956248705.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b4108296-1d93-4062-bd78-58a147944901/id-preview-2c4c206e--fdc31f30-73b9-44b1-b3e9-275313dd9e54.lovable.app-1777956248705.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@500;600;700&family=DM+Sans:wght@300;400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="min-h-screen">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
