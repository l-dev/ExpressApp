const express = require("express")
const router = express.Router()
const Bathroom = require('../models/bathroom')


//get all bathroom data
router.get("/", (req,res) => {
    Bathroom.find({}).then(bathrooms => res.render('index', {bathrooms}))
})

//route to new.hbs
router.get('/new', (req, res) => {
    res.render('new')
})


//route to show.hbs
router.get("/:id", (req,res) => {
    Bathroom.findById(req.params.id).then(bathrooms => res.render("show", bathrooms))
})


//route to post
router.post('/', (req, res) => {
    Bathroom.create(req.body).then(newBathroom => {
        res.redirect('/')
    })
})

//router to edit
router.get('/edit/:id', (req,res) => {
    Bathroom.findOne({_id: req.params.id}).then(bathrooms => {
        res.render("edit", {bathrooms})
    })
})

//update and existing bathroom
router.put("/:id", (req,res) => {
    Bathroom.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(bathrooms => {res.redirect('/')
})
})

//route to delete
router.delete("/:id", (req, res) => {
    Bathroom.findByIdAndRemove(req.params.id).then(() => {
        res.redirect("/")
    })
})


module.exports= router;

