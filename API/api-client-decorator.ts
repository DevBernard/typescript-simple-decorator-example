import type { ApiClient } from './api-client';
import { ScoreClientProtocol } from './score-client-protocol';

export abstract class ApiCLientDecorator implements ScoreClientProtocol {
    protected client: ScoreClientProtocol;

    protected constructor (client: ScoreClientProtocol) {
        this.client = client;
    }

    abstract score(cpf: string): Promise<number>;
}