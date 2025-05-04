import React from "react";
import { Metadata } from "next";
import { CareerTimeline } from "@/components/career-timeline";
import { SkillsSection } from "@/components/skills-section";

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
                    <h3 className="text-2xl font-semibold tracking-tight">About Me</h3>
                    <div className="mt-4 space-y-4">
                        <p className="leading-7">
                            I’m David, a Quality Assurance Automation Engineer based in Jakarta with a background in
                            Computer Science from Universitas Nusamandiri. I specialize in automating software testing
                            processes for web, mobile, and desktop applications using tools like Katalon Studio or
                            UiPath.
                        </p>
                        <p className="leading-7">
                            Currently, I work at Bank Mandiri, where I focus on developing and maintaining automated
                            test cases to ensure system reliability and performance. My role also involves collaborating
                            with cross-functional teams to integrate testing into CI/CD workflows, enabling faster and
                            more reliable releases.
                        </p>
                        <p className="leading-7">
                            In addition to testing, I have solid full-stack development skills. I enjoy building
                            responsive and user-friendly interfaces using technologies such as HTML, CSS, JavaScript,
                            React, and Next.js — paired with backend knowledge in Node.js and database systems like
                            MySQL and MongoDB.
                        </p>
                        <p className="leading-7">
                            With a strong foundation in both quality assurance and development, I am highly motivated to
                            continue learning and contributing to improving software quality and user experience.
                        </p>
                    </div>
                </section>

                {/* Career Section */}
                <CareerTimeline />

                {/* Skills Section */}
                <SkillsSection />
            </div>
        </article>
    );
}
