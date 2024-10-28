import { Tooltip, Button } from "@nextui-org/react";
import { ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
  msg: string;
  onClick?: () => void;
}

export default function NavButton({ children, msg, onClick }: NavButtonProps) {
  return (
    <Tooltip
      content={msg}
      showArrow={true}
      offset={-1}
      placement="bottom"
    >
      <Button
        isIconOnly
        size="sm"
        variant="light"
        onClick={onClick}
        aria-label={msg}
      >
        {children}
      </Button>
    </Tooltip>
  );
}
