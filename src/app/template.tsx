import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export default function HomeTemplate({ children }: { children: React.ReactNode }) {
    return (
        <ScrollArea className="min-h-screen grid grid-rows-[auto_1fr_auto] relative">
            <Navbar />
            {children}
            <Footer />
        </ScrollArea>
    );
}
