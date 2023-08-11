
export class PilaOperadores {
    private V: string[] = ['', '', '', '', '', '', '', ''];
    private cima: number;
    private tam: number;

    constructor() {
        this.cima = -1;
        this.tam = 8;
    }
    estaVacia(): boolean {
        return (this.cima == -1);
    }
    estaLlena(): boolean {
        return (this.cima == this.tam - 1);
    }
    insertar(x: string): boolean {
        if (this.estaLlena()) 
            return false;
        this.cima++;
        this.V[this.cima] = x;
        return true;
    }
    extraer(): string {
        if (this.estaVacia()) 
            return '';
        let aux: string = this.V[this.cima];
        this.cima--;
        return aux;
    }
    verUltimo(): string {
        if (this.estaVacia()) 
            return '';
        return this.V[this.cima];
    }
    ver(): void {
        console.log(this.V.join(','));
    }
    obtenerPila() {
        return this.V.slice(0, this.cima + 1);
    }
}