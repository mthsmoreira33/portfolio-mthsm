import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/variants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "home", href: "/" },
  { title: "projects", href: "/projects" },
  { title: "contacts", href: "/contact" },
];

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select onValueChange={changeLanguage} value={i18n.language}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="pt">PT-BR</SelectItem>
          <SelectItem value="es">ES</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <Link to="/" className="text-2xl font-bold">
          mthsm
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link to={item.href}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t(item.title)}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <button
          type="button"
          onClick={toggleDarkMode}
          className="cursor-pointer"
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
        <LanguageSwitcher />
      </div>
      <div className="md:hidden flex items-center gap-4">
        <button
          type="button"
          onClick={toggleDarkMode}
          className="cursor-pointer"
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="p-2 cursor-pointer"
              title="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4 px-5">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.title)}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
