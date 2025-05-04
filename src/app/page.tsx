import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="px-4">
            <div className="max-w-6xl h-full mx-auto grid place-items-center">
                <div className="text-center">
                    <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">Hello, I'm David</h1>
                    <div className="max-w-3xl mt-6">
                        <p className="leading-7">
                            I'm a Quality Assurance Automation Engineer based in Jakarta with a background in Computer
                            Science from Universitas Nusamandiri.
                        </p>

                        <Button className="mt-4 rounded-full" asChild>
                            <Link href="/about">More About Me</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
