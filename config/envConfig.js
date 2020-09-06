module.exports = {
  // production api, imagepath, filepath is not still specified
  debug: true,
  prefix: "/api/v1",
  //file path s3
  // filePath: "https://ctr-imgs.s3-us-west-2.amazonaws.com/imgs/",

  // API Level Settings
  liveAPI:
    process.env.NODE_ENV === "development" ? "http://localhost:1337" : "",
  localAPI: "http://localhost:1337",
  // uploaded image path for service
  // imgpath: "https://ctr-imgs.s3-us-west-2.amazonaws.com/imgs/ServiceImage/",

  activityType: {
    REGISTRATION: "User Registration",
    REVIEW: "Review",
    MESSAGE: "Message",
  },
  activityName: {
    REQUESTED: "requested",
    ACCEPTED: "accepted",
    DECLINED: "declined",
    CREATED: "created",
    APPROVED: "approved",
    SENT: "sent",
    GAVE: "gave",
    PENDING: "pending",
    PUBLISHED: "published",
  },
};
