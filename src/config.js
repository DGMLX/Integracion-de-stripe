import {config} from "dotenv"
config()

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY
export const PORT = 3000;