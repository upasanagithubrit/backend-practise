const commentSchema = require("../models/commentmodel");
const blogSchema = require("../models/blogmodel");

exports.createComment = async (req, res) => {
  try {
    //fetch data from request body
    const { blog, user, body } = req.body;

    //create a comment object
    const comment = new commentSchema({
      blog,
      user,
      body,
    });

    //save te new commnet into the db
    const savedComment = await comment.save();

    //blog me bhi comment id save ho jaye and blog ke commnes me update kar do
    const updatedblog = await blogSchema
      .findByIdAndUpdate(
        blog,
        { $push: { comments: savedComment._id } },
        { new: true }
      )
      .populate("comments")
      .exec();

    //populate--id fetch na karke id ka data fetch karte hai

    res.json({
      blog: updatedblog,
      status: "success updated comment",
    });
  } catch (error) {
    res.json({
      blog: null,
      status: "failed updated comment",
    });
  }
};



