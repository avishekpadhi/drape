import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

export function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <User size={30} className="cursor-pointer" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 bg-background shadow-lg rounded-lg mr-2">
        <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 hover:bg-border cursor-pointer">
          <LogOut size={16} /> Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
