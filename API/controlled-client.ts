import { ApiCLientDecorator } from "./api-client-decorator";
import { ScoreClientProtocol } from "./score-client-protocol";

export class ControlledClient extends ApiCLientDecorator {
    constructor(cli: ScoreClientProtocol){
        super(cli);
    }

    private lastReq: number = 0;
    private async delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
        //não faço ideia do que tem em "resolve"
    }

    async score(cpf: string): Promise<number> {
        const now = Date.now();
        const diff = now - this.lastReq;
        const remainingDelay: number = Math.max(0, 1000 - diff);
        console.log(`[DEBUG] Last request: ${diff}ms ago | Delaying: ${remainingDelay}ms`);

        await this.delay(remainingDelay);
        this.lastReq = Date.now(); //ajustado com deepseek

        console.log(`2[DEBUG] Last request: ${diff}ms ago | Delaying: ${remainingDelay}ms`);
        return await this.client.score(cpf);
    }

}