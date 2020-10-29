import http from './config/http'

export const getDataLists = ( p ) => {
  return http.get( '/data/lists2', p )
}
