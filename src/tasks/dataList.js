const Task = require("./../schemas/Task");
const clientRedis = require("./../redis");
module.exports = async (req, res) => {
  try {
    clientRedis.get("tasks", async (err, cached) => {
      if (cached) {
        return res.status(200).json({ cached });
      }
      const data = await Task.find({});
      clientRedis.set("tasks", JSON.stringify(data));
      clientRedis.expire("tasks", 60);
      return res.status(200).json({ data });
    });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
