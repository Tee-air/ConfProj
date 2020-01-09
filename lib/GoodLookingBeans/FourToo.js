var eltsGlobal = new Array();
let vueGlobal = new Vue("vueDev");

$.fn.exists = function() {
  return this.length !== 0;
};



function addBlock() {
  var blockTmp = $("<div></div>");
  blockTmp.attr("class", "defaultBlock");
  var idEltTmp = vueGlobal.getNumberElement();
  blockTmp.attr("id", vueGlobal.label + "_" + idEltTmp);
  $("#templateView").append(blockTmp);
  vueGlobal.addElement(new Element(idEltTmp, blockTmp));
}

function getBlocksSpace() {
  // Chercher du bloc
  // calculer toujours la largeur max, si elle est supérieure à la largeur du bloc à ajouter aller chercher au prochain bloc

  var heightMax, widthMax;
  var blocs = $(".bloc");
  for (var bloc in blocs) {
    var blocos = blocs[bloc];
  }
}

//////////////////////////////////////////////////////////////////
////////// Triggers //////////////
var cntrlIsPressed = false;

$(document).keydown(function(event) {
  if (event.which == "17") cntrlIsPressed = true;
});

$(document).keyup(function() {
  cntrlIsPressed = false;
});



//Cet element est cliqué{
//
//}
//ou
//Cet element n'est pas cliqué{
//
//} 
//
function isThereSelectedElt(){
  return eltsGlobal.length > 0;
}

//Ctrl est appuyé{
//--Ajouter à la liste
//}Ctrl n'est pas appuyé{
//--Vider la liste
//--Ajouter à la liste
//}

//Ajouter à la liste.
function selectElt(elt){
  //console.log(elt);
  var eltIndex = isEltSelected(elt);
  if(eltIndex > -1){
    
    elt.css("outline", "");
    eltsGlobal.splice(eltIndex, 1);
    
  }else {
    
    let eltID =  elt.attr("id");
    elt.css("outline", "1vh solid green");
    var tmpObj = vueGlobal.getEltById(elt);
    eltsGlobal.push(tmpObj);
    console.log(tmpObj);
  }
}

//Vider la liste.
function emptyArray(){
  //console.log(eltsGlobal);
 for(var i = 0; i < eltsGlobal.length; i++){
   var tmpElt = eltsGlobal[i];
   //console.log(tmpElt);
   $(tmpElt.objectJQ).css("outline", "");
 }
  eltsGlobal.length = 0;
}



$("#templateView").click(function(event) {
  var elt = $(event.target);
  if(elt.is('div')){
      if (cntrlIsPressed){
        selectElt(elt);
      }else{
        emptyArray();
        selectElt(elt);
        $("#heightSelected").val();
        $("#widthSelected").val();
      }
  }
});

function convertPXtoVH(eltHeight, eltWidth) {
  eltHeight = eltHeight.replace("px", "");
  eltWidth = eltWidth.replace("px", "");

  var vhTmp, vwTmp;
  var maxHeight = $(window).height();
  var maxWidth = $(window).width();

  vhTmp = +eltHeight / maxHeight * 100;
  vwTmp = +eltWidth / maxWidth * 100;

  var obj = {
    height: Math.round(vhTmp),
    width: Math.round(vwTmp)
  };

  return obj;
}

function removeElementArray(elt) {
  if (elt === "all") {
    for (eltGlobal in eltsGlobal) {
      var objJQ = eltsGlobal[eltGlobal].objectJQ;
      var idObjJQ = $(objJQ).attr("id");
      $(objJQ).attr("id", idObjJQ.replace("blocoSelected", "").trim());
      $(objJQ).css("outline", "");
    }
    eltsGlobal.splice(0, eltsGlobal.length);
  } else {
    var numberOfDeleted = "";
      elt.attr("id", eltID.replace("blocoSelected", "").trim());
      elt.css("outline", "");
      var idSplit = getElementId(elt);
    for (var i = 0; i < eltsGlobal.length; i++) {
      if (+idSplit === eltsGlobal[i].id) {
        numberOfDeleted += i + " ";
        var elt = eltsGlobal.splice(i, 1);
      }
    }
  }
}

function isEltSelected(elt){
    let bool = -1;
    for (var i = 0; i < eltsGlobal.length; i++){
      let tmpObj = eltsGlobal.length[i];
      if (elt === tmpObj){
        bool = i;
      }
    }
    return bool;
 }

function getElementId(elt) {
  var tmp = elt.attr("id").split(" ");
  var idTmp = tmp[0].split("_");
  return idTmp[1];
}

function resizeElement() {
  for (eltGlobal in eltsGlobal) {
    var newHeight = $("#heightSelected").val();
    var newWidth = $("#widthSelected").val();
    $(eltsGlobal[eltGlobal]).css("height", newHeight + "vh");
    $(eltsGlobal[eltGlobal]).css("width", newWidth + "vw");
  }
}

function removeBlock() {
  for (var etlGlobal in eltsGlobal){
    $(eltsGlobal[etlGlobal].objectJQ).remove();
  }
  eltsGlobal.length = 0;
}
