import Image from "next/image";
import { accounts, mails } from "./data";
import { Mail } from "@/components/Mailbox/Mail";

export default function MailBoxPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <Mail accounts={accounts} mails={mails} navCollapsedSize={4} />
      </div>
    </main>
  );
}
