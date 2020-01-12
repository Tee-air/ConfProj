var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  columnWidth: 100
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
      label: "test"
  };
  console.log(jsonObject);
  
  //json.stringify
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

$grid.on( 'click', '.grid-item', function( event ) {
  $(  event.currentTarget  ).toggleClass('selectedElt');
  $grid.packery('layout');
});