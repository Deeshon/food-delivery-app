const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')
const User = require('../models/User')
const Category = require('../models/Category')
const Item = require("../models/Item")
const router = express.Router()

const salt = bcrypt.genSaltSync(10)

// USER ROUTES //

// POST req for creating user
router.post('/user/signup' , async (req, res) => {
    const {username, password} = req.body
    const user = new User({
        username,
        password: bcrypt.hashSync(password, salt)
    })

    await user.save()
    res.json(user)
})


// POST req for signing in user
router.post('/user/signin', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username: username})

    if (bcrypt.compareSync(password, user.password)) {
        jwt.sign({user}, 'secretkey', {}, (err, token) => {
            if (err) throw err
            res.cookie('token', token).send('ok')
        })
    } else {
        res.sendStatus(400)
    }
})

router.get('/user/profile', async (req, res) => {
    const {token} = req.cookies
    jwt.verify(token, 'secretkey', {}, (err, authData) => {
        if (err) throw err
        res.json(authData)
    })
})


// CATEGORY ROUTES //

// POST req for creating category
router.post("/categories", async (req, res) => {
    const {title} = req.body
    const category = new Category({
        title
    })

    await category.save()
    res.json(category)
})


// GET req for category list
router.get("/categories", async (req, res) => {
    const categoryList = await Category.find()

    res.json(categoryList)
})


// POST req for creating item
router.post("/items", upload.single('cover'), async (req, res) => {

    const {originalname, path} = req.file
    const ext = originalname.split('.')[1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)

    const item = new Item({
        title: req.body.title,
        subTitle: req.body.subTitle,
        price: req.body.price,
        cover: newPath,
        category: req.body.category
    })

    await item.save()

    res.sendStatus(200)
})

// GET req for item list
router.get('/items', async (req, res) => {
    const itemList = await Item.find()

    res.json(itemList)


})



module.exports = router