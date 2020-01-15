
var $gridDad = $(".gridDad").packery({
  itemSelector: ".gridDad-item",
  containerStyle: null
});

var $grid = $('.grid').packery({
  itemSelector: '.grid-item'
});

$grid.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  $grid.packery( 'bindDraggabillyEvents', draggie );
});

function addBlock(){
  var blockTmp = $("<div></div>");
  var classTmp = "grid-item";
  

  
  if($("#rangeWidth").val() !==  "1"){
    classTmp += " grid-item--width" + $("#rangeWidth").val();
  }

  if($("#rangeHeight").val() !==  "1"){
    classTmp += " grid-item--height" + $("#rangeHeight").val();
  }

  blockTmp.attr("class", classTmp);
  $grid.packery().append(blockTmp)
  .packery('appended', blockTmp);
  
  var jsonObject = {
      id: 1,
      idVue: 1, 
      width: $("#rangeWidth").val(),
      height: $("#rangeHeight").val()
  };
  console.log(jsonObject);
  ajaxReq('/addBlock', '', jsonObject);
}

function removeBlock(){
  var allElts = $('.grid-item');
  var selectedElts = $('.selectedElt');
  
  $grid.packery( 'remove', selectedElts )
  .packery('layout');
}

function removeAllBlocks(){
  var allElts = $($grid.packery('getItemElements'));
  console.log(allElts);
}

initEditor();

function initEditor(){
  var objects =[{
    id: "1",
    width: "2",
    height: "1"
  },{
    id: "2",
    width: "2",
    height: "1"
  },{
    id: "3",
    width: "2",
    height: "2"
  },{
    id: "4",
    width: "1",
    height: "1"
  },{
    id: "5",
    width: "1",
    height: "2"
  },{
    id: "6",
    width: "2",
    height: "1"
  },{
    id: "7",
    width: "1",
    height: "2"
  }];

  for(var i = 0; i< objects.length; i++){
    addItemToGrid(objects[i]);
  }


}

function addItemToGrid(item){
  var blockTmp = $("<div></div>");
  var classTmp = "grid-item";

  if(item.width !== "1"){
    classTmp += " grid-item--width" + item.width;
  }

  if(item.height !==  "1"){
    classTmp += " grid-item--height" + item.height;
  }

  blockTmp.attr("class", classTmp);
  $grid.packery().append(blockTmp)
  .packery('appended', blockTmp);

}

function getAllBlocks(){
  var allElts = $('.grid-item');

  for(var i = 0; i< allElts.length; i++){
    var classTmp = $(allElts[i]).attr("class");
    var classs = classTmp.split(' ');

    classs[1]
    if (classs.length === 2){
      classs[2]
    }
    

    console.log(classTmp);
  }
}


function saveAll(){
  getAllBlocks();

  //ajaxReq('/saveAll', '', jsonObject);
}

$grid.on( 'click', '.grid-item', function( event ) {
  $(  event.currentTarget  ).toggleClass('selectedElt');
  $grid.packery('layout');
});