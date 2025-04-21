import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact | Hermann MOUSSAVOU",
  description:
    "Prenez contact avec moi pour discuter de vos projets de développement web et mobile.",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
