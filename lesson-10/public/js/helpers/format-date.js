export default function formatDate(date) {
    if (date) {
        return `(finished on ${date.toISOString().slice(0, 10)})`;
    }
    return '';
}
//# sourceMappingURL=format-date.js.map