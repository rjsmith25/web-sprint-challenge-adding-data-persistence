const { find, insert } = require("./resource.model");

async function getAllResources(req, res) {
  try {
    let resources = await find();
    res.status(200).json(resources);
  } catch (e) {
    res.status(500).json({ message: "Unable to get resources" });
  }
}

async function createResource(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "name is required" });
  }

  try {
    const resource = await insert(req.body);
    res.status(201).json(resource);
  } catch (e) {
    res.status(500).json({ message: "Unable to create new resource" });
  }
}

module.exports = { getAllResources, createResource };
