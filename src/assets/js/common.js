
export default function ( Vue ) {
  Vue.prototype.navigateTo = ( path ) => {
    uni.navigateTo( {
      url: path
    } )
  }
  Vue.prototype.formatCssBack = ( img ) => {
    return `background-image: url('${img}')`
  }
  Vue.prototype.socket = ( url ) => {

  }
}
