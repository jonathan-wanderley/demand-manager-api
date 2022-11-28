import HttpResponse from "../../helpers/http-response";

export default class LoginRouter {
    route(httpRequest?: { body?: any; } | undefined) {
        if(!httpRequest || !httpRequest.body) {
            return {
                statusCode: 500,
            }
        }

        const { email, password } = httpRequest.body;

        if (!email) {
            return HttpResponse.badRequest('email')
          }
          if (!password) {
            return HttpResponse.badRequest('password')
          }

        return {
            statusCode: 500,
            body: {}
        }
    }
}