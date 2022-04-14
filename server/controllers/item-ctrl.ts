/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AnyRecord } from 'dns';
import express from 'express';
import { Item, IItem } from '../models/todo-model';

async function createItem(
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an item',
    });
  }

  const item = new Item(body);

  if (!item) {
    return res.status(400).json({
      success: false,
      error: 'error creating new item',
    });
  }

  await item
    .save()
    .then(() =>
      res.status(201).json({
        success: true,
        id: item._id,
        message: 'Item added!',
      })
    )
    .catch((error) =>
      res.status(400).json({
        error,
        message: 'new item unable to be added',
      })
    );
}

async function updateItem(
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide something to update',
    });
  }

  await Item.findOne({ _id: req.params.id }, async (err: any, item: any) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Item not found.',
      });
    }

    item.title = body.title;
    item.description = body.description;

    await item
      .save()
      .then(() =>
        res.status(200).json({
          success: true,
          id: item._id,
          message: 'Item updated!',
        })
      )
      .catch((error: any) =>
        res.status(404).json({
          error,
          message: 'item unable to be updated',
        })
      );
  });
}

async function deleteItem(
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide something to delete!',
    });
  }
  await Item.findOneAndDelete({ _id: req.params.id }, (err: any, item: any) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }

    if (!item) {
      console.log('Whoops');
      return res.status(404).json({
        success: false,
        error: 'Item not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  }).catch((error) => {
    console.log('AHHH');
    console.log(error);
    return res.status(500).json({
      error,
      message: 'An error occurred trying to delete the object.',
    });
  });
}

/**
 * We won't be getting a single item at any point, but still good practice
 */
async function getItemById(
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'No search parameters!',
    });
  }
  await Item.findOne({ _id: req.params.id }, (err: any, item: any) => {
    if (err) {
      return res.status(400).json({
        success: false,
        error: err,
      });
    }

    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Item not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  }).catch((err) => console.log(err));
}

async function getAllItems(
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'No search parameters!',
    });
  }
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
        error: 'Items not found!',
      });
    }

    return res.status(200).json({
      success: true,
      data: items,
    });
  }).catch((err) => console.log(err));
}

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  getAllItems,
  getItemById,
};
