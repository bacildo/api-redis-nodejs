const Task = require('./../schemas/Task')

module.exports = async (req,res) =>{
  try {
    const data = await Task.find({})
    return res.status(200).json({data})
    
  } catch(err) {
    return res.status(500).json({err})
  }
}