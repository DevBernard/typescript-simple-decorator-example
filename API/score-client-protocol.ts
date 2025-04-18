export interface ScoreClientProtocol {
    score(cpf: string): Promise<number>;
}