const checkPropertyInObject = (string, object) => object.hasOwnProperty(string) ?? false;

module.exports = checkPropertyInObject;
