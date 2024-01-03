import { Basket, CaretRight, ChartBar, Clock } from "@phosphor-icons/react";
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
            <ChartBar size={20} />
            <C.BalancoTitle>Balanço do dia</C.BalancoTitle>
          </C.InfoRow>

          <C.BalancoLink href="#">
            Saiba mais
            <CaretRight size={14} />
          </C.BalancoLink>
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
