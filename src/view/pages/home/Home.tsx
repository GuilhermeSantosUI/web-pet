import { Aside } from "./modules";

import { Layout } from "../../layout/Layout";
import * as C from "./Home.styles";

export function Home() {
  return (
    <C.Container>
      <Layout>
        <div
          style={{
            width: "100%",
            maxWidth: 900,

            margin: "0 auto",

            display: "flex",
            flexFlow: "column",
            gap: 4,
          }}
        >
          <h2>Dashboard</h2>
          <p style={{ color: "#8c8c8c" }}>Financeiro do petshop</p>
        </div>
      </Layout>

      <Aside />
    </C.Container>
  );
}
