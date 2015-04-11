function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"foo\"><h2>Esta es una lista de Foos</h2><ul><li ng-repeat=\"foo in foos\">{{foo}}</li></ul></div>");;return buf.join("");
}