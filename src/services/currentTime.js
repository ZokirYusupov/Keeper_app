export class CurrentTime {

  time = 0

  currenTime() {
    this.time = new Date().getHours()
  }

  changeColor() {
    let text = 'salom'
    let color = ''
    if(this.time < 20){
      // eslint-disable-next-line no-unused-vars
      color = 'blue'
      // eslint-disable-next-line no-unused-vars
      text = 'Hayr'
    }
    return( {color, text})
  }

}