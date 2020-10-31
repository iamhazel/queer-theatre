// src/utils/index.js
/** Parses a menu item object and returns Gatsby-field URI.
 * @param {object} menuItem a single menu item
 * @param wordPressUrl
 * @param listingURI */
export const CreateLocalLink = (menuItem, wordPressUrl, listingURI='listing/') => {
  const { url, connectedObject } = menuItem;

  if (url === '#') {
    return null;
  }
  /** Always want to pull of our API URL */
  let newUri = url.replace(wordPressUrl, '');

  /** If it's a listing link, respect the users listingURI setting */
  if (connectedObject && connectedObject.__typename === 'WPGraphQL_Post') {
    newUri = listingURI + newUri;
  }

  return newUri;
};