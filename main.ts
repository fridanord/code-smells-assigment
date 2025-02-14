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
  

    class Product {
        name: string;
        price: number;
        amount: number;
        description: string;
        image: string;

        constructor(name: string, price: number, amount: number, description: string, image: string){
            this.name = name;
            this.price = price;
            this.amount = amount;
            this.description = description;
            this.image = image;
        }

        show(parent: HTMLElement) {
            const container = document.createElement("div");

            const title = document.createElement("h4");
            title.innerHTML = this.name;

            const img = document.createElement("img");
            img.src = this.image;
            img.alt = this.name;

            const priceElement = document.createElement("strong");
            priceElement.innerHTML = this.price.toString();

            container.appendChild(title);
            container.appendChild(img);
            container.appendChild(priceElement);

            parent.appendChild(container);
            
        }
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
        checkbox.checked = checked; //Finns det bättre sätt för att se om den är true eller false? Kolla igen
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

    /*6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
  function concatenateStrings() {
    return["Lorem", "ipsum", "dolor", "sit", "amet"].join(" "); //.join() för strings, istället för +. Men behövs det? Mellanslag istället för ,
  }

  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */

      type User = {
        name: string;
        birthday: Date;
        email: string;
        password: string; //Här kan fler parametrar läggas till, såsom avatar?. eller adress?.
      };

      function createUser(user: User) {
        const today = new Date();
        let age = today.getFullYear() - user.birthday.getFullYear();
        const monthDiff = today.getMonth() - user.birthday.getMonth();

        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < user.birthday.getDate())) {
            age--;
        }

        if (age < 20) {
            return "Du är under 2o år";
        }
      }




