class AthleteResult{
   athleteID: string;
   time: number;
   splits: number[];

   constructor(timeN: number, split: number[], athlete: string){
    this.athleteID = athlete;
    this.time = timeN;
    this.splits = split;
   }


}
export default AthleteResult;