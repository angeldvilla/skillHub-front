if (!process.env.PORT || !process.env.API_URL) {
  throw new Error('Missing environment variables')
}

export const PORT = process.env.PORT

export const API_URL = process.env.API_URL
