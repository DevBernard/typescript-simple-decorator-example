import { ScoreClientProtocol } from './API/score-client-protocol';
import { ApiClient } from './API/api-client';
import { CachedClient } from './API/cached-client';
import { ControlledClient } from './API/controlled-client';

const myApiClient = new ApiClient();
const myTimeoutControllingDecor: ScoreClientProtocol = new ControlledClient(myApiClient);
const myCacheControllingDecor = new CachedClient(myTimeoutControllingDecor);

const myScoreGetter: ScoreClientProtocol = myCacheControllingDecor
console.log(myScoreGetter.score("12312312334"));
//