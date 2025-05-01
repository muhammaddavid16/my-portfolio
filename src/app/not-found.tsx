import Link from "next/link";

export default function NotFound() {
    return (
        <div className="px-4">
            <div className="max-w-6xl mx-auto">
                <h1>404 - Not Found</h1>
                <p>
                    <Link href="/" className="text-blue-500 underline">
                        Back to Home
                    </Link>
                </p>
            </div>
        </div>
    );
}
