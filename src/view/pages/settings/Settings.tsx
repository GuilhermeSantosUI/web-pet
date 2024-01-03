import { Layout } from "../../layout/Layout";
import * as C from "./Settings.styles";
import { Aside } from "./modules";

export function Settings() {
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

            paddingBottom: 20,
          }}
        >
          <h2>Ajustes do sistema</h2>
          <p style={{ color: "#8c8c8c" }}>Configurações da aplicação</p>
        </div>

        <div
          style={{
            display: "flex",
            height: "100%",
            gap: 20,

            padding: '0 20px'
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "250px",
            }}
          >
            <C.Content to="">Perfil</C.Content>
            <C.Content to="">Conta</C.Content>
            <C.Content to="">Aparência</C.Content>
            <C.Content to="">Notificações</C.Content>
          </div>

          <div
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                paddingBottom: 24,
                borderBottom: "1px solid #f2f2f2",

                display: "flex",
                flexFlow: "column",
                gap: 4,
              }}
            >
              <h3>Perfil do usuário</h3>
              <p style={{ fontSize: 14, color: "#8c8c8c" }}>
                É assim que outras pessoas verão você no site.
              </p>
            </div>
          </div>
        </div>
      </Layout>

      <Aside />
    </C.Container>
  );
}
