Ember.TEMPLATES["application"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"2":function(depth0,helpers,partials,data) {
  data.buffer.push("Home");
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("                        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "gameHub", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "gameHub", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"6":function(depth0,helpers,partials,data) {
  data.buffer.push("Jatek");
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "auth.security.permissions.godmode", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                    <li class=\"pull-right\">\n                        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">\n                            Logout\n                        </a>\n                    </li>\n");
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "manage", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(10, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "manage", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  data.buffer.push("                            <span class=\"glyphicon glyphicon-wrench\"></span>\n                            Manage\n");
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(14, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                        Profile ");
  stack1 = helpers._triageMustache.call(depth0, "auth.currentUser.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "login", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(17, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "register", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(20, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "login", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(18, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"18":function(depth0,helpers,partials,data) {
  data.buffer.push("Login");
  },"20":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "register", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(21, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"21":function(depth0,helpers,partials,data) {
  data.buffer.push("Register");
  },"23":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("    <div class=\"row\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "auth.email", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "auth.uid", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "auth.user", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "auth.guid", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"#\">");
  stack1 = helpers._triageMustache.call(depth0, "appName", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "auth.currentUser", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "auth.currentUser", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.program(16, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"container\">\n");
  stack1 = helpers.each.call(depth0, "auth", "in", "auths", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(23, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["forbidden"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div class=\"\">\n    Az oldal nem elérhető, nincs meg a felhatalmazásod hozzá.\n</div>\n");
  },"useData":true});

Ember.TEMPLATES["gamehub"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("New");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("Settings");
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "gameHub.view", "", {"name":"link-to","hash":{
    'class': ("list-group-item")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"fn":this.program(6, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                        ");
  stack1 = helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                        <div class=\"small\">\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "shortDescription", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"gamelist col-md-4\">\n            <div class=\"panel\">\n                <div class=\"panel-body\">\n                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "gameHub.new", {"name":"link-to","hash":{
    'replace': (true),
    'activeClass': ("selected"),
    'role': ("button"),
    'class': ("btn btn-primary")
  },"hashTypes":{'replace': "BOOLEAN",'activeClass': "STRING",'role': "STRING",'class': "STRING"},"hashContexts":{'replace': depth0,'activeClass': depth0,'role': depth0,'class': depth0},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "gameHub.settings", {"name":"link-to","hash":{
    'replace': (true),
    'activeClass': ("selected"),
    'role': ("button"),
    'class': ("btn btn-default")
  },"hashTypes":{'replace': "BOOLEAN",'activeClass': "STRING",'role': "STRING",'class': "STRING"},"hashContexts":{'replace': depth0,'activeClass': depth0,'role': depth0,'class': depth0},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"list-group\">\n");
  stack1 = helpers.each.call(depth0, "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </div>\n        </div>\n        <div class=\"gamedetail col-md-8\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["gamehub_edit"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("                <span class=\"list-item-bullet\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "location.label", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <a class=\"glyphicon glyphicon-remove btn-nostyle\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeLocation", "location", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">\n                    </a>\n                </span>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div>\n    <h2>Játék szerkesztése</h2>\n    <form class=\"\" role=\"form\">\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"game-title\">Cím:</label>\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("game-title"),
    'value': ("title"),
    'placeholder': ("A játék címe"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"game-location\">Helyigény:</label>\n            ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {"name":"view","hash":{
    'value': ("selectedLocation"),
    'optionLabelPath': ("content.label"),
    'optionValuePath': ("content.id"),
    'content': ("gameLocations"),
    'prompt': ("Válassz helyszínt"),
    'id': ("game-location")
  },"hashTypes":{'value': "ID",'optionLabelPath': "STRING",'optionValuePath': "STRING",'content': "ID",'prompt': "STRING",'id': "STRING"},"hashContexts":{'value': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'content': depth0,'prompt': depth0,'id': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n            <button class=\"btn btn-primary pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLocation", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Add</button>\n        </div>\n        <div class=\"small list-group\">\n            <span>Location:</span>\n");
  stack1 = helpers.each.call(depth0, "location", "in", "locations", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"game-short-description\">Rövid leírás:</label>\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("game-short-description"),
    'value': ("shortDescription"),
    'placeholder': ("Rövid leírás"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"game-description\">Leírás:</label>");
  data.buffer.push(escapeExpression(((helpers.textarea || (depth0 && depth0.textarea) || helperMissing).call(depth0, {"name":"textarea","hash":{
    'class': ("form-control"),
    'id': ("game-description"),
    'value': ("description"),
    'placeholder': ("Részletes leírás")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"game-players-number\">Játékosok száma:</label>");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("game-players-number"),
    'value': ("playersNumber"),
    'placeholder': ("min player-max player")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"game-play-time\">Játékidő:</label>");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("game-play-time"),
    'value': ("playTime"),
    'placeholder': ("min time-max time")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n    </form>\n    <div class=\"clearfix\">\n        <button class=\"btn pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Cancel</button>\n        <button class=\"btn btn-primary pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Save</button>\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["gamehub_index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div>\n    <p class=\"text-primary\">Select game</p>\n    <p>\n    Ideas:\n        <ul class=\"small\">\n            <li>Show in this container some statistics</li>\n        </ul>\n    </p>\n</div>\n");
  },"useData":true});

Ember.TEMPLATES["gamehub_settings"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("            <span class=\"list-item-bullet\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "location.label", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                <a class=\"glyphicon glyphicon-remove btn-nostyle\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeLocation", "location", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">\n                </a>\n            </span>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<form class=\"\" role=\"form\">\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"location\">New location:</label>\n        ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'action': ("addLocation"),
    'class': ("form-control"),
    'id': ("location"),
    'value': ("locationLabel"),
    'placeholder': ("Add location"),
    'type': ("text")
  },"hashTypes":{'action': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'action': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        <!-- <button class=\"btn pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addLocation", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Add</button> -->\n    </div>\n    <div class=\"small list-group\">\n");
  stack1 = helpers.each.call(depth0, "location", "in", "locations", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n</form>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["gamehub_view"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "gameHub.edit", "", {"name":"link-to","hash":{
    'role': ("button"),
    'class': ("btn btn-default pull-right")
  },"hashTypes":{'role': "STRING",'class': "STRING"},"hashContexts":{'role': depth0,'class': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  data.buffer.push("            Edit\n");
  },"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("            <span class=\"list-item-bullet\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "location.label", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n            </span>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div>\n    <h3>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n        <button class=\"btn btn-warning pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Delete</button>\n");
  stack1 = helpers['if'].call(depth0, "isOwner", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </h3>\n    <div class=\"small list-group\">\n        <span>Location:</span>\n");
  stack1 = helpers.each.call(depth0, "location", "in", "locations", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n    <p><quote>");
  stack1 = helpers._triageMustache.call(depth0, "shortDescription", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</quote></p>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "description", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["home"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        HOME SWEET HOME\n    </div>\n</div>\n");
  },"useData":true});

Ember.TEMPLATES["login"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":text-info  hideMessage:hidden")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n    Az keresett oldal megtekintéséhez be kell lépni!\n</div>\n<form class=\"\" role=\"form\">\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"username\">Email:</label>\n        ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("username"),
    'value': ("email"),
    'placeholder': ("Email"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"password\">Jelszó:</label>\n        ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("password"),
    'value': ("password"),
    'placeholder': (""),
    'type': ("password")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group row\">\n        <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Belépés</button>\n        <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loginGoogle", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Google bejelentkezés</button>\n        <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loginFacebook", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Facebook bejelentkezés</button>\n    </div>\n    <div>\n        <ul>\n            <li>Admin - admin@cseroldal.com / secret</li>\n            <li>One - one@cseroldal.com / secret</li>\n            <li>Two - two@cseroldal.com / secret</li>\n            <li>Three - three@cseroldal.com / secret</li>\n            <li>Four - four@cseroldal.com / secret</li>\n        </ul>\n    </div>\n</form>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["manage"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("                <div class=\"list-group-item\">");
  stack1 = helpers._triageMustache.call(depth0, "pending.email", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "approve", "pending", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Approve</button>\n                    <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "reject", "pending", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Reject</button>\n                </div>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("                <div class=\"list-group-item\">");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <button class=\"btn\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", "user", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Delete</button>\n                </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <h3>Manage Pending users</h3>\n        <div class=\"list-group\">\n");
  stack1 = helpers.each.call(depth0, "pending", "in", "pendingAuths", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n    </div>\n    <div class=\"row\">\n        <h3>Manage Existing users</h3>\n        <div class=\"list-group\">\n");
  stack1 = helpers.each.call(depth0, "user", "in", "users", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["pending"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("Vissza a kezdőoldalra");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"panel panel-info\">\n    <div class=\"panel-body\">\n        Feljelentkezési kérelmed még feldolgozás alatt áll.\n    </div>\n    <div class=\"panel-footer\">\n    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{
    'replace': (true),
    'role': ("button"),
    'class': ("btn btn-primary")
  },"hashTypes":{'replace': "BOOLEAN",'role': "STRING",'class': "STRING"},"hashContexts":{'replace': depth0,'role': depth0,'class': depth0},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["register"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("    <div class=\"message\">\n        A kérelmed sikeresen el lett küldve. Feldolgozása után kapsz egy emailt a jelszavaddal.\n        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{
    'replace': (true),
    'role': ("button"),
    'class': ("btn btn-primary")
  },"hashTypes":{'replace': "BOOLEAN",'role': "STRING",'class': "STRING"},"hashContexts":{'replace': depth0,'role': depth0,'class': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  data.buffer.push("Vissza a kezdőoldalra");
  },"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"email\">E-mail:</label>\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("email"),
    'value': ("email"),
    'placeholder': ("E-mail cím"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-6\">\n                <label class=\"control-label\" for=\"password\">Jelszó:</label>\n                ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("password"),
    'value': ("password"),
    'placeholder': (""),
    'type': ("password")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group col-sm-6\">\n                <label class=\"control-label\" for=\"password_check\">Jelszó ismét:</label>\n                ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("password_check"),
    'value': ("password_check"),
    'placeholder': (""),
    'type': ("password")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"name\">Név:</label>\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("name"),
    'value': ("name"),
    'placeholder': ("Név"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"message\">Üzenet:</label>\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("message"),
    'value': ("message"),
    'placeholder': (""),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group row\">\n            <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "subscribe", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'disabled': ("formInvalid")
  },"hashTypes":{'disabled': "ID"},"hashContexts":{'disabled': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">Elküld</button>\n        </div>\n    </form>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div>\n");
  stack1 = helpers['if'].call(depth0, "submitted", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["registerg"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"message\">\n    A kérelmed sikeresen el lett küldve.\n    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{
    'replace': (true),
    'role': ("button"),
    'class': ("btn btn-primary")
  },"hashTypes":{'replace': "BOOLEAN",'role': "STRING",'class': "STRING"},"hashContexts":{'replace': depth0,'role': depth0,'class': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  data.buffer.push("Vissza a kezdőoldalra");
  },"4":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<form class=\"\" role=\"form\">\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            Nem regisztrált felhasználó\n        </div>\n        <div class=\"panel-body\">\n            Még nem vagy regisztrálva. Küldj egy kérelmet a feljelentkezése!\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"email\">E-mail:</label>\n        ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("email"),
    'value': ("email"),
    'placeholder': ("E-mail cím"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"name\">Név:</label>\n        ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'readonly': ("readonly"),
    'class': ("form-control"),
    'id': ("név"),
    'value': ("name"),
    'placeholder': ("Név"),
    'type': ("text")
  },"hashTypes":{'readonly': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'readonly': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group\">\n        <label class=\"control-label\" for=\"message\">Üzenet:</label>\n        ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("message"),
    'value': ("message"),
    'placeholder': (""),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n    </div>\n    <div class=\"form-group row\">\n        <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "subscribe", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Elküld</button>\n    </div>\n</form>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  stack1 = helpers['if'].call(depth0, "submitted", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"useData":true});

Ember.TEMPLATES["user"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<div class=\"row\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["user_edit"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        Edit user profile\n    </div>\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label for=\"familyname\"\n               class=\"col-sm-2 control-label\">\n               Family name\n        </label>\n        <div class=\"col-sm-10\">\n          ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("userProfile.familyname"),
    'placeholder': ("Familyname"),
    'type': ("text"),
    'class': ("form-control"),
    'id': ("familyname")
  },"hashTypes":{'value': "ID",'placeholder': "STRING",'type': "STRING",'class': "STRING",'id': "STRING"},"hashContexts":{'value': depth0,'placeholder': depth0,'type': depth0,'class': depth0,'id': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstname\"\n               class=\"col-sm-2 control-label\">\n               First name\n        </label>\n        <div class=\"col-sm-10\">\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'value': ("userProfile.firstname"),
    'placeholder': ("Firstname"),
    'type': ("text"),
    'class': ("form-control"),
    'id': ("firstname")
  },"hashTypes":{'value': "ID",'placeholder': "STRING",'type': "STRING",'class': "STRING",'id': "STRING"},"hashContexts":{'value': depth0,'placeholder': depth0,'type': depth0,'class': depth0,'id': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n      </div>\n    </form>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["user_index"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("            Edit\n");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user.edit", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </div>\n    <div class=\"row\">\n        View user profile\n    </div>\n</div>\n");
  return buffer;
},"useData":true});