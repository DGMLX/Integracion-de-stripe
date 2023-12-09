import Stripe from "stripe"
import { STRIPE_PRIVATE_KEY } from "../config.js"

const stripe = Stripe(STRIPE_PRIVATE_KEY)

export const generarPago = async (req,res) =>{
    try {
      

        const session = await stripe.checkout.sessions.create({
            line_items:[
                {
                    price_data:{
                        product_data:{
                            name:"Laptop",
                            description:"Gaming Laptop 2023"
                        },
                        currency:"usd",
                        unit_amount:"20000" //200 dolares
                    },
                    quantity:1
                },
                {
                    price_data:{
                        product_data:{
                            name:"Teclado gamer",
                            description:"Teclado gamer 2023 XS3"
                        },
                        currency:"usd",
                        unit_amount:"3000" //30 dolares
                    },
                    quantity:2
                }
            ],
            mode:"payment",
            success_url:"http://localhost:3000/pagoRealizado",
            cancel_url:"http://localhost:3000/cancelarPago"
        })
        res.json(session)
    } catch (error) {
        console.log("ERROR AL GENERAR PAGO CON STRIPE")
        console.log(error)
    }
    
}

export const pagoRealizado = (req,res) =>{
    res.redirect("/success.html")
}

export const cancelarPago = (req,res) =>{
    res.redirect("/")
}