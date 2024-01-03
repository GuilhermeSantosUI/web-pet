import {
  Basket,
  Clock,
  ClockClockwise,
  Gear,
  House,
  Wallet,
} from "@phosphor-icons/react";
import { Navigator } from "../navigator/Navigator";
import * as C from "./Sidebar.styles";

export function Sidebar() {
  return (
    <C.Container>
      <C.Content>
        <Navigator message="Início" icon={House} to="/" />

        <Navigator message="Agendamentos" icon={Clock} to="/appointment" />

        <Navigator message="Inventário" icon={Wallet} to="/inventory" />

        <Navigator message="Vendas" icon={Basket} to="/sales" />
      </C.Content>

      <C.Content>
        <Navigator message="Configurações" icon={Gear} to="/settings" />

        <Navigator message="Atualizações" icon={ClockClockwise} to="/updates" />
      </C.Content>
    </C.Container>
  );
}
