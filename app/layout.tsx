import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata = {
  // title: "The wild Oasis",
  // description: "Generated by The wild Oasis",
  title: {
    template: "%s The wild Oasis",
    default: "welcome The wild Oasis",
    description:
      "Luxurious cabin hotel located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forests",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-50 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by the wild oasis</footer>
      </body>
    </html>
  );
}
