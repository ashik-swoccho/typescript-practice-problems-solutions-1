const multiplyValue = (value: number, multiplier :number = 2): number => {
  return value * multiplier;
};


const processInput = (value : string | number | boolean) : string | number => {
    if(typeof value === "string"){
        return value.trim().toLowerCase()
    }

    else if(typeof value === "number"){
        return value*10
    }
    

    else{
        if(value){
            return "Active"
        }
        else{
            return "Inactive"
        }
    }

}


const formatCoordinate =([latitude,longitude,locationName] : readonly [number,number,string]) : string => {

     return `Location: ${locationName} (${latitude}, ${longitude})` 

}


const concatenateArrays = <T>( ...arrays: T[][]) : T[]=> {

    const newArr : T[] = []

    for(const arr of arrays){
        newArr.push(...arr)
    }

    

    return newArr
}



interface Course {
    title : string;
    students : number;
    isPublished : boolean;
}

const getPopularCourses = (courses : Course[] , minStudents : number) : Course[] => {

    const newArr : Course[] = []

    for(const c of courses){
        if(c.isPublished && c.students >= minStudents){
            newArr.push(c)
        }
    }

    return newArr

}




const pluckValues = <T , K extends keyof T>(items : T[] , key:K ) : T[K][] => {

    const newArr : T[K][] = []

    for(const p of items){
        newArr.push(p[key])
    }


    return newArr
    

}


class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async(age : number) : Promise<string> => { 


    return new Promise<string> ((resolve , reject) => {
        if (age >= 18) {

        setTimeout(() => {
            resolve ("Access Granted")
        }, 1000);

    }
    else {
        reject(new Error ("Access Denied: Must be 18 or older"))
    }


    })



}
