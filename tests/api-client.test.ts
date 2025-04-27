//dei uma olhada em como fazer mocks de fetch, mas pareceu relativamente complexo,
//então só fiz um teste para chamar a API

import { ApiClient } from "../API/api-client";

describe('testando se retorna algo da API', () => {
    test('deve estar entre 0 e 1000, sem retorno com erro' , async () => {
        await new Promise(f => setTimeout(f, 1000));//certeza API disponível
        const cpf = '38637536077';
        const response = await new ApiClient().score(cpf);

        expect(response).toBeGreaterThanOrEqual(0);
        expect(response).toBeLessThanOrEqual(1000);
    });

    test('deve disparar excessão', async () => {
        const client = new ApiClient();
        const cpf = '38637536077';

        try {
            await client.score(cpf);
        } catch (e) {
        }

        await expect(client.score(cpf)).rejects.toThrow(Error);//tive que pesquisar no deepseek, não entendi sobre esse rejects
    });
});