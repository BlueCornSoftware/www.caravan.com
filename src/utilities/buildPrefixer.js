/**
 * Returns a prefixing function that prepends the featureName to the type string
 * @param {String} featureName - A Short Identifier to prefix the type by feature
 */
export default featureName => typeString => `${featureName}/${typeString}`;
