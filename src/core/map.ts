import { INonceSocket } from '../interfaces/common';
import { IWebSocket } from '../interfaces/common';


/**
 * Initializes an empty nonce-socket map
 * @returns an empty nonce-socket map {@link INonceSocket}
 */
function initializeNonceSocketMap(): INonceSocket[] {
  let nonceSocketMap: INonceSocket[] = [];
  return nonceSocketMap;
}

/**
 * Adds a new entry into the given nonce-socket map
 * @param nonce The nonce generated for the socket
 * @param socket The socket object {@link IWebSocket}
 * @param nonceSocketMap The nonce-socket map {@link INonceSocket}
 */
function addSocketToNonceSocketMap(nonce: string, socket: IWebSocket, nonceSocketMap: INonceSocket[]): void {
  nonceSocketMap.push({ nonce: nonce, socket: socket });
}

/**
 * Get a socket object {@link IWebSocket} from the socket map {@link INonceSocketMap} or undefined
 * if socket object does not exist
 * @param nonce The nonce used to identify the socket object
 * @param nonceSocketMap The nonce-socket map to retrieve the socket object 
 * @returns a socket object or undefined if no socket object is found in the given nonce-socket map
 */
function getSocketFromNonceSocketMap(nonce: string, nonceSocketMap: INonceSocket[]): IWebSocket | undefined {
  const mapEntry = nonceSocketMap.find(s => s.nonce === nonce);
  return mapEntry?.socket;
}

/**
 * Remove a socket object {@link IWebSocket} from a given nonce-socket map {@link INonceSocketMap}
 * @param nonce The nonce used to identify the socket object
 * @param nonceSocketMap The map to remove the socket object from
 */
function removeSocketFromNonceSocketMap(nonce: string, nonceSocketMap: INonceSocket[]): void {
  const mapEntryIndex = nonceSocketMap.findIndex(s => s.nonce === nonce);
  nonceSocketMap.splice(mapEntryIndex, 1);
}



export {
  initializeNonceSocketMap,
  addSocketToNonceSocketMap,
  removeSocketFromNonceSocketMap,
  getSocketFromNonceSocketMap
};