System.register(["angular2/core", "./todo-service", "./todo-item-renderer", "./started-pipe"], function(exports_1) {
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
    var core_1, todo_service_1, todo_item_renderer_1, started_pipe_1;
    var TodoList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_item_renderer_1_1) {
                todo_item_renderer_1 = todo_item_renderer_1_1;
            },
            function (started_pipe_1_1) {
                started_pipe_1 = started_pipe_1_1;
            }],
        execute: function() {
            TodoList = (function () {
                function TodoList(todoService) {
                    this.todoService = todoService;
                }
                TodoList = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        pipes: [started_pipe_1.StartedPipe],
                        directives: [todo_item_renderer_1.TodoItemRenderer],
                        template: "<div>\n    <ul>\n      <li *ngFor=\"#todo of todoService.todos | started\">\n        <todo-item-renderer\n        [todo]=\"todo\"\n        (toggle)=\"todoService.toggleTodo($event)\"\n        ></todo-item-renderer>\n      </li>\n    </ul>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoList);
                return TodoList;
            }());
            exports_1("TodoList", TodoList);
        }
    }
});
//# sourceMappingURL=todo-list.js.map