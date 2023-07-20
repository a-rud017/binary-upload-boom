const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        createdBy: req.user.userName,
        createdById: req.user.id,
        post: req.params.id
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.deleteOne({_id: req.params.commentid})
      res.redirect("/post/"+req.params.postid)
    }
    catch(err) {
      console.log(err)
    }
  },
  // deleteComment: async (req, res) => {
  //   try {
  //     // Find post by id
  //     let comment = await Comment.findById({ _id: req.params.id });
  //     // Delete post from db
  //     await Comment.remove({ _id: req.params.id });
  //     console.log("Deleted Comment");
  //     res.redirect("/profile");
  //   } catch (err) {
  //     res.redirect("/profile");
  //   }
  // },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
};