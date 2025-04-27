import { ApiCLientDecorator } from "./api-client-decorator";
import { ScoreClientProtocol } from "./score-client-protocol";

export class ControlledClient extends ApiCLientDecorator {
    private readonly waitingTime: number = 1300;//1000ms exatos não deu certo... tive que aumentar o valor para algo acima de 1250
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
        const remainingDelay: number = Math.max(0, this.waitingTime - diff);
        console.log(`[DEBUG] Last request: ${diff}ms ago | Delaying: ${remainingDelay}ms`);

        await this.delay(remainingDelay);
        this.lastReq = Date.now(); //ajustado com deepseek

        console.log(`[DEBUG] delayed: ${Date.now() - now}ms`);
        return await this.client.score(cpf);
    }

}