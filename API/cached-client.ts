import { ApiCLientDecorator } from "./api-client-decorator";
import { ScoreClientProtocol } from "./score-client-protocol";

export class CachedClient extends ApiCLientDecorator {
    private cache = new Map<String,number>();

    public constructor(cli: ScoreClientProtocol) {
        super(cli);
    }

    score(cpf: string): Promise<number> {
        if (this.cache.has(cpf))
            return this.cache[cpf];
        else
            return this.client.score(cpf); //
    }
}