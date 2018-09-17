let baseUrl = ''

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://localhost:8000/api/'
} else {
  baseUrl = 'http://localhost:5000/api/'
}

export const apiHost = baseUrl
