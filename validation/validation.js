import { body } from "express-validator";

export const registerValidator = [
  body("name")
    .trim()
    .escape()
    .exists()
    .notEmpty() //etwas wie required
    .withMessage("enter your name"),
  body("email")
    .trim()
    .escape()
    .isEmail()
    .exists()
    .notEmpty()
    .withMessage("Email is not valid")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 3, max: 20 })
    .withMessage("Please enter at least 3 characters and a maximum of 20.."),
  body("role").exists().notEmpty().withMessage("enter your role"),
];

export const loginValidator = [
  body("email")
    .trim()
    .escape()
    .isEmail()
    .exists()
    .notEmpty()
    .withMessage("Email is not valid")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 3, max: 20 })
    .withMessage("Please enter at least 3 characters and a maximum of 20.."),
];
