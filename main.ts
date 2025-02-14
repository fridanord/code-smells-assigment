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
    
    