import baseURL from './baseURL'

// post 请求封装
const postRequest = ( url, data ) => {
  return new Promise( ( resolve, reject ) => {
    const postData = data
    uni.request( {
      url: baseURL + url,
      data: postData,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        token: uni.getStorageSync( 'token' )
      },
      success: function ( res ) {
        console.log( res )
        if ( res.statusCode === 200 ) {
          resolve( res.data )
        } else {
          // 请求服务器成功，但是由于服务器没有数据返回，此时无code。会导致这个空数据
          // 接口后面的then执行
          // 不下去，导致报错，所以还是要resolve下，这样起码有个返回值，
          // 不会被阻断在那里执行不下去！
          resolve( res.data.msg )
        }
      },
      error: function ( e ) {
        reject( e )
      }
    } )
  } )
}

// get 请求
const getRequest = ( url, data ) => {
  return new Promise( ( resolve, reject ) => {
    const getData = data
    uni.request( {
      url: baseURL + url,
      data: getData,
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/json',
        token: uni.getStorageSync( 'token' )
      },
      success: ( res ) => {
        if ( res.statusCode === 200 ) {
          resolve( res.data )
        } else {
          resolve( res.data )
        }
      },
      error: ( e ) => {
        reject( e )
      }
    } )
  } )
}

module.exports = {
  post: postRequest,
  get: getRequest
}
