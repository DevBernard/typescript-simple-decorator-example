import { ApiCLientDecorator } from "./api-client-decorator";
import { ScoreClientProtocol } from "./score-client-protocol";

export class CachedClient extends ApiCLientDecorator {
    private cache = new Map<String,number>();//sem controle de cache desatualizado (implementação simples)

    public constructor(cli: ScoreClientProtocol) {
        super(cli);
    }

    async score(cpf: string): Promise<number> {
        if (this.cache.has(cpf)){
            return this.cache.get(cpf)!;
        }
        else{
            const score = await this.client.score(cpf); 
            this.cache.set(cpf, score);
            return score;
        }
    }
}