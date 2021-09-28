import { Job } from '../shared/job.model';

export class JobsService{
    jobs: Job[] = [
        new Job(1, 'test1', 'company1', 'place1', '27-09-2021 04:15:16'),
        new Job(2, 'test2', 'company2', 'place2', '27-09-2021 06:54:07'),
        new Job(3, 'test3', 'company3', 'place3', '27-09-2021 07:28:52'),
    ];

    getCurrentTime(){
        const time = new Date();
        return `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    }

    getJob(id: number){
        return this.jobs.find(job => job.id === id);
    }

    getCurrentLengthOfJobsArray(){
        return this.jobs.length;
    }

    addNewJob(newJob: Job){
        this.jobs.push(newJob);
    }
    // editJob(id: number, updatedJob: Job){
    //     this.jobs.forEach(function (job, index){
    //         if(job.id === id){
    //             this.jobs[index] = updatedJob;
    //         }
    //     })
    //     console.log(this.jobs);
    // }

}