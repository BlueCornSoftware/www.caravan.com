/**
 * Returns a prefixing function that prepends the featureName to the type string
 * @param {String} featureName - A Short Identifier to prefix the type by feature
 */

export default function buildPrefixer(featureName) {
  /**
   * Prefixes the type with previously supplied featureName
   * @param {String} typeString - The String identifying the type
   */
  return function typePrefixer(typeString) {
    return `${featureName}/${typeString}`;
  };
}