import { ScoreClientProtocol } from './API/score-client-protocol'
import { ApiClient } from './API/api-client'

const myApiClient = new ApiClient()
const myTimeoutControllingDecor = new ControlledCLient()
const myCacheControllingDecor = new CachedClient()

const myScoreGetter: ScoreClientProtocol = myCacheControllingDecor

