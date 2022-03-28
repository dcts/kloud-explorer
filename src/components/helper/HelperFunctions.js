export function secondsToTimeStr(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds - (minutes * 60);
  const secsStr = secs < 10 ? `0${secs}` : `${secs}`;
  return `${minutes}:${secsStr}`;
}
