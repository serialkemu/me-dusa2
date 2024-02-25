const User = require('../Models/userModel');
const asyncErrorHandler = require('../Utils/asyncErrorHandler');
const CustomError= require('../Utils/customError');


exports.userProfileDetails = asyncErrorHandler(async (req, res, next) => {
  const userId = req.params.id

  try {
    if (!userId) {
      return res.status(400).json({
        status: 'fail',
        message: 'User ID is missing in the request params.',
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      // User not found
      return res.status(404).json({
        status: 'fail',
        message: 'User not found, try again later!',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
});

exports.uploadProfilePic = asyncErrorHandler (async (req, res) => {
    try {
        console.log('Request File:', req.file);  
        const filePath = req.file.path  
        console.log(filePath);

        const user = await User.findOneAndUpdate(
          { email: req.body.email },
          { profilePic: filePath},
          { new: true }
        );
    
        if (!user) {
          return res.status(404).json({
            status: 'fail',
            message: 'User not found',
          });
        }
    
        return res.status(200).json({
          status: 'success',
          data: {
            ...user._doc,
            profilePicPath: user.filePath,
          },
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({
          status: 'fail',
          message: 'Internal server error',
        });
      }
})

exports.uploadCoverPhoto = asyncErrorHandler( async(req, res) => {
  try{
    console.log('Request File:', req.file); 
    const filePath = req.file.path;
    const user = await User.findOneAndUpdate(
      {email: req.body.email},
      {coverPhoto: filePath},
      {new: true}
    );

    if(!user){
      return res.status(404).json({
        status: 'Fail',
        message: 'User not found'
      })
    }

  return res.status(200).json({
    status: 'Success',
    data:{
     ...user._doc,
     coverPhotoPath: user.filePath
    },
  });

  }catch(error){
  return res.status(500).json({
      status: 'Fail',
      message: 'Internal server error'
    });
  }
})