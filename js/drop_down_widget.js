// admin part drowpdown widget add button
$(document).ready(function() {
  $('.add-new').click(function () {
    $(this).before('<div class="form-group selection no-margin">\
          <label for="select" class="col-md-1 control-label"><i class="fa fa-lg fa-minus-square"></i></label>\
          <div class="col-md-5 no-padding">\
            <select class="form-control pokeType">\
              <option value="None">Type</option>\
              <option value="Fire">Fire</option>\
              <option value="Water">Water</option>\
              <option value="Ice">Ice</option>\
              <option value="Psychic">Psychic</option>\
              <option value="Grass">Grass</option>\
              <option value="Dark">Dark</option>\
            </select>\
          </div>\
          <div class="col-md-5 no-padding">\
            <select class="col-sm-3 glowing form-control pokemonSelect"></select>\
          </div>\
          <div class="col-md-1"></div>\
        </div>');
  })

  // for dropdown widget remove button
  $('.selection-form').on('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    var clicked = e.target;
    if ($(clicked).parents('.selection').length && ($(clicked).is('label') || $(clicked).is('i'))) {
      $(clicked).parents('.selection').remove();
    }  
  });
  
});

