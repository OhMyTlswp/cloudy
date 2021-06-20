export default function cutString(string, to = string.length, from = 0) {
  if (to < string.length) {
    return `${string.slice(from, to)}...`;
  }
  return string.slice(from, to);
}
