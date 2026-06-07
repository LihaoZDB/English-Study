export interface Course {
    id: string;
    name: string;
    value: string;
    description: string;
    teacher: string;
    url: string;
    price: number;
}

export type CourseList = Course[];