import { Lock, MagnifyingGlass, Users } from "@phosphor-icons/react";
import { Preview } from "./components";

import * as C from "./Aside.styles";
import { Employees } from "./components";

export function Aside() {
  return (
    <C.Container>
      <Preview />

      <C.InfoContent>
        <C.InfoColumn>
          <C.InfoRow>
            <Lock size={20} />
            <C.InfoTitle>Gerenciamento de permissões</C.InfoTitle>
          </C.InfoRow>

          <h3>Membros da equipe</h3>

          <div style={{ position: "relative" }}>
            <MagnifyingGlass
              size={16}
              color="#ababab"
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translate(0, -50%)",
              }}
            />

            <input
              type="text"
              placeholder="Pesquisar por nome, email..."
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid #efefef",
                fontSize: 14,
                color: "#8c8c8c",
                paddingLeft: 32,
              }}
            />
          </div>

          <C.InfoList>
            <Employees />
            <Employees />
            <Employees />
            <Employees />
            <Employees />
          </C.InfoList>
        </C.InfoColumn>
      </C.InfoContent>

      <C.InfoContent
        style={{
          display: "flex",
          height: "fit-content",
          gap: 8,
          marginTop: 0,
        }}
      >
        <Users weight="duotone" size={32} color="#ffd161" />
        <p style={{ fontSize: 14, color: "#8c8c8c" }}>
          Todos do time <b style={{ color: "#000000" }}>Administrador</b> podem
          ver esse widget de permissões.
        </p>
      </C.InfoContent>
    </C.Container>
  );
}
