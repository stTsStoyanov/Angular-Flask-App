import { Injectable } from "@angular/core";

@Injectable() 
export class PersonApi{

    async calculateAge(birthDate: string): Promise<number> { // make call to server

        return 0
    }
}
