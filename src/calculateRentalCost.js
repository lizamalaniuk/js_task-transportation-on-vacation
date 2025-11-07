/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAY_RENTAL = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT;

  if (days === 7 || days > 7) {
    return days * DAY_RENTAL - LONG_TERM_DISCOUNT;
  }

  if (days > 2 && days < 7) {
    return days * DAY_RENTAL - SHORT_TERM_DISCOUNT;
  }

  if (days < 3) {
    return days * DAY_RENTAL;
  }
}

module.exports = calculateRentalCost;
