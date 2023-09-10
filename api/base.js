export default class BaseAPI {
    constructor($axios) {
      this.$axios = $axios
    }
  
    buildFormData(payload, prefix = null) {
      const formData = new FormData()
      const getKeyname = (key) => (prefix ? `${prefix}[${key}]` : key)
  
      Object.keys(payload).forEach((key) => {
        if (Array.isArray(payload[key])) {
          for (let i = 0; i < payload[key].length; i++) {
            if (payload[key][i]) {
              formData.append(getKeyname(key) + `[${i}]`, payload[key][i])
            }
          }
        } else if (payload[key]) {
          formData.append(getKeyname(key), payload[key])
        }
      })
  
      return formData
    }
  
    headersForMultipart(headers = {}) {
      return {
        'Content-Type': 'multipart/form-data',
        ...headers
      }
    }
  
    configForMultipart(config = {}, headers = {}) {
      return {
        ...config,
        headers: this.headersForMultipart(headers)
      }
    }
  
    dummyResponse(response = { result: true }, timeout = 1000) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(response)
        }, timeout)
      })
    }
  }
  