import { RemoteAuthentication } from './remote-authentication'
import { HttpClientSpy } from '../..//test/mock-http-client'

describe('RemoteAuthenticaton', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'https://www.google.com'
    const httpPostClientSpy = new HttpClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
