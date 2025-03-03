interface Project {
    id?: number | null;
    title: string;
    institution: string;
    my_position: string;
    image?: string | null;
    image_name?: string | null;
    image_file?: string | null;
    link?: string | null;
    specification?: string[] | null;
    detail?: string | null;
    date?: Date | null;
}

interface Certifications {
    id?: number | null;
    name: string;
    obtained_year: number;
    institution: string;
    link: string;
    image: string;
    image_name?: string | null;
    image_file?: string | null;
    detail?: string | null
}

export type { Certifications, Project };

