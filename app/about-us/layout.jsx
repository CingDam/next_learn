import React from "react"

export const metadata = {
    title: "About us",
    description: 'The best movies on the best framework',
  }
  
  export default function RootLayout({ children }) {
    return (
        <div>{children}</div>
    )
  }