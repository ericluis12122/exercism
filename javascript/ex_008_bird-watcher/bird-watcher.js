/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let _total = 0;
  for (let element of birdsPerDay)
    _total += element;  
  return _total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let _total = 0;
  let _initial = (week-1) * 7;
  for (let index = 0; index < 7; index++)
    _total += birdsPerDay[_initial + index];
  return _total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let _length = birdsPerDay.length;
  for (let index = 0; index < _length; index+=2)
    birdsPerDay[index]++;
  return birdsPerDay;
}
