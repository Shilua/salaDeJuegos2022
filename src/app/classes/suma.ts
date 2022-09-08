export class Suma {
    public edadUno:number = 0;
    public edadDOs:number = 0;
    public edadSumada:number = 0;
    public edadPromedio:number = 0;

    calcular(){
        this.edadSumada = this.edadUno + this.edadDOs;
        this.edadPromedio = this.edadUno*this.edadDOs/2;
    }
    limpiar(){
        this.edadUno = 0;
        this.edadDOs = 0;
        this.edadPromedio = 0;
        this.edadSumada = 0;
      }
}