experiment_spec_array = [];

var SettingObject = {
  cursor_size : 0,
  target_diameter : 0,
  fullscreen : true,
  flipscreen : false,
  return_movement : false,
  _screen : 0,
  custom_stim_enable : false,
  custom_stim_file : "",
  set_default_values : function() {
    this.cursor_size = 0.05;
    this.target_diameter = 0.05;
    this.fullscreen = true;
    this.flipscreen = false;
    this.return_movement = false;
    this._screen = 0;
    this.custom_stim_enable = false;
  }
};

function ExpSpecObject(id) {

  this.id = id;

  this.trial_type = "";
  this.task_name = "";

  //Pause task only//
  this.pause_button_wait = true;
  this.pause_instruction = "";
  this.pausetime = 0;

  //Cursor task only//
  this.num_targets = 0;
  this.min_angle = 0;
  this.max_angle = 0;
  this.num_trials = 0;
  this.rotation_angle = 0;
  this.final_rotation_angle = 0;
  this.target_distance_ratio = 0;
  this.rotation_change_type = 0;
  this.terminal_feedback = 0;
  this.lag = 0;

  this.set_default_values = function(){
    this.trial_type = 'pause';
    this.pausetime = 0;

    this.rotation_angle = 0;
    this.final_rotation_angle = 0;
    this.terminal_feedback = false;
  };
}

function set_setting_spec(json_spec){
  SettingObject.set_default_values();
  for(var property in Object.keys(json_spec.settings)){
    if (SettingObject.hasOwnProperty(property)) {
      SettingObject[property] = json_spec.settings[property];
    }
  }
}

function set_experiment_spec(json_spec){
  for (var i = 0; i < json_spec.experiment.length; i++){
    var spec_set = new ExpSpecObject(i);
    spec_set.set_default_values();

    for(var property in json_spec.experiment[i]) {
      if (spec_set.hasOwnProperty(property)) {
        spec_set[property] = json_spec.experiment[i][property];
      }
    }
    experiment_spec_array[i] = spec_set;
  }
}

set_setting_spec(JSONspecs);
set_experiment_spec(JSONspecs);
