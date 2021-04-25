class Formatter {
  //add static methods here
  static capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string) {
    const articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const newA = []
    const array = string.split(' ')
    // check if there are any articles
    for(let i = 0; i < array.length; i++){
      if (i === 0){
        newA.push(this.capitalize(array[i]))
      } else {
        articles.find(a => console.log(a))
      //   if (articles.includes(array[i]) ) {
      //     newA.push(array[i])
      //   } else {
      //     newA.push(this.capitalize(array[i]))
      //   }
      // }
    }
    return newA.join(' ')
    
    
  
  }
}