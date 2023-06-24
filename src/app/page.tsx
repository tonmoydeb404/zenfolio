import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="wrapper">
      <Button variant="default">default</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
    </section>
  );
}
