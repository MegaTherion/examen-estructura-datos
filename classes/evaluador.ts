import { Pila } from "./pila";
import { PilaOperadores } from "./pila-operadores";

export class Evaluador {
    private postfija: string;
    private resultado: number;
    private pila: PilaOperadores;
    constructor() {
        this.pila = new PilaOperadores();
        this.postfija = '';
        this.resultado = 0;
    }
    public convertir(infija: string) {
        infija = '(' + infija + ')';
        for (let i=0; i<infija.length; i++) {
            switch (infija[i]) {
                case '(':
                    this.pila.insertar('(');
                    break;
                case ')':
                    while (this.pila.verUltimo() != '(') {
                        this.postfija += this.pila.extraer();
                    }
                    this.pila.extraer();
                    break;
                case '+': case '-': case '*': case '/': case '^':
                    while (this.prioridad(infija[i]) 
                        <= this.prioridad(this.pila.verUltimo())) {
                            this.postfija += this.pila.extraer();
                    }
                    this.pila.insertar(infija[i]);
                    break;
                default:
                    this.postfija += infija[i];
            }
        }
    }
    public getPostfija(): string {
        return this.postfija;
    }
    private prioridad(op: string): number {
        switch (op) {
            case '+': case '-': return 1;
            case '*': case '/': return 2;
            case '^': return 3;
            case '(': return -1;
            default: return 0;
        }
    }
    public evaluar() {
        const p = new Pila();
        let o1, o2;
        for (let i=0; i<this.postfija.length; i++) {
            switch (this.postfija[i]) {
                case '+':
                    o2 = p.extraer();
                    o1 = p.extraer();
                    p.insertar(o1 + o2);
                    break;
                case '-':
                    o2 = p.extraer();
                    o1 = p.extraer();
                    p.insertar(o1 - o2);
                    break;
                case '*':
                    o2 = p.extraer();
                    o1 = p.extraer();
                    p.insertar(o1 * o2);
                    break;
                case '/':
                    o2 = p.extraer();
                    o1 = p.extraer();
                    p.insertar(o1 / o2);
                    break;
                case '^':
                    o2 = p.extraer();
                    o1 = p.extraer();
                    p.insertar(Math.pow(o1, o2));
                    break;
                default:
                    p.insertar(parseFloat(this.postfija[i]));
            }
        }
        this.resultado = p.extraer();
    }
    public getResultado(): number {
        return this.resultado;
    }
}