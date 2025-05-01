import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
    description: "Biography, career journey, and skills overview",
};

export default function AboutPage() {
    return (
        <article className="px-4">
            <div className="max-w-6xl mx-auto divide-y">
                {/* Bio Section */}
                <section className="py-8">
                    <h1 className="text-3xl font-semibold mb-4">About Me</h1>
                    <p className="">
                        I’m a quality-focused software professional passionate about building clean, user-centered
                        applications and ensuring everything works as expected. With a strong foundation in both
                        development and testing, I aim to bridge the gap between creating software and validating its
                        performance.
                    </p>
                </section>

                {/* Career Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-semibold mb-3">Career</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Software Engineer at{" "}
                                <span className="font-semibold text-black dark:text-white">Cognite</span>
                            </li>
                            <li>
                                Software Engineer Intern at{" "}
                                <span className="font-semibold text-black dark:text-white">Cognite</span>
                            </li>
                            <li>
                                Software Engineer Intern at{" "}
                                <span className="font-semibold text-black dark:text-white">Cognite</span>
                            </li>
                            <li>
                                Software Engineer Intern at{" "}
                                <span className="font-semibold text-black dark:text-white">Cognite</span>
                            </li>
                            <li>
                                Software Engineer Intern at{" "}
                                <span className="font-semibold text-black dark:text-white">Cognite</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-semibold mb-3">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
                        <ul className="list-disc list-inside space-y-1">
                            <li>JavaScript / TypeScript / Python</li>
                            <li>React / Next.js / Tailwind CSS</li>
                            <li>Selenium / Playwright / Cypress</li>
                            <li>REST API / Postman / CI/CD</li>
                            <li>Jest / Testing Library</li>
                        </ul>
                    </div>
                </section>
            </div>
        </article>
    );
}
