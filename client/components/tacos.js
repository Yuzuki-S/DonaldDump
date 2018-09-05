import request from 'superagent'

const apiEndpointBase = 'http://taco-randomizer.herokuapp.com/'




export function getTaco(tacos) {
  return request.get(apiEndpointBase + 'random/?full-taco=true')
}
