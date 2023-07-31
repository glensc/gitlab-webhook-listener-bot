import path from "node:path";

// https://javascript.plainenglish.io/how-to-safely-concatenate-url-with-node-js-f6527b623d5
export const urlPath = (url: URL, pathname: string) => new URL(path.join(url.pathname, pathname), url);
