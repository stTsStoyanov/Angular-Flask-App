import { TagContentType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ApiError } from "./ApiError";

interface CalculateAgeResult{
    age: number
}

@Injectable() 
export class PersonApi{

    async calculateAge(birthDate: string): Promise<number> { // make call to server
        const result = await fetch('http://127.0.0.1:5000/people/calculate-age',{
            method: 'POST',
            body: JSON.stringify({ birthday: birthDate}),
            headers: new Headers({'content-type': 'application/json'})
        });
        if(result.status === 400){
            const error = await result.text(); // server error
            throw new ApiError(error);
        }
        if(!result.ok){
            throw new ApiError('Unexpected Error occured');
        }

        const ageResult = await result.json() as CalculateAgeResult;
        return ageResult.age;
    }
}
