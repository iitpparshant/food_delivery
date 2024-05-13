const express = require('express');
const Order = require('../models/Orders'); // Fix the model name
const router = express.Router();

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    await data.slice(0,0,{order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)
    const order_date = req.body.order_date;

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            // console.log(data)
            console.log("1231242343242354",req.body.email,req.body.order_date)
            await Order.create({
                email: req.body.email,
                order_data:[{data:data,order_date:req.body.order_date}],
                // order_date:req.body.order_date
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

router.post('/myOrderData', async(req,res)=>{
    try {
        let myData= await Order.findOne({'email':req.body.email});
        res.json({orderData: myData})
    } catch (error) {
        res.send("Server Error", error.message);
    }
})


module.exports = router;
