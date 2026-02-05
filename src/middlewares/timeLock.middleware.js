import dayjs from "dayjs";

const timeLockMiddleware = (req, res, next) => {
  const now = dayjs();

  // Set cutoff time: 5:30 PM today
  const cutoffTime = dayjs()
    .hour(17)
    .minute(30)
    .second(0);

  if (now.isAfter(cutoffTime)) {
    return res.status(403).json({
      message: "Work log submission is locked after 5:30 PM"
    });
  }

  next();
};

export default timeLockMiddleware;
