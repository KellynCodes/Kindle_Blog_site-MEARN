import "../styles/app.css";
import "../styles/dashboard/index.css";
import "../styles/gitusers.css";
import "../styles/boot.css";

import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
