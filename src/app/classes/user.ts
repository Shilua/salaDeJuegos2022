export class User {
    public uid:string|undefined;
    public nombre:string|undefined;
    public apellido:string|undefined;
    public email:string = '';
    public password:string ='';

    mostrarUsuario(){
        console.log(this)
    }
}
