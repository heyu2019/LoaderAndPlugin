module.exports = class CountTime {
  apply(compiler){
    let self = this;
    compiler.hooks.entryOption.tap('CountTime',(compilation)=>{
      self.startTime = Date.now()
      console.log('开始编译');
    })

    compiler.hooks.done.tap('CountTime',compilation=>{
      console.log('end...');
      self.endTime = Date.now();
      console.log(`编译耗时:$(self.startTime-self.endTime)ms`)
    })
  }
}