import type { Metadata } from "next";
import SignInForm from "@/components/ui/sign-in-form";

export const metadata: Metadata = {
  title: "SignInForm — Demo",
};

export default function DemoOne() {
  return (
    <main className="grid min-h-screen place-items-center bg-background p-6">
      <SignInForm />
    </main>
  );
}
