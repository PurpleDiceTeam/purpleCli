import Example from "../services/example.service.js";

const example = new Example()

class ExampleHandler {
  create = async (req, res) => {
    try {
      const id = req.params.id
      const response = await example.create(id)
      res.send(response);
    } catch (error) {
      console.log(error)
    }
  }

  findAll = async (req, res) => {
    try {
      const response = await example.findAll()
      res.send(response);
    } catch (error) {
      console.log(error)
    }
  }

  findOne = async (req, res) => {
    try {
      const id = req.params.id
      const response = await example.findOne(id)
      res.send(response);
    } catch (error) {
      console.log(error)
    }
  }

  update = async (req, res) => {
    try {
      const id = req.params.id
      const response = await example.update(id)
      res.send(response);
    } catch (error) {
      console.log(error)
    }
  }

  delete = async (req, res) => {
    try {
      const id = req.params.id
      const response = await example.delete(id)
      res.send(response);
    } catch (error) {
      console.log(error)
    }
  }
}

const exampleHandler = new ExampleHandler()

export default exampleHandler
