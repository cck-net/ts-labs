export class Algs {

    /* Alunos e salas */
    studentClasses(names: string[], rooms: string[]) {

        const res = rooms.map(r => {

        const students = names.filter(n => {
            return (n[0] == r[5])
        })

        if (students.length > 0)
            return r +': '+ students
        else
            return undefined

        }).filter(f => f != undefined)

        return res
    }

    /* Carros */
    hoursToIntersect(s0a: number, va:number, s0b:number, vb:number): number {

        return (s0a - s0b) / (vb - va)
    }
    
    kilometersToIntersect(s0a: number, va:number, s0b:number, vb:number): number {
    
        return s0a + va * this.hoursToIntersect(s0a, va, s0b, vb)
    }

    /* Fatorial */
    factorial(n: number): number {

        if (n <= 1) return n

        return n * this.factorial(n-1)
    }

    /* Palindromo */
    palindromo(txt: string): boolean {

        const original: string = txt.split(' ').join('') //replaceAll(' ') es2021

        const reverse: string  = original.split('').reverse().join('')

        return original === reverse
    }

    /* Encontre os indices no array */
    findIndex(arr:number[], num:number):number[] {

        const res = arr.map((n, i) => {

            if (num === n)
                return i + 1
            else
                return -1

        }).filter(f => f != -1)

        return res
    }

    /* Encontre o maior */
    findMax(arr:number[]):number {

        let max: number = arr[0]

        for (let i=1; i<arr.length; i++) {

            if (arr[i] > max) max = arr[i]
        }
        return max
    }

    /* Encontre o menor */
    findMin(arr:number[]):number {

        let min: number = arr[0]

        for (let i=1; i<arr.length; i++) {

            if (arr[i] < min) min = arr[i]
        }
        return min
    }

    /* Encontre o n elemento fibonacci */
    fibonatti(idx:number):number {

        if (idx <= 1) return idx

        return this.fibonatti(idx-2) + this.fibonatti(idx-1)
    }

    /* Gera P.A. */
    pa(prog:number, size:number):number[] {

        const res: number[] = [1]

        for (let i=1; i<size; i++) {

            res.push(res[i-1] + prog)
        }

        return res
    }

    /* Valida P.A. */
    isPA(arr:number[]):boolean {

        if (arr.length <= 1)
            return false

        const factor = arr[1] - arr[0]

        for (let i=1; i<arr.length; i++) {

        if (arr[i] - arr[i-1] == factor)
            continue
        else
            return false
        }

        return true
    }

    /* Valida P.G. */
    isPG(arr:number[]):boolean {

        if (arr.length > 1) {

            const factor:number = arr[arr.length-1] / arr[arr.length-2]

            for (let i=arr.length-1; i>1; i--) {

                if (arr[i] / arr[i-1] == factor)
                    continue
                else
                    return false
            }
            return true
        }

        return false
    }
}