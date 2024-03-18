import { Aside } from "./modules";

import {
  ChartBar,
  ChartLine,
  CurrencyDollar,
  Dog,
} from "@phosphor-icons/react";
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
          <p
            style={{
              color: "#8c8c8c",
              fontSize: 18,
            }}
          >
            Bom dia, <br />{" "}
            <b style={{ color: "#000000", fontSize: 24 }}>Guilherme!</b>
          </p>
        </div>

        <C.Content>
          <C.ChartContent
            style={{
              border: 0,
              gridRow: "span 8",
            }}
          >
            <div>
              <h2>Dashboard</h2>
              <p style={{ color: "#8c8c8c" }}>Financeiro do petshop</p>
            </div>

            <div>
              <p>Lucro total</p>
              <h2>+$6.801,32</h2>
              <p>+15.815</p>

              <CurrencyDollar size={20} color="#ffd161" weight="duotone" />
            </div>

            <div>
              <p>Méd. crescimento mensal</p>
              <h2>˜1,35%</h2>
              <p>˜$523</p>

              <ChartLine size={20} color="#ffd161" weight="duotone" />
            </div>

            <div>
              <p>Token de melhor lucro</p>
              <h2>Ração</h2>
              <p>Inventario</p>

              <Dog size={20} color="#ffd161" weight="duotone" />
            </div>

            <div>
              <p>Score de vendas</p>
              <h2>64/100 BOM</h2>

              <ChartBar size={20} color="#ffd161" weight="duotone" />
            </div>
          </C.ChartContent>

          <C.ChartContent
            style={{
              gridRow: "span 4",
              gridColumn: "span 2",
            }}
          ></C.ChartContent>

          <C.ChartContent
            style={{
              gridRow: "span 4",
              gridColumn: "span 2",
            }}
          ></C.ChartContent>
        </C.Content>
      </Layout>

      <Aside />
    </C.Container>
  );
}
