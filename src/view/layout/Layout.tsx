import { Header, Sidebar } from "../components";

import * as C from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />

      <C.Content>
        <Header />

        <C.View>{children}</C.View>
      </C.Content>
    </>
  );
}
