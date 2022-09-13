
class NewPokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){}


    scream(){
        console.log(`Agora no!!`);
        
    }

    speak(){
        console.log(`no talk`);
        
    }
}


const Mio = () => {
  return ( target: Function ) => {
    // console.log(target);
    return NewPokemon;
    
  }
}



@Mio()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ){}


    scream(){
        console.log(`${ this.name.toUpperCase() }!!`);
        
    }

    speak(){
        console.log(`${ this.name }, ${ this.name } `);
        
    }

}


export const pikachu = new Pokemon(244, 'pikachu');



pikachu.scream();
pikachu.speak();