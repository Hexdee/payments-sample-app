/**
 * Silly hacky way to determine the API endpoint from the current hostname.  Nuxt makes it
 * surprisingly difficult to add serverside runtime environment variables (to then serve to
 * the client via a configuration endpoint), so we're stuck using this.  We can get away with
 * this because we have very consistent naming between our environments.
 */

function getAPIHostname() {
  // If app is running on localhost (ie, in  dev) the URL is provided via an environment variable (.env file), use that.
  // Otherwise, base it off the window location.
  //if (window.location && window.location.hostname === 'localhost') {
  //  return process.env.baseUrl
  //}
  //return window.location.origin.replace('sample', 'api')
  return "https://api-sandbox.circle.com"
}

function getLive() {
  //const hostname = getAPIHostname()
  //return !(hostname!.includes('sandbox') || hostname!.includes('smokebox'))
  return false
}

function getIsStaging() {
  //const hostname = getAPIHostname()
  //return hostname!.includes('staging')
  return false
}

function getIsLocalHost(): boolean {
  //const hostname = getAPIHostname()
  //return hostname!.includes(':3011')
  return true
}

export { getAPIHostname, getLive, getIsStaging, getIsLocalHost }
