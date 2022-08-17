export default function formatDate(date: Date | undefined) {
  if (date) {
    return `(finished on ${date.toISOString().slice(0, 10)})`;
  }
  return '';
}
