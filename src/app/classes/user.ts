export class User {
    public nombre:string|undefined;
    public apellido:string|undefined;
    public email:string = '';
    public password:string ='';

    mostrarUsuario(){
        console.log(this)
    }
}
