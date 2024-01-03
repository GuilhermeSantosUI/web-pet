import { IconProps } from "@phosphor-icons/react";
import { NavLinkProps } from "react-router-dom";
import { TooltipDemo } from "../tooltip/Tooltip";
import * as C from "./Navigator.styles";

interface NavigatorProps extends NavLinkProps {
  message: string;
  icon?: React.ComponentType<IconProps>;
}

export function Navigator({ message, icon: Icon, ...props }: NavigatorProps) {
  return (
    <C.Container>
      <TooltipDemo message={message}>
        <C.Content
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          {...props}
        >
          {Icon && <Icon size={20} />}
        </C.Content>
      </TooltipDemo>
    </C.Container>
  );
}
