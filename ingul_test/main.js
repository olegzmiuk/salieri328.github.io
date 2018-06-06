(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  height: 100%;\n}\n\n.pit,\n.lobby {\n  /* padding: 20px; */\n}\n\n.pit {\n  /* box-sizing: border-box; */\n  width: 380px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.lobby {\n  margin-left: 420px;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.pit-container {\n  float: left;\n  min-height: 80%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 33%;\n}\n\n.lobby-container {\n  height: 100%;\n  padding-top: 20px;\n}\n\n.container {\n  /* display: flex; */\n  box-sizing: border-box;\n  height: 100%;\n  padding: 0 20px 20px;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0px 0px 15px #bbb;\n}\n\n.container: after {\n  content: '';\n  display: block;\n  height: 0;\n  width: 100%;\n  clear: both;\n}\n\n.car-container {\n  float: left;\n}\n\n.pit-title,\n.lobby-title {\n  font-size: 20px;\n  text-align: center;\n}\n\n.pit-title {\n  padding: 20px 0 0px;\n}\n\n.lobby-title {\n  padding: 10px 0 10px;\n}\n\n.create-new {\n  float: left;\n  margin-top: 30px;\n  margin-left: 10px;\n  text-align: center;\n  font-size: 30px;\n  line-height: 46px;\n  height: 50px;\n  width: 50px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 100%;\n  color: #fff;\n  cursor: pointer;\n}\n\n.reset {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div class=\"pit\">\n    <div class=\"container\">\n      <div class=\"pit-title\">\n        P I T\n      </div>\n      <div [dragula]=\"'bag'\" class=\"pit-container\" id=\"pit1\">\n        <div *ngFor=\"let car of pit1Cars\" class=\"car-container\" id=\"{{ car.id }}\">\n          <car [car]=\"car\" (onSave)=\"saveGrid($event)\" (onDelete)=\"deleteCar($event)\"></car>\n        </div>\n      </div>\n      <div [dragula]=\"'bag'\" class=\"pit-container\" id=\"pit2\">\n        <div *ngFor=\"let car of pit2Cars\" class=\"car-container\" id=\"{{ car.id }}\">\n          <car [car]=\"car\" (onSave)=\"saveGrid($event)\" (onDelete)=\"deleteCar($event)\"></car>\n        </div>\n      </div>\n      <div [dragula]=\"'bag'\" class=\"pit-container\" id=\"pit3\">\n        <div *ngFor=\"let car of pit3Cars\" class=\"car-container\" id=\"{{ car.id }}\">\n          <car [car]=\"car\" (onSave)=\"saveGrid($event)\" (onDelete)=\"deleteCar($event)\"></car>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"lobby\">\n    <div class=\"lobby-title\">\n      L O B B Y\n    </div>\n    <div class=\"container\">\n      <div class=\"lobby-container\" [dragula]=\"'bag'\" id=\"lobby\">\n        <div *ngFor=\"let car of lobbyCars; let i = index\" class=\"car-container\" id=\"{{ car.id }}\">\n          <car [car]=\"car\" (onSave)=\"saveGrid($event)\" (onDelete)=\"deleteCar($event)\"></car>\n        </div>\n        <div class=\"create-new\" (click)=\"createNewCar()\">+</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"reset\" (click)=\"resetData()\">Reset</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(storageService, dragulaService) {
        var _this = this;
        this.storageService = storageService;
        this.dragulaService = dragulaService;
        dragulaService.drag.subscribe(function (value) {
            // console.log('drag', value);
        });
        dragulaService.drop.subscribe(function (_a) {
            var bag = _a[0], car = _a[1], to = _a[2], from = _a[3];
            if (to.id !== from.id) {
                var carObject = lodash__WEBPACK_IMPORTED_MODULE_1__["find"](_this.allCars, { id: +car.id });
                carObject ? carObject.placement = to.id : null;
            }
            _this.refreshIndexes();
            _this.saveGrid();
        });
        this.allCars = storageService.getData();
        if (!this.allCars.length) {
            this.initCars();
        }
        this.pit1Cars = this.filterCarsByPlacement(this.allCars, 'pit1');
        this.pit2Cars = this.filterCarsByPlacement(this.allCars, 'pit2');
        this.pit3Cars = this.filterCarsByPlacement(this.allCars, 'pit3');
        this.lobbyCars = this.filterCarsByPlacement(this.allCars, 'lobby');
    }
    AppComponent.prototype.initCars = function () {
        var carsMock = [
            {
                name: 'car 1',
                id: 1,
                placement: 'lobby',
                color: 'green'
            },
            {
                name: 'car 2',
                id: 2,
                placement: 'lobby',
                color: 'green'
            },
            {
                name: 'car 3',
                id: 3,
                placement: 'lobby',
                color: 'red'
            },
            {
                name: 'car 4',
                id: 4,
                placement: 'lobby',
                color: 'green'
            },
            {
                name: 'car 5',
                id: 5,
                placement: 'pit1',
                color: 'green'
            }
        ];
        this.storageService.setData(carsMock);
        this.allCars = carsMock;
    };
    AppComponent.prototype.resetData = function () {
        this.storageService.setData([]);
        window.location.reload();
    };
    AppComponent.prototype.saveGrid = function () {
        this.storageService.setData(this.allCars);
    };
    AppComponent.prototype.createNewCar = function (car) {
        this.allCars.push({
            id: Date.now(),
            name: 'new car',
            placement: 'lobby',
            color: 'green'
        });
        this.storageService.setData(this.allCars);
    };
    AppComponent.prototype.deleteCar = function (car) {
        lodash__WEBPACK_IMPORTED_MODULE_1__["remove"](this.allCars, { id: car.id });
        this.storageService.setData(this.allCars);
    };
    AppComponent.prototype.filterCarsByPlacement = function (allCars, placement) {
        return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](allCars, { placement: placement });
    };
    AppComponent.prototype.refreshIndexes = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/car/car.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/car/car.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".car {\n  position: relative;\n  display: block;\n  padding: 20px 0 25px;\n  width: 90px;\n  min-height: 45px;\n  margin: 10px;\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  text-align: center;\n}\n\n.car.green {\n  background: rgba(0, 168, 0, 0.5);\n}\n\n.car.red {\n  background: rgba(224, 0, 0, 0.5);\n}\n\n.title {\n  white-space: normal;\n}\n\n.edit-field {\n  width: 88px;\n  text-align: center;\n  font-size: 14px;\n  background: none;\n  border: none;\n  outline: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.color-switcher {\n  position: absolute;\n  cursor: pointer;\n  right: 0px;\n  bottom: 0px;\n  padding: 0 5px;\n  font-size: 13px;\n  line-height: 20px;\n  /* height: 20px; */\n  /* width: 20px; */\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.delete-btn {\n  position: absolute;\n  cursor: pointer;\n  right: -13px;\n  top: -13px;\n  width: 15px;\n  height: 15px;\n  font-size: 13px;\n  line-height: 13px;\n  border-radius: 100%;\n  /* height: 20px; */\n  /* width: 20px; */\n  background: rgba(0, 0, 0, 0.2);\n}\n"

/***/ }),

/***/ "./src/app/components/car/car.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/car/car.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"car {{ car.color }}\">\n  <div (click)=\"delete()\" class=\"delete-btn\">x</div>\n  <div [hidden]=\"isEditing\"\n       class=\"title\"\n       (click)=\"editCar()\">\n    {{ car.name }}\n  </div>\n  <input [hidden]=\"!isEditing\"\n         type=\"text\"\n         class=\"edit-field\"\n         [(ngModel)]=\"car.name\"\n         (focusout)=\"isEditing && cancel()\">\n  <div (click)=\"switchColor()\" class=\"color-switcher\">color</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/car/car.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/car/car.component.ts ***!
  \*************************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarComponent = /** @class */ (function () {
    function CarComponent(hostElement, changeDetectorRef) {
        this.hostElement = hostElement;
        this.changeDetectorRef = changeDetectorRef;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEditing = false;
    }
    CarComponent.prototype.ngOnInit = function () {
        // console.log('this.car', this.car);
    };
    CarComponent.prototype.ngOnChanges = function () {
        this.changeDetectorRef.detectChanges();
    };
    CarComponent.prototype.switchColor = function () {
        this.car.color === 'green' ? this.car.color = 'red' : this.car.color = 'green';
        this.onSave.emit(this.car);
    };
    CarComponent.prototype.editCar = function () {
        var _this = this;
        this.isEditing = true;
        this.previousName = this.car.name;
        setTimeout(function () {
            _this.setFocus();
        }, 0);
    };
    CarComponent.prototype.save = function () {
        if (!this.car.name.length) {
            this.cancel();
            return;
        }
        this.isEditing = false;
        this.onSave.emit(this.car);
    };
    CarComponent.prototype.cancel = function () {
        this.car.name = this.previousName;
        this.isEditing = false;
    };
    CarComponent.prototype.delete = function () {
        this.onDelete.emit(this.car);
    };
    CarComponent.prototype.setFocus = function () {
        var host = this.hostElement.nativeElement;
        var elemToFocus = host.querySelector('.edit-field');
        if (elemToFocus) {
            elemToFocus.focus();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarComponent.prototype, "car", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CarComponent.prototype, "onSave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CarComponent.prototype, "onDelete", void 0);
    CarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/components/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.css */ "./src/app/components/car/car.component.css")],
            host: {
                '(keyup.esc)': 'cancel()',
                '(keyup.enter)': 'save()'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_dragula__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"]
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_3__["CarComponent"]
            ],
            exports: [
                ___WEBPACK_IMPORTED_MODULE_3__["CarComponent"]
            ],
            providers: [],
            entryComponents: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car/car.component */ "./src/app/components/car/car.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return _car_car_component__WEBPACK_IMPORTED_MODULE_0__["CarComponent"]; });




/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return _storage_service__WEBPACK_IMPORTED_MODULE_0__["StorageService"]; });




/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = /** @class */ (function () {
    function StorageService() {
        this.cars = [];
        this.initData();
    }
    StorageService.prototype.initData = function () {
        this.cars = this.getFromStorage();
        console.log('this.cars', this.cars);
    };
    StorageService.prototype.getData = function () {
        return this.cars;
    };
    StorageService.prototype.setData = function (cars) {
        this.saveToStorage(cars);
    };
    StorageService.prototype.getFromStorage = function () {
        var cars = JSON.parse(localStorage.getItem('cars'));
        return cars == null ? [] : cars;
    };
    StorageService.prototype.saveToStorage = function (cars) {
        localStorage.setItem('cars', JSON.stringify(cars));
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleg/web/salieri328.github.io/ingul/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map