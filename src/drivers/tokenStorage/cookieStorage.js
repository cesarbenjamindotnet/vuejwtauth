import cookies from 'browser-cookies'
import { deepMerge } from '../../utils'

export const CookieTokenStorageDriverDefaultOptions = {
  tokenKey: 'access_token',
  refreshKey: 'refresh_token',
  setConfig: {}
}

export class CookieTokenStorageDriver {
  constructor (options) {
    this.options = deepMerge(CookieTokenStorageDriverDefaultOptions, options)
  }

  async setToken (token) {
    cookies.set(this.options.tokenKey, token, this.options.setConfig)
  }

  async setRefreshToken (refresh_token) {
    cookies.set(this.options.refreshKey, refresh_token, this.options.setConfig)
  }

  async deleteToken () {
    cookies.erase(this.options.tokenKey)
  }

  async deleteRefreshToken () {
    cookies.erase(this.options.refreshKey)
  }

  async getToken () {
    return cookies.get(this.options.tokenKey)
  }

  async getRefreshToken () {
    return cookies.get(this.options.refreshKey)
  }
}
