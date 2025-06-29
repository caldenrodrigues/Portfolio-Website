export type ExperienceItem = {
    title: string;
    description: string;
};

export type ExperienceSection = {
    label: string;
    items: ExperienceItem[];
};

export const experienceSections: ExperienceSection[] = [
    {
        label: "School",
        items: [
            {
                title: "High School",
                description: "Graduated from ABC High School with a focus on science and literature.",
            },
            {
                title: "School Captain",
                description: "Led the student council and organized annual events.",
            },
            
        ],
    },
    {
        label: "College",
        items: [
            {
                title: "Bachelor of Arts",
                description: "Majored in English Literature at XYZ University.",
            },
            {
                title: "Literary Club President",
                description: "Organized workshops and guest lectures for literature enthusiasts.",
            },
        ],
    },
    {
        label: "Internships",
        items: [
            {
                title: "Content Intern at The Write Place",
                description: "Wrote articles and assisted in editing for the online magazine.",
            },
            {
                title: "Copywriting Intern at AdWorks",
                description: "Created ad copy for digital campaigns.",
            },
        ],
    },
    {
        label: "Job at Leo Burnett",
        items: [
            {
                title: "Junior Copywriter",
                description: "Worked on campaigns for major brands, collaborating with creative teams.",
            },
            {
                title: "Copywriter",
                description: "Led copy for award-winning campaigns and mentored interns.",
            },
        ],
    },
];