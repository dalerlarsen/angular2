System.register(["angular2/core"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoItemRenderer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TodoItemRenderer = (function () {
                function TodoItemRenderer() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoItemRenderer.prototype, "todo", void 0);
                TodoItemRenderer = __decorate([
                    core_1.Component({
                        selector: 'todo-item-renderer',
                        template: "<div>\n    <span [hidden]=\"todo.status == 'completed'\">{{todo.title}}</span>\n    <button (click)=\"todo.toggle()\">Toggle</button>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoItemRenderer);
                return TodoItemRenderer;
            }());
            exports_1("TodoItemRenderer", TodoItemRenderer);
        }
    }
});
//# sourceMappingURL=todo-item-renderer.js.map