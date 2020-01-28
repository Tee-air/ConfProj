var $gridDad = $(".gridDad").packery({
  itemSelector: ".gridDad-item",
  containerStyle: null
});

var $grid = $('.grid').packery({
  itemSelector: '.grid-item'
});

$grid.find('.grid-item').each(function (i, gridItem) {
  var draggie = new Draggabilly(gridItem);
  $grid.packery('bindDraggabillyEvents', draggie);
});

function addBlock() {
  var blockTmp = $("<div></div>");
  var classTmp = "grid-item";

  if ($("#rangeWidth").val() !== "1") {
    classTmp += " grid-item--width" + $("#rangeWidth").val();
  }

  if ($("#rangeHeight").val() !== "1") {
    classTmp += " grid-item--height" + $("#rangeHeight").val();
  }

  var jsonObject = {
    id: 1,
    width: $("#rangeWidth").val(),
    height: $("#rangeHeight").val()
  };

  console.log(jsonObject);

  blockTmp.attr("class", classTmp);
  $(blockTmp).data("object", jsonObject);
  $grid.packery().append(blockTmp)
    .packery('appended', blockTmp);

  ajaxReq('/addBlock', '', jsonObject);
}

function removeBlock() {
  var allElts = $('.grid-item');
  var selectedElts = $('.selectedElt');

  $grid.packery('remove', selectedElts)
    .packery('layout');
}

function removeAllBlocks() {
  var allElts = $($grid.packery('getItemElements'));
  console.log(allElts);
}

initEditor();

function initEditor() {
 

  for (var i = 0; i < objects.length; i++) {
    addItemToGrid(objects[i]);
  }


}

function addItemToGrid(item) {
  var blockTmp = $("<div></div>");
  var classTmp = "grid-item";

  if (item.width !== "1") {
    classTmp += " grid-item--width" + item.width;
  }

  if (item.height !== "1") {
    classTmp += " grid-item--height" + item.height;
  }

  blockTmp.attr("class", classTmp);
  $(blockTmp).data("object", item);
  $grid.packery().append(blockTmp)
    .packery('appended', blockTmp);

}

function getAllBlocks() {
  var allElts = $('.grid-item');
  var objects = [];
  for (var i = 0; i < allElts.length; i++) {
    var eltTmp = allElts[i];
    objects.push($(eltTmp).data("object"));
  }
  return objects;
}


function saveAll() {
  var objects = getAllBlocks();
  var objectsTmp = {
    idVue: 1,
    label: "test"
  }
  objectsTmp.content = objects;

  console.log("objects", objectsTmp);
  var returned = ajaxReq('/saveAll', '', objectsTmp);
  console.log("returned :" + returned);
}

$grid.on('click', '.grid-item', function (event) {
  $(event.currentTarget).toggleClass('selectedElt');
  $grid.packery('layout');
});

function test(){
  var objects = [{
    id: 1,
    width: "2",
    height: "1"
  }, {
    id: 2,
    width: "2",
    height: "1"
  }, {
    id: 3,
    width: "2",
    height: "2"
  }, {
    id: 4,
    width: "1",
    height: "1"
  }, {
    id: 5,
    width: "1",
    height: "2"
  }, {
    id: 6,
    width: "2",
    height: "1"
  }, {
    id: 7,
    width: "1",
    height: "2"
  }];
}