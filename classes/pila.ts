
export class Pila {
    private V: number[] = [0, 0, 0, 0, 0];
    private cima: number;
    private tam: number;

    constructor() {
        this.cima = -1;
        this.tam = 5;
    }
    estaVacia(): boolean {
        // if (this.cima == -1)
        //     return true;
        // else 
        //     return false;
        return (this.cima == -1);
    }
    estaLlena(): boolean {
        return (this.cima == this.tam - 1);
    }
    insertar(x: number): boolean {
        if (this.estaLlena()) 
            return false;
        this.cima++;
        this.V[this.cima] = x;
        return true;
    }
    extraer(): number {
        if (this.estaVacia()) 
            return -999;
        let aux: number = this.V[this.cima];
        this.cima--;
        return aux;
    }
    ver(): void {
        console.log(this.V.join(','));
    }
    obtenerPila() {
        return this.V.slice(0, this.cima + 1);
    }
}