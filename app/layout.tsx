import type React from "react"

// This root layout is intentionally minimal.
// The <html> and <body> tags are rendered in app/[locale]/layout.tsx
// which also sets the lang attribute and provides next-intl context.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
