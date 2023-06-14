import AthleteResult from "./AthleteResult";

class RunningEvent{
     type: RaceType;
     results: AthleteResult;

     constructor(typeT: RaceType, result: AthleteResult){
        this.type = typeT;
        this.results = result;
     }
 
}

enum RaceType{
   D1600,
   D3200,
   D5000,
   Dmile,
   D2mile,
   D800,
   S400,
   S600,
   S300,
   S200,
   S100,
   S55,
   H110H,
   H400H,
   H100H,
   R4X800,
   R4X400,
   R4X1600,
   R4Xmile,
   R3X400H,
   Rshuttlehurdles,
   R4X200,
   R4X100,


}

export default RunningEvent;