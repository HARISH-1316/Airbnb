const Listing = require("../Models/Listing");
const Review = require("../Models/Review");

module.exports.postNewReview = async (req, res, next) => {
  const { review } = req.body;
  const { id } = req.params;

  let newReview = new Review(review);
  newReview.owner = req.user;

  await newReview.save();

  await Listing.findByIdAndUpdate(id, { $push: { reviews: newReview } });

  req.flash("success", "Review Posted");

  res.redirect(`/listings/${id}`);
};

module.exports.destroyReview = async (req, res) => {
  const { id, reviewId } = req.params;

  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);

  req.flash("success", "Review Deleted");

  res.redirect(`/listings/${id}`);
};
