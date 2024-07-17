export class Detector {

    /* Função para calcular a média de um array de números */
    calculateMean(data: number[]): number {

        const sum = data.reduce((acc, value) => acc + value, 0);

        return sum / data.length;
    }

    /* Função para calcular o desvio padrão de um array de números */
    calculateStandardDeviation(data: number[], mean: number): number {

        const squareDiffs = data.map(value => Math.pow(value - mean, 2));

        const avgSquareDiff = this.calculateMean(squareDiffs);

        return Math.sqrt(avgSquareDiff);
    }

    /* Função para detectar anomalias em um array de números */
    detectAnomalies(data: number[], threshold: number): number[] {

        const mean   = this.calculateMean(data);

        const stdDev = this.calculateStandardDeviation(data, mean);

        return data.filter(value => {
            
            return Math.abs(value - mean) > threshold * stdDev;
        });
    }
}
