import { Input } from "./ui/Input";
import { Logo } from "./ui/Logo";
import ThemeModeToggle from "./ThemeModeToggle";
import {NavMenu} from "./NavMenu";
import { BtnSms } from "./ui/BtnSms";
import { BtnSettings } from "./ui/BtnSettings";
import { BtnNotifications } from "./ui/BtnNotifications";

function Nav() {
  return (
    <div className="flex justify-between max-w-6xl mx-auto ">
      <div className="flex  space-x-4">
        <Logo />
        <Input type="search" placeholder="Search" />
      </div>
      <div className="flex space-x-2">
        <NavMenu/>
        <BtnSms />
        <BtnSettings />
        <BtnNotifications />
        <ThemeModeToggle />
      </div>
    </div>
  );
}

export default Nav;
