export class User {
    public nombre:string|undefined;
    public apellido:string|undefined;
    public password:string|undefined;

    mostrarUsuario(){
        console.log(this)
    }
}
