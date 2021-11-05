let byField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;

export default byField;
