import { Sidebar } from "@/components/Sidebar";
import { Content } from "@/components/Content";

export default function Home() {
  return (
    <main className="container">
      <div className="lg:grid lg:grid-cols-3 gap-8">
        <Sidebar />
        <Content />
      </div>
    </main>
  );
}
