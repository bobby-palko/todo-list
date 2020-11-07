const Item = require("../models/todo-model");

createItem = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const item = new Item(body);

    if (!item) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    item.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'Item added!',
            })
        }).catch(error => {
            return res.status(400).json({
                error,
                message: 'new item unable to be added',
            });
        });
};

/**
 * Since we're not updating items in this app, this code isn't needed.
 * It's still good practice to write though.
 */
updateItem = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide something to update',
        })
    }

    Item.findOne({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Item not found.',
            });
        }

        item.name = body.name;
        item.notes = body.notes;

        item.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: item._id,
                    message: 'Item updated!',
                })
            }).catch(error => {
                return res.status(404).json({
                    error,
                    message: 'item unable to be updated',
                });
            })
    })
}

deleteItem = async (req, res ) => {
    await Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            });
        }

        if (!item) {
            console.log("Whoops");
            return res.status(404).json({
                success: false, 
                error: 'Item not found',
            });
        }

        return res.status(200).json({
            success: true,
            data: item,
        })
    }).catch(error => {
        console.log("AHHH");
        console.log(error);
    });
}

/**
 * We won't be getting a single item at any point either, but still good practice
 */
getItemById = async (req, res) => {
    await Item.findOne({ _id: req.params.id }, (err, item) => {
        if (err) { 
            return res.status(400).json({
                success: false,
                error: err,
            });
        }

        if (!item) {
            return res.status(404).json({
                success: false,
                error: 'Item not found'
            })
        }

        return res.status(200).json({
            success: true,
            data: item
        })
    }).catch(err => console.log(err));
}

getAllItems = async (req, res) => {
    await Item.find({}, (err, items) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err,
            });
        }
        
        if (!items.length) {
            return res.status(404).json({
                success: false,
                error: 'Items not found!'
            });
        }

        return res.status(200).json({
            success: true,
            data: items
        });
    }).catch(err => console.log(err));
}

module.exports = {
    createItem,
    updateItem,
    deleteItem,
    getAllItems,
    getItemById,
};