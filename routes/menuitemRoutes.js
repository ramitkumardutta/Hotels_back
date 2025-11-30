const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('menu item saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/', async(req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('menu items fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;
        if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const response = await MenuItem.find({taste: tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'Invalid taste type'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }

})

router.put('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const updatePersonId = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuId, updatePersonId, {
            new: true,
            runValidators: true,
        })

        if(!response) {
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        
        const response = await MenuItem.findByIdAndDelete(menuId);

        if(!response) {
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data deleted');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;