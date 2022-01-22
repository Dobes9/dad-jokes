export function getColor(votes) {
  if (votes >= 15) {
    return "#4CAF50";
  } else if (votes >= 12) {
    return "#8BC34A";
  } else if (votes >= 9) {
    return "#CDDC39";
  } else if (votes >= 6) {
    return "#FFEB3B";
  } else if (votes >= 3) {
    return "#FFC107";
  } else if (votes >= 0) {
    return "#FF9800";
  } else {
    return "#f44336";
  }
}
