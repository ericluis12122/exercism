export class Clock {
  // Private field to store time in minutes
  #time = 0;

  /**
   * Constructor to initialize the clock
   * @param {number} hour - The initial hour value
   * @param {number} minute - The initial minute value
   */
  constructor(hour = 0, minute = 0) {
    // Convert hours and minutes to total minutes and ensure it wraps within 0-1439 (one day)
    this.#time = ((hour * 60 + minute) % 1440 + 1440) % 1440;
  }

  /**
   * Get the total time in minutes
   * @returns {number} The current time in minutes
   */
  getTime() {
    return this.#time;
  }

  /**
   * Convert the time to a string in HH:MM format
   * @returns {string} The formatted time
   */
  toString() {
    // Calculate the hour and minute components
    const hour = Math.floor(this.#time / 60); // Extract hours
    const minute = this.#time % 60; // Extract remaining minutes
    // Format both components as 2-digit strings and combine them with ':'
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }

  /**
   * Add a specified number of minutes to the clock
   * @param {number} time - Minutes to add
   * @returns {Clock} The updated Clock instance
   */
  plus(time) {
    // Add the time and wrap within 0-1439 using modular arithmetic
    this.#time = ((this.#time + time) % 1440 + 1440) % 1440;
    return this; // Return the clock for method chaining if needed
  }

  /**
   * Subtract a specified number of minutes from the clock
   * @param {number} time - Minutes to subtract
   * @returns {Clock} The updated Clock instance
   */
  minus(time) {
    // Subtract the time and wrap within 0-1439 using modular arithmetic
    this.#time = ((this.#time - time) % 1440 + 1440) % 1440;
    return this; // Return the clock for method chaining if needed
  }

  /**
   * Compare the current clock time with another Clock instance
   * @param {Clock} time - Another Clock instance to compare with
   * @returns {boolean} True if the times are equal, otherwise false
   */
  equals(time) {
    return this.#time === time.getTime();
  }
}