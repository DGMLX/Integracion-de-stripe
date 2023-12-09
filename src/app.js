import express from "express"
import pagoRoutes from "./routes/pago.routes.js"
import morgan from "morgan"
import path from "path"

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(pagoRoutes)
app.use(express.static(path.resolve("src/public")))

export default app;