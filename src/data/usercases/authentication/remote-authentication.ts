import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { AuthenticationParams } from '@/domain/usercases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<HttpResponse> {
    return this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}
