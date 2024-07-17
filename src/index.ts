import { Algs  } from './0-algs'
import { Sorts } from './1-sorts';
import { Queue, Publisher, Subscriber } from './2-pubsub'
import { Detector } from './3-detector';


//==============================================================
// TESTES 0: ALGORITMOS
//==============================================================
const algs: Algs = new Algs()


// Alunos e salas
console.log(algs.studentClasses(
    ['Paula', 'Bianca', 'Priscila', 'Renata', 'Maria'],
    ['Sala A','Sala B','Sala C','Sala D','Sala E','Sala F','Sala G','Sala H','Sala I','Sala J','Sala L','Sala M','Sala N','Sala O','Sala P','Sala Q','Sala R','Sala S','Sala T','Sala U','Sala V','Sala X','Sala Z']
))


// Carros
console.log(`${algs.hoursToIntersect(0, 100, 300, 30)} hours`)

console.log(`${algs.kilometersToIntersect(0, 100, 300, 30)} kilometers`)


// Fatorial
console.log(algs.factorial(5))


// Palindromo
console.log(algs.palindromo('amor e roma'))


// Encontre os indices no array
console.log(algs.findIndex([0,1,2,0,3,4,4,5], 4))


// Encontre o maior
console.log(algs.findMax([0,1,2,-33,3,4,12,4]))


//Encontre o menor
console.log(algs.findMin([0,1,2,-33,3,4,12,4]))


// Encontre o n elemento fibonacci
console.log(algs.fibonatti(10))


// Gera P.A.
console.log(algs.pa(3, 10))


// Valida P.A.
console.log(algs.isPA([0,5,10,15,20]))


// Valida P.G.
console.log(algs.isPG([0,1,2,4,8,16]))


//==============================================================
// TESTES 1: ORDENACOES
//==============================================================
const sorts: Sorts = new Sorts()


// Gera array randomico
const numbers1: number[] = sorts.generator(10)

console.log(`numbers1__: ${numbers1}`)


// Ordenacao Bubble
sorts.bubbleSort(numbers1)

console.log(`bubbleSort: ${numbers1}`)


// Ordenacao Quick 
const numbers2: number[] = sorts.generator(10)

console.log(`numbers2__: ${numbers2}`)

const quickSorted: number[] = sorts.quickSort(numbers2)

console.log(`quickSort_: ${quickSorted}`)


// Ordenacao Numeros 
const numbers3: number[] = sorts.generator(10)

console.log(`numbers3__: ${numbers3}`)

sorts.sortNumbers(numbers3)

console.log(`sortNums__: ${numbers3}`)


// Ordenacao Texto 
const names: string[] = ['Paula', 'Bianca', 'Priscila', 'Renata', 'Maria']

console.log(`names_____: ${names}`)

sorts.sortNames(names)

console.log(`sortNames_: ${names}`)


//==============================================================
// TESTES 2: PUBLISHER-SUBSCRIBER
//==============================================================
const queue      = new Queue<string>()
const publisher  = new Publisher<string>(queue)
const subscriber = new Subscriber<string>(queue)
let counter: number = 0

function startPublisher() {

    setInterval(async () => {

        await publisher.publish(`item ${counter++}`);
    }, 1);
}

function startConsumer() {

    setInterval(async () => {

        await subscriber.consume();
    }, 2);
}

function watchQueue() {

    setInterval(async () => {

        console.log(`[${queue.size()}]${queue.watch().map(i => '-').join('')}|`);
        //console.log(`[${queue.size()}]`);
    }, 1000);
}

startPublisher();
watchQueue()
startConsumer();


//==============================================================
// TESTES 4: DETECTOR DE ANOMALIAS
//==============================================================
const detector: Detector = new Detector()
const data = [10, 7, 12, 100, 12, 99, 11, 14, 12, 13, 9];
const threshold = 1;

const anomalies = detector.detectAnomalies(data, threshold);

console.log("Anomalies:", anomalies);