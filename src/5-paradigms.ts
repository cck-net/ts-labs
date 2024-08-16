    /* Object Oriented Programing */

  interface ILife {

    isAlive: boolean
  }
  
  abstract class Animal implements ILife {
  
    isAlive: boolean = false;
  
    public walk(): void {}
  }
  
  class Mamal extends Animal {

    isAlive: boolean = true;

    public override walk(): boolean {
        return true;
    }
    
    public mama(): boolean {
        return true;
    }
  }
  
  type Human = {
    
    mamal: Mamal
  }
  
  export class Paradigms {

    OOP(): void {
  
        const myMamal: Mamal = new Mamal();
    
        if (myMamal.walk())
            myMamal.mama()
    
        const human: Human = {
    
        mamal: myMamal
        }

        human.mamal.isAlive = false

        console.log(`human.mamal.isAlive: ${human.mamal.isAlive}`)
    }
  }