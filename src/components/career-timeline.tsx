import { Badge } from "./ui/badge";

type CareerItem = {
    title: string;
    company: string;
    period: string;
    description: string;
};

const careerData: CareerItem[] = [
    {
        title: "Quality Assurance Automation Engineer",
        company: "PT Bank Mandiri (Persero) Tbk.",
        period: "2023 ~ Present",
        description:
            "Develop and maintain automated test scripts for web, desktop and mobile applications using Katalon Studio or UiPath. Collaborate closely with developers and product teams to ensure software quality and improve testing efficiency.",
    },
    {
        title: "Web Developer Intern",
        company: "PT Ito Seisakusho Armada",
        period: "2022 ~ 2023",
        description: "Worked on the development of a website for a company using Laravel and Tailwind CSS.",
    },
];

export function CareerTimeline() {
    return (
        <section className="py-8">
            <h3 className="text-2xl font-semibold tracking-tight">Career</h3>
            <div className="mt-4 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {careerData.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center gap-4">
                            <div className="text-lg font-semibold">{item.title}</div>
                            <Badge variant="secondary">{item.period}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.company}</p>
                        <p className="leading-7 text-justify mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
