export class Persona {
    nombre: String;
    apellidos: String;
    edad: number;
    sexo: String;
    
    public setNombre(nombre: String){
        this.nombre = nombre;
    }

    public setApellido(apellidos:String){
        this.apellidos = apellidos;
    }

    public setEdad(edad:number){
        this.edad = edad;
    }

    public setSexo(sexo:String){
        this.sexo = sexo;
    }

    public getNombre(){
        return this.nombre;
    }

    public getApellidos(){
        return this.apellidos;
    }

    public getEdad(){
        return this.edad;
    }

    public getSexo(){
        return this.sexo;
    }
}
