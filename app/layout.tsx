import '../styles/globals.css';

export const metadata = {
  title: 'Ro-Trades',
  description: 'Follow our list of hot stocks every day!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-circles" />
        {children}
      </body>
    </html>
  );
}

