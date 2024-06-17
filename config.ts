if (process.env.PORT === undefined || process.env.API_URL === undefined) {
  throw new Error('Missing environment variables')
}

export const PORT = process.env.PORT

export const API_URL = process.env.API_URL
