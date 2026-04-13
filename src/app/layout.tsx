import { Metadata } from "next";
import { SolanaProvider } from "./providers/Provider";

export const metadata: Metadata = {
  title: "Solana CRUD App",
  description: "A minimal frontend for Anchor crud program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <SolanaProvider>{children}</SolanaProvider>
      </body>
    </html>
  );
}
