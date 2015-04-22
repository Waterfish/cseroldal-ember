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
  data.buffer.push("\n                        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "foodplans", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(8, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
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
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "foodplans", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"9":function(depth0,helpers,partials,data) {
  data.buffer.push("Kaja-terv");
  },"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "auth.security.permissions.godmode", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(16, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                    <li class=\"pull-right\">\n                        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">\n                            Logout\n                        </a>\n                    </li>\n");
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "manage", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "manage", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(14, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  data.buffer.push("                            <span class=\"glyphicon glyphicon-wrench\"></span>\n                            Manage\n");
  },"16":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(17, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                        Profile ");
  stack1 = helpers._triageMustache.call(depth0, "auth.currentUser.name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"19":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "login", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(20, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "register", {"name":"link-to","hash":{
    'tagName': ("li")
  },"hashTypes":{'tagName': "STRING"},"hashContexts":{'tagName': depth0},"fn":this.program(23, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"20":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "login", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(21, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"21":function(depth0,helpers,partials,data) {
  data.buffer.push("Login");
  },"23":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "register", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(24, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  },"24":function(depth0,helpers,partials,data) {
  data.buffer.push("Register");
  },"26":function(depth0,helpers,partials,data) {
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
  stack1 = helpers['if'].call(depth0, "auth.currentUser", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.program(19, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"container\">\n");
  stack1 = helpers.each.call(depth0, "auth", "in", "auths", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(26, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["foodplans"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div id=\"foodplans-template\" class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "left", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"col-md-9\">\n            ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "right", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        </div>\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["foodplans_edit"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("            <em>Szerkesztő:</em><span>");
  stack1 = helpers._triageMustache.call(depth0, "authorList", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("            <em>Létrehozva:</em><span>");
  stack1 = helpers._triageMustache.call(depth0, "createdDate", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("            <em>Módosítva:</em><span>");
  stack1 = helpers._triageMustache.call(depth0, "modifiedDate", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("        <h3>Napok</h3>\n        <div>\n");
  stack1 = helpers.each.call(depth0, "day", "in", "days", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n");
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("            <div class=\"plan-day\">\n                <div class=\"plan-day-header\">\n                    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "datepicker", {"name":"view","hash":{
    'class': ("form-control"),
    'value': ("day.date"),
    'placeholder': ("Dátum")
  },"hashTypes":{'class': "STRING",'value': "ID",'placeholder': "STRING"},"hashContexts":{'class': depth0,'value': depth0,'placeholder': depth0},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n\n                    <div class=\"plan-day-header-actions\">\n                        <button class=\"btn btn-ghost\"\n                                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addMeal", "day", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">\n                            <span class=\"glyphicon glyphicon-plus\"\n                                aria-hidden=\"true\">\n                            </span>\n\n                        </button>\n                        <button class=\"btn btn-ghost\"\n                                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeDay", "day", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">\n                            <span class=\"glyphicon glyphicon-trash\"\n                                aria-hidden=\"true\">\n                            </span>\n                        </button>\n                    </div>\n                </div>\n");
  stack1 = helpers['if'].call(depth0, "day.meals", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </div>\n");
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                <div class=\"plan-day-meal-container panel panel-default\">\n");
  stack1 = helpers.each.call(depth0, "meal", "in", "day.meals", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(10, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("                    <div class=\"plan-day-meal\">\n                        <div class=\"meal-header\">\n                            <div class=\"meal-header-item\">\n                                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {"name":"view","hash":{
    'class': ("form-control"),
    'prompt': ("Étkezés tipusa"),
    'value': ("meal.type"),
    'optionLabelPath': ("content.label"),
    'optionValuePath': ("content.value"),
    'content': ("mealTypes")
  },"hashTypes":{'class': "STRING",'prompt': "STRING",'value': "ID",'optionLabelPath': "STRING",'optionValuePath': "STRING",'content': "ID"},"hashContexts":{'class': depth0,'prompt': depth0,'value': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'content': depth0},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n\n                                <div class=\"meal-header-actions\">\n                                    <button class=\"btn btn-ghost\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeMeal", "day", "meal", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">\n                                        <span class=\"glyphicon glyphicon-trash\"\n                                            aria-hidden=\"true\">\n                                        </span>\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"meal-header-item\">\n                                ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control meal-name"),
    'id': (""),
    'value': ("meal.foodName"),
    'placeholder': ("Étel név"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n                                <span class=\"gutter\"></span>\n                                <div class=\"input-group\">\n                                    ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control meal-portion"),
    'value': ("meal.serving"),
    'placeholder': ("porció"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n                                    <span class=\"input-group-addon\">fo</span>\n                                </div>\n                            </div>\n                        </div>\n");
  stack1 = helpers['if'].call(depth0, "meal.foods", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.program(14, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                    </div>\n");
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th>Étel</th>\n                                    <th colspan=\"2\">mennyiseg/fő</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n");
  stack1 = helpers.each.call(depth0, "food", "in", "meal.foods", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("                                <tr class=\"full-cost\">\n                                    <td colspan=\"2\">\n                                        Teljes ár\n                                    </td>\n                                    <td colspan=\"2\">\n                                        <span class=\"value\">");
  stack1 = helpers._triageMustache.call(depth0, "meal.sumPrice", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span> rsd\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n");
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("                                <tr class=\"food-item\">\n                                    <td class=\"food-name\" colspan=\"2\">\n                                        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "chosen", {"name":"view","hash":{
    'class': (""),
    'value': ("food.food_id"),
    'prompt': ("Valassz"),
    'optionLabelPath': ("content.label"),
    'optionValuePath': ("content.guid"),
    'content': ("food_list")
  },"hashTypes":{'class': "STRING",'value': "ID",'prompt': "STRING",'optionLabelPath': "STRING",'optionValuePath': "STRING",'content': "ID"},"hashContexts":{'class': depth0,'value': depth0,'prompt': depth0,'optionLabelPath': depth0,'optionValuePath': depth0,'content': depth0},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n                                    </td>\n                                    <td class=\"quantity\">\n                                        ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': (""),
    'value': ("food.head_quantity"),
    'placeholder': ("mennyiseg"),
    'type': ("number")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n                                    </td>\n                                </tr>\n                                <tr class=\"food-item\">\n                                    <td class=\"\">");
  stack1 = helpers._triageMustache.call(depth0, "food.serving", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td class=\"cost\">");
  stack1 = helpers._triageMustache.call(depth0, "food.price.rsd", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td class=\"cost\">");
  stack1 = helpers._triageMustache.call(depth0, "food.cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                                    <td class=\"actions\">\n                                        <button class=\"btn btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFood", "meal", "food", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Remove</button>\n                                    </td>\n                                </tr>\n                                <!-- <tr class=\"food-item\">\n                                    <td class=\"food-test\" colspan=\"3\">\n                                    </td>\n                                </tr> -->\n");
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("                        <button class=\"btn btn-ghost\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addFood", "meal", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">\n                            <span class=\"glyphicon glyphicon-plus\"\n                                aria-hidden=\"true\">\n                            </span>\n                        </button>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class=\"container-fluid foodplan-edit\">\n    <h2>Kaja-terv szerkesztése</h2>\n    <form class=\"\" role=\"form\">\n        <div class=\"small plan-info\">\n");
  stack1 = helpers['if'].call(depth0, "authors", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "created", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "modified", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"plan-title\">Terv címe:</label>\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("plan-title"),
    'value': ("title"),
    'placeholder': ("Cím"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label\" for=\"plan-description\">Leírás:</label>\n            ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("plan-description"),
    'value': ("description"),
    'placeholder': ("Leírás"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n        </div>\n");
  stack1 = helpers['if'].call(depth0, "days", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        <div class=\"form-group plan-actions\">\n            <button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addDay", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">\n                <span class=\"glyphicon glyphicon-plus\"\n                      aria-hidden=\"true\">\n                </span>\n                Adj hozza napot\n            </button>\n        </div>\n    </form>\n    <div class=\"clearfix\">\n        <button class=\"btn pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Cancel</button>\n        <button class=\"btn btn-primary pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Save</button>\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["foodplans_foods"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <div class=\"row panel panel-default\">\n        <form class=\"col-md-12 food-edit-form\" role=\"form\">\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"food-title\">Cím:</label>\n                ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("food-title"),
    'value': ("currentFood.label"),
    'placeholder': ("Cím"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group\">\n                <label class=\"control-label\" for=\"food-info\">Leírás:</label>\n                ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("food-info"),
    'value': ("currentFood.info"),
    'placeholder': ("Részletes leírás"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-md-6\">\n                    <label class=\"control-label\" for=\"food-price\">Ár:</label>\n                    ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("food-price"),
    'value': ("currentFood.price.rsd"),
    'placeholder': ("Ár dinárban"),
    'type': ("number")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n                </div>\n                <div class=\"form-group col-md-6\">\n                    <label class=\"control-label\" for=\"food-baseunit\">Egység:</label>\n                    ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("food-baseunit"),
    'value': ("currentFood.baseunit"),
    'placeholder': ("pl: 1 kg, 1 liter, db"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n                </div>\n                <!-- <div class=\"form-group col-md-6\">\n                    <label class=\"control-label\" for=\"food-currency\">Valuta:</label>\n                </div> -->\n            </div>\n            <div class=\"row\">\n                <div class=\"form-group col-md-12\">\n                    <label class=\"control-label\" for=\"food-price-link\">Link:</label>\n                    ");
  data.buffer.push(escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'id': ("food-price-link"),
    'value': ("currentFood.price.link"),
    'placeholder': ("Link a forrásra"),
    'type': ("text")
  },"hashTypes":{'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'type': "STRING"},"hashContexts":{'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'type': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n                </div>\n            </div>\n            <div class=\"row\">\n                <button class=\"col-xs-4 col-xs-offset-1 btn btn-primary\"\n                    ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveFoodEdit", "currentFood", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Mentés</button>\n                <button class=\"col-xs-4 col-xs-offset-2 btn btn-secondary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelFoodEdit", "currentFood", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Mégse</button>\n            </div>\n        </form>\n    </div>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("            <div class=\"food\">\n                <div class=\"food-row\">\n                    <div class=\"food-label\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "food.label", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                    <div class=\"food-price\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "food.price.rsd", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push(" rsd / ");
  stack1 = helpers._triageMustache.call(depth0, "food.baseunit", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                    <div class=\"food-actions\">\n                        <a class=\"btn btn-ghost btn-sm\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'href': ("food.price.link")
  },"hashTypes":{'href': "ID"},"hashContexts":{'href': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n                            <span\n                                class=\"glyphicon glyphicon-shopping-cart\"\n                                aria-hidden=\"true\">\n                            </span>\n                        </a>\n                        <button class=\"btn btn-ghost btn-sm\"\n                                ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editFood", "food", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">\n                            <span\n                                class=\"glyphicon glyphicon-edit\"\n                                aria-hidden=\"true\">\n                            </span>\n                        </button>\n                        <button class=\"btn btn-ghost btn-sm\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteFood", "food", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">\n                            <span\n                                class=\"glyphicon glyphicon-trash\"\n                                aria-hidden=\"true\">\n                            </span>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"food-row food-info\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "food.info", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class=\"container-fluid food-list-panel\">\n    <div class=\"row food-list-panel-header\">\n        <div class=\"col-md-12\">\n            <h3>Ételek</h3>\n            <button class=\"btn btn-ghost\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "newFood", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">\n                <span class=\"glyphicon glyphicon-plus\"\n                    aria-hidden=\"true\">\n                </span>\n            </button>\n        </div>\n    </div>\n\n");
  stack1 = helpers['if'].call(depth0, "currentFood", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    <div class=\"row\">\n        <div class=\"col-md-12\">\n");
  stack1 = helpers.each.call(depth0, "food", "in", "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </div>\n    </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["foodplans_foods_index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("Foods Is my thing\n");
  },"useData":true});

Ember.TEMPLATES["foodplans_index"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("Új kajaterv");
  },"3":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("                    <tr>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "plan.title", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "plan.createdModifiedDate", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>");
  stack1 = helpers._triageMustache.call(depth0, "plan.authorList", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</td>\n                        <td>\n                            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", "plan", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Edit</button>\n                            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", "plan", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data})));
  data.buffer.push(">Torol</button>\n                        </td>\n                    </tr>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div>\n    <div>\n        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "foodplans.new", {"name":"link-to","hash":{
    'replace': (true),
    'activeClass': ("selected"),
    'role': ("button"),
    'class': ("btn btn-primary")
  },"hashTypes":{'replace': "BOOLEAN",'activeClass': "STRING",'role': "STRING",'class': "STRING"},"hashContexts":{'replace': depth0,'activeClass': depth0,'role': depth0,'class': depth0},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div>\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>Cim</th><th>Létrehozva/Módosítva</th><th>Szerzok</th><th></th>\n                </tr>\n            </thead>\n            <tbody>\n");
  stack1 = helpers.each.call(depth0, "plan", "in", "model", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </tbody>\n        </table>\n    </div>\n</div>\n");
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
  data.buffer.push(">Facebook bejelentkezés</button>\n    </div>\n    <div>\n        <ul>\n            <li><span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shortcut_login", "admin@cseroldal.com", "secret", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING","STRING"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Admin</span> - admin@cseroldal.com / secret</li>\n            <li><span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shortcut_login", "one@cseroldal.com", "secret", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING","STRING"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">One</span> - one@cseroldal.com / secret</li>\n            <li><span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shortcut_login", "two@cseroldal.com", "secret", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING","STRING"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Two</span> - two@cseroldal.com / secret</li>\n            <li><span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shortcut_login", "three@cseroldal.com", "secret", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING","STRING"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Three</span> - three@cseroldal.com / secret</li>\n            <li><span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "shortcut_login", "four@cseroldal.com", "secret", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING","STRING","STRING"],"contexts":[depth0,depth0,depth0],"data":data})));
  data.buffer.push(">Four</span> - four@cseroldal.com / secret</li>\n        </ul>\n    </div>\n</form>\n");
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

Ember.TEMPLATES["notfound"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<div class=\"\">\n    Hoppa, ez nem lett meg.\n</div>\n");
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