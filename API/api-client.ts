import { ScoreClientProtocol } from "./score-client-protocol";

export class ApiClient implements ScoreClientProtocol {
    private reqUrl: string = "https://score.hsborges.dev/api"
    private scoreEndp: string = "/score"

    async score(cpf: string): Promise<number> {
        const queryParameter = "?cpf=" + cpf;
        const response = await fetch(this.reqUrl + this.scoreEndp + queryParameter);

        if (response.ok)
            return response.json()["score"];
        else if (response.status == 400)
            throw new Error(response.json()["error"]);
        else
            throw new Error(response.statusText);
    }
}

/*
    score(cpf: string): number {
        let numberedCpf: number = this.numberizeCpf(cpf);
        let random: number = Math.random()*numberedCpf*1000;
        return this.roundTwo(random);
    }

    roundTwo(num: number): number {
        let rounded: string = num.toFixed(2)
        return Number(rounded)
    }

    numberizeCpf(cpf: string): number {
        return Number(cpf.padStart(11,"1"))/100000000000;
    }
* */