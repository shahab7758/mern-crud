const express = require('express')
const router = express.Router();
const Alien = require('../models/alien')

let arr = []

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (err) {
        res.status(500).send('Error', err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.status(200).json(alien)
    } catch (err) {
        res.status(200).send('Error')

    }
})

router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    } catch (err) {
        res.json("Error")
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        alien.remove()
        res.json(alien)
    } catch (err) {
        res.json('Error')
    }
})

router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try {
        const a1 = await alien.save()

        res.json(a1)
    } catch (err) {
        res.json('Error')
    }
})

module.exports = router