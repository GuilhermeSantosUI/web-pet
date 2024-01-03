import { Shower } from "@phosphor-icons/react";
import * as C from "./Schedules.styles";

export function Schedules() {
  return (
    <C.Container>
      <C.AvatarImage
        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="user"
      />

      <C.AvatarContainer>
        <C.Icon>
          <Shower size={20} color="white" />
        </C.Icon>

        <C.AvatarImage
          src="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg"
          alt="user"
        />
      </C.AvatarContainer>
    </C.Container>
  );
}
