import * as Tooltip from "@radix-ui/react-tooltip";

import * as C from "./Tooltip.styles";

interface TooltipProps {
  children: React.ReactNode;
  message?: string;
}

export function TooltipDemo({ children, message }: TooltipProps) {
  return (
    <C.Container delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <C.Content side="right" className="TooltipContent" sideOffset={5}>
            {message}
          </C.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </C.Container>
  );
}
