import axios from 'axios'
import { warn } from '~/utils/warn'

const DEFAULT_REQUEST_TIMEOUT = 30000

/**
 * @param {boolean} errorCondition
 * @param {string} message
 * @param {import('axios').AxiosRequestConfig} config
 */
const validateRequest = (errorCondition, message, config) => {
  if (errorCondition) {
    warn(
      `There is a problem with the request url: ${message}.
Please check the url: ${config.baseURL}${config.url}`
    )
  }
}

/**
 *
 * @param {string} [baseUrl]
 */
export const createApiService = (baseUrl = process.env.apiUrl) => {
  const client = axios.create({
    baseURL: baseUrl,
    timeout: DEFAULT_REQUEST_TIMEOUT,
  })
  client.interceptors.request.use(function (config) {
    validateRequest(
      !config.url?.endsWith('/'),
      'API request urls should have a trailing slash',
      config
    )
    validateRequest(
      config.url?.includes('//') ?? false,
      'API request urls should not have two slashes',
      config
    )
    return config
  })
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.code === 'ECONNABORTED') {
        return Promise.reject({
          message: `timeout of ${
            DEFAULT_REQUEST_TIMEOUT / 1000
          } seconds exceeded`,
          ...error,
        })
      }
      return Promise.reject(error)
    }
  )

  return {
    /**
     * @template [T=unknown]
     * @param {string} resource  The endpoint of the resource
     * @param {import('axios').AxiosRequestConfig['params']} params  Url parameter object
     * @returns {Promise<import('axios').AxiosResponse<T>>} response  The API response object
     */
    query(resource, params) {
      return client.get(`${resource}/`, { params })
    },

    /**
     * @template [T=unknown]
     * @param {string} resource  The endpoint of the resource
     * @param {string} slug The sub-endpoint of the resource
     * @returns {Promise<import('axios').AxiosResponse<T>>} Response The API response object
     */
    get(resource, slug) {
      return client.get(`${resource}/${slug}/`)
    },

    /**
     * @template [T=unknown]
     * @param {string} resource  The endpoint of the resource
     * @param {Parameters<typeof client['post']>[1]} data Url parameter object
     * @returns {Promise<import('axios').AxiosResponse<T>>} Response The API response object
     */
    post(resource, data) {
      return client.post(resource, data)
    },

    /**
     * @template [T=unknown]
     * @param {string} resource  The endpoint of the resource
     * @param {string} slug The sub-endpoint of the resource
     * @param {Parameters<typeof client['put']>[1]} data Url parameter object
     * @param {import('axios').AxiosRequestConfig['headers']} headers Headers object
     * @returns {Promise<import('axios').AxiosResponse<T>>} Response The API response object
     */
    update(resource, slug, data, headers) {
      return client.put(`${resource}/${slug}`, data, { headers })
    },

    /**
     * @param {string} resource  The endpoint of the resource
     * @param {import('axios').AxiosRequestConfig} params Url parameter object
     * @returns {Promise<import('axios').AxiosResponse<any>>} Response The API response object
     */
    put(resource, params) {
      return client.put(resource, params)
    },

    /**
     * @param {string} resource  The endpoint of the resource
     * @param {string} slug The sub-endpoint of the resource
     * @param {import('axios').AxiosRequestConfig['headers']} headers Headers object
     * @returns {Promise<import('axios').AxiosResponse<any>>} Response The API response object
     */
    delete(resource, slug, headers) {
      return client.delete(`${resource}/${slug}`, { headers })
    },
  }
}

const ApiService = createApiService()
export default ApiService
