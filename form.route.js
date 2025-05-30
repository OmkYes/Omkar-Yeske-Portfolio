const { formHandle } = require("./form.controller")

const route = require("express").Router()

route
    .post("/create-form", formHandle)

module.exports = route