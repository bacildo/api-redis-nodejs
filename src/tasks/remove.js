const Task = require('./../schemas/Task')

module.exports = async (req,res) =>{
  
  try {
    const {id} = req.params
    if(!id){
      return res.status(400).json({err: 'Invalid parameter'})
    }
    await Task.findByIdAndDelete(id)
    return res.status(204).end()
  } catch (err) {
    return res.status(500).json({err})
  }
  
}