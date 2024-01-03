import { Calendar, MagnifyingGlass, Users } from "@phosphor-icons/react";
import { useState } from "react";

import { Employees, Preview, Schedules } from "./components";

import * as C from "./Aside.styles";

export function Aside() {
  const [scheduledServices] = useState(12);

  return (
    <C.Container>
      <C.InfoContainer>
        <C.InfoColumn>
          <C.InfoRow>
            <Calendar size={20} />
            <C.InfoTitle>Horários</C.InfoTitle>
          </C.InfoRow>

          <C.InfoRow>
            <C.InfoValue>{scheduledServices}</C.InfoValue>
            <p>
              Servicos <br /> agendados
            </p>
          </C.InfoRow>
        </C.InfoColumn>

        <Schedules />
      </C.InfoContainer>

      <Preview />

      <C.InfoContent>
        <C.InfoColumn>
          <C.InfoRow>
            <Users size={20} />
            <C.InfoTitle>Equipe de funcionários</C.InfoTitle>
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
          Todos do time <b style={{ color: "#000000" }}>Funcionários</b> podem
          ver esse widget de funcionários.
        </p>
      </C.InfoContent>
    </C.Container>
  );
}
