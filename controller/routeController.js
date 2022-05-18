const Process = require("../models/process");

const getAllProcess = async (req, res) => {
  try {
    const process = await Process.find({});
    console.log(process);
    res.status(200).json( process );
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createProcess = async (req, res) => {
  try {
    const process = await Process.create(req.body);
    res.status(200).json({ process });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteProcess = async (req, res) => {
  try {
    const { id:processID } = req.params;
    const process = await Process.findOneAndDelete({ _id:processID });
    res.status(200).json({ process });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


const updateProcess = async (req, res) => {
  try {
    const { id: processID } = req.params;
    // const {processTitle,subName,subVersion} = req.body;
    const process = await Process.findOneAndUpdate({ _id: processID }, req.body);
    res.status(200).json({ process });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllProcess,
  createProcess,
  deleteProcess,
  updateProcess,
};
