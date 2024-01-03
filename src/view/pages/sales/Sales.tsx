import { Layout } from "../../layout/Layout";
import * as C from "./Sales.styles";
import { Aside } from "./modules";

export function Sales() {
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
          }}
        >
          <h2>Vendas</h2>
          <p style={{ color: "#8c8c8c" }}>Gestão de vendas</p>
        </div>
      </Layout>

      <Aside />
    </C.Container>
  );
}
