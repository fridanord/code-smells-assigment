/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getLength(jumps: number[]): number {
    return jumps.reduce((totalLength, jump) => totalLength + jump, 0);
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
      constructor(public city: string, public date: Date, public temperature: number) {}
    }
    
    function averageWeeklyTemperature(temps: Temp[]): number {
      const filteredTemps = temps.filter(temp => 
        temp.city === "Stockholm" && temp.date.getTime() > Date.now() - 604800000
      );
      
      const totalTemperature = filteredTemps.reduce((sum, temp) => sum + temp.temperature, 0);
      
      return filteredTemps.length > 0 ? totalTemperature / filteredTemps.length : 0;
    }

  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  

    function showProduct(
      name: string,
      price: number,
      amount: number,
      description: string,
      image: string,
      parent: HTMLElement
    ) {
      const productHTML = `
        <div class="product">
          <h4>${name}</h4>
          <img src="${image}" alt="${name}" />
          <strong>${price.toFixed(2)} SEK</strong>
          <p>${description}</p>
          <p>Amount: ${amount}</p>
        </div>
      `;
    
      // Lägg till produkten som en del av parent-elementet
      parent.innerHTML += productHTML;
    }


/*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
    
    function presentStudents(students: Student[]) {
      
      const passedList = document.querySelector("ul#passedstudents");
      const failedList = document.querySelector("ul#failedstudents");
    
      
      let passedHTML = '';
      let failedHTML = '';
    
      for (const student of students) {
        const checkboxHTML = `<input type="checkbox" ${student.handedInOnTime ? 'checked' : ''} />`;
        
        const studentHTML = `<li>${checkboxHTML}</li>`;
    
        if (student.handedInOnTime) {
          passedHTML += studentHTML;
        } else {
          failedHTML += studentHTML;
        }
      }
    
      
      if (passedList) {
        passedList.innerHTML = passedHTML;
      }
    
      if (failedList) {
        failedList.innerHTML = failedHTML;
      }
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

      class User {
        name: string;
        birthday: Date;
        email: string;
        password: string;
        avatar?: string;  // En till parameter som kan läggas till
        address?: string; // En till parameter som nu kan läggas till
      
        constructor(name: string, birthday: Date, email: string, password: string, avatar?: string, address?: string) {
          this.name = name;
          this.birthday = birthday;
          this.email = email;
          this.password = password;
          this.avatar = avatar;
          this.address = address;
        }
      }
      
      function validateUser(user: User): string | null {
        // Åldersvalidering
        const userAge = calculateAge(user.birthday);
        if (userAge < 20) {
          return "Du är under 20 år";
        }
      
        // Här kan vi lägga till fler valideringar i framtiden, t.ex. e-post eller lösenordsstyrka
        
        return null;
      }
      
      function calculateAge(birthday: Date): number {
        const ageDiff = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }
      
      function createUser(user: User): string {
        // Validera användaren
        const validationError = validateUser(user);
        if (validationError) {
          return validationError;
        }
      
        // Logik för att skapa en användare
        console.log("Användaren har skapats");
        return "Användare skapad";
      }
      
      // Användningsexempel:
      const newUser = new User("John Doe", new Date("2000-01-01"), "john.doe@example.com", "securePassword123");
      
      const result = createUser(newUser);
      console.log(result); // "Användaren har skapats"
      
      
  



