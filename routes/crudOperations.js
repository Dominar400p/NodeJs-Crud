let router = require('express').Router()
let TableData = require('../models/TableStructure')

//Adding Data
router.post('/add', async (req, res) => {
    try {
        let addData = new TableData(req.body)
        await addData.save()
        res.status(201).json("Data Added Successfully")
    }
    catch (err) {
        console.log(err.message)
    }
})

//Getting All Data
router.get('/getAll', async (req, res) => {
    try {
        let dataFetched = await TableData.find()
        res.status(201).json(dataFetched)
    }
    catch (err) {
        console.log(err.message)
    }
})

//Getting Single Data
router.get("/get/:id", async (req, res) => {
    try {
        let singleData = await TableData.findById(req.params.id)
        res.status(201).json(singleData)
    }
    catch (err) {
        console.log(err.message)
    }
})

//Getting By Name
router.get('/get/name/:name', async (req, res) => {
    try {
        let fetchedByName = await TableData.findOne({ name: req.params.name })
        res.status(200).json(fetchedByName)
    }
    catch (err) {
        console.log(err.message)
    }
})

//Updating Data
router.put('/update/:id', async (req, res) => {
    try {
        let updateData = await TableData.findById(req.params.id)
        await updateData.updateOne({ $set: req.body })
        res.status(201).json("Data Updated Successfully")
    }
    catch (err) {
        console.log(err.message)
    }
})

//Deleting Data
router.delete('/delete/:id', async (req, res) => {
    try {
        await TableData.findByIdAndDelete(req.params.id)
        res.status(201).json("Data Deleted Successfully")
    }
    catch (err) {
        console.log(err.message)
    }
})
module.exports = router