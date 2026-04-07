import { Provider } from "./providers/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
