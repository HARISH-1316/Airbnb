const Listing = require("../Models/Listing");

module.exports.index = async (req, res) => {
  let { category = "", sort = "", search = "" } = req.query;
  category = category.trim();
  search = search.trim();
  sort = sort.trim();
  let query = {};
  let sortQuery;
  let listings;

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } },
    ];
  }

  if (category) {
    query.category = category;
  }

  if (sort) {
    req.flash("sort", sort);
    switch (sort) {
      case "latest":
        sortQuery = { createdAt: -1 };
        break;
      case "priceLow":
        sortQuery = { price: 1 };
        break;
      case "priceHigh":
        sortQuery = { price: -1 };
        break;
      default:
        break;
    }
  }
  listings = await Listing.find(query).sort(sortQuery);
  res.render("./listings/index.ejs", { listings, sort, category, search });
};

module.exports.renderNewListingForm = (req, res) => {
  res.render("./listings/newListing.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      options: {
        sort: { createdAt: -1 },
      },
      populate: {
        path: "owner",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing you are searching for does not exists.");
    return res.redirect("/listings");
  }
  // console.log(listing);
  res.render("./listings/listing.ejs", { listing });
};

module.exports.searchListing = async (req, res) => {
  let { search } = req.query;
  let query = {
    $or: [{ location: search }, { country: search }, { title: search }],
  };
  const listings = await Listing.find(query);

  res.render("./listings/index.ejs", { listings });
};

module.exports.postNewListing = async (req, res) => {
  let listing = req.body.listing;

  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  listing.owner = req.user;

  await Listing.create(listing);

  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditListingForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  let originalImage = listing.image.url;
  originalImage = originalImage.replace("/upload", "/upload/w_250,e_blur:200");
  listing.image.url = originalImage;

  if (!listing) {
    req.flash("error", "Listing you are searching for does not exists.");
    return res.redirect("/listings");
  }

  res.render("./listings/editListing.ejs", { listing });
};

module.exports.patchEditListing = async (req, res) => {
  let { id } = req.params;

  let listing = req.body.listing;

  if (req.file) {
    listing.image = {
      filename: req.file.filename,
      url: req.file.path,
    };
  }

  await Listing.findByIdAndUpdate(id, listing);

  req.flash("success", "Listing Updated");

  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted");
  res.redirect("/listings");
};
