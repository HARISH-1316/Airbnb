const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    category: "Beach", // ✅ added
    price: 1500,
    location: "Malibu",
    country: "United States",
  },

  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    category: "City", // ✅
    price: 1200,
    location: "New York City",
    country: "United States",
  },

  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    category: "Mountain", // ✅
    price: 1000,
    location: "Aspen",
    country: "United States",
  },

  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    category: "Historical", // ✅
    price: 2500,
    location: "Florence",
    country: "Italy",
  },

  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    category: "forest", // ⚠️ must match enum EXACTLY
    price: 800,
    location: "Portland",
    country: "United States",
  },

  {
    title: "Beachfront Paradise",
    description: "Step out onto the sandy beach...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    category: "Beach",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },

  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    category: "Lake",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },

  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the wild...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    category: "Camping", // closest match
    price: 4000,
    location: "Serengeti",
    country: "Tanzania",
  },

  {
    title: "Private Island Retreat",
    description: "Have an entire island...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    },
    category: "Beach", // best fit
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },

  {
    title: "Desert Oasis in Dubai",
    description: "Luxury in the desert...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    category: "Desert",
    price: 5000,
    location: "Dubai",
    country: "UAE",
  },

  {
    title: "Rustic Farm Stay",
    description: "Enjoy countryside farm life...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },
    category: "Farm",
    price: 700,
    location: "Punjab",
    country: "India",
  },
];

module.exports = sampleListings;
