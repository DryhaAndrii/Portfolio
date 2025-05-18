import Link from "next/link";
import "./contacts.scss";
import Button from "@/app/components/button/button";
import Icons from "@/app/components/icons/icons";
import ListRevealer from "@/app/components/animations/listRevealer/listRevealer";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <ListRevealer>
        <Link href={"mailto:driga.and@gmail.com"} target="_blank" rel="noopener noreferrer">
          <Button variant="1">
            <Icons name="email" />
            Send an email
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/andriy-dryha-2362442b7/" target="_blank" rel="noopener noreferrer">
          <Button variant="2">
            <Icons name="linkedin" />
            LinkedIn
          </Button>
        </Link>
        <Link href="https://t.me/Dryha_Andrii" target="_blank" rel="noopener noreferrer">
          <Button variant="3">
            <Icons name="telegram" />
            Telegram
          </Button>
        </Link>
        <Link href="https://github.com/DryhaAndrii" target="_blank" rel="noopener noreferrer">
          <Button variant="4">
            <Icons name="github" />
            GitHub
          </Button>
        </Link>
      </ListRevealer>
    </section>
  );
}
