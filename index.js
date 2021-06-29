const noderfc = require("node-rfc")
const client = new noderfc.Client({dest: "ES5"})

async function  init(){
    try {
      console.log("Beginning")
      // open connection
      await client.open()
      await client.ping()
      console.log("Ping Successful")
      let data = await client.call('RFC_SYSTEM_INFO', {})
      console.log(data)
      await client.close()

  
    } catch (err) {
      // connection and invocation errors
      console.error(err)
    }
  }

  init()