// controllers/itemController.js
import Item from "../models/Item.js";

// Create a new item
export const createItem = async (req, res) => {
  const { name, description, price, category, stock } = req.body;

  try {
    const item = new Item({
      name,
      description,
      price,
      category,
      stock,
    });

    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
