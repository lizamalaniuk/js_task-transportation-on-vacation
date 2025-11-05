/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days <= 2) {
    return 80;
  }

  if (days > 2 && days < 6) {
    return 100;
  }

  if (days > 5 && days < 7) {
    return 220;
  } else {
    return 230;
  }
}

module.exports = calculateRentalCost;
