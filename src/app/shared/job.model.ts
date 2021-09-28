export class Job{
    id: number;
    title: string;
    company: string;
    place: string;
    time: string;

    constructor(id: number, title: string, company: string, place: string, time: string) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.place = place;
        this.time = time;
    }
}