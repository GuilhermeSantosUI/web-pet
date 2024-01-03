import { Layout } from "../../layout/Layout";
import { Aside } from "./modules";

import * as C from "./Inventory.styles";

export function Inventory() {
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
          <h2>Inventário</h2>
          <p style={{ color: "#8c8c8c" }}>Produtos e estoque</p>
        </div>
      </Layout>

      <Aside />
    </C.Container>
  );
}
