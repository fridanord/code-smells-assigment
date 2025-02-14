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

  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
    function showProduct(
        { name, price, amount, description, image}: {name: string, price: number, amount: number, description: string, image: string },
        parent: HTMLElement
    ) {
        const container = document.createElement("div");

        container.innerHTML = `
        <h4>${name}</h4>
        <img src="${image}" alt=${name}" />
        <strong>${price}</strong>
        `;
    parent.appendChild(container);
    }


/*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
    
    interface Student { //Interface för att kunna återanvända kod
        name: string;
        handedInOnTime: boolean;
    }

    function createCheckbox(checked: boolean): HTMLInputElement {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = checked; //Finns det bättre sätt för att se om den är true eller false? 
        return checkbox;
    }

    function appendStudentToList(student: Student, listId: string) {
        const container = document.createElement("div");
        const checkbox = createCheckbox(student.handedInOnTime);

        container.appendChild(checkbox);
        const list = document.querySelector<HTMLUListElement>(`ul#${listId}`); // Göra det bättre? Kolla tidigare kod
        list?.appendChild(container);

    }

    function presentStudents(students: Student[]) {
        const passedStudents = students.filter(student => student.handedInOnTime);
        const failedStudents = students.filter(student => !student.handedInOnTime);

        passedStudents.forEach(student => appendStudentToList(student, "passedstudents"));
        failedStudents.forEach(student => appendStudentToList(student, "failedstudents"));
    }



