import "../styles/global.css"
import React from "react"
import Navigation from "../component/navigation"

export const metadata = {
  title: {
    template : "%s | Next Movies",
    default : "Next Movies"
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
