/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumpings: number[]): number {
    let total = 0;
    for (const jump of jumpings) {
        total += jump;
    }
    return total;
  }

  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
    class Student {
        constructor(
          public name: string,
          public handedInOnTime: boolean,
          public passed: boolean
        ) {}
      }
      
      function getStudentStatus(student: Student): string {
        student.passed = student.name === "Sebastian" &&
        student.handedInOnTime;
        return student.passed? "VG":"IG";
      }
    
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
    class Temp {
        constructor(
            public location: string, 
            public date: Date, 
            public temperature: number
        ) {}
      }
      
      function averageWeeklyTemperature(localTemp: Temp[]) {
        let totalTemp = 0;
      
        for (let i = 0; i < localTemp.length; i++) 
          if (localTemp[i].location === "Stockholm") {
            if (localTemp[i].date.getTime() > Date.now() - 604800000) {
              totalTemp += localTemp[i].temperature;
            }
          
        }
      
        return totalTemp / 7;
      }