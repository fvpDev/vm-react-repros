King({
  mixin: 'official',
  autorun() {
    console.log(this.title());
    console.log(this.title2());
  },
  render(){
    <div>
      Name: <input b="value: name" /><br />
      <label b="text: 'Hello ' + name" />
    </div>
  }
});
