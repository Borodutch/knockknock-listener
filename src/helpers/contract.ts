import { KnockKnock__factory } from '@borodutch/knockknock-contract'
import env from '@/helpers/env'
import { JsonRpcProvider } from 'ethers'

export default KnockKnock__factory.connect(
  env.CONTRACT_ADDRESS,
  new JsonRpcProvider(env.ALCHEMY)
)
