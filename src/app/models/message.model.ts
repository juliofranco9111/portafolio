import { stringify } from "@angular/compiler/src/util";


export class message {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public msg: string,
    ){}    
}