const mongoose = require('mongoose');
const moment = require('moment-timezone');
const Request = require('../Models/requestModel');
const User = require('../Models/userModel');
const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const CustomError= require('../Utils/customError');

exports.createRequest = asyncErrorHandler( async(req, res) => {
    try{
    const userId = req.params.id;

    const user = await User.findById(userId)
    if(!user){
      return res.status(404).json({
        status: 'Fail',
        message: 'User not found/ Not Signed In'
      })
    }
    const currentTime = moment().tz('Africa/Nairobi'); // Set the time zone to EAT
    console.log('Current Time:', currentTime.format());
    
    const request = await Request.create({
      ...req.body,
      user: userId,
      postedAt: currentTime.toISOString(),
    });
    console.log(request)
    
    return res.status(201).json({
      status: 'Success',
      data:{
       request
      },
    });
  
    }catch(error){
      if (error.name === 'ValidationError') {
        console.error('Validation Error:', error.errors);
      }

      return res.status(500).json({
          status: 'Fail',
          message: 'Internal server error. ' + error.message
        });
      }
    }
  );

exports.viewAllRequests = asyncErrorHandler( async(req, res) => {
  try{
    const requests = await Request.find();

    res.status(200).json({
      status: 'success',
      reqcount: requests.length,
      data: {
        requests,
      }
    })
  }catch(error){
    res.status(404).json({
      status:'Fail',
      message: `An error occurred while trying to fetch requests ` + error.message,
    })
  }
}
);

exports.viewOneRequest = asyncErrorHandler(async( req, res) => {
  const request = await Request.findOne(req.params.username);
  try{
    if(!request){
      return new CustomError('No result found', 404);
    }
    return res.status(200).json({
      status: 'Success',
      data: {
        request
      }
    })
  }catch(error){
    res.status(500).json({
      status: "Fail",
      msg: 'Internal server error. ' + error.message
    })
  }
})
exports.editRequest = asyncErrorHandler(async( req, res ) => {
  try{
    const request = await Request.findById(req.params.id);
    console.log(request)
    if(!request){
      return res.status(404).json({
        status: "fail",
        message: "Request with specified id not found"
      });
      }

    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true, runValidators: true});

      updatedRequest.updatedAt = new Date();
      await updatedRequest.save();


    res.status(200).json({
      status: "success",
      data: {
        request: updatedRequest
      }
    })
  }catch(error){
    res.status(500).json({
      status: "Fail",
      message: 'Internal server error. ' + error.message
    })
  }
})

exports.deleteRequest = asyncErrorHandler(async( req, res ) => {
  try{
    var request = await Request.findById(req.params.id);
    console.log(request)
    if(!request){
      return res.status(404).json({
        status: "fail",
        message: "Request with specified id not found"
      });
    }
    var request = await Request.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Request Deleted Successfully"
    })
  }catch(error){
    res.status(500).json({
      status: "Fail",
      message: 'Internal server error. ' + error.message
    })
  }
})

exports.yourRequestHistory = async(req, res) => {
  try {
    const userId = req.params.userId;
    const requests = await Request.find({user: userId});
    console.log( `requests are here${requests}`)
    if (!requests || requests.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: 'No requests found for the specified user',
      });
    }

    res.status(200).json({
      status: 'success',
      reqcount: requests.length,
      data: {
        requests,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: `An error occurred while trying to fetch requests: ${error.message}`,
    });
  }
}