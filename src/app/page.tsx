export default function Home() {
    return (
        <>
            <main className="px-4">
                <div className="max-w-6xl h-full mx-auto grid place-items-center">
                    <div className="text-center">
                        <h1 className="font-bold text-5xl">Hello, I'm David 👋</h1>
                        <p className="max-w-3xl text-neutral-600 dark:text-neutral-400 text-sm sm:text-lg mt-10">
                            I’m passionate about building{" "}
                            <span className="font-semibold text-black dark:text-white">clean</span>,{" "}
                            <span className="font-semibold text-black dark:text-white">user-focused software</span> and
                            ensuring <span className="font-semibold text-black dark:text-white">high quality</span>{" "}
                            through thoughtful{" "}
                            <span className="font-semibold text-black dark:text-white">development</span> and{" "}
                            <span className="font-semibold text-black dark:text-white">testing</span>.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
