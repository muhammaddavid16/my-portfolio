import { Badge } from "@/components/ui/badge";

const skillCategories = {
    "Automation Testing": ["Katalon Studio", "UiPath"],
    "Web Development": ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "ShadCN UI"],
    "Backend & Database": [
        "PHP",
        "Laravel",
        "Node.js",
        "Express",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "REST API",
        "Docker",
        "Database Design",
    ],
    "Other Tools": ["Git", "Postman", "Jira"],
};

export function SkillsSection() {
    return (
        <section className="py-8">
            <h3 className="text-2xl font-semibold tracking-tight">Skills</h3>
            <div className="mt-4">
                {Object.entries(skillCategories).map(([category, skills], idx) => (
                    <div key={idx} className="mt-4 space-y-2">
                        <div className="text-lg font-medium">{category}</div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <Badge key={i} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
