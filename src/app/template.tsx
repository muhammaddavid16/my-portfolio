import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function HomeTemplate({ children }: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen grid grid-rows-[auto_1fr_auto] relative">
            <Navbar />
            {children}
            <Footer />

            <div className="absolute top-0 left-0 w-full min-h-screen bg-gradient-to-br from-blue-600/20 via-background to-background -z-50 pointer-events-none"></div>
        </section>
    );
}
