class Athlete{

    first_name : string;
    last_name : string;
    grade : number;
    group : string;
    id : string;

    constructor(fname : string, lname: string, gradeN : number, groupN : string){
       this.first_name = fname;
       this.last_name = lname;
       this.grade = gradeN;
       this.group = groupN;
       this.id = "test"; //change later
    }

   
}
export default Athlete;