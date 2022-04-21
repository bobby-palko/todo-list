/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { Item } from '../models/todo-model';

const createItem = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> => {
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
};

const updateItem = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> => {
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
};

const deleteItem = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide something to delete!',
    });
  }

  // we're not actually deleting from the DB, just deactivating it
  await Item.findOne({ _id: req.params.id }, async (err: any, item: any) => {
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

    item.active = false;

    await item
      .save()
      .then(() =>
        res.status(200).json({
          success: true,
          id: item._id,
          message: 'Item deleted!',
        })
      )
      .catch((error: any) =>
        res.status(404).json({
          error,
          message: 'item unable to be deactivated',
        })
      );
  });
};

/**
 * We won't be getting a single item at any point, but still good practice
 */
const getItemById = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> => {
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
};

const getAllItems = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response | undefined> => {
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
};

export { createItem, updateItem, deleteItem, getAllItems, getItemById };
