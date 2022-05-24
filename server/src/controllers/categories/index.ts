import { ICategory } from "./../../types/category";
import { Response, Request } from "express";
import Category from "../../models/category";

export const getCategories = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const categories: ICategory[] = await Category.find();
    res.status(200).json({ categories });
  } catch (error) {
    throw error;
  }
};

export const addCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = req.body;
    const response: ICategory = await Category.create(category);
    res
      .status(201)
      .json({ message: "category created successfully", data: response });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add category.",
    });
    throw error;
  }
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const category: ICategory = req.body;
    const response = await Category.updateOne({ _id: id }, category);
    if (!response) {
      throw new Error();
    }
    res.status(200).json({
      message: "Category has been updated successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update category.",
    });
    throw error;
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const response = await Category.deleteOne({ _id: id });
    if (!response?.deletedCount) {
      res.status(400).json({ message: "This category doesn't exists" });
    }
    res.status(200).json({
      message: "Category has been deleted successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete category.",
    });
    throw error;
  }
};
