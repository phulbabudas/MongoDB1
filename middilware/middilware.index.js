const { model } = require("mongoose");

 /*{
    "pipename": "Molhotra  % ",
    "material": "PVC ( ",
    "pipeSize": "3 @ inch ",
    "diameter":"20 #",
    "length": "5 *"
    "application": "Plumbing @",
    "pipePrice": "15 )",
    "pipeQuantity": "500 @",
    "pipeSellingPrice": "37 *"
    "pipeRetailPrice": "40^"
}
 */
 const validatebody = (req,res ,next ) => {
    const incomingdata = req.body;

    if (!incomingdata.pipename){
          
      return res.send("pipename is required");
    }

    if (incomingdata.pipename) {
      // do not include special chharacters
      // #,$,%,^,&,*,(,),@
      const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"];

      for (const element of specialchrecracters) {
        if (incomingdata.pipename.includes(element)) {
          return res.send("pipename cannote include special chearacters");
        }
      }
    }
    if (!incomingdata.material) {
      return res.send("meterial is required")
    }
    if (incomingdata.meterial) {
      // do not include special characters
      // #, $, %, ^, &, *, (, )

      const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]

      for (const element of specialchrecracters) {
        if (incomingdata.meterial(element)) {
          return res.send("meterial cannot include special chearacters")
        }
      }
    }

    if (!incomingdata.pipeSize) {
        return res.send("pipeSize is required")
      }
      if (incomingdata.pipeSize) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.pipeSize(element)) {
            return res.send("pipeSize cannot include special chearacters")
          }
        }
      }
  

      if (!incomingdata.diameter) {
        return res.send("diameter is required")
      }
      if (incomingdata.diameter) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.diameter(element)) {
            return res.send("diameter cannot include special chearacters")
          }
        }
      }
  
      if (!incomingdata.length) {
        return res.send("length is required")
      }
      if (incomingdata.length) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.length(element)) {
            return res.send("length cannot include special chearacter")
          }
        }
      }
  

      if (!incomingdata.application) {
        return res.send("length is required")
      }
      if (incomingdata.application) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.application(element)) {
            return res.send("application cannot include special chearacter")
          }
        }
      }
  
      
      if (!incomingdata.pipePrice) {
        return res.send("length is required")
      }
      if (incomingdata.pipePrice) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.pipePrice(element)) {
            return res.send("pipePrice cannot include special chearacter")
          }
        }
      }


      if (!incomingdata.pipeQuantity) {
        return res.send("length is required")
      }
      if (incomingdata.pipeQuantity) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.pipeQuantity(element)) {
            return res.send("pipeQuantity cannot include special chearacter")
          }
        }
      }


      if (!incomingdata.pipeSellingPrice) {
        return res.send("length is required")
      }
      if (incomingdata.pipeSellingPrice) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.pipeSellingPrice(element)) {
            return res.send("pipeSellingPricey cannot include special chearacter")
          }
        }
      }


      
      if (!incomingdata.pipeRetailPrice) {
        return res.send("length is required")
      }
      if (incomingdata.pipeRetailPrice) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )
  
        const specialchrecracters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]
  
        for (const element of specialchrecracters) {
          if (incomingdata.pipeSellingPrice(element)) {
            return res.send("pipeRetailPrice cannot include special chearacter")
          }
        }
      }


  };
  model.exports = { validatebody }
