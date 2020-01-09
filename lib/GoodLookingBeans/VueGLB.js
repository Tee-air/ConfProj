class Vue {
  constructor(label){
    //this.emptySpace;
    this.elts = [];
    this.label = label;
  }
  
  addElement(elt){
    console.log(elt);
    this.elts.push(elt);
  }
  
  getEltById(elt){
    //this.logAllElt();
    var result = null;
    //console.log(elt);
    for (var i = 0; i < this.elts.length; i++){
      var obj = this.elts[i];
      var idSubmit, idTmp;
      idSubmit = $(elt).attr("id");
      idTmp = $(obj.objectJQ).attr("id");
      if (idSubmit === idTmp){
        result = obj;
        console.log(result);
        return result;
      }
    }
  }
  
  logAllElt(){
    console.log(this.elts);
  }
  
  getNumberElement(){
    return this.elts.length;
  }
  
  isEltSelected(elt){
    let bool = -1;
    for (var i = 0; i < this.elts.length; i++){
      let tmpObj = this.elts.length[i];
      if (elt === tmpObj){
        bool = i;
      }
    }
    return bool;
  }
  
  removeEltFromArray(elt){
    
  }
  
  
}