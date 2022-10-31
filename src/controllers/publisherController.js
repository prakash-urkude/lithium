const PublisherModel= require("../models/publisherModel")

// 1.
const createPublisher= async function (req, res) {
    let newpublisher = req.body
    let publisherCreated = await PublisherModel.create(newpublisher)
    res.send({data: publisherCreated})
}

const getPublishersData= async function (req, res) {
    let publishers = await PublisherModel.find()
    res.send({data: publishers})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData