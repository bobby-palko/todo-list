/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { CallbackError } from 'mongoose';
import { IItem, Item } from '../models/todo-model';

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
  item.active = true;

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

const updateItem = (
  req: express.Request,
  res: express.Response
): express.Response | undefined => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide something to update',
    });
  }

  Item.findOne({ _id: req.params.id }, async (err: any, item: any) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Item not found.',
      });
    }
    console.log(body);

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

const deleteItem = (
  req: express.Request,
  res: express.Response
): express.Response | undefined => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide something to delete!',
    });
  }

  // we're not actually deleting from the DB, just deactivating it
  Item.findOne({ _id: req.params.id }, async (err: any, item: any) => {
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
 * We probably won't be getting a single item at any point, but still good practice
 */
const getItemById = (
  req: express.Request,
  res: express.Response
): express.Response | undefined => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'No search parameters!',
    });
  }
  Item.findOne({ _id: req.params.id }, (err: any, item: any) => {
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
  });
};

const getAllItems = (
  req: express.Request,
  res: express.Response
): express.Response | undefined => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'No search parameters!',
    });
  }
  Item.find({ active: true }, (err: CallbackError, items: IItem[]) => {
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
  });
};

export { createItem, updateItem, deleteItem, getAllItems, getItemById };
