export const calculateEstimatedTimeToRead = (text: string) => {
  const wpm = 200; // words per minute
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
