// Generic Dropdown

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ReactNode, FC } from "react";

export interface DropdownItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  separator?: boolean;
}

interface GenericDropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  contentClassName?: string;
}

export const Dropdown: FC<GenericDropdownProps> = ({
  trigger,
  items,
  contentClassName = "",
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent
        className={`w-48 bg-background shadow-lg rounded-lg mr-2 ${contentClassName}`}
      >
        {items.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem
              key={index}
              onClick={item.onClick}
              disabled={item.disabled}
              className="flex items-center gap-2 px-3 py-2 hover:bg-border cursor-pointer"
            >
              {item.icon}
              {item.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
