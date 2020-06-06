class HelloWorldPlugin {
  constructor(options) {
    console.log(options)
  }

  apply(compiler){
    compiler.hooks.done.tap('HelloWorldPlugin',compilation=>{
      console.log('hello world')
    })
  }
}

module.exports = HelloWorldPlugin