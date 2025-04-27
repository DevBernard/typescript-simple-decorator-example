import { ApiClient } from "../API/api-client";
import { CachedClient } from "../API/cached-client";

describe('testando cached client decorator', () => {
    test('duas requisicoes iguais retornam OK rapidamente', async () => {
        const client = new CachedClient(new ApiClient());
        const cpf = '75811531001';
        expect(await client.score(cpf)).toStrictEqual(await client.score(cpf));
    });
});