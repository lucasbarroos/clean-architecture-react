import faker from 'faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: faker.random.objectElement(),
    status: faker.random.alpha()
  })
  return mockedAxios
}
