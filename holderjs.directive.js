"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// credit: https://stackoverflow.com/a/46673111/1361529
var core_1 = require("@angular/core");
var HolderjsDirective = /** @class */ (function () {
    function HolderjsDirective(el, ren) {
        this.el = el;
        this.ren = ren;
        //Holder.run({images:el.nativeElement});
    }
    HolderjsDirective.prototype.ngAfterViewInit = function () {
        Holder.run({ images: this.el.nativeElement });
    };
    HolderjsDirective = __decorate([
        core_1.Directive({
            selector: '[holderjs]'
        })
    ], HolderjsDirective);
    return HolderjsDirective;
}());
exports.HolderjsDirective = HolderjsDirective;
//# sourceMappingURL=holderjs.directive.js.map