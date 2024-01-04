const Task = require("./../schemas/Task");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ err: "Invalid parameter" });
    }
    const data = await Task.findById(id);
    return res.status(200).json({ data });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
