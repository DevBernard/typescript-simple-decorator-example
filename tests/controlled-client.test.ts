import { ApiClient } from "../API/api-client";
import { ControlledClient } from "../API/controlled-client";

describe('testando controlled client decorator', () => {
    test('duas requisicoes seguidas retornam OK', async () => {
        const client = new ControlledClient(new ApiClient());
        const cpf = '75811531001';
        const cpf2 = '70687877032';

        console.time('Request 1');
        expect(typeof await client.score(cpf)).toBe('number');
        console.timeEnd('Request 1');

        console.time('Request 2');
        expect(typeof await client.score(cpf2)).toBe('number');
        console.timeEnd('Request 2');
    });
});