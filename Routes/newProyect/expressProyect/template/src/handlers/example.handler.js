import Example from "../services/example.service.js";

const example = new Example()

const get = async (req, res) => {
  try {
    const response = await example.findAll()
    res.send(response);
  } catch (error) {
    console.log(error)
  }
}

export default {
  get
}
