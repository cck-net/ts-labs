export class Sorts {

    /* Gera array randomico */
    generator(size: number): number[] {

        let arr: number[] = []

        for (let i = 0; i < size; i++) {

            arr.push(Math.floor(Math.random() * 10))
        }

        return arr
    }

    /* Ordenacao Bubble */
    bubbleSort(arr:number[]): void {

        let swap: boolean

        do {
            swap = false

            for (let i = 0; i < arr.length; i++) {

                if (arr[i] > arr[i + 1]) {

                    const temp = arr[i]

                    arr[i] = arr[i + 1]
                    arr[i + 1] = temp

                    swap = true
                }
            }
        } while (swap)
    }

    /* Ordenacao Quick */
    quickSort(arr:number[]): number[] {

        if (arr.length <= 1)
            return arr

        const pivotIndex: number = Math.floor(arr.length / 2)
        const pivot: number = arr[pivotIndex]

        let left: number[]  = []
        let right: number[] = []

        for (let i = 0; i < arr.length; i++) {

            if (i != pivotIndex) {

                if (arr[i] < pivot)
                    left.push(arr[i])
                else
                    right.push(arr[i])
            }
        }
        return [...this.quickSort(left), pivot, ...this.quickSort(right)]
    }
    
    /* Ordenacao Numeros */
    sortNumbers(arr: number[]): void {

        arr.sort((a, b) => a - b) //arr.sort()
    }
    
    /* Ordenacao Texto */
    sortNames(arr: string[]): void {

        // arr.sort((a, b) => { //arr.sort()

        //     if (a < b)
        //         return -1
        //     else
        //         return  1
        //  })
    }
}
