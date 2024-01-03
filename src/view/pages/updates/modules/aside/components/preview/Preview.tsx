import {
  ArrowDown,
  Basket,
  Clock,
  ClockClockwise,
} from "@phosphor-icons/react";
import { useState } from "react";
import * as C from "./Preview.styles";

export function Preview() {
  const [remainingHours] = useState("7h 21min");
  const [sales] = useState(16);

  return (
    <C.Container>
      <C.ShadowOne />
      <C.ShadowTwo />

      <C.Content>
        <C.BalancoRow>
          <C.InfoRow>
            <ClockClockwise size={20} />
            <C.BalancoTitle>Notificaçao de atualizações</C.BalancoTitle>
          </C.InfoRow>

          <div
            style={{
              display: "flex",
              padding: 4
            }}
          >
            <ArrowDown size={16} />
          </div>
        </C.BalancoRow>

        <C.BalancoValue>
          <C.BalancoInfo>
            <C.HorasRestantes>Horas restantes</C.HorasRestantes>

            <C.InfoRow>
              <Clock size={20} />
              <h3>{remainingHours}</h3>
            </C.InfoRow>
          </C.BalancoInfo>

          <C.BalancoInfo>
            <C.VendasRealizadas>Vendas realizadas</C.VendasRealizadas>

            <C.InfoRow>
              <Basket size={20} />
              <h3>{sales} vendas</h3>
            </C.InfoRow>
          </C.BalancoInfo>
        </C.BalancoValue>
      </C.Content>
    </C.Container>
  );
}
