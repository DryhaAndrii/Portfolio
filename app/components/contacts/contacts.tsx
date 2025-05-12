import Link from "next/link";
import "./contacts.scss";
import Button from "../button/button";
import Icons from "../icons/icons";
import ListRevealer from "../listRevelaer/listRevealer";

export default function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <ListRevealer>
        <Link href={"mailto:driga.and@gmail.com"}>
          <Button variant="1">
            <Icons name="email" />
            Send an email
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/andriy-dryha-2362442b7/">
          <Button variant="2">
            <Icons name="linkedin" />
            LinkedIn
          </Button>
        </Link>
        <Link href="https://t.me/Dryha_Andrii">
          <Button variant="3">
            <Icons name="telegram" />
            Telegram
          </Button>
        </Link>
        <Link href="https://github.com/DryhaAndrii">
          <Button variant="4">
            <Icons name="github" />
            GitHub
          </Button>
        </Link>
      </ListRevealer>
    </div>
  );
}
