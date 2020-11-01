import { listingURI } from "../../globals";

export const CreateLocalLink = (menuItem, wordPressUrl) => {
  const { url, connectedObject } = menuItem;

  if (url === '#') {
    return null;
  }
  /** Always want to pull of our API URL */
  let newUri = url.replace(wordPressUrl, '');

  /** If it's a listing link, respect the users listingURI setting */
  if (connectedObject && connectedObject.__typename === 'wpPost') {
    newUri = {listingURI} + newUri;
  }

  return newUri;
};