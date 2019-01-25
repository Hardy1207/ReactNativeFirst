const { check } = require('express-validator/check')

const userValidator = [
  check('name')
      .isLength({ min: 4 }).withMessage('Name is a required field.')
      .isAlphanumeric().withMessage('Name must be alphanumeric.'),

  check('age').isNumeric().isLength({ min: 1, max: 2})
]

export default userValidator;