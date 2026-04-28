import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eli La Fairies – Fast Food Restaurant | Eneka, Rivers State",
  description:
    "Delicious fast food at Plot 8, Centenary Garden Estate, Eneka Link Rd. Open daily until 9 PM. Order takeaway today!",
  keywords: "fast food, restaurant, Eneka, Rivers State, takeaway, Nigerian food",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
