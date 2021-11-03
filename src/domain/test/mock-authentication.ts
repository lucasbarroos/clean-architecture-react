
import faker from 'faker'

import { AuthenticationParams } from '../usercases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})
