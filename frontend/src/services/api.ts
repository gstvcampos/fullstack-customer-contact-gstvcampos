import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://customer-contact.onrender.com',
  timeout: 8000,
})
