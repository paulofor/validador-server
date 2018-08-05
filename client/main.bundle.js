webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/* coloquei manualmente */


var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projetos_projetos_component__ = __webpack_require__("./src/app/projetos/projetos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projeto_cria_projeto_cria_component__ = __webpack_require__("./src/app/projeto-cria/projeto-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_projeto_canvas_projeto_component__ = __webpack_require__("./src/app/canvas-projeto/canvas-projeto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canvas_mvp_canvas_mvp_component__ = __webpack_require__("./src/app/canvas-mvp/canvas-mvp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_proposta_valor_canvas_proposta_valor_component__ = __webpack_require__("./src/app/canvas-proposta-valor/canvas-proposta-valor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__canvas_dor_ganho_canvas_dor_ganho_component__ = __webpack_require__("./src/app/canvas-dor-ganho/canvas-dor-ganho.component.ts");







var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'dorGanhoCanvas/:id', component: __WEBPACK_IMPORTED_MODULE_6__canvas_dor_ganho_canvas_dor_ganho_component__["a" /* CanvasDorGanhoComponent */] },
    { path: 'valorCanvas/:id', component: __WEBPACK_IMPORTED_MODULE_5__canvas_proposta_valor_canvas_proposta_valor_component__["a" /* CanvasPropostaValorComponent */] },
    { path: 'mvpCanvas/:id', component: __WEBPACK_IMPORTED_MODULE_4__canvas_mvp_canvas_mvp_component__["a" /* CanvasMvpComponent */] },
    { path: 'projetoCanvas/:id', component: __WEBPACK_IMPORTED_MODULE_3__canvas_projeto_canvas_projeto_component__["a" /* CanvasProjetoComponent */] },
    { path: 'projetos', component: __WEBPACK_IMPORTED_MODULE_1__projetos_projetos_component__["a" /* ProjetosComponent */] },
    { path: 'projetos/insere', component: __WEBPACK_IMPORTED_MODULE_2__projeto_cria_projeto_cria_component__["a" /* ProjetoCriaComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"blue\" data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(/assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n\r\n    <div class=\"main-panel\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projetos_projetos_component__ = __webpack_require__("./src/app/projetos/projetos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__ = __webpack_require__("./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projeto_cria_projeto_cria_component__ = __webpack_require__("./src/app/projeto-cria/projeto-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projeto_edita_projeto_edita_component__ = __webpack_require__("./src/app/projeto-edita/projeto-edita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projeto_exibe_projeto_exibe_component__ = __webpack_require__("./src/app/projeto-exibe/projeto-exibe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__canvas_projeto_canvas_projeto_component__ = __webpack_require__("./src/app/canvas-projeto/canvas-projeto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servicos_projeto_service__ = __webpack_require__("./src/app/servicos/projeto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_sdk_services_custom__ = __webpack_require__("./src/app/shared/sdk/services/custom/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_sdk_services_custom_ProjetoCanvas__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_sdk_services_custom_ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_sdk_services_custom_MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/MvpCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_sdk_sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_sdk_sockets_socket_driver__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_sdk_services_custom_SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_sdk_services_core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_sdk_storage_storage_swaps__ = __webpack_require__("./src/app/shared/sdk/storage/storage.swaps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__projeto_canvas_cria_projeto_canvas_cria_component__ = __webpack_require__("./src/app/projeto-canvas-cria/projeto-canvas-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__projeto_canvas_edita_projeto_canvas_edita_component__ = __webpack_require__("./src/app/projeto-canvas-edita/projeto-canvas-edita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__canvas_mvp_canvas_mvp_component__ = __webpack_require__("./src/app/canvas-mvp/canvas-mvp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__mvp_canvas_cria_mvp_canvas_cria_component__ = __webpack_require__("./src/app/mvp-canvas-cria/mvp-canvas-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__mvp_canvas_edita_mvp_canvas_edita_component__ = __webpack_require__("./src/app/mvp-canvas-edita/mvp-canvas-edita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__canvas_proposta_valor_canvas_proposta_valor_component__ = __webpack_require__("./src/app/canvas-proposta-valor/canvas-proposta-valor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__canvas_dor_ganho_canvas_dor_ganho_component__ = __webpack_require__("./src/app/canvas-dor-ganho/canvas-dor-ganho.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__dor_ganho_canvas_cria_dor_ganho_canvas_cria_component__ = __webpack_require__("./src/app/dor-ganho-canvas-cria/dor-ganho-canvas-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dor_ganho_canvas_edita_dor_ganho_canvas_edita_component__ = __webpack_require__("./src/app/dor-ganho-canvas-edita/dor-ganho-canvas-edita.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* Coloquei manualmente */






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__projetos_projetos_component__["a" /* ProjetosComponent */],
                __WEBPACK_IMPORTED_MODULE_7__projeto_cria_projeto_cria_component__["a" /* ProjetoCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__projeto_edita_projeto_edita_component__["a" /* ProjetoEditaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__projeto_exibe_projeto_exibe_component__["a" /* ProjetoExibeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__canvas_projeto_canvas_projeto_component__["a" /* CanvasProjetoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__projeto_canvas_cria_projeto_canvas_cria_component__["a" /* ProjetoCanvasCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__projeto_canvas_edita_projeto_canvas_edita_component__["a" /* ProjetoCanvasEditaComponent */],
                __WEBPACK_IMPORTED_MODULE_29__canvas_mvp_canvas_mvp_component__["a" /* CanvasMvpComponent */],
                __WEBPACK_IMPORTED_MODULE_30__mvp_canvas_cria_mvp_canvas_cria_component__["a" /* MvpCanvasCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_31__mvp_canvas_edita_mvp_canvas_edita_component__["a" /* MvpCanvasEditaComponent */],
                __WEBPACK_IMPORTED_MODULE_32__canvas_proposta_valor_canvas_proposta_valor_component__["a" /* CanvasPropostaValorComponent */],
                __WEBPACK_IMPORTED_MODULE_33__canvas_dor_ganho_canvas_dor_ganho_component__["a" /* CanvasDorGanhoComponent */],
                __WEBPACK_IMPORTED_MODULE_34__dor_ganho_canvas_cria_dor_ganho_canvas_cria_component__["a" /* DorGanhoCanvasCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_35__dor_ganho_canvas_edita_dor_ganho_canvas_edita_component__["a" /* DorGanhoCanvasEditaComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_24__projeto_canvas_cria_projeto_canvas_cria_component__["a" /* ProjetoCanvasCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_28__projeto_canvas_edita_projeto_canvas_edita_component__["a" /* ProjetoCanvasEditaComponent */],
                __WEBPACK_IMPORTED_MODULE_30__mvp_canvas_cria_mvp_canvas_cria_component__["a" /* MvpCanvasCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_31__mvp_canvas_edita_mvp_canvas_edita_component__["a" /* MvpCanvasEditaComponent */],
                __WEBPACK_IMPORTED_MODULE_34__dor_ganho_canvas_cria_dor_ganho_canvas_cria_component__["a" /* DorGanhoCanvasCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_35__dor_ganho_canvas_edita_dor_ganho_canvas_edita_component__["a" /* DorGanhoCanvasEditaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["e" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material__["b" /* MatButtonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__servicos_projeto_service__["a" /* ProjetoService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_sdk_services_custom__["b" /* ProjetoApi */],
                __WEBPACK_IMPORTED_MODULE_14__shared_sdk_services_custom_ProjetoCanvas__["a" /* ProjetoCanvasApi */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_19__shared_sdk_sockets_socket_connections__["a" /* SocketConnection */],
                __WEBPACK_IMPORTED_MODULE_20__shared_sdk_sockets_socket_driver__["a" /* SocketDriver */],
                __WEBPACK_IMPORTED_MODULE_21__shared_sdk_services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_22__shared_sdk_services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_23__shared_sdk_storage_storage_swaps__["a" /* InternalStorage */],
                __WEBPACK_IMPORTED_MODULE_15__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */],
                __WEBPACK_IMPORTED_MODULE_16__shared_sdk_services_custom_ProjetoCanvasMySql__["a" /* ProjetoCanvasMySqlApi */],
                __WEBPACK_IMPORTED_MODULE_17__shared_sdk_services_custom_MvpCanvasMySql__["a" /* MvpCanvasMySqlApi */],
                __WEBPACK_IMPORTED_MODULE_13__shared_sdk_services_custom__["a" /* GanhoDorCanvasMySqlApi */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canvas-dor-ganho/canvas-dor-ganho.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"assets/css/vendor.36bb0ebb.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/main.b03f2ea9.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/canvas-digicom2.css\">\r\n\r\n<div class=\"dashboard\" style=\"padding-top: 0px;\">\r\n  <div class=\"canvas-container\" id=\"canvas\">\r\n    <header class=\"header-canvas-core\">\r\n      <span *ngIf=\"projeto\" class=\"canvas-input-title\">{{projeto.nome}} - Dor/Ganho Canvas</span>\r\n    </header>\r\n\r\n    <div class=\"canvas-core-container\">\r\n      <div class=\"canvas-core\">\r\n\r\n        <!-- Coluna 1-->\r\n        <section class=\"canvas-coluna-ganhodor\">\r\n          <!-- Painel A -->\r\n          <div class=\"canvas-board atividades\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title pink\">Produtos & Servicos</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp-coluna\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of produtosServicos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('PRODUTO_SERVICO')\">+ Adicionar post-it</button>\r\n          </div>\r\n\r\n        </section>\r\n\r\n\r\n        <!-- Coluna 2-->\r\n        <section class=\"canvas-coluna-ganhodor\">\r\n          <!-- Painel A -->\r\n          <div class=\"canvas-board -half atividades\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title pink\">Criadores de Ganho</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of criaGanhos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('CRIA_GANHO')\">+ Adicionar post-it</button>\r\n          </div>\r\n          <!-- Painel B -->\r\n          <div class=\"canvas-board -half recursos \">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title green\">Alivio de Dores</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\" style=\"overflow-y: scroll;\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of aliviaDores\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('ALIVIA_DOR')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n\r\n\r\n\r\n        <!-- Coluna 3-->\r\n        <section class=\"canvas-coluna-ganhodor\">\r\n          <!-- Painel A -->\r\n          <div class=\"canvas-board -half atividades\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title pink\">Ganhos</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of ganhos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('GANHO')\">+ Adicionar post-it</button>\r\n          </div>\r\n          <!-- Painel B -->\r\n          <div class=\"canvas-board -half recursos \">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title green\">Dores</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\" style=\"overflow-y: scroll;\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of dores\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('DOR')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- Coluna 4-->\r\n        <section class=\"canvas-coluna-ganhodor\">\r\n          <!-- Painel A -->\r\n          <div class=\"canvas-board atividades\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title pink\">Tarefas</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp-coluna\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of tarefas\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('TAREFA')\">+ Adicionar post-it</button>\r\n          </div>\r\n\r\n        </section>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/canvas-dor-ganho/canvas-dor-ganho.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/canvas-dor-ganho/canvas-dor-ganho.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDorGanhoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom__ = __webpack_require__("./src/app/shared/sdk/services/custom/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dor_ganho_canvas_edita_dor_ganho_canvas_edita_component__ = __webpack_require__("./src/app/dor-ganho-canvas-edita/dor-ganho-canvas-edita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dor_ganho_canvas_cria_dor_ganho_canvas_cria_component__ = __webpack_require__("./src/app/dor-ganho-canvas-cria/dor-ganho-canvas-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constantes_base_url__ = __webpack_require__("./src/app/constantes/base.url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_sdk___ = __webpack_require__("./src/app/shared/sdk/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CanvasDorGanhoComponent = /** @class */ (function () {
    function CanvasDorGanhoComponent(dialog, projetoService, canvasService, router, route) {
        this.dialog = dialog;
        this.projetoService = projetoService;
        this.canvasService = canvasService;
        this.router = router;
        this.route = route;
    }
    CanvasDorGanhoComponent.prototype.ngOnInit = function () {
        console.log('CanvasDorGanhoComponent');
        __WEBPACK_IMPORTED_MODULE_7__shared_sdk___["a" /* LoopBackConfig */].setBaseURL(__WEBPACK_IMPORTED_MODULE_6__constantes_base_url__["b" /* BASE_URL */]);
        __WEBPACK_IMPORTED_MODULE_7__shared_sdk___["a" /* LoopBackConfig */].setApiVersion(__WEBPACK_IMPORTED_MODULE_6__constantes_base_url__["a" /* API_VERSION */]);
        this.carregaDados();
    };
    CanvasDorGanhoComponent.prototype.openDialog = function (tipoArea) {
        var _this = this;
        console.log('Tipo:', tipoArea);
        this.dialog.afterAllClosed.subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.carregaDados();
        });
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dor_ganho_canvas_cria_dor_ganho_canvas_cria_component__["a" /* DorGanhoCanvasCriaComponent */], {
            width: '600px',
            data: {
                projeto: this.projeto,
                tipo: tipoArea
            }
        });
    };
    CanvasDorGanhoComponent.prototype.editaItem = function (projetoCanvas) {
        console.log('ID Edicao: ' + JSON.stringify(projetoCanvas));
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dor_ganho_canvas_edita_dor_ganho_canvas_edita_component__["a" /* DorGanhoCanvasEditaComponent */], {
            width: '600px',
            data: {
                projeto: this.projeto,
                edicao: projetoCanvas
            }
        });
    };
    CanvasDorGanhoComponent.prototype.carregaDados = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var userId = params['id'];
            console.log('IdProjeto: ', userId);
            _this.projetoService.findById(userId)
                .subscribe(function (valor) {
                console.log('Projeto: ' + JSON.stringify(valor));
                _this.projeto = valor;
                _this.carregaCanvas();
            });
        });
    };
    CanvasDorGanhoComponent.prototype.carregaCanvas = function () {
        var _this = this;
        this.projetoService.getGanhoDorCanvasMySqls(this.projeto.id)
            .subscribe(function (valor) {
            console.log('Lista: ' + JSON.stringify(valor));
            _this.itensCanvas = valor;
            _this.distribuiItensCanvas();
        });
    };
    CanvasDorGanhoComponent.prototype.distribuiItensCanvas = function () {
        this.produtosServicos = this.itensCanvas.filter(function (item) { return item.tipo === 'PRODUTO_SERVICO'; });
        this.criaGanhos = this.itensCanvas.filter(function (item) { return item.tipo === 'CRIA_GANHO'; });
        this.aliviaDores = this.itensCanvas.filter(function (item) { return item.tipo === 'ALIVIA_DOR'; });
        this.dores = this.itensCanvas.filter(function (item) { return item.tipo === 'DOR'; });
        this.ganhos = this.itensCanvas.filter(function (item) { return item.tipo === 'GANHO'; });
        this.tarefas = this.itensCanvas.filter(function (item) { return item.tipo === 'TAREFA'; });
    };
    CanvasDorGanhoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-canvas-dor-ganho',
            template: __webpack_require__("./src/app/canvas-dor-ganho/canvas-dor-ganho.component.html"),
            styles: [__webpack_require__("./src/app/canvas-dor-ganho/canvas-dor-ganho.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom__["c" /* ProjetoMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom__["a" /* GanhoDorCanvasMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CanvasDorGanhoComponent);
    return CanvasDorGanhoComponent;
}());



/***/ }),

/***/ "./src/app/canvas-mvp/canvas-mvp.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"assets/css/vendor.36bb0ebb.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/main.b03f2ea9.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/canvas-digicom2.css\">\r\n\r\n\r\n<div class=\"dashboard\" style=\"padding-top: 0px;\">\r\n  <div class=\"canvas-container\" id=\"canvas\">\r\n    <header class=\"header-canvas-core\">\r\n      <!--input type=\"text\" placeholder=\"Título do Canvas\" class=\"canvas-input-title\" value=\"xxx\">-->\r\n      <span *ngIf=\"projeto\" class=\"canvas-input-title\">{{projeto.nome}} - MVP Canvas</span>\r\n    </header>\r\n    <div class=\"canvas-core-container\">\r\n      <div class=\"canvas-core\">\r\n\r\n        <!-- Coluna 1-->\r\n        <section class=\"canvas-coluna-mvp\">\r\n          <!-- Painel A -->\r\n          <div class=\"canvas-board -half atividades\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title pink\">Personas & Plataformas</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of personas\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('PERSONA')\">+ Adicionar post-it</button>\r\n          </div>\r\n          <!-- Painel B -->\r\n          <div class=\"canvas-board -half recursos \"  >\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title green\">Jornadas</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\" style=\"overflow-y: scroll;\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of jornadas\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('JORNADA')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- Coluna 2-->\r\n        <section class=\"canvas-coluna-mvp\">\r\n\r\n          <!-- Painel a -->\r\n          <div class=\"canvas-board -terco proposta\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title yellow\">Visão do MVP</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp-menor\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of visoes\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('VISAO_MVP')\">+ Adicionar post-it</button>\r\n          </div>\r\n\r\n          <!-- Painel b -->\r\n          <div class=\"canvas-board -terco proposta\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title yellow\">Funcionalidades</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp-menor\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of funcionalidades\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('FUNCIONALIDADE')\">+ Adicionar post-it</button>\r\n          </div>\r\n\r\n          <!-- Painel b -->\r\n          <div class=\"canvas-board -terco proposta\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title yellow\">Custo & Cronograma</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp-menor\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of custos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('CUSTO_CRONOGRAMA')\">+ Adicionar post-it</button>\r\n          </div>\r\n\r\n        </section>\r\n\r\n        <!-- Coluna 3-->\r\n        <section class=\"canvas-coluna-mvp\">\r\n          <div class=\"canvas-board -half relacao\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title orange\">Resultado Esperado</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of resultados\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('RESULTADO')\">+ Adicionar post-it</button>\r\n          </div>\r\n          <div class=\"canvas-board -half canais\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title blue\">Métricas para validar as hipóteses de negócio</h3>\r\n            </header>\r\n            <ul class=\"canvas-post-mvp\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of metricas\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('METRICA')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/canvas-mvp/canvas-mvp.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/canvas-mvp/canvas-mvp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasMvpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/MvpCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mvp_canvas_edita_mvp_canvas_edita_component__ = __webpack_require__("./src/app/mvp-canvas-edita/mvp-canvas-edita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mvp_canvas_cria_mvp_canvas_cria_component__ = __webpack_require__("./src/app/mvp-canvas-cria/mvp-canvas-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constantes_base_url__ = __webpack_require__("./src/app/constantes/base.url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sdk___ = __webpack_require__("./src/app/shared/sdk/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CanvasMvpComponent = /** @class */ (function () {
    function CanvasMvpComponent(dialog, projetoService, canvasService, router, route) {
        this.dialog = dialog;
        this.projetoService = projetoService;
        this.canvasService = canvasService;
        this.router = router;
        this.route = route;
    }
    CanvasMvpComponent.prototype.ngOnInit = function () {
        console.log('CanvasMvpComponent');
        __WEBPACK_IMPORTED_MODULE_8__shared_sdk___["a" /* LoopBackConfig */].setBaseURL(__WEBPACK_IMPORTED_MODULE_7__constantes_base_url__["b" /* BASE_URL */]);
        __WEBPACK_IMPORTED_MODULE_8__shared_sdk___["a" /* LoopBackConfig */].setApiVersion(__WEBPACK_IMPORTED_MODULE_7__constantes_base_url__["a" /* API_VERSION */]);
        this.carregaDados();
    };
    CanvasMvpComponent.prototype.openDialog = function (tipoArea) {
        var _this = this;
        console.log('Tipo:', tipoArea);
        this.dialog.afterAllClosed.subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.carregaDados();
        });
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__mvp_canvas_cria_mvp_canvas_cria_component__["a" /* MvpCanvasCriaComponent */], {
            width: '600px',
            data: {
                projeto: this.projeto,
                tipo: tipoArea
            }
        });
    };
    CanvasMvpComponent.prototype.editaItem = function (projetoCanvas) {
        console.log('ID Edicao: ' + JSON.stringify(projetoCanvas));
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__mvp_canvas_edita_mvp_canvas_edita_component__["a" /* MvpCanvasEditaComponent */], {
            width: '600px',
            data: {
                projeto: this.projeto,
                edicao: projetoCanvas
            }
        });
    };
    CanvasMvpComponent.prototype.carregaDados = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var userId = params['id'];
            console.log('IdProjeto: ', userId);
            _this.projetoService.findById(userId)
                .subscribe(function (valor) {
                console.log('Projeto: ' + JSON.stringify(valor));
                _this.projeto = valor;
                _this.carregaCanvas();
            });
        });
    };
    CanvasMvpComponent.prototype.carregaCanvas = function () {
        var _this = this;
        this.projetoService.getMvpCanvasMySqls(this.projeto.id)
            .subscribe(function (valor) {
            console.log('Lista: ' + JSON.stringify(valor));
            _this.itensCanvas = valor;
            _this.distribuiItensCanvas();
        });
    };
    CanvasMvpComponent.prototype.distribuiItensCanvas = function () {
        this.personas = this.itensCanvas.filter(function (item) { return item.tipo === 'PERSONA'; });
        this.jornadas = this.itensCanvas.filter(function (item) { return item.tipo === 'JORNADA'; });
        this.visoes = this.itensCanvas.filter(function (item) { return item.tipo === 'VISAO_MVP'; });
        this.funcionalidades = this.itensCanvas.filter(function (item) { return item.tipo === 'FUNCIONALIDADE'; });
        this.resultados = this.itensCanvas.filter(function (item) { return item.tipo === 'RESULTADO'; });
        this.custos = this.itensCanvas.filter(function (item) { return item.tipo === 'CUSTO_CRONOGRAMA'; });
        this.metricas = this.itensCanvas.filter(function (item) { return item.tipo === 'METRICA'; });
    };
    CanvasMvpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-canvas-mvp',
            template: __webpack_require__("./src/app/canvas-mvp/canvas-mvp.component.html"),
            styles: [__webpack_require__("./src/app/canvas-mvp/canvas-mvp.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_MvpCanvasMySql__["a" /* MvpCanvasMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], CanvasMvpComponent);
    return CanvasMvpComponent;
}());



/***/ }),

/***/ "./src/app/canvas-projeto/canvas-projeto.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"assets/css/vendor.36bb0ebb.css\">\r\n<link rel=\"stylesheet\" href=\"assets/css/main.b03f2ea9.css\">\r\n\r\n<div class=\"dashboard\" style=\"padding-top: 0px;\">\r\n  <div class=\"canvas-container\" id=\"canvas\">\r\n    <header class=\"header-canvas-core\">\r\n      <!--input type=\"text\" placeholder=\"Título do Canvas\" class=\"canvas-input-title\" value=\"xxx\">-->\r\n      <span class=\"canvas-input-title\">{{projeto.nome}}</span>\r\n    </header>\r\n    <div class=\"canvas-core-container\">\r\n      <div class=\"canvas-core\">\r\n        <div class=\"canvas-column\">\r\n          <div class=\"canvas-board parceiros\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title red\">Parceiros Chave</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of parceiros\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('PARCEIRO')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </div>\r\n        <section class=\"canvas-column\">\r\n          <div class=\"canvas-board -half atividades\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title pink\">Atividades Chave</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of atividades\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n\r\n            </ul>\r\n            <button class=\"add-postit\"  (click)=\"openDialog('ATIVIDADE')\">+ Adicionar post-it</button>\r\n          </div>\r\n          <div class=\"canvas-board -half recursos\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title green\">Recursos Chave</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of recursos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('RECURSO')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n        <section class=\"canvas-column\">\r\n          <div class=\"canvas-board proposta\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title yellow\">Proposta de Valor</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of valores\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('VALOR')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n        <section class=\"canvas-column\">\r\n          <div class=\"canvas-board -half relacao\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title orange\">Relação com o Cliente</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of relacionamentos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('RELACIONAMENTO')\">+ Adicionar post-it</button>\r\n          </div>\r\n          <div class=\"canvas-board -half canais\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title blue\">Canais</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of canais\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('CANAL')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n        <section class=\"canvas-column\">\r\n          <div class=\"canvas-board segmentos\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title bluegreen\">Segmentos de Mercado</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n              <!-- -->\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of segmentos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n              <!-- -->\r\n\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('SEGMENTO')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n        <section class=\"canvas-column -half\">\r\n          <div class=\"canvas-board estrutura\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title purple\">Estrutura de Custos</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of custos\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('CUSTO')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n        <section class=\"canvas-column -half\">\r\n          <div class=\"canvas-board fontes\">\r\n            <header class=\"board-header\">\r\n              <h3 class=\"board-title brown\">Fontes de Renda</h3>\r\n            </header>\r\n            <ul class=\"canvas-posts\">\r\n              <li class=\"canvas-postit yellow\" *ngFor=\"let projetoCanvas of receitas\">\r\n                <p class=\"postit-name\">{{projetoCanvas.descricao}}</p>\r\n                <button class=\"btn\" (click)=\"editaItem(projetoCanvas)\">\r\n                  <span class=\"s s-pencil\"></span>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n            <button class=\"add-postit\" (click)=\"openDialog('RECEITA')\">+ Adicionar post-it</button>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/canvas-projeto/canvas-projeto.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/canvas-projeto/canvas-projeto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasProjetoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projeto_canvas_edita_projeto_canvas_edita_component__ = __webpack_require__("./src/app/projeto-canvas-edita/projeto-canvas-edita.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projeto_canvas_cria_projeto_canvas_cria_component__ = __webpack_require__("./src/app/projeto-canvas-cria/projeto-canvas-cria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constantes_base_url__ = __webpack_require__("./src/app/constantes/base.url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sdk___ = __webpack_require__("./src/app/shared/sdk/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CanvasProjetoComponent = /** @class */ (function () {
    function CanvasProjetoComponent(dialog, projetoService, projetoCanvasService, router, route) {
        this.dialog = dialog;
        this.projetoService = projetoService;
        this.projetoCanvasService = projetoCanvasService;
        this.router = router;
        this.route = route;
        this.parceiros = [];
        this.segmentos = [];
        this.valores = [];
        this.receitas = [];
        this.atividades = [];
        this.recursos = [];
        this.canais = [];
        this.custos = [];
    }
    CanvasProjetoComponent.prototype.ngOnInit = function () {
        console.log('CanvasProjetoComponent');
        __WEBPACK_IMPORTED_MODULE_8__shared_sdk___["a" /* LoopBackConfig */].setBaseURL(__WEBPACK_IMPORTED_MODULE_7__constantes_base_url__["b" /* BASE_URL */]);
        __WEBPACK_IMPORTED_MODULE_8__shared_sdk___["a" /* LoopBackConfig */].setApiVersion(__WEBPACK_IMPORTED_MODULE_7__constantes_base_url__["a" /* API_VERSION */]);
        this.carregaDados();
    };
    CanvasProjetoComponent.prototype.openDialog = function (tipoArea) {
        var _this = this;
        console.log('Tipo:', tipoArea);
        this.dialog.afterAllClosed.subscribe(function (result) {
            console.log("Dialog result: " + result);
            _this.carregaDados();
        });
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__projeto_canvas_cria_projeto_canvas_cria_component__["a" /* ProjetoCanvasCriaComponent */], {
            width: '600px',
            data: {
                projeto: this.projeto,
                tipo: tipoArea
            }
        });
    };
    CanvasProjetoComponent.prototype.editaItem = function (projetoCanvas) {
        console.log('ID Edicao: ' + JSON.stringify(projetoCanvas));
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__projeto_canvas_edita_projeto_canvas_edita_component__["a" /* ProjetoCanvasEditaComponent */], {
            width: '600px',
            data: {
                projeto: this.projeto,
                edicao: projetoCanvas
            }
        });
    };
    CanvasProjetoComponent.prototype.carregaDados = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var userId = params['id'];
            console.log('Id: ', userId);
            _this.projetoService.findById(userId)
                .subscribe(function (valor) {
                console.log('Item: ' + JSON.stringify(valor));
                _this.projeto = valor;
                _this.carregaCanvas();
            });
        });
    };
    CanvasProjetoComponent.prototype.carregaCanvas = function () {
        var _this = this;
        this.projetoService.getProjetoCanvasMySqls(this.projeto.id)
            .subscribe(function (valor) {
            console.log('Lista: ' + JSON.stringify(valor));
            _this.itensCanvas = valor;
            _this.distribuiItensCanvas();
        });
    };
    CanvasProjetoComponent.prototype.distribuiItensCanvas = function () {
        this.parceiros = this.itensCanvas.filter(function (item) { return item.tipo === 'PARCEIRO'; });
        this.segmentos = this.itensCanvas.filter(function (item) { return item.tipo === 'SEGMENTO'; });
        this.valores = this.itensCanvas.filter(function (item) { return item.tipo === 'VALOR'; });
        this.receitas = this.itensCanvas.filter(function (item) { return item.tipo === 'RECEITA'; });
        this.atividades = this.itensCanvas.filter(function (item) { return item.tipo === 'ATIVIDADE'; });
        this.recursos = this.itensCanvas.filter(function (item) { return item.tipo === 'RECURSO'; });
        this.relacionamentos = this.itensCanvas.filter(function (item) { return item.tipo === 'RELACIONAMENTO'; });
        this.canais = this.itensCanvas.filter(function (item) { return item.tipo === 'CANAL'; });
        this.custos = this.itensCanvas.filter(function (item) { return item.tipo === 'CUSTO'; });
    };
    CanvasProjetoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-canvas-projeto',
            template: __webpack_require__("./src/app/canvas-projeto/canvas-projeto.component.html"),
            styles: [__webpack_require__("./src/app/canvas-projeto/canvas-projeto.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_ProjetoCanvasMySql__["a" /* ProjetoCanvasMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], CanvasProjetoComponent);
    return CanvasProjetoComponent;
}());



/***/ }),

/***/ "./src/app/canvas-proposta-valor/canvas-proposta-valor.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  canvas-proposta-valor works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/canvas-proposta-valor/canvas-proposta-valor.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/canvas-proposta-valor/canvas-proposta-valor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasPropostaValorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanvasPropostaValorComponent = /** @class */ (function () {
    function CanvasPropostaValorComponent() {
    }
    CanvasPropostaValorComponent.prototype.ngOnInit = function () {
    };
    CanvasPropostaValorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-canvas-proposta-valor',
            template: __webpack_require__("./src/app/canvas-proposta-valor/canvas-proposta-valor.component.html"),
            styles: [__webpack_require__("./src/app/canvas-proposta-valor/canvas-proposta-valor.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CanvasPropostaValorComponent);
    return CanvasPropostaValorComponent;
}());



/***/ }),

/***/ "./src/app/constantes/base.url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_VERSION; });
var BASE_URL = 'http://validacao.kinghost.net:21101';
//export const BASE_URL = 'http://localhost:21101';
var API_VERSION = 'api';


/***/ }),

/***/ "./src/app/dor-ganho-canvas-cria/dor-ganho-canvas-cria.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cadastro de Hipótese - {{projeto.nome}}</h2>\r\n\r\n<form #hipoteseForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\r\n<mat-dialog-content>\r\n  <div class=\"example-container\">\r\n    <mat-form-field >\r\n      <textarea [(ngModel)]=\"model.descricao\"  \r\n        name=\"descricao\" matInput rows=\"6\" placeholder=\"Descricao\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button>Enviar</button>\r\n  <button mat-button mat-dialog-close>Cancelar</button>\r\n</mat-dialog-actions>\r\n</form>"

/***/ }),

/***/ "./src/app/dor-ganho-canvas-cria/dor-ganho-canvas-cria.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dor-ganho-canvas-cria/dor-ganho-canvas-cria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DorGanhoCanvasCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models__ = __webpack_require__("./src/app/shared/sdk/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DorGanhoCanvasCriaComponent = /** @class */ (function () {
    function DorGanhoCanvasCriaComponent(servico, dialogRef, data) {
        this.servico = servico;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DorGanhoCanvasCriaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Model: ' + JSON.stringify(this.model));
        this.servico.createGanhoDorCanvasMySqls(this.projeto.id, this.model, function (err, obj) {
            console.log("Erro:" + err.message);
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    DorGanhoCanvasCriaComponent.prototype.ngOnInit = function () {
        console.log('Data: ', JSON.stringify(this.data));
        this.model = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models__["b" /* GanhoDorCanvasMySql */]();
        this.projeto = this.data.projeto;
        this.tipo = this.data.tipo;
        this.model.projetoMySqlId = this.projeto.id;
        this.model.tipo = this.tipo;
    };
    DorGanhoCanvasCriaComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    DorGanhoCanvasCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dor-ganho-canvas-cria',
            template: __webpack_require__("./src/app/dor-ganho-canvas-cria/dor-ganho-canvas-cria.component.html"),
            styles: [__webpack_require__("./src/app/dor-ganho-canvas-cria/dor-ganho-canvas-cria.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */], Object])
    ], DorGanhoCanvasCriaComponent);
    return DorGanhoCanvasCriaComponent;
}());



/***/ }),

/***/ "./src/app/dor-ganho-canvas-edita/dor-ganho-canvas-edita.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cadastro de Hipótese - {{projeto.nome}}</h2>\r\n\r\n<form #hipoteseForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\r\n<mat-dialog-content>\r\n  <div class=\"example-container\">\r\n    <mat-form-field >\r\n      <textarea [(ngModel)]=\"model.descricao\"  \r\n        name=\"descricao\" matInput rows=\"6\" placeholder=\"Descricao\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button>Enviar</button>\r\n  <button mat-button mat-dialog-close>Cancelar</button>\r\n</mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/dor-ganho-canvas-edita/dor-ganho-canvas-edita.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dor-ganho-canvas-edita/dor-ganho-canvas-edita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DorGanhoCanvasEditaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom__ = __webpack_require__("./src/app/shared/sdk/services/custom/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DorGanhoCanvasEditaComponent = /** @class */ (function () {
    function DorGanhoCanvasEditaComponent(servico, dialogRef, data) {
        this.servico = servico;
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('MvpCanvasEditaComponent');
    }
    DorGanhoCanvasEditaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Model: ' + JSON.stringify(this.model));
        this.servico
            .updateAttributes(this.model.id, this.model, function (err, obj) {
            console.log("Erro:" + err.message);
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    DorGanhoCanvasEditaComponent.prototype.ngOnInit = function () {
        console.log('Data: ', JSON.stringify(this.data));
        this.model = this.data.edicao;
        this.projeto = this.data.projeto;
        //this.tipo = this.data.tipo;
        //this.model.projetoMySqlId = this.projeto.id;
        //this.model.tipo = this.tipo;
    };
    DorGanhoCanvasEditaComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    DorGanhoCanvasEditaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dor-ganho-canvas-edita',
            template: __webpack_require__("./src/app/dor-ganho-canvas-edita/dor-ganho-canvas-edita.component.html"),
            styles: [__webpack_require__("./src/app/dor-ganho-canvas-edita/dor-ganho-canvas-edita.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom__["a" /* GanhoDorCanvasMySqlApi */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */], Object])
    ], DorGanhoCanvasEditaComponent);
    return DorGanhoCanvasEditaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constantes_base_url__ = __webpack_require__("./src/app/constantes/base.url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk___ = __webpack_require__("./src/app/shared/sdk/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk___["a" /* LoopBackConfig */].setBaseURL(__WEBPACK_IMPORTED_MODULE_1__constantes_base_url__["b" /* BASE_URL */]);
        __WEBPACK_IMPORTED_MODULE_2__shared_sdk___["a" /* LoopBackConfig */].setApiVersion(__WEBPACK_IMPORTED_MODULE_1__constantes_base_url__["a" /* API_VERSION */]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/model/projeto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projeto; });
var Projeto = /** @class */ (function () {
    function Projeto(id, nome, mercado, valor, dor) {
        this.id = id;
        this.nome = nome;
        this.mercado = mercado;
        this.valor = valor;
        this.dor = dor;
    }
    return Projeto;
}());



/***/ }),

/***/ "./src/app/mvp-canvas-cria/mvp-canvas-cria.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cadastro de Hipótese - {{projeto.nome}}</h2>\r\n\r\n<form #hipoteseForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\r\n<mat-dialog-content>\r\n  <div class=\"example-container\">\r\n    <mat-form-field >\r\n      <textarea [(ngModel)]=\"model.descricao\"  \r\n        name=\"descricao\" matInput rows=\"6\" placeholder=\"Descricao\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button>Enviar</button>\r\n  <button mat-button mat-dialog-close>Cancelar</button>\r\n</mat-dialog-actions>\r\n</form>"

/***/ }),

/***/ "./src/app/mvp-canvas-cria/mvp-canvas-cria.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mvp-canvas-cria/mvp-canvas-cria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MvpCanvasCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models_MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/MvpCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MvpCanvasCriaComponent = /** @class */ (function () {
    function MvpCanvasCriaComponent(servico, dialogRef, data) {
        this.servico = servico;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MvpCanvasCriaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Model: ' + JSON.stringify(this.model));
        this.servico.createMvpCanvasMySqls(this.projeto.id, this.model, function (err, obj) {
            console.log("Erro:" + err.message);
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    MvpCanvasCriaComponent.prototype.ngOnInit = function () {
        console.log('Data: ', JSON.stringify(this.data));
        this.model = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models_MvpCanvasMySql__["a" /* MvpCanvasMySql */]();
        this.projeto = this.data.projeto;
        this.tipo = this.data.tipo;
        this.model.projetoMySqlId = this.projeto.id;
        this.model.tipo = this.tipo;
    };
    MvpCanvasCriaComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    MvpCanvasCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mvp-canvas-cria',
            template: __webpack_require__("./src/app/mvp-canvas-cria/mvp-canvas-cria.component.html"),
            styles: [__webpack_require__("./src/app/mvp-canvas-cria/mvp-canvas-cria.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */], Object])
    ], MvpCanvasCriaComponent);
    return MvpCanvasCriaComponent;
}());



/***/ }),

/***/ "./src/app/mvp-canvas-edita/mvp-canvas-edita.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cadastro de Hipótese - {{projeto.nome}}</h2>\r\n\r\n<form #hipoteseForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\r\n<mat-dialog-content>\r\n  <div class=\"example-container\">\r\n    <mat-form-field >\r\n      <textarea [(ngModel)]=\"model.descricao\"  \r\n        name=\"descricao\" matInput rows=\"6\" placeholder=\"Descricao\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button>Enviar</button>\r\n  <button mat-button mat-dialog-close>Cancelar</button>\r\n</mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/mvp-canvas-edita/mvp-canvas-edita.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mvp-canvas-edita/mvp-canvas-edita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MvpCanvasEditaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/MvpCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MvpCanvasEditaComponent = /** @class */ (function () {
    function MvpCanvasEditaComponent(servico, dialogRef, data) {
        this.servico = servico;
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('MvpCanvasEditaComponent');
    }
    MvpCanvasEditaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Model: ' + JSON.stringify(this.model));
        this.servico
            .updateAttributes(this.model.id, this.model, function (err, obj) {
            console.log("Erro:" + err.message);
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    MvpCanvasEditaComponent.prototype.ngOnInit = function () {
        console.log('Data: ', JSON.stringify(this.data));
        this.model = this.data.edicao;
        this.projeto = this.data.projeto;
        //this.tipo = this.data.tipo;
        //this.model.projetoMySqlId = this.projeto.id;
        //this.model.tipo = this.tipo;
    };
    MvpCanvasEditaComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    MvpCanvasEditaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mvp-canvas-edita',
            template: __webpack_require__("./src/app/mvp-canvas-edita/mvp-canvas-edita.component.html"),
            styles: [__webpack_require__("./src/app/mvp-canvas-edita/mvp-canvas-edita.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_MvpCanvasMySql__["a" /* MvpCanvasMySqlApi */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */], Object])
    ], MvpCanvasEditaComponent);
    return MvpCanvasEditaComponent;
}());



/***/ }),

/***/ "./src/app/projeto-canvas-cria/projeto-canvas-cria.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cadastro de Hipótese - {{projeto.nome}}</h2>\r\n\r\n<form #hipoteseForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\r\n<mat-dialog-content>\r\n  <div class=\"example-container\">\r\n    <mat-form-field >\r\n      <textarea [(ngModel)]=\"model.descricao\"  \r\n        name=\"descricao\" matInput rows=\"6\" placeholder=\"Descricao\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button>Enviar</button>\r\n  <button mat-button mat-dialog-close>Cancelar</button>\r\n</mat-dialog-actions>\r\n</form>"

/***/ }),

/***/ "./src/app/projeto-canvas-cria/projeto-canvas-cria.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projeto-canvas-cria/projeto-canvas-cria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoCanvasCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models_ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/ProjetoCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProjetoCanvasCriaComponent = /** @class */ (function () {
    function ProjetoCanvasCriaComponent(servico, dialogRef, data) {
        this.servico = servico;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ProjetoCanvasCriaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Model: ' + JSON.stringify(this.model));
        this.servico
            .createProjetoCanvasMySqls(this.projeto.id, this.model, function (err, obj) {
            console.log("Erro:" + err.message);
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    ProjetoCanvasCriaComponent.prototype.ngOnInit = function () {
        console.log('Data: ', JSON.stringify(this.data));
        this.model = new __WEBPACK_IMPORTED_MODULE_2__shared_sdk_models_ProjetoCanvasMySql__["a" /* ProjetoCanvasMySql */]();
        this.projeto = this.data.projeto;
        this.tipo = this.data.tipo;
        this.model.projetoMySqlId = this.projeto.id;
        this.model.tipo = this.tipo;
    };
    ProjetoCanvasCriaComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    ProjetoCanvasCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projeto-canvas-cria',
            template: __webpack_require__("./src/app/projeto-canvas-cria/projeto-canvas-cria.component.html"),
            styles: [__webpack_require__("./src/app/projeto-canvas-cria/projeto-canvas-cria.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogRef */], Object])
    ], ProjetoCanvasCriaComponent);
    return ProjetoCanvasCriaComponent;
}());



/***/ }),

/***/ "./src/app/projeto-canvas-edita/projeto-canvas-edita.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Cadastro de Hipótese - {{projeto.nome}}</h2>\n\n<form #hipoteseForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\n<mat-dialog-content>\n  <div class=\"example-container\">\n    <mat-form-field >\n      <textarea [(ngModel)]=\"model.descricao\"  \n        name=\"descricao\" matInput rows=\"6\" placeholder=\"Descricao\"></textarea>\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button>Enviar</button>\n  <button mat-button mat-dialog-close>Cancelar</button>\n</mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/projeto-canvas-edita/projeto-canvas-edita.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projeto-canvas-edita/projeto-canvas-edita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoCanvasEditaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProjetoCanvasEditaComponent = /** @class */ (function () {
    function ProjetoCanvasEditaComponent(servico, dialogRef, data) {
        this.servico = servico;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ProjetoCanvasEditaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Model: ' + JSON.stringify(this.model));
        this.servico
            .updateAttributes(this.model.id, this.model, function (err, obj) {
            console.log("Erro:" + err.message);
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.closeDialog();
        });
    };
    ProjetoCanvasEditaComponent.prototype.ngOnInit = function () {
        console.log('Data: ', JSON.stringify(this.data));
        this.model = this.data.edicao;
        this.projeto = this.data.projeto;
        //this.tipo = this.data.tipo;
        //this.model.projetoMySqlId = this.projeto.id;
        //this.model.tipo = this.tipo;
    };
    ProjetoCanvasEditaComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Pizza!');
    };
    ProjetoCanvasEditaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projeto-canvas-edita',
            template: __webpack_require__("./src/app/projeto-canvas-edita/projeto-canvas-edita.component.html"),
            styles: [__webpack_require__("./src/app/projeto-canvas-edita/projeto-canvas-edita.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoCanvasMySql__["a" /* ProjetoCanvasMySqlApi */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */], Object])
    ], ProjetoCanvasEditaComponent);
    return ProjetoCanvasEditaComponent;
}());



/***/ }),

/***/ "./src/app/projeto-cria/projeto-cria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h4 class=\"title\">Projeto - Novo</h4>\r\n          </div>\r\n          <form #projetoForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"nome\">Nome do Projeto</label>\r\n              <input [(ngModel)]=\"model.nome\" type=\"text\" class=\"form-control\" name=\"nome\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"mercado\">Mercado</label>\r\n              <input [(ngModel)]=\"model.mercado\" type=\"text\" class=\"form-control\" name=\"mercado\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"valor\">Valor</label>\r\n              <input [(ngModel)]=\"model.valor\" type=\"text\" class=\"form-control\" name=\"valor\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"dor\">Dor</label>\r\n              <input [(ngModel)]=\"model.dor\" type=\"text\" class=\"form-control\" name=\"dor\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success btn-sm\">Enviar</button>\r\n            <button type=\"cancel\" class=\"btn btn-cancel btn-sm\">Cancelar</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projeto-cria/projeto-cria.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projeto-cria/projeto-cria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_models__ = __webpack_require__("./src/app/shared/sdk/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjetoCriaComponent = /** @class */ (function () {
    function ProjetoCriaComponent(servico, router) {
        this.servico = servico;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__shared_sdk_models__["c" /* ProjetoMySql */]();
    }
    ProjetoCriaComponent.prototype.ngOnInit = function () {
    };
    ProjetoCriaComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Projeto: ", this.model);
        this.servico
            .create(this.model, function (err, obj) {
            console.log("Erro:" + err.message);
        }).subscribe(function (e) {
            console.log(JSON.stringify(e));
            _this.router.navigate(['projetos']);
        });
    };
    ProjetoCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projeto-cria',
            template: __webpack_require__("./src/app/projeto-cria/projeto-cria.component.html"),
            styles: [__webpack_require__("./src/app/projeto-cria/projeto-cria.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProjetoCriaComponent);
    return ProjetoCriaComponent;
}());



/***/ }),

/***/ "./src/app/projeto-edita/projeto-edita.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h4 class=\"title\">Projeto - Novo</h4>\r\n          </div>\r\n          <form #projetoForm=\"ngForm\" class=\"content\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"nome\">Nome do Projeto</label>\r\n              <input [(ngModel)]=\"model.nome\" type=\"text\" class=\"form-control\" name=\"nome\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"mercado\">Mercado</label>\r\n              <input [(ngModel)]=\"model.mercado\" type=\"text\" class=\"form-control\" name=\"mercado\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"valor\">Valor</label>\r\n              <input [(ngModel)]=\"model.valor\" type=\"text\" class=\"form-control\" name=\"valor\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"dor\">Dor</label>\r\n              <input [(ngModel)]=\"model.dor\" type=\"text\" class=\"form-control\" name=\"dor\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success btn-sm\">Enviar</button>\r\n            <button type=\"cancel\" class=\"btn btn-cancel btn-sm\">Cancelar</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projeto-edita/projeto-edita.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projeto-edita/projeto-edita.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoEditaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjetoEditaComponent = /** @class */ (function () {
    function ProjetoEditaComponent() {
    }
    ProjetoEditaComponent.prototype.ngOnInit = function () {
    };
    ProjetoEditaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projeto-edita',
            template: __webpack_require__("./src/app/projeto-edita/projeto-edita.component.html"),
            styles: [__webpack_require__("./src/app/projeto-edita/projeto-edita.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjetoEditaComponent);
    return ProjetoEditaComponent;
}());



/***/ }),

/***/ "./src/app/projeto-exibe/projeto-exibe.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  projeto-exibe works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/projeto-exibe/projeto-exibe.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projeto-exibe/projeto-exibe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoExibeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjetoExibeComponent = /** @class */ (function () {
    function ProjetoExibeComponent() {
    }
    ProjetoExibeComponent.prototype.ngOnInit = function () {
    };
    ProjetoExibeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projeto-exibe',
            template: __webpack_require__("./src/app/projeto-exibe/projeto-exibe.component.html"),
            styles: [__webpack_require__("./src/app/projeto-exibe/projeto-exibe.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjetoExibeComponent);
    return ProjetoExibeComponent;
}());



/***/ }),

/***/ "./src/app/projetos/projetos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"header\">\r\n            <h4 class=\"title\">Projetos</h4>\r\n            \r\n            <a routerLink=\"/projetos/insere\" class=\"btn btn-primary btn-sm  \">Novo</a>\r\n          </div>\r\n          <div class=\"content table-responsive table-full-width\">\r\n            <table class=\"table table-hover table-striped\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Nome</th>\r\n                  <th>Mercado</th>\r\n                  <th></th>\r\n                  <th></th>\r\n                  <th></th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let projeto of projetos\">\r\n                  <td>{{projeto.nome}}</td>\r\n                  <td>{{projeto.mercado}}</td>\r\n                  <td><a routerLink=\"/dorGanhoCanvas/{{projeto.id}}\">Ganho/Dor</a></td>\r\n                  <td><a routerLink=\"/projetoCanvas/{{projeto.id}}\">Negócio</a></td>\r\n                  <td><a routerLink=\"/mvpCanvas/{{projeto.id}}\">Mvp</a></td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projetos/projetos.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projetos/projetos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjetosComponent = /** @class */ (function () {
    function ProjetosComponent(projetoService, router) {
        this.projetoService = projetoService;
        this.router = router;
    }
    ProjetosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projetoService.find()
            .subscribe(function (projetos) {
            return _this.projetos = projetos;
        });
    };
    ProjetosComponent.prototype.goCanvas = function (id) {
        this.router.navigate(['projetoCanvas/' + id]);
    };
    ProjetosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projetos',
            template: __webpack_require__("./src/app/projetos/projetos.component.html"),
            styles: [__webpack_require__("./src/app/projetos/projetos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_sdk_services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProjetosComponent);
    return ProjetosComponent;
}());



/***/ }),

/***/ "./src/app/servicos/auxiliar/projeto-exemplo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PROJETOS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_projeto__ = __webpack_require__("./src/app/model/projeto.ts");

var PROJETOS = [
    new __WEBPACK_IMPORTED_MODULE_0__model_projeto__["a" /* Projeto */](1, 'Loja Roupas Feminina', 'Moda Feminina', 'Aumentar Pedidos', 'Difculdade de Organizacao'),
    new __WEBPACK_IMPORTED_MODULE_0__model_projeto__["a" /* Projeto */](2, 'Aplicativos de Preços', 'Tecnologia', 'Conhecer produtos e preços', '-'),
];


/***/ }),

/***/ "./src/app/servicos/projeto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicos_auxiliar_projeto_exemplo__ = __webpack_require__("./src/app/servicos/auxiliar/projeto-exemplo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjetoService = /** @class */ (function () {
    function ProjetoService() {
    }
    ProjetoService.prototype.getPratos = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(__WEBPACK_IMPORTED_MODULE_2__servicos_auxiliar_projeto_exemplo__["a" /* PROJETOS */]).delay(2000);
    };
    ProjetoService.prototype.getPrato = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(__WEBPACK_IMPORTED_MODULE_2__servicos_auxiliar_projeto_exemplo__["a" /* PROJETOS */].filter(function (projeto) { return (projeto.id === id); })[0]).delay(2000);
    };
    ProjetoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProjetoService);
    return ProjetoService;
}());



/***/ }),

/***/ "./src/app/shared/sdk/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SDKBrowserModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__ = __webpack_require__("./src/app/shared/sdk/services/custom/logger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__ = __webpack_require__("./src/app/shared/sdk/storage/storage.swaps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__ = __webpack_require__("./src/app/shared/sdk/storage/cookie.browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__ = __webpack_require__("./src/app/shared/sdk/storage/storage.browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sockets_socket_browser__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.browser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sockets_socket_driver__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_core_real_time__ = __webpack_require__("./src/app/shared/sdk/services/core/real.time.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_custom_User__ = __webpack_require__("./src/app/shared/sdk/services/custom/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_custom_Projeto__ = __webpack_require__("./src/app/shared/sdk/services/custom/Projeto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_custom_ProjetoCanvas__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_custom_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_custom_ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_custom_MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/MvpCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_custom_GanhoDorCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/GanhoDorCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_custom_PaginaValidacaoWeb__ = __webpack_require__("./src/app/shared/sdk/services/custom/PaginaValidacaoWeb.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_custom_ItemValidacaoPagina__ = __webpack_require__("./src/app/shared/sdk/services/custom/ItemValidacaoPagina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_custom_RegistroInteresse__ = __webpack_require__("./src/app/shared/sdk/services/custom/RegistroInteresse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__models_index__ = __webpack_require__("./src/app/shared/sdk/models/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_index__ = __webpack_require__("./src/app/shared/sdk/services/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_26__lb_config__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony reexport CookieBrowser */
/* unused harmony reexport StorageBrowser */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
























/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = /** @class */ (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule_1 = SDKBrowserModule;
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["a" /* InternalStorage */],
            useClass: __WEBPACK_IMPORTED_MODULE_8__storage_cookie_browser__["a" /* CookieBrowser */]
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__services_core_auth_service__["a" /* LoopBackAuth */],
                __WEBPACK_IMPORTED_MODULE_2__services_custom_logger_service__["a" /* LoggerService */],
                __WEBPACK_IMPORTED_MODULE_3__services_custom_SDKModels__["a" /* SDKModels */],
                __WEBPACK_IMPORTED_MODULE_13__services_core_real_time__["a" /* RealTime */],
                __WEBPACK_IMPORTED_MODULE_14__services_custom_User__["a" /* UserApi */],
                __WEBPACK_IMPORTED_MODULE_15__services_custom_Projeto__["a" /* ProjetoApi */],
                __WEBPACK_IMPORTED_MODULE_16__services_custom_ProjetoCanvas__["a" /* ProjetoCanvasApi */],
                __WEBPACK_IMPORTED_MODULE_17__services_custom_ProjetoMySql__["a" /* ProjetoMySqlApi */],
                __WEBPACK_IMPORTED_MODULE_18__services_custom_ProjetoCanvasMySql__["a" /* ProjetoCanvasMySqlApi */],
                __WEBPACK_IMPORTED_MODULE_19__services_custom_MvpCanvasMySql__["a" /* MvpCanvasMySqlApi */],
                __WEBPACK_IMPORTED_MODULE_20__services_custom_GanhoDorCanvasMySql__["a" /* GanhoDorCanvasMySqlApi */],
                __WEBPACK_IMPORTED_MODULE_21__services_custom_PaginaValidacaoWeb__["a" /* PaginaValidacaoWebApi */],
                __WEBPACK_IMPORTED_MODULE_22__services_custom_ItemValidacaoPagina__["a" /* ItemValidacaoPaginaApi */],
                __WEBPACK_IMPORTED_MODULE_23__services_custom_RegistroInteresse__["a" /* RegistroInteresseApi */],
                internalStorageProvider,
                { provide: __WEBPACK_IMPORTED_MODULE_4__storage_storage_swaps__["b" /* SDKStorage */], useClass: __WEBPACK_IMPORTED_MODULE_9__storage_storage_browser__["a" /* StorageBrowser */] },
                { provide: __WEBPACK_IMPORTED_MODULE_11__sockets_socket_driver__["a" /* SocketDriver */], useClass: __WEBPACK_IMPORTED_MODULE_10__sockets_socket_browser__["a" /* SocketBrowser */] }
            ]
        };
    };
    SDKBrowserModule = SDKBrowserModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_core_error_service__["a" /* ErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_12__sockets_socket_connections__["a" /* SocketConnection */]
            ]
        })
    ], SDKBrowserModule);
    return SDKBrowserModule;
    var SDKBrowserModule_1;
}());

/**
* Have Fun!!!
* - Jon
**/








/***/ }),

/***/ "./src/app/shared/sdk/lb.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackConfig; });
/* tslint:disable */
/**
* @module LoopBackConfig
* @description
*
* The LoopBackConfig module help developers to externally
* configure the base url and api version for loopback.io
*
* Example
*
* import { LoopBackConfig } from './sdk';
*
* @Component() // No metadata needed for this module
*
* export class MyApp {
*   constructor() {
*     LoopBackConfig.setBaseURL('http://localhost:3000');
*     LoopBackConfig.setApiVersion('api');
*   }
* }
**/
var LoopBackConfig = /** @class */ (function () {
    function LoopBackConfig() {
    }
    LoopBackConfig.setApiVersion = function (version) {
        if (version === void 0) { version = 'api'; }
        LoopBackConfig.version = version;
    };
    LoopBackConfig.getApiVersion = function () {
        return LoopBackConfig.version;
    };
    LoopBackConfig.setBaseURL = function (url) {
        if (url === void 0) { url = '/'; }
        LoopBackConfig.path = url;
    };
    LoopBackConfig.getPath = function () {
        return LoopBackConfig.path;
    };
    LoopBackConfig.setAuthPrefix = function (authPrefix) {
        if (authPrefix === void 0) { authPrefix = ''; }
        LoopBackConfig.authPrefix = authPrefix;
    };
    LoopBackConfig.getAuthPrefix = function () {
        return LoopBackConfig.authPrefix;
    };
    LoopBackConfig.setDebugMode = function (isEnabled) {
        LoopBackConfig.debug = isEnabled;
    };
    LoopBackConfig.debuggable = function () {
        return LoopBackConfig.debug;
    };
    LoopBackConfig.filterOnUrl = function () {
        LoopBackConfig.filterOn = 'url';
    };
    LoopBackConfig.filterOnHeaders = function () {
        LoopBackConfig.filterOn = 'headers';
    };
    LoopBackConfig.whereOnUrl = function () {
        LoopBackConfig.whereOn = 'url';
    };
    LoopBackConfig.whereOnHeaders = function () {
        LoopBackConfig.whereOn = 'headers';
    };
    LoopBackConfig.isHeadersFilteringSet = function () {
        return (LoopBackConfig.filterOn === 'headers');
    };
    LoopBackConfig.isHeadersWhereSet = function () {
        return (LoopBackConfig.whereOn === 'headers');
    };
    LoopBackConfig.setSecureWebSockets = function () {
        LoopBackConfig.secure = true;
    };
    LoopBackConfig.unsetSecureWebSockets = function () {
        LoopBackConfig.secure = false;
    };
    LoopBackConfig.isSecureWebSocketsSet = function () {
        return LoopBackConfig.secure;
    };
    LoopBackConfig.setRequestOptionsCredentials = function (withCredentials) {
        if (withCredentials === void 0) { withCredentials = false; }
        LoopBackConfig.withCredentials = withCredentials;
    };
    LoopBackConfig.getRequestOptionsCredentials = function () {
        return LoopBackConfig.withCredentials;
    };
    LoopBackConfig.path = '//0.0.0.0:21101';
    LoopBackConfig.version = 'api';
    LoopBackConfig.authPrefix = '';
    LoopBackConfig.debug = true;
    LoopBackConfig.filterOn = 'headers';
    LoopBackConfig.whereOn = 'headers';
    LoopBackConfig.secure = false;
    LoopBackConfig.withCredentials = false;
    return LoopBackConfig;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/BaseModels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AccessToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKToken; });
/* tslint:disable */
var AccessToken = /** @class */ (function () {
    function AccessToken(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `AccessToken`.
     */
    AccessToken.getModelName = function () {
        return "AccessToken";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of AccessToken for dynamic purposes.
    **/
    AccessToken.factory = function (data) {
        return new AccessToken(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    AccessToken.getModelDefinition = function () {
        return {
            name: 'AccessToken',
            plural: 'AccessTokens',
            properties: {
                "id": {
                    name: 'id',
                    type: 'string'
                },
                "ttl": {
                    name: 'ttl',
                    type: 'number',
                    default: 1209600
                },
                "scopes": {
                    name: 'scopes',
                    type: '["string"]'
                },
                "created": {
                    name: 'created',
                    type: 'Date'
                },
                "userId": {
                    name: 'userId',
                    type: 'string'
                },
            },
            relations: {
                user: {
                    name: 'user',
                    type: 'User',
                    model: 'User'
                },
            }
        };
    };
    return AccessToken;
}());

var SDKToken = /** @class */ (function () {
    function SDKToken(data) {
        this.id = null;
        this.ttl = null;
        this.scopes = null;
        this.created = null;
        this.userId = null;
        this.user = null;
        this.rememberMe = null;
        Object.assign(this, data);
    }
    return SDKToken;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/FireLoop.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./src/app/shared/sdk/models/index.ts");
/* tslint:disable */

var FireLoop = /** @class */ (function () {
    function FireLoop(socket, models) {
        this.socket = socket;
        this.models = models;
        this.references = {};
    }
    FireLoop.prototype.ref = function (model) {
        var name = model.getModelName();
        model.models = this.models;
        this.references[name] = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* FireLoopRef */](model, this.socket);
        return this.references[name];
    };
    return FireLoop;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/FireLoopRef.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireLoopRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
/* tslint:disable */





/**
 * @class FireLoopRef<T>
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * This class allows to create FireLoop References which will be in sync with
 * Server. It also allows to create FireLoop Reference Childs, that allows to
 * persist data according the generic model relationships.
 **/
var FireLoopRef = /** @class */ (function () {
    /**
    * @method constructor
    * @param {any} model The model we want to create a reference
    * @param {SocketConnection} socket Socket connection to handle events
    * @param {FireLoopRef<any>} parent Parent FireLoop model reference
    * @param {string} relationship The defined model relationship
    * @description
    * The constructor will receive the required parameters and then will register this reference
    * into the server, needed to allow multiple references for the same model.
    * This ids are referenced into this specific client connection and won't have issues
    * with other client ids.
    **/
    function FireLoopRef(model, socket, parent, relationship) {
        if (parent === void 0) { parent = null; }
        if (relationship === void 0) { relationship = null; }
        this.model = model;
        this.socket = socket;
        this.parent = parent;
        this.relationship = relationship;
        // Reference ID
        this.id = this.buildId();
        // Model Childs
        this.childs = {};
        // Disposable Events
        this.disposable = {};
        this.socket.emit("Subscribe." + (!parent ? model.getModelName() : parent.model.getModelName()), { id: this.id, scope: model.getModelName(), relationship: relationship });
        return this;
    }
    /**
    * @method dispose
    * @return {void}
    * @description
    * This method is super important to avoid memory leaks in the server.
    * This method requires to be called on components destroy
    *
    * ngOnDestroy() {
    *  this.someRef.dispose()
    * }
    **/
    FireLoopRef.prototype.dispose = function () {
        var _this = this;
        var subscription = this.operation('dispose', {}).subscribe(function () {
            Object.keys(_this.disposable).forEach(function (channel) {
                _this.socket.removeListener(channel, _this.disposable[channel]);
                _this.socket.removeAllListeners(channel);
            });
            subscription.unsubscribe();
        });
    };
    /**
    * @method upsert
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for upsert function.
    **/
    FireLoopRef.prototype.upsert = function (data) {
        return this.operation('upsert', data);
    };
    /**
    * @method create
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for create function.
    **/
    FireLoopRef.prototype.create = function (data) {
        return this.operation('create', data);
    };
    /**
    * @method remove
    * @param {T} data Persisted model instance
    * @return {Observable<T>}
    * @description
    * Operation wrapper for remove function.
    **/
    FireLoopRef.prototype.remove = function (data) {
        return this.operation('remove', data);
    };
    /**
    * @method remote
    * @param {string} method Remote method name
    * @param {any[]=} params Parameters to be applied into the remote method
    * @param {boolean} broadcast Flag to define if the method results should be broadcasted
    * @return {Observable<any>}
    * @description
    * This method calls for any remote method. It is flexible enough to
    * allow you call either built-in or custom remote methods.
    *
    * FireLoop provides this interface to enable calling remote methods
    * but also to optionally send any defined accept params that will be
    * applied within the server.
    **/
    FireLoopRef.prototype.remote = function (method, params, broadcast) {
        if (broadcast === void 0) { broadcast = false; }
        return this.operation('remote', { method: method, params: params, broadcast: broadcast });
    };
    /**
    * @method onRemote
    * @param {string} method Remote method name
    * @return {Observable<any>}
    * @description
    * This method listen for public broadcasted remote method results. If the remote method
    * execution is not public only the owner will receive the result data.
    **/
    FireLoopRef.prototype.onRemote = function (method) {
        var event = 'remote';
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
        }
        return this.broadcasts(event, {});
    };
    /**
    * @method on
    * @param {string} event Event name
    * @param {LoopBackFilter} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for different type of events. Valid events are:
    *   - change (Triggers on any model change -create, update, remove-)
    *   - value (Triggers on new entries)
    *   - child_added (Triggers when a child is added)
    *   - child_updated (Triggers when a child is updated)
    *   - child_removed (Triggers when a child is removed)
    **/
    FireLoopRef.prototype.on = function (event, filter) {
        if (filter === void 0) { filter = { limit: 100, order: 'id DESC' }; }
        if (event === 'remote') {
            throw new Error('The "remote" event is not allowed using "on()" method, use "onRemote()" instead');
        }
        var request;
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event;
            request = { filter: filter };
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event;
            request = { filter: filter, parent: this.parent.instance };
        }
        if (event.match(/(value|change|stats)/)) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].merge(this.pull(event, request), this.broadcasts(event, request));
        }
        else {
            return this.broadcasts(event, request);
        }
    };
    /**
    * @method stats
    * @param {LoopBackFilter=} filter LoopBack query filter
    * @return {Observable<T>}
    * @description
    * Listener for real-time statistics, will trigger on every
    * statistic modification.
    * TIP: You can improve performance by adding memcached to LoopBack models.
    **/
    FireLoopRef.prototype.stats = function (filter) {
        return this.on('stats', filter);
    };
    /**
    * @method make
    * @param {any} instance Persisted model instance reference
    * @return {Observable<T>}
    * @description
    * This method will set a model instance into this a new FireLoop Reference.
    * This allows to persiste parentship when creating related instances.
    *
    * It also allows to have multiple different persisted instance references to same model.
    * otherwise if using singleton will replace a previous instance for a new instance, when
    * we actually want to have more than 1 instance of same model.
    **/
    FireLoopRef.prototype.make = function (instance) {
        var reference = new FireLoopRef(this.model, this.socket);
        reference.instance = instance;
        return reference;
    };
    /**
    * @method child
    * @param {string} relationship A defined model relationship
    * @return {FireLoopRef<T>}
    * @description
    * This method creates child references, which will persist related model
    * instances. e.g. Room.messages, where messages belongs to a specific Room.
    **/
    FireLoopRef.prototype.child = function (relationship) {
        // Return singleton instance
        if (this.childs[relationship]) {
            return this.childs[relationship];
        }
        // Try to get relation settings from current model
        var settings = this.model.getModelDefinition().relations[relationship];
        // Verify the relationship actually exists
        if (!settings) {
            throw new Error("Invalid model relationship " + this.model.getModelName() + " <-> " + relationship + ", verify your model settings.");
        }
        // Verify if the relationship model is public
        if (settings.model === '') {
            throw new Error("Relationship model is private, cam't use " + relationship + " unless you set your model as public.");
        }
        // Lets get a model reference and add a reference for all of the models
        var model = this.model.models.get(settings.model);
        model.models = this.model.models;
        // If everything goes well, we will store a child reference and return it.
        this.childs[relationship] = new FireLoopRef(model, this.socket, this, relationship);
        return this.childs[relationship];
    };
    /**
    * @method pull
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This method will pull initial data from server
    **/
    FireLoopRef.prototype.pull = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var that = this;
        var nowEvent = event + ".pull.requested." + this.id;
        this.socket.emit(event + ".pull.request." + this.id, request);
        function pullNow(data) {
            if (that.socket.removeListener) {
                that.socket.removeListener(nowEvent, pullNow);
            }
            sbj.next(data);
        }
        ;
        this.socket.on(nowEvent, pullNow);
        return sbj.asObservable();
    };
    /**
    * @method broadcasts
    * @param {string} event Event name
    * @param {any} request Type of request, can be LB-only filter or FL+LB filter
    * @return {Observable<T>}
    * @description
    * This will listen for public broadcasts announces and then request
    * for data according a specific client request, not shared with other clients.
    **/
    FireLoopRef.prototype.broadcasts = function (event, request) {
        var sbj = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var channels = {
            announce: event + ".broadcast.announce." + this.id,
            broadcast: event + ".broadcast." + this.id
        };
        var that = this;
        // Announces Handler
        this.disposable[channels.announce] = function (res) {
            that.socket.emit(event + ".broadcast.request." + that.id, request);
        };
        // Broadcasts Handler
        this.disposable[channels.broadcast] = function (data) {
            sbj.next(data);
        };
        this.socket.on(channels.announce, this.disposable[channels.announce]);
        this.socket.on(channels.broadcast, this.disposable[channels.broadcast]);
        return sbj.asObservable();
    };
    /**
    * @method operation
    * @param {string} event Event name
    * @param {any} data Any type of data sent to the server
    * @return {Observable<T>}
    * @description
    * This internal method will run operations depending on current context
    **/
    FireLoopRef.prototype.operation = function (event, data) {
        if (!this.relationship) {
            event = this.model.getModelName() + "." + event + "." + this.id;
        }
        else {
            event = this.parent.model.getModelName() + "." + this.relationship + "." + event + "." + this.id;
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        var config = {
            data: data,
            parent: this.parent && this.parent.instance ? this.parent.instance : null
        };
        this.socket.emit(event, config);
        var resultEvent = '';
        if (!this.relationship) {
            resultEvent = this.model.getModelName() + ".value.result." + this.id;
        }
        else {
            resultEvent = this.parent.model.getModelName() + "." + this.relationship + ".value.result." + this.id;
        }
        this.socket.on(resultEvent, function (res) {
            if (res.error) {
                subject.error(res);
            }
            else {
                subject.next(res);
            }
        });
        if (event.match('dispose')) {
            setTimeout(function () { return subject.next(); });
        }
        // This event listener will be wiped within socket.connections
        this.socket.sharedObservables.sharedOnDisconnect.subscribe(function () { return subject.complete(); });
        return subject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); }));
    };
    /**
    * @method buildId
    * @return {number}
    * @description
    * This internal method build an ID for this reference, this allows to have
    * multiple references for the same model or relationships.
    **/
    FireLoopRef.prototype.buildId = function () {
        return Date.now() + Math.floor(Math.random() * 100800) *
            Math.floor(Math.random() * 100700) *
            Math.floor(Math.random() * 198500);
    };
    return FireLoopRef;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/GanhoDorCanvasMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GanhoDorCanvasMySql; });
/* tslint:disable */
var GanhoDorCanvasMySql = /** @class */ (function () {
    function GanhoDorCanvasMySql(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    GanhoDorCanvasMySql.getModelName = function () {
        return "GanhoDorCanvasMySql";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of GanhoDorCanvasMySql for dynamic purposes.
    **/
    GanhoDorCanvasMySql.factory = function (data) {
        return new GanhoDorCanvasMySql(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    GanhoDorCanvasMySql.getModelDefinition = function () {
        return {
            name: 'GanhoDorCanvasMySql',
            plural: 'GanhoDorCanvasMySqls',
            path: 'GanhoDorCanvasMySqls',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "descricao": {
                    name: 'descricao',
                    type: 'string'
                },
                "tipo": {
                    name: 'tipo',
                    type: 'string'
                },
                "projetoMySqlId": {
                    name: 'projetoMySqlId',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return GanhoDorCanvasMySql;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ItemValidacaoPagina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemValidacaoPagina; });
var ItemValidacaoPagina = /** @class */ (function () {
    function ItemValidacaoPagina(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ItemValidacaoPagina`.
     */
    ItemValidacaoPagina.getModelName = function () {
        return "ItemValidacaoPagina";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ItemValidacaoPagina for dynamic purposes.
    **/
    ItemValidacaoPagina.factory = function (data) {
        return new ItemValidacaoPagina(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ItemValidacaoPagina.getModelDefinition = function () {
        return {
            name: 'ItemValidacaoPagina',
            plural: 'ItemValidacaoPaginas',
            path: 'ItemValidacaoPaginas',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "urlImagem": {
                    name: 'urlImagem',
                    type: 'string'
                },
                "titulo": {
                    name: 'titulo',
                    type: 'string'
                },
                "descricaoSimples": {
                    name: 'descricaoSimples',
                    type: 'string'
                },
                "bullet1": {
                    name: 'bullet1',
                    type: 'string'
                },
                "bullet2": {
                    name: 'bullet2',
                    type: 'string'
                },
                "bullet3": {
                    name: 'bullet3',
                    type: 'string'
                },
                "projetoCanvasMySqlId": {
                    name: 'projetoCanvasMySqlId',
                    type: 'number'
                },
                "paginaValidacaoWebId": {
                    name: 'paginaValidacaoWebId',
                    type: 'number'
                },
            },
            relations: {
                projetoCanvasMySql: {
                    name: 'projetoCanvasMySql',
                    type: 'ProjetoCanvasMySql',
                    model: 'ProjetoCanvasMySql',
                    relationType: 'belongsTo',
                    keyFrom: 'projetoCanvasMySqlId',
                    keyTo: 'id'
                },
            }
        };
    };
    return ItemValidacaoPagina;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/MvpCanvasMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MvpCanvasMySql; });
/* tslint:disable */
var MvpCanvasMySql = /** @class */ (function () {
    function MvpCanvasMySql(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `MvpCanvasMySql`.
     */
    MvpCanvasMySql.getModelName = function () {
        return "MvpCanvasMySql";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of MvpCanvasMySql for dynamic purposes.
    **/
    MvpCanvasMySql.factory = function (data) {
        return new MvpCanvasMySql(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    MvpCanvasMySql.getModelDefinition = function () {
        return {
            name: 'MvpCanvasMySql',
            plural: 'MvpCanvasMySqls',
            path: 'MvpCanvasMySqls',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "descricao": {
                    name: 'descricao',
                    type: 'string'
                },
                "tipo": {
                    name: 'tipo',
                    type: 'string'
                },
                "projetoMySqlId": {
                    name: 'projetoMySqlId',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return MvpCanvasMySql;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/PaginaValidacaoWeb.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaValidacaoWeb; });
var PaginaValidacaoWeb = /** @class */ (function () {
    function PaginaValidacaoWeb(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `PaginaValidacaoWeb`.
     */
    PaginaValidacaoWeb.getModelName = function () {
        return "PaginaValidacaoWeb";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of PaginaValidacaoWeb for dynamic purposes.
    **/
    PaginaValidacaoWeb.factory = function (data) {
        return new PaginaValidacaoWeb(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    PaginaValidacaoWeb.getModelDefinition = function () {
        return {
            name: 'PaginaValidacaoWeb',
            plural: 'PaginaValidacaoWebs',
            path: 'PaginaValidacaoWebs',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
            },
            relations: {
                itemValidacaoPaginas: {
                    name: 'itemValidacaoPaginas',
                    type: 'ItemValidacaoPagina[]',
                    model: 'ItemValidacaoPagina',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'paginaValidacaoWebId'
                },
                registroInteresses: {
                    name: 'registroInteresses',
                    type: 'RegistroInteresse[]',
                    model: 'RegistroInteresse',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'paginaValidacaoWebId'
                },
            }
        };
    };
    return PaginaValidacaoWeb;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/Projeto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projeto; });
var Projeto = /** @class */ (function () {
    function Projeto(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `Projeto`.
     */
    Projeto.getModelName = function () {
        return "Projeto";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of Projeto for dynamic purposes.
    **/
    Projeto.factory = function (data) {
        return new Projeto(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    Projeto.getModelDefinition = function () {
        return {
            name: 'Projeto',
            plural: 'projetos',
            path: 'projetos',
            idName: 'id',
            properties: {
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "valor": {
                    name: 'valor',
                    type: 'string'
                },
                "mercado": {
                    name: 'mercado',
                    type: 'string'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "dor": {
                    name: 'dor',
                    type: 'string'
                },
            },
            relations: {
                ProjetoCanvasRel: {
                    name: 'ProjetoCanvasRel',
                    type: 'ProjetoCanvas[]',
                    model: 'ProjetoCanvas',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'projetoId'
                },
            }
        };
    };
    return Projeto;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ProjetoCanvas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoCanvas; });
/* tslint:disable */
var ProjetoCanvas = /** @class */ (function () {
    function ProjetoCanvas(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProjetoCanvas`.
     */
    ProjetoCanvas.getModelName = function () {
        return "ProjetoCanvas";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ProjetoCanvas for dynamic purposes.
    **/
    ProjetoCanvas.factory = function (data) {
        return new ProjetoCanvas(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ProjetoCanvas.getModelDefinition = function () {
        return {
            name: 'ProjetoCanvas',
            plural: 'ProjetoCanvases',
            path: 'ProjetoCanvases',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "descricao": {
                    name: 'descricao',
                    type: 'string'
                },
                "idProjeto": {
                    name: 'idProjeto',
                    type: 'number'
                },
                "tipo": {
                    name: 'tipo',
                    type: 'string'
                },
                "projetoId": {
                    name: 'projetoId',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return ProjetoCanvas;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ProjetoCanvasMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoCanvasMySql; });
var ProjetoCanvasMySql = /** @class */ (function () {
    function ProjetoCanvasMySql(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProjetoCanvasMySql`.
     */
    ProjetoCanvasMySql.getModelName = function () {
        return "ProjetoCanvasMySql";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ProjetoCanvasMySql for dynamic purposes.
    **/
    ProjetoCanvasMySql.factory = function (data) {
        return new ProjetoCanvasMySql(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ProjetoCanvasMySql.getModelDefinition = function () {
        return {
            name: 'ProjetoCanvasMySql',
            plural: 'ProjetoCanvasMySqls',
            path: 'ProjetoCanvasMySqls',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "descricao": {
                    name: 'descricao',
                    type: 'string'
                },
                "tipo": {
                    name: 'tipo',
                    type: 'string'
                },
                "projetoMySqlId": {
                    name: 'projetoMySqlId',
                    type: 'number'
                },
            },
            relations: {
                itemValidacaoPaginas: {
                    name: 'itemValidacaoPaginas',
                    type: 'ItemValidacaoPagina[]',
                    model: 'ItemValidacaoPagina',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'projetoCanvasMySqlId'
                },
            }
        };
    };
    return ProjetoCanvasMySql;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/ProjetoMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoMySql; });
var ProjetoMySql = /** @class */ (function () {
    function ProjetoMySql(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProjetoMySql`.
     */
    ProjetoMySql.getModelName = function () {
        return "ProjetoMySql";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of ProjetoMySql for dynamic purposes.
    **/
    ProjetoMySql.factory = function (data) {
        return new ProjetoMySql(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    ProjetoMySql.getModelDefinition = function () {
        return {
            name: 'ProjetoMySql',
            plural: 'ProjetoMySqls',
            path: 'ProjetoMySqls',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "valor": {
                    name: 'valor',
                    type: 'string'
                },
                "mercado": {
                    name: 'mercado',
                    type: 'string'
                },
                "dor": {
                    name: 'dor',
                    type: 'string'
                },
            },
            relations: {
                projetoCanvasMySqls: {
                    name: 'projetoCanvasMySqls',
                    type: 'ProjetoCanvasMySql[]',
                    model: 'ProjetoCanvasMySql',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'projetoMySqlId'
                },
                mvpCanvasMySqls: {
                    name: 'mvpCanvasMySqls',
                    type: 'MvpCanvasMySql[]',
                    model: 'MvpCanvasMySql',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'projetoMySqlId'
                },
                ganhoDorCanvasMySqls: {
                    name: 'ganhoDorCanvasMySqls',
                    type: 'GanhoDorCanvasMySql[]',
                    model: 'GanhoDorCanvasMySql',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'projetoMySqlId'
                },
            }
        };
    };
    return ProjetoMySql;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/RegistroInteresse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroInteresse; });
/* tslint:disable */
var RegistroInteresse = /** @class */ (function () {
    function RegistroInteresse(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `RegistroInteresse`.
     */
    RegistroInteresse.getModelName = function () {
        return "RegistroInteresse";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of RegistroInteresse for dynamic purposes.
    **/
    RegistroInteresse.factory = function (data) {
        return new RegistroInteresse(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    RegistroInteresse.getModelDefinition = function () {
        return {
            name: 'RegistroInteresse',
            plural: 'RegistroInteresses',
            path: 'RegistroInteresses',
            idName: 'id',
            properties: {
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "nome": {
                    name: 'nome',
                    type: 'string'
                },
                "data": {
                    name: 'data',
                    type: 'Date'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "paginaValidacaoWebId": {
                    name: 'paginaValidacaoWebId',
                    type: 'number'
                },
            },
            relations: {}
        };
    };
    return RegistroInteresse;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* tslint:disable */
var User = /** @class */ (function () {
    function User(data) {
        Object.assign(this, data);
    }
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    User.getModelName = function () {
        return "User";
    };
    /**
    * @method factory
    * @author Jonathan Casarrubias
    * @license MIT
    * This method creates an instance of User for dynamic purposes.
    **/
    User.factory = function (data) {
        return new User(data);
    };
    /**
    * @method getModelDefinition
    * @author Julien Ledun
    * @license MIT
    * This method returns an object that represents some of the model
    * definitions.
    **/
    User.getModelDefinition = function () {
        return {
            name: 'User',
            plural: 'Users',
            path: 'Users',
            idName: 'id',
            properties: {
                "realm": {
                    name: 'realm',
                    type: 'string'
                },
                "username": {
                    name: 'username',
                    type: 'string'
                },
                "email": {
                    name: 'email',
                    type: 'string'
                },
                "emailVerified": {
                    name: 'emailVerified',
                    type: 'boolean'
                },
                "id": {
                    name: 'id',
                    type: 'number'
                },
                "password": {
                    name: 'password',
                    type: 'string'
                },
            },
            relations: {
                accessTokens: {
                    name: 'accessTokens',
                    type: 'any[]',
                    model: '',
                    relationType: 'hasMany',
                    keyFrom: 'id',
                    keyTo: 'userId'
                },
            }
        };
    };
    return User;
}());



/***/ }),

/***/ "./src/app/shared/sdk/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__("./src/app/shared/sdk/models/User.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Projeto__ = __webpack_require__("./src/app/shared/sdk/models/Projeto.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProjetoCanvas__ = __webpack_require__("./src/app/shared/sdk/models/ProjetoCanvas.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/models/ProjetoMySql.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__ProjetoMySql__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/ProjetoCanvasMySql.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/MvpCanvasMySql.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GanhoDorCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/GanhoDorCanvasMySql.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__GanhoDorCanvasMySql__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PaginaValidacaoWeb__ = __webpack_require__("./src/app/shared/sdk/models/PaginaValidacaoWeb.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ItemValidacaoPagina__ = __webpack_require__("./src/app/shared/sdk/models/ItemValidacaoPagina.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RegistroInteresse__ = __webpack_require__("./src/app/shared/sdk/models/RegistroInteresse.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BaseModels__ = __webpack_require__("./src/app/shared/sdk/models/BaseModels.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__FireLoopRef__ = __webpack_require__("./src/app/shared/sdk/models/FireLoopRef.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_11__FireLoopRef__["a"]; });
/* tslint:disable */














/***/ }),

/***/ "./src/app/shared/sdk/services/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoopBackAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__ = __webpack_require__("./src/app/shared/sdk/storage/storage.swaps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__ = __webpack_require__("./src/app/shared/sdk/models/BaseModels.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var LoopBackAuth = /** @class */ (function () {
    /**
     * @method constructor
     * @param {InternalStorage} storage Internal Storage Driver
     * @description
     * The constructor will initialize the token loading data from storage
     **/
    function LoopBackAuth(storage) {
        this.storage = storage;
        /**
         * @type {SDKToken}
         **/
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
        /**
         * @type {string}
         **/
        this.prefix = '$LoopBackSDK$';
        this.token.id = this.load('id');
        this.token.user = this.load('user');
        this.token.userId = this.load('userId');
        this.token.created = this.load('created');
        this.token.ttl = this.load('ttl');
        this.token.rememberMe = this.load('rememberMe');
    }
    /**
     * @method setRememberMe
     * @param {boolean} value Flag to remember credentials
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setRememberMe = function (value) {
        this.token.rememberMe = value;
    };
    /**
     * @method setUser
     * @param {any} user Any type of user model
     * @return {void}
     * @description
     * This method will update the user information and persist it if the
     * rememberMe flag is set.
     **/
    LoopBackAuth.prototype.setUser = function (user) {
        this.token.user = user;
        this.save();
    };
    /**
     * @method setToken
     * @param {SDKToken} token SDKToken or casted AccessToken instance
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials
     **/
    LoopBackAuth.prototype.setToken = function (token) {
        this.token = Object.assign({}, this.token, token);
        this.save();
    };
    /**
     * @method getToken
     * @return {void}
     * @description
     * This method will set a flag in order to remember the current credentials.
     **/
    LoopBackAuth.prototype.getToken = function () {
        return this.token;
    };
    /**
     * @method getAccessTokenId
     * @return {string}
     * @description
     * This method will return the actual token string, not the object instance.
     **/
    LoopBackAuth.prototype.getAccessTokenId = function () {
        return this.token.id;
    };
    /**
     * @method getCurrentUserId
     * @return {any}
     * @description
     * This method will return the current user id, it can be number or string.
     **/
    LoopBackAuth.prototype.getCurrentUserId = function () {
        return this.token.userId;
    };
    /**
     * @method getCurrentUserData
     * @return {any}
     * @description
     * This method will return the current user instance.
     **/
    LoopBackAuth.prototype.getCurrentUserData = function () {
        return (typeof this.token.user === 'string') ? JSON.parse(this.token.user) : this.token.user;
    };
    /**
     * @method save
     * @return {boolean} Whether or not the information was saved
     * @description
     * This method will save in either local storage or cookies the current credentials.
     * But only if rememberMe is enabled.
     **/
    LoopBackAuth.prototype.save = function () {
        var today = new Date();
        var expires = new Date(today.getTime() + (this.token.ttl * 1000));
        this.persist('id', this.token.id, expires);
        this.persist('user', this.token.user, expires);
        this.persist('userId', this.token.userId, expires);
        this.persist('created', this.token.created, expires);
        this.persist('ttl', this.token.ttl, expires);
        this.persist('rememberMe', this.token.rememberMe, expires);
        return true;
    };
    ;
    /**
     * @method load
     * @param {string} prop Property name
     * @return {any} Any information persisted in storage
     * @description
     * This method will load either from local storage or cookies the provided property.
     **/
    LoopBackAuth.prototype.load = function (prop) {
        return this.storage.get("" + this.prefix + prop);
    };
    /**
     * @method clear
     * @return {void}
     * @description
     * This method will clear cookies or the local storage.
     **/
    LoopBackAuth.prototype.clear = function () {
        var _this = this;
        Object.keys(this.token).forEach(function (prop) { return _this.storage.remove("" + _this.prefix + prop); });
        this.token = new __WEBPACK_IMPORTED_MODULE_2__models_BaseModels__["a" /* SDKToken */]();
    };
    /**
     * @method persist
     * @return {void}
     * @description
     * This method saves values to storage
     **/
    LoopBackAuth.prototype.persist = function (prop, value, expires) {
        try {
            this.storage.set("" + this.prefix + prop, (typeof value === 'object') ? JSON.stringify(value) : value, this.token.rememberMe ? expires : null);
        }
        catch (err) {
            console.error('Cannot access local/session storage:', err);
        }
    };
    LoopBackAuth = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_storage_swaps__["a" /* InternalStorage */]])
    ], LoopBackAuth);
    return LoopBackAuth;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLoopBackApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









var CustomQueryEncoderHelper = /** @class */ (function () {
    function CustomQueryEncoderHelper() {
    }
    CustomQueryEncoderHelper.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    CustomQueryEncoderHelper.prototype.decodeKey = function (k) {
        return decodeURIComponent(k);
    };
    CustomQueryEncoderHelper.prototype.decodeValue = function (v) {
        return decodeURIComponent(v);
    };
    return CustomQueryEncoderHelper;
}());
/**
* @module BaseLoopBackApi
* @author Jonathan Casarrubias <@johncasarrubias> <github:jonathan-casarrubias>
* @author Nikolay Matiushenkov <https://github.com/mnvx>
* @license MIT
* @description
* Abstract class that will be implemented in every custom service automatically built
* by the sdk builder.
* It provides the core functionallity for every API call, either by HTTP Calls or by
* WebSockets.
**/
var BaseLoopBackApi = /** @class */ (function () {
    function BaseLoopBackApi(http, connection, models, auth, errorHandler) {
        this.http = http;
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.errorHandler = errorHandler;
        this.model = this.models.get(this.getModelName());
    }
    /**
     * @method request
     * @param {string}  method      Request method (GET, POST, PUT)
     * @param {string}  url         Request url (my-host/my-url/:id)
     * @param {any}     routeParams Values of url parameters
     * @param {any}     urlParams   Parameters for building url (filter and other)
     * @param {any}     postBody    Request postBody
     * @return {Observable<any>}
     * @description
     * This is a core method, every HTTP Call will be done from here, every API Service will
     * extend this class and use this method to get RESTful communication.
     **/
    BaseLoopBackApi.prototype.request = function (method, url, routeParams, urlParams, postBody, pubsub, customHeaders) {
        var _this = this;
        if (routeParams === void 0) { routeParams = {}; }
        if (urlParams === void 0) { urlParams = {}; }
        if (postBody === void 0) { postBody = {}; }
        if (pubsub === void 0) { pubsub = false; }
        // Transpile route variables to the actual request Values
        Object.keys(routeParams).forEach(function (key) {
            url = url.replace(new RegExp(":" + key + "(\/|$)", "g"), routeParams[key] + "$1");
        });
        if (pubsub) {
            if (url.match(/fk/)) {
                var arr = url.split('/');
                arr.pop();
                url = arr.join('/');
            }
            var event_1 = ("[" + method + "]" + url).replace(/\?/, '');
            var subject_1 = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
            this.connection.on(event_1, function (res) { return subject_1.next(res); });
            return subject_1.asObservable();
        }
        else {
            var httpParams_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ encoder: new CustomQueryEncoderHelper() });
            // Headers to be sent
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers = headers.append('Content-Type', 'application/json');
            // Authenticate request
            headers = this.authenticate(url, headers);
            // Body fix for built in remote methods using "data", "options" or "credentials
            // that are the actual body, Custom remote method properties are different and need
            // to be wrapped into a body object
            var body = void 0;
            var postBodyKeys = typeof postBody === 'object' ? Object.keys(postBody) : [];
            if (postBodyKeys.length === 1) {
                body = postBody[postBodyKeys.shift()];
            }
            else {
                body = postBody;
            }
            var queryString = '';
            // Separate filter object from url params and add to search query
            if (urlParams.filter) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersFilteringSet()) {
                    headers = headers.append('filter', JSON.stringify(urlParams.filter));
                }
                else {
                    queryString = "?filter=" + encodeURIComponent(JSON.stringify(urlParams.filter));
                }
                delete urlParams.filter;
            }
            // Separate where object from url params and add to search query
            if (urlParams.where) {
                if (__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isHeadersWhereSet()) {
                    /**
                    CODE BELOW WILL GENERATE THE FOLLOWING ISSUES:
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/356
                    - https://github.com/mean-expert-official/loopback-sdk-builder/issues/328
                    **/
                    headers = headers.append('where', JSON.stringify(urlParams.where));
                }
                else {
                    queryString = "?where=" + encodeURIComponent(JSON.stringify(urlParams.where));
                }
                delete urlParams.where;
            }
            if (typeof customHeaders === 'function') {
                headers = customHeaders(headers);
            }
            /* enhancement/configure-where-headers
                  this.searchParams.setJSON(urlParams);
                  let request: Request = new Request(
                    new RequestOptions({
                      headers        : headers,
                      method         : method,
                      url            : `${url}${queryString}`,
                      search         : Object.keys(urlParams).length > 0 ? this.searchParams.getURLSearchParams() : null,
                      body           : body ? JSON.stringify(body) : undefined,
                      withCredentials: LoopBackConfig.getRequestOptionsCredentials()
                    })
                  );
            TODO Fix Merge Conflict */
            Object.keys(urlParams).forEach(function (paramKey) {
                var paramValue = urlParams[paramKey];
                paramValue = typeof paramValue === 'object' ? JSON.stringify(paramValue) : paramValue;
                httpParams_1 = httpParams_1.append(paramKey, paramValue);
            });
            var request = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpRequest */](method, url, body, {
                headers: headers,
                params: httpParams_1,
                withCredentials: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getRequestOptionsCredentials()
            });
            return this.http.request(request).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (res) { return res.body; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(function (e) { return _this.errorHandler.handleError(e); }));
        }
    };
    /**
     * @method authenticate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {string} url Server URL
     * @param {Headers} headers HTTP Headers
     * @return {void}
     * @description
     * This method will try to authenticate using either an access_token or basic http auth
     */
    BaseLoopBackApi.prototype.authenticate = function (url, headers) {
        if (this.auth.getAccessTokenId()) {
            headers = headers.append('Authorization', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getAuthPrefix() + this.auth.getAccessTokenId());
        }
        return headers;
    };
    /**
     * @method create
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic create method
     */
    BaseLoopBackApi.prototype.create = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub oncreate many method
     */
    BaseLoopBackApi.prototype.onCreate = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method createMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.createMany = function (data, customHeaders) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method onCreateMany
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {T[]} data Generic data type array
     * @return {Observable<T[]>}
     * @description
     * Generic create many method
     */
    BaseLoopBackApi.prototype.onCreateMany = function (data) {
        var _this = this;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method findById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @param {any} data Generic data type
     * @return {Observable<T>}
     * @description
     * Generic findById method
     */
    BaseLoopBackApi.prototype.findById = function (id, filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        var _urlParams = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, _urlParams, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method find
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[+>}
     * @description
     * Generic find method
     */
    BaseLoopBackApi.prototype.find = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (datum) { return datum.map(function (data) { return _this.model.factory(data); }); }));
    };
    /**
     * @method exists
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic exists method
     */
    BaseLoopBackApi.prototype.exists = function (id, customHeaders) {
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id/exists'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders);
    };
    /**
     * @method findOne
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic findOne method
     */
    BaseLoopBackApi.prototype.findOne = function (filter, customHeaders) {
        var _this = this;
        if (filter === void 0) { filter = {}; }
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'findOne'
        ].join('/'), undefined, { filter: filter }, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method updateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic updateAll method
     */
    BaseLoopBackApi.prototype.updateAll = function (where, data, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders);
    };
    /**
     * @method onUpdateAll
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T[]>}
     * @description
     * Generic pubsub onUpdateAll method
     */
    BaseLoopBackApi.prototype.onUpdateAll = function (where, data) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'update'
        ].join('/'), undefined, _urlParams, { data: data }, true);
    };
    /**
     * @method deleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic deleteById method
     */
    BaseLoopBackApi.prototype.deleteById = function (id, customHeaders) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onDeleteById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onDeleteById method
     */
    BaseLoopBackApi.prototype.onDeleteById = function (id) {
        var _this = this;
        return this.request('DELETE', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, undefined, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method count
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<{ count: number }>}
     * @description
     * Generic count method
     */
    BaseLoopBackApi.prototype.count = function (where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('GET', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'count'
        ].join('/'), undefined, _urlParams, undefined, null, customHeaders);
    };
    /**
     * @method updateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic updateAttributes method
     */
    BaseLoopBackApi.prototype.updateAttributes = function (id, data, customHeaders) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpdateAttributes
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onUpdateAttributes method
     */
    BaseLoopBackApi.prototype.onUpdateAttributes = function (id, data) {
        var _this = this;
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method
     */
    BaseLoopBackApi.prototype.upsert = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsert
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsert method
     */
    BaseLoopBackApi.prototype.onUpsert = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PUT', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsert method using patch http method
     */
    BaseLoopBackApi.prototype.upsertPatch = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertPatch
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertPatch method using patch http method
     */
    BaseLoopBackApi.prototype.onUpsertPatch = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('PATCH', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method upsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic upsertWithWhere method
     */
    BaseLoopBackApi.prototype.upsertWithWhere = function (where, data, customHeaders) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onUpsertWithWhere
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic pubsub onUpsertWithWhere method
     */
    BaseLoopBackApi.prototype.onUpsertWithWhere = function (where, data) {
        var _this = this;
        if (where === void 0) { where = {}; }
        if (data === void 0) { data = {}; }
        var _urlParams = {};
        if (where)
            _urlParams.where = where;
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'upsertWithWhere'
        ].join('/'), undefined, _urlParams, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceOrCreate method
     */
    BaseLoopBackApi.prototype.replaceOrCreate = function (data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceOrCreate
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceOrCreate method
     */
    BaseLoopBackApi.prototype.onReplaceOrCreate = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            'replaceOrCreate'
        ].join('/'), undefined, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method replaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic replaceById method
     */
    BaseLoopBackApi.prototype.replaceById = function (id, data, customHeaders) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method onReplaceById
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<T>}
     * @description
     * Generic onReplaceById method
     */
    BaseLoopBackApi.prototype.onReplaceById = function (id, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return this.request('POST', [
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
            __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
            this.model.getModelDefinition().path,
            ':id', 'replace'
        ].join('/'), { id: id }, undefined, { data: data }, true)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (data) { return _this.model.factory(data); }));
    };
    /**
     * @method createChangeStream
     * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
     * @license MIT
     * @return {Observable<any>}
     * @description
     * Generic createChangeStream method
     */
    BaseLoopBackApi.prototype.createChangeStream = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        if (typeof EventSource !== 'undefined') {
            var emit = function (msg) { return subject.next(JSON.parse(msg.data)); };
            var source = new EventSource([
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(),
                __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion(),
                this.model.getModelDefinition().path,
                'change-stream'
            ].join('/'));
            source.addEventListener('data', emit);
            source.onerror = emit;
        }
        else {
            console.warn('SDK Builder: EventSource is not supported');
        }
        return subject.asObservable();
    };
    BaseLoopBackApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_2__error_service__["a" /* ErrorHandler */]])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


//import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

/**
 * Default error handler
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    // ErrorObservable when rxjs version < rc.5
    // ErrorObservable<string> when rxjs version = rc.5
    // I'm leaving any for now to avoid breaking apps using both versions
    ErrorHandler.prototype.handleError = function (errorResponse) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errorResponse.error.error || 'Server error');
    };
    ErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ErrorHandler);
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__real_time__ = __webpack_require__("./src/app/shared/sdk/services/core/real.time.ts");
/* unused harmony namespace reexport */
/* tslint:disable */






/***/ }),

/***/ "./src/app/shared/sdk/services/core/io.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IO; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* tslint:disable */

var IO = /** @class */ (function () {
    function IO(socket) {
        this.observables = {};
        this.socket = socket;
    }
    IO.prototype.emit = function (event, data) {
        this.socket.emit('ME:RT:1://event', {
            event: event,
            data: data
        });
    };
    IO.prototype.on = function (event) {
        if (this.observables[event]) {
            return this.observables[event];
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
        this.socket.on(event, function (res) { return subject.next(res); });
        this.observables[event] = subject.asObservable();
        return this.observables[event];
    };
    return IO;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/core/real.time.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io_service__ = __webpack_require__("./src/app/shared/sdk/services/core/io.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__ = __webpack_require__("./src/app/shared/sdk/models/FireLoop.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module RealTime
* @license MIT
* @description
* This module is a real-time interface for using socket connections, its main purpose
* is to make sure that when there is a valid connection, it will create instances
* of the different real-time functionalities like FireLoop, PubSub and IO.
**/
var RealTime = /** @class */ (function () {
    /**
    * @method constructor
    * @param {SocketConnection} connection WebSocket connection service
    * @param {SDKModels} models Model provider service
    * @param {LoopBackAuth} auth LoopBack authentication service
    * @description
    * It will intialize the shared on ready communication channel.
    **/
    function RealTime(connection, models, auth) {
        this.connection = connection;
        this.models = models;
        this.auth = auth;
        this.connecting = false;
        this.onReadySubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.sharedOnReady = this.onReadySubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["d" /* share */])());
        this.sharedOnReady.subscribe();
    }
    /**
    * @method onDisconnect
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is disconnected from server.
    **/
    RealTime.prototype.onDisconnect = function () {
        return this.connection.sharedObservables.sharedOnDisconnect;
    };
    /**
    * @method onAuthenticated
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is authenticated with the server.
    **/
    RealTime.prototype.onAuthenticated = function () {
        return this.connection.sharedObservables.sharedOnAuthenticated;
    };
    /**
    * @method onUnAuthorized
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is not authorized to connect with the server.
    **/
    RealTime.prototype.onUnAuthorized = function () {
        return this.connection.sharedObservables.sharedOnUnAuthorized;
    };
    /**
    * @method onReady
    * @return {Observable<any>}
    * @description
    * Will trigger when Real-Time Service is Ready for broadcasting.
    * and will register connection flow events to notify subscribers.
    **/
    RealTime.prototype.onReady = function () {
        var _this = this;
        // If there is a valid connection, then we just send back to the EventLoop
        // Or next will be executed before the actual subscription.
        if (this.connection.isConnected()) {
            var to_1 = setTimeout(function () {
                _this.onReadySubject.next('shared-connection');
                clearTimeout(to_1);
            });
            // Else if there is a current attempt of connection we wait for the prior
            // process that started the connection flow.
        }
        else if (this.connecting) {
            var ti_1 = setInterval(function () {
                if (_this.connection.isConnected()) {
                    _this.onReadySubject.next('shared-connection');
                    clearInterval(ti_1);
                }
            }, 500);
            // If there is not valid connection or attempt, then we start the connection flow
            // and make sure we notify all the onReady subscribers when done.
            // Also it will listen for desconnections so we unsubscribe and avoid both:
            // Memory leaks and duplicated triggered events.
        }
        else {
            this.connecting = true;
            this.connection.connect(this.auth.getToken());
            this.IO = new __WEBPACK_IMPORTED_MODULE_1__io_service__["a" /* IO */](this.connection);
            this.FireLoop = new __WEBPACK_IMPORTED_MODULE_3__models_FireLoop__["a" /* FireLoop */](this.connection, this.models);
            // Fire event for those subscribed 
            var s1_1 = this.connection.sharedObservables.sharedOnConnect.subscribe(function () {
                console.log('Real-Time connection has been established');
                _this.connecting = false;
                _this.onReadySubject.next('connected');
                var s2 = _this.connection.sharedObservables.sharedOnDisconnect.subscribe(function () {
                    s1_1.unsubscribe();
                    s2.unsubscribe();
                });
            });
        }
        return this.sharedOnReady;
    };
    RealTime = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_5__custom_SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* LoopBackAuth */]])
    ], RealTime);
    return RealTime;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/GanhoDorCanvasMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GanhoDorCanvasMySqlApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `GanhoDorCanvasMySql` model.
 */
var GanhoDorCanvasMySqlApi = /** @class */ (function (_super) {
    __extends(GanhoDorCanvasMySqlApi, _super);
    function GanhoDorCanvasMySqlApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `GanhoDorCanvasMySql` object.)
     * </em>
     */
    GanhoDorCanvasMySqlApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/GanhoDorCanvasMySqls";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id GanhoDorCanvasMySql id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `GanhoDorCanvasMySql` object.)
     * </em>
     */
    GanhoDorCanvasMySqlApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/GanhoDorCanvasMySqls/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `GanhoDorCanvasMySql`.
     */
    GanhoDorCanvasMySqlApi.prototype.getModelName = function () {
        return "GanhoDorCanvasMySql";
    };
    GanhoDorCanvasMySqlApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], GanhoDorCanvasMySqlApi);
    return GanhoDorCanvasMySqlApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ItemValidacaoPagina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemValidacaoPaginaApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ItemValidacaoPagina` model.
 */
var ItemValidacaoPaginaApi = /** @class */ (function (_super) {
    __extends(ItemValidacaoPaginaApi, _super);
    function ItemValidacaoPaginaApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Fetches belongsTo relation projetoCanvasMySql.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.getProjetoCanvasMySql = function (id, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.findByIdProjetoCanvasMySqlItemValidacaoPaginas = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ItemValidacaoPaginaApi.prototype.destroyByIdProjetoCanvasMySqlItemValidacaoPaginas = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.updateByIdProjetoCanvasMySqlItemValidacaoPaginas = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries itemValidacaoPaginas of ProjetoCanvasMySql.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.getProjetoCanvasMySqlItemValidacaoPaginas = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in itemValidacaoPaginas of this model.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.createProjetoCanvasMySqlItemValidacaoPaginas = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all itemValidacaoPaginas of this model.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ItemValidacaoPaginaApi.prototype.deleteProjetoCanvasMySqlItemValidacaoPaginas = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts itemValidacaoPaginas of ProjetoCanvasMySql.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    ItemValidacaoPaginaApi.prototype.countProjetoCanvasMySqlItemValidacaoPaginas = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in itemValidacaoPaginas of this model.
     *
     * @param {any} id ItemValidacaoPagina id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ItemValidacaoPagina` object.)
     * </em>
     */
    ItemValidacaoPaginaApi.prototype.createManyProjetoCanvasMySqlItemValidacaoPaginas = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ItemValidacaoPaginas/:id/projetoCanvasMySql/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ItemValidacaoPagina`.
     */
    ItemValidacaoPaginaApi.prototype.getModelName = function () {
        return "ItemValidacaoPagina";
    };
    ItemValidacaoPaginaApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ItemValidacaoPaginaApi);
    return ItemValidacaoPaginaApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/MvpCanvasMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MvpCanvasMySqlApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `MvpCanvasMySql` model.
 */
var MvpCanvasMySqlApi = /** @class */ (function (_super) {
    __extends(MvpCanvasMySqlApi, _super);
    function MvpCanvasMySqlApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `MvpCanvasMySql` object.)
     * </em>
     */
    MvpCanvasMySqlApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/MvpCanvasMySqls";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id MvpCanvasMySql id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `MvpCanvasMySql` object.)
     * </em>
     */
    MvpCanvasMySqlApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/MvpCanvasMySqls/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `MvpCanvasMySql`.
     */
    MvpCanvasMySqlApi.prototype.getModelName = function () {
        return "MvpCanvasMySql";
    };
    MvpCanvasMySqlApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], MvpCanvasMySqlApi);
    return MvpCanvasMySqlApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/PaginaValidacaoWeb.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaValidacaoWebApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `PaginaValidacaoWeb` model.
 */
var PaginaValidacaoWebApi = /** @class */ (function (_super) {
    __extends(PaginaValidacaoWebApi, _super);
    function PaginaValidacaoWebApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.findByIdItemValidacaoPaginas = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PaginaValidacaoWebApi.prototype.destroyByIdItemValidacaoPaginas = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.updateByIdItemValidacaoPaginas = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for registroInteresses.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {any} fk Foreign key for registroInteresses
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.findByIdRegistroInteresses = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for registroInteresses.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {any} fk Foreign key for registroInteresses
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PaginaValidacaoWebApi.prototype.destroyByIdRegistroInteresses = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for registroInteresses.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {any} fk Foreign key for registroInteresses
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.updateByIdRegistroInteresses = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries itemValidacaoPaginas of PaginaValidacaoWeb.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.getItemValidacaoPaginas = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in itemValidacaoPaginas of this model.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.createItemValidacaoPaginas = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all itemValidacaoPaginas of this model.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PaginaValidacaoWebApi.prototype.deleteItemValidacaoPaginas = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts itemValidacaoPaginas of PaginaValidacaoWeb.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    PaginaValidacaoWebApi.prototype.countItemValidacaoPaginas = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries registroInteresses of PaginaValidacaoWeb.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.getRegistroInteresses = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in registroInteresses of this model.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.createRegistroInteresses = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all registroInteresses of this model.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    PaginaValidacaoWebApi.prototype.deleteRegistroInteresses = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts registroInteresses of PaginaValidacaoWeb.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    PaginaValidacaoWebApi.prototype.countRegistroInteresses = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation projetoCanvasMySql.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {any} nk Foreign key for itemValidacaoPaginas.
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.getItemValidacaoPaginasProjetoCanvasMySql = function (id, nk, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas/:nk/projetoCanvasMySql";
        var _routeParams = {
            id: id,
            nk: nk
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in itemValidacaoPaginas of this model.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.createManyItemValidacaoPaginas = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in registroInteresses of this model.
     *
     * @param {any} id PaginaValidacaoWeb id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `PaginaValidacaoWeb` object.)
     * </em>
     */
    PaginaValidacaoWebApi.prototype.createManyRegistroInteresses = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/PaginaValidacaoWebs/:id/registroInteresses";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `PaginaValidacaoWeb`.
     */
    PaginaValidacaoWebApi.prototype.getModelName = function () {
        return "PaginaValidacaoWeb";
    };
    PaginaValidacaoWebApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], PaginaValidacaoWebApi);
    return PaginaValidacaoWebApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/Projeto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `Projeto` model.
 */
var ProjetoApi = /** @class */ (function (_super) {
    __extends(ProjetoApi, _super);
    function ProjetoApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for ProjetoCanvasRel.
     *
     * @param {any} id projeto id
     *
     * @param {any} fk Foreign key for ProjetoCanvasRel
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.findByIdProjetoCanvasRel = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for ProjetoCanvasRel.
     *
     * @param {any} id projeto id
     *
     * @param {any} fk Foreign key for ProjetoCanvasRel
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoApi.prototype.destroyByIdProjetoCanvasRel = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for ProjetoCanvasRel.
     *
     * @param {any} id projeto id
     *
     * @param {any} fk Foreign key for ProjetoCanvasRel
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.updateByIdProjetoCanvasRel = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries ProjetoCanvasRel of projeto.
     *
     * @param {any} id projeto id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.getProjetoCanvasRel = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in ProjetoCanvasRel of this model.
     *
     * @param {any} id projeto id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.createProjetoCanvasRel = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all ProjetoCanvasRel of this model.
     *
     * @param {any} id projeto id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoApi.prototype.deleteProjetoCanvasRel = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts ProjetoCanvasRel of projeto.
     *
     * @param {any} id projeto id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    ProjetoApi.prototype.countProjetoCanvasRel = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id projeto id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in ProjetoCanvasRel of this model.
     *
     * @param {any} id projeto id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `Projeto` object.)
     * </em>
     */
    ProjetoApi.prototype.createManyProjetoCanvasRel = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/projetos/:id/ProjetoCanvasRel";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `Projeto`.
     */
    ProjetoApi.prototype.getModelName = function () {
        return "Projeto";
    };
    ProjetoApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ProjetoApi);
    return ProjetoApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ProjetoCanvas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoCanvasApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ProjetoCanvas` model.
 */
var ProjetoCanvasApi = /** @class */ (function (_super) {
    __extends(ProjetoCanvasApi, _super);
    function ProjetoCanvasApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvas` object.)
     * </em>
     */
    ProjetoCanvasApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvases";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ProjetoCanvas id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvas` object.)
     * </em>
     */
    ProjetoCanvasApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvases/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProjetoCanvas`.
     */
    ProjetoCanvasApi.prototype.getModelName = function () {
        return "ProjetoCanvas";
    };
    ProjetoCanvasApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ProjetoCanvasApi);
    return ProjetoCanvasApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ProjetoCanvasMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoCanvasMySqlApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ProjetoCanvasMySql` model.
 */
var ProjetoCanvasMySqlApi = /** @class */ (function (_super) {
    __extends(ProjetoCanvasMySqlApi, _super);
    function ProjetoCanvasMySqlApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.findByIdItemValidacaoPaginas = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoCanvasMySqlApi.prototype.destroyByIdItemValidacaoPaginas = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for itemValidacaoPaginas.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {any} fk Foreign key for itemValidacaoPaginas
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.updateByIdItemValidacaoPaginas = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries itemValidacaoPaginas of ProjetoCanvasMySql.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.getItemValidacaoPaginas = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in itemValidacaoPaginas of this model.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.createItemValidacaoPaginas = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all itemValidacaoPaginas of this model.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoCanvasMySqlApi.prototype.deleteItemValidacaoPaginas = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts itemValidacaoPaginas of ProjetoCanvasMySql.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    ProjetoCanvasMySqlApi.prototype.countItemValidacaoPaginas = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Fetches belongsTo relation projetoCanvasMySql.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {any} nk Foreign key for itemValidacaoPaginas.
     *
     * @param {boolean} refresh
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.getItemValidacaoPaginasProjetoCanvasMySql = function (id, nk, refresh, customHeaders) {
        if (refresh === void 0) { refresh = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas/:nk/projetoCanvasMySql";
        var _routeParams = {
            id: id,
            nk: nk
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof refresh !== 'undefined' && refresh !== null)
            _urlParams.refresh = refresh;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in itemValidacaoPaginas of this model.
     *
     * @param {any} id ProjetoCanvasMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoCanvasMySql` object.)
     * </em>
     */
    ProjetoCanvasMySqlApi.prototype.createManyItemValidacaoPaginas = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoCanvasMySqls/:id/itemValidacaoPaginas";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProjetoCanvasMySql`.
     */
    ProjetoCanvasMySqlApi.prototype.getModelName = function () {
        return "ProjetoCanvasMySql";
    };
    ProjetoCanvasMySqlApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ProjetoCanvasMySqlApi);
    return ProjetoCanvasMySqlApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/ProjetoMySql.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetoMySqlApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `ProjetoMySql` model.
 */
var ProjetoMySqlApi = /** @class */ (function (_super) {
    __extends(ProjetoMySqlApi, _super);
    function ProjetoMySqlApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for projetoCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for projetoCanvasMySqls
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.findByIdProjetoCanvasMySqls = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for projetoCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for projetoCanvasMySqls
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoMySqlApi.prototype.destroyByIdProjetoCanvasMySqls = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for projetoCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for projetoCanvasMySqls
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.updateByIdProjetoCanvasMySqls = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for mvpCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for mvpCanvasMySqls
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.findByIdMvpCanvasMySqls = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for mvpCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for mvpCanvasMySqls
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoMySqlApi.prototype.destroyByIdMvpCanvasMySqls = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for mvpCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for mvpCanvasMySqls
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.updateByIdMvpCanvasMySqls = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Find a related item by id for ganhoDorCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for ganhoDorCanvasMySqls
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.findByIdGanhoDorCanvasMySqls = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for ganhoDorCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for ganhoDorCanvasMySqls
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoMySqlApi.prototype.destroyByIdGanhoDorCanvasMySqls = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for ganhoDorCanvasMySqls.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {any} fk Foreign key for ganhoDorCanvasMySqls
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.updateByIdGanhoDorCanvasMySqls = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries projetoCanvasMySqls of ProjetoMySql.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.getProjetoCanvasMySqls = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in projetoCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.createProjetoCanvasMySqls = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all projetoCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoMySqlApi.prototype.deleteProjetoCanvasMySqls = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts projetoCanvasMySqls of ProjetoMySql.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    ProjetoMySqlApi.prototype.countProjetoCanvasMySqls = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries mvpCanvasMySqls of ProjetoMySql.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.getMvpCanvasMySqls = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in mvpCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.createMvpCanvasMySqls = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all mvpCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoMySqlApi.prototype.deleteMvpCanvasMySqls = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts mvpCanvasMySqls of ProjetoMySql.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    ProjetoMySqlApi.prototype.countMvpCanvasMySqls = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries ganhoDorCanvasMySqls of ProjetoMySql.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.getGanhoDorCanvasMySqls = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in ganhoDorCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.createGanhoDorCanvasMySqls = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all ganhoDorCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    ProjetoMySqlApi.prototype.deleteGanhoDorCanvasMySqls = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts ganhoDorCanvasMySqls of ProjetoMySql.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    ProjetoMySqlApi.prototype.countGanhoDorCanvasMySqls = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in projetoCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.createManyProjetoCanvasMySqls = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/projetoCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in mvpCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.createManyMvpCanvasMySqls = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/mvpCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in ganhoDorCanvasMySqls of this model.
     *
     * @param {any} id ProjetoMySql id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `ProjetoMySql` object.)
     * </em>
     */
    ProjetoMySqlApi.prototype.createManyGanhoDorCanvasMySqls = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/ProjetoMySqls/:id/ganhoDorCanvasMySqls";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `ProjetoMySql`.
     */
    ProjetoMySqlApi.prototype.getModelName = function () {
        return "ProjetoMySql";
    };
    ProjetoMySqlApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], ProjetoMySqlApi);
    return ProjetoMySqlApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/RegistroInteresse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroInteresseApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */








/**
 * Api services for the `RegistroInteresse` model.
 */
var RegistroInteresseApi = /** @class */ (function (_super) {
    __extends(RegistroInteresseApi, _super);
    function RegistroInteresseApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `RegistroInteresse` object.)
     * </em>
     */
    RegistroInteresseApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/RegistroInteresses";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id RegistroInteresse id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `RegistroInteresse` object.)
     * </em>
     */
    RegistroInteresseApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/RegistroInteresses/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `RegistroInteresse`.
     */
    RegistroInteresseApi.prototype.getModelName = function () {
        return "RegistroInteresse";
    };
    RegistroInteresseApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_7__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], RegistroInteresseApi);
    return RegistroInteresseApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/SDKModels.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SDKModels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__("./src/app/shared/sdk/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Projeto__ = __webpack_require__("./src/app/shared/sdk/models/Projeto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ProjetoCanvas__ = __webpack_require__("./src/app/shared/sdk/models/ProjetoCanvas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/models/ProjetoMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/ProjetoCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/MvpCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_GanhoDorCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/models/GanhoDorCanvasMySql.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_PaginaValidacaoWeb__ = __webpack_require__("./src/app/shared/sdk/models/PaginaValidacaoWeb.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_ItemValidacaoPagina__ = __webpack_require__("./src/app/shared/sdk/models/ItemValidacaoPagina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_RegistroInteresse__ = __webpack_require__("./src/app/shared/sdk/models/RegistroInteresse.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */











var SDKModels = /** @class */ (function () {
    function SDKModels() {
        this.models = {
            User: __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */],
            Projeto: __WEBPACK_IMPORTED_MODULE_2__models_Projeto__["a" /* Projeto */],
            ProjetoCanvas: __WEBPACK_IMPORTED_MODULE_3__models_ProjetoCanvas__["a" /* ProjetoCanvas */],
            ProjetoMySql: __WEBPACK_IMPORTED_MODULE_4__models_ProjetoMySql__["a" /* ProjetoMySql */],
            ProjetoCanvasMySql: __WEBPACK_IMPORTED_MODULE_5__models_ProjetoCanvasMySql__["a" /* ProjetoCanvasMySql */],
            MvpCanvasMySql: __WEBPACK_IMPORTED_MODULE_6__models_MvpCanvasMySql__["a" /* MvpCanvasMySql */],
            GanhoDorCanvasMySql: __WEBPACK_IMPORTED_MODULE_7__models_GanhoDorCanvasMySql__["a" /* GanhoDorCanvasMySql */],
            PaginaValidacaoWeb: __WEBPACK_IMPORTED_MODULE_8__models_PaginaValidacaoWeb__["a" /* PaginaValidacaoWeb */],
            ItemValidacaoPagina: __WEBPACK_IMPORTED_MODULE_9__models_ItemValidacaoPagina__["a" /* ItemValidacaoPagina */],
            RegistroInteresse: __WEBPACK_IMPORTED_MODULE_10__models_RegistroInteresse__["a" /* RegistroInteresse */],
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    SDKModels = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SDKModels);
    return SDKModels;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_base_service__ = __webpack_require__("./src/app/shared/sdk/services/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_auth_service__ = __webpack_require__("./src/app/shared/sdk/services/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_error_service__ = __webpack_require__("./src/app/shared/sdk/services/core/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.connections.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */









/**
 * Api services for the `User` model.
 */
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, connection, models, auth, errorHandler) {
        var _this = _super.call(this, http, connection, models, auth, errorHandler) || this;
        _this.http = http;
        _this.connection = connection;
        _this.models = models;
        _this.auth = auth;
        _this.errorHandler = errorHandler;
        return _this;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param {any} id User id
     *
     * @param {any} fk Foreign key for accessTokens
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PUT";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/:fk";
        var _routeParams = {
            id: id,
            fk: fk
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} filter
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter, customHeaders) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof filter !== 'undefined' && filter !== null)
            _urlParams.filter = filter;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id, customHeaders) {
        var _method = "DELETE";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param {any} id User id
     *
     * @param {object} where Criteria to match model instances
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where, customHeaders) {
        if (where === void 0) { where = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens/count";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        if (typeof where !== 'undefined' && where !== null)
            _urlParams.where = where;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch an existing model instance or insert a new one into the data source.
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - Model instance data
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchOrCreate = function (data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users";
        var _routeParams = {};
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Patch attributes for a model instance and persist it into the data source.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     *  - `data` – `{object}` - An object of model property name/value pairs
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.patchAttributes = function (id, data, customHeaders) {
        if (data === void 0) { data = {}; }
        var _method = "PATCH";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param {string} include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * O corpo de resposta contém propriedades do AccessToken criado no login.
     * Dependendo do valor do parâmetro `include`, o corpo poderá conter propriedades adicionais:
     *
     *   - `user` - `U+007BUserU+007D` - Dados do usuário com login efetuado atualmente. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include, rememberMe, customHeaders) {
        var _this = this;
        if (include === void 0) { include = 'user'; }
        if (rememberMe === void 0) { rememberMe = true; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/login";
        var _routeParams = {};
        var _postBody = {
            credentials: credentials
        };
        var _urlParams = {};
        if (typeof include !== 'undefined' && include !== null)
            _urlParams.include = include;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* map */])(function (response) {
            response.ttl = parseInt(response.ttl);
            response.rememberMe = rememberMe;
            _this.auth.setToken(response);
            return response;
        }));
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function (customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/logout";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        _urlParams.access_token = this.auth.getAccessTokenId();
        this.auth.clear();
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Trigger user's identity verification with configured verifyOptions
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method does not accept any data. Supply an empty object.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.verify = function (id, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/verify";
        var _routeParams = {
            id: id
        };
        var _postBody = {};
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Confirm a user registration with identity verification token.
     *
     * @param {string} uid
     *
     * @param {string} token
     *
     * @param {string} redirect
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect, customHeaders) {
        if (redirect === void 0) { redirect = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/confirm";
        var _routeParams = {};
        var _postBody = {};
        var _urlParams = {};
        if (typeof uid !== 'undefined' && uid !== null)
            _urlParams.uid = uid;
        if (typeof token !== 'undefined' && token !== null)
            _urlParams.token = token;
        if (typeof redirect !== 'undefined' && redirect !== null)
            _urlParams.redirect = redirect;
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset";
        var _routeParams = {};
        var _postBody = {
            options: options
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Change a user's password.
     *
     * @param {object} data Request data.
     *
     *  - `oldPassword` – `{string}` -
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.changePassword = function (oldPassword, newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/change-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Reset user's password via a password-reset token.
     *
     * @param {object} data Request data.
     *
     *  - `newPassword` – `{string}` -
     *
     * @returns {object} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.setPassword = function (newPassword, customHeaders) {
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/reset-password";
        var _routeParams = {};
        var _postBody = {
            data: {
                newPassword: newPassword
            }
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param {any} id User id
     *
     * @param {object} data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns {object[]} An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createManyAccessTokens = function (id, data, customHeaders) {
        if (data === void 0) { data = []; }
        var _method = "POST";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() +
            "/Users/:id/accessTokens";
        var _routeParams = {
            id: id
        };
        var _postBody = {
            data: data
        };
        var _urlParams = {};
        var result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
        return result;
    };
    /**
     * @ngdoc method
     * @name sdk.User#getCurrent
     * @methodOf sdk.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function (filter) {
        if (filter === void 0) { filter = {}; }
        var _method = "GET";
        var _url = __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath() + "/" + __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getApiVersion() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null)
            id = '__anonymous__';
        var _routeParams = { id: id };
        var _urlParams = {};
        var _postBody = {};
        if (filter)
            _urlParams.filter = filter;
        return this.request(_method, _url, _routeParams, _urlParams, _postBody);
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link sdk.User#login} or
     * {@link sdk.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object An Account instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * Get data of the currently logged access tokern that was returned by the last
     * call to {@link sdk.User#login}
     *
     * @returns object An AccessToken instance.
     */
    UserApi.prototype.getCurrentToken = function () {
        return this.auth.getToken();
    };
    /**
     * @name sdk.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return !(this.getCurrentId() === '' || this.getCurrentId() == null || this.getCurrentId() == 'null');
    };
    /**
     * @name sdk.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */])),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */])),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */])),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__sockets_socket_connections__["a" /* SocketConnection */],
            __WEBPACK_IMPORTED_MODULE_2__SDKModels__["a" /* SDKModels */],
            __WEBPACK_IMPORTED_MODULE_5__core_auth_service__["a" /* LoopBackAuth */],
            __WEBPACK_IMPORTED_MODULE_6__core_error_service__["a" /* ErrorHandler */]])
    ], UserApi);
    return UserApi;
}(__WEBPACK_IMPORTED_MODULE_3__core_base_service__["a" /* BaseLoopBackApi */]));



/***/ }),

/***/ "./src/app/shared/sdk/services/custom/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__("./src/app/shared/sdk/services/custom/User.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Projeto__ = __webpack_require__("./src/app/shared/sdk/services/custom/Projeto.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Projeto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProjetoCanvas__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvas.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProjetoMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoMySql.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__ProjetoMySql__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ProjetoCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/ProjetoCanvasMySql.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__MvpCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/MvpCanvasMySql.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GanhoDorCanvasMySql__ = __webpack_require__("./src/app/shared/sdk/services/custom/GanhoDorCanvasMySql.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__GanhoDorCanvasMySql__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PaginaValidacaoWeb__ = __webpack_require__("./src/app/shared/sdk/services/custom/PaginaValidacaoWeb.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ItemValidacaoPagina__ = __webpack_require__("./src/app/shared/sdk/services/custom/ItemValidacaoPagina.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RegistroInteresse__ = __webpack_require__("./src/app/shared/sdk/services/custom/RegistroInteresse.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SDKModels__ = __webpack_require__("./src/app/shared/sdk/services/custom/SDKModels.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__logger_service__ = __webpack_require__("./src/app/shared/sdk/services/custom/logger.service.ts");
/* unused harmony namespace reexport */
/* tslint:disable */














/***/ }),

/***/ "./src/app/shared/sdk/services/custom/logger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */


/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (__WEBPACK_IMPORTED_MODULE_1__lb_config__["a" /* LoopBackConfig */].debuggable())
            console.timeEnd(arg);
    };
    LoggerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/shared/sdk/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_index__ = __webpack_require__("./src/app/shared/sdk/services/core/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_index__ = __webpack_require__("./src/app/shared/sdk/services/custom/index.ts");
/* unused harmony namespace reexport */
/* tslint:disable */




/***/ }),

/***/ "./src/app/shared/sdk/sockets/socket.browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_socket_io_client__);
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketBrowser
* @license MIT
* @description
* This module handle socket connections for web browsers, it will be DI Swapped
* depending on the platform environment.
* This module will be generated when the -d ng2web flag is set
**/
var SocketBrowser = /** @class */ (function () {
    function SocketBrowser() {
    }
    /**
     * @method connect
     * @param {string} url URL path to connect with the server.
     * @param {any} options Any socket.io v1 =< valid options
     * @return {any} Not currently a socket.io-client for web Typings implemented.
     * @description
     * This method will return a valid socket connection.
     **/
    SocketBrowser.prototype.connect = function (url, options) {
        return __WEBPACK_IMPORTED_MODULE_0_socket_io_client__(url, options);
    };
    return SocketBrowser;
}());



/***/ }),

/***/ "./src/app/shared/sdk/sockets/socket.connections.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketConnection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_driver__ = __webpack_require__("./src/app/shared/sdk/sockets/socket.driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lb_config__ = __webpack_require__("./src/app/shared/sdk/lb.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* tslint:disable */





/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module SocketConnection
* @license MIT
* @description
* This module handle socket connections and return singleton instances for each
* connection, it will use the SDK Socket Driver Available currently supporting
* Angular 2 for web, NativeScript 2 and Angular Universal.
**/
var SocketConnection = /** @class */ (function () {
    /**
     * @method constructor
     * @param {SocketDriver} driver Socket IO Driver
     * @param {NgZone} zone Angular 2 Zone
     * @description
     * The constructor will set references for the shared hot observables from
     * the class subjects. Then it will subscribe each of these observables
     * that will create a channel that later will be shared between subscribers.
     **/
    function SocketConnection(driver, zone) {
        this.driver = driver;
        this.zone = zone;
        this.subjects = {
            onConnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */](),
            onDisconnect: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */](),
            onAuthenticated: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */](),
            onUnAuthorized: new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]()
        };
        this.sharedObservables = {};
        this.authenticated = false;
        this.sharedObservables = {
            sharedOnConnect: this.subjects.onConnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* share */])()),
            sharedOnDisconnect: this.subjects.onDisconnect.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* share */])()),
            sharedOnAuthenticated: this.subjects.onAuthenticated.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* share */])()),
            sharedOnUnAuthorized: this.subjects.onUnAuthorized.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* share */])())
        };
        // This is needed to create the first channel, subsequents will share the connection
        // We are using Hot Observables to avoid duplicating connection status events.
        this.sharedObservables.sharedOnConnect.subscribe();
        this.sharedObservables.sharedOnDisconnect.subscribe();
        this.sharedObservables.sharedOnAuthenticated.subscribe();
        this.sharedObservables.sharedOnUnAuthorized.subscribe();
    }
    /**
     * @method connect
     * @param {AccessToken} token AccesToken instance
     * @return {void}
     * @description
     * This method will create a new socket connection when not previously established.
     * If there is a broken connection it will re-connect.
     **/
    SocketConnection.prototype.connect = function (token) {
        var _this = this;
        if (token === void 0) { token = null; }
        if (!this.socket) {
            console.info('Creating a new connection with: ', __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath());
            // Create new socket connection
            this.socket = this.driver.connect(__WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].getPath(), {
                log: false,
                secure: __WEBPACK_IMPORTED_MODULE_4__lb_config__["a" /* LoopBackConfig */].isSecureWebSocketsSet(),
                forceNew: true,
                forceWebsockets: true,
                transports: ['websocket']
            });
            // Listen for connection
            this.on('connect', function () {
                _this.subjects.onConnect.next('connected');
                // Authenticate or start heartbeat now    
                _this.emit('authentication', token);
            });
            // Listen for authentication
            this.on('authenticated', function () {
                _this.authenticated = true;
                _this.subjects.onAuthenticated.next();
                _this.heartbeater();
            });
            // Listen for authentication
            this.on('unauthorized', function (err) {
                _this.authenticated = false;
                _this.subjects.onUnAuthorized.next(err);
            });
            // Listen for disconnections
            this.on('disconnect', function (status) { return _this.subjects.onDisconnect.next(status); });
        }
        else if (this.socket && !this.socket.connected) {
            if (typeof this.socket.off === 'function') {
                this.socket.off();
            }
            if (typeof this.socket.destroy === 'function') {
                this.socket.destroy();
            }
            delete this.socket;
            this.connect(token);
        }
    };
    /**
     * @method isConnected
     * @return {boolean}
     * @description
     * This method will return true or false depending on established connections
     **/
    SocketConnection.prototype.isConnected = function () {
        return (this.socket && this.socket.connected);
    };
    /**
     * @method on
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method listen for server events from the current WebSocket connection.
     * This method is a facade that will wrap the original "on" method and run it
     * within the Angular Zone to avoid update issues.
     **/
    SocketConnection.prototype.on = function (event, handler) {
        var _this = this;
        this.socket.on(event, function (data) { return _this.zone.run(function () { return handler(data); }); });
    };
    /**
     * @method emit
     * @param {string} event Event name
     * @param {any=} data Any type of data
     * @return {void}
     * @description
     * This method will send any type of data to the server according the event set.
     **/
    SocketConnection.prototype.emit = function (event, data) {
        if (data) {
            this.socket.emit(event, data);
        }
        else {
            this.socket.emit(event);
        }
    };
    /**
     * @method removeListener
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeListener = function (event, handler) {
        if (typeof this.socket.off === 'function') {
            this.socket.off(event, handler);
        }
    };
    /**
     * @method removeAllListeners
     * @param {string} event Event name
     * @param {Function} handler Event listener handler
     * @return {void}
     * @description
     * This method will wrap the original "on" method and run it within the Angular Zone
     * Note: off is being used since the nativescript socket io client does not provide
     * removeListener method, but only provides with off which is provided in any platform.
     **/
    SocketConnection.prototype.removeAllListeners = function (event) {
        if (typeof this.socket.removeAllListeners === 'function') {
            this.socket.removeAllListeners(event);
        }
    };
    /**
     * @method disconnect
     * @return {void}
     * @description
     * This will disconnect the client from the server
     **/
    SocketConnection.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    /**
     * @method heartbeater
     * @return {void}
     * @description
     * This will keep the connection as active, even when users are not sending
     * data, this avoids disconnection because of a connection not being used.
     **/
    SocketConnection.prototype.heartbeater = function () {
        var _this = this;
        var heartbeater = setInterval(function () {
            if (_this.isConnected()) {
                _this.socket.emit('lb-ping');
            }
            else {
                _this.socket.removeAllListeners('lb-pong');
                clearInterval(heartbeater);
            }
        }, 15000);
        this.socket.on('lb-pong', function (data) { return console.info('Heartbeat: ', data); });
    };
    SocketConnection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__socket_driver__["a" /* SocketDriver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], SocketConnection);
    return SocketConnection;
}());



/***/ }),

/***/ "./src/app/shared/sdk/sockets/socket.driver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketDriver; });
/* tslint:disable */
/**
 * @module SocketDriver
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SocketDriver class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var SocketDriver = /** @class */ (function () {
    function SocketDriver() {
    }
    SocketDriver.prototype.connect = function (url, options) { };
    return SocketDriver;
}());



/***/ }),

/***/ "./src/app/shared/sdk/storage/cookie.browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module CookieBrowser
* @license MIT
* @description
* This module handle cookies, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var CookieBrowser = /** @class */ (function () {
    function CookieBrowser() {
        /**
         * @type {CookieInterface}
         **/
        this.cookies = {};
    }
    /**
     * @method get
     * @param {string} key Cookie key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.get = function (key) {
        if (!this.cookies[key]) {
            var cookie = window.document
                .cookie.split('; ')
                .filter(function (item) { return item.split('=')[0] === key; }).pop();
            if (!cookie) {
                return null;
            }
            this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
        }
        return this.cookies[key];
    };
    /**
     * @method set
     * @param {string} key Cookie key name
     * @param {any} value Any value
     * @param {Date=} expires The date of expiration (Optional)
     * @return {void}
     * @description
     * The setter will return any type of data persisted in cookies.
     **/
    CookieBrowser.prototype.set = function (key, value, expires) {
        this.cookies[key] = value;
        var cookie = key + "=" + encodeURI(value) + "; path=/" + (expires ? "; expires=" + expires.toUTCString() : '');
        window.document.cookie = cookie;
    };
    /**
     * @method remove
     * @param {string} key Cookie key name
     * @return {void}
     * @description
     * This method will remove a cookie from the client.
     **/
    CookieBrowser.prototype.remove = function (key) {
        document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        delete this.cookies[key];
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    CookieBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(decodeURI(value));
        }
        catch (e) {
            return value;
        }
    };
    CookieBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], CookieBrowser);
    return CookieBrowser;
}());



/***/ }),

/***/ "./src/app/shared/sdk/storage/storage.browser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */

/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@mean-expert-official>
* @module StorageBrowser
* @license MIT
* @description
* This module handle localStorage, it will be provided using DI Swapping according the
* SDK Socket Driver Available currently supporting Angular 2 for web and NativeScript 2.
**/
var StorageBrowser = /** @class */ (function () {
    function StorageBrowser() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        return this.parse(data);
    };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    StorageBrowser.prototype.set = function (key, value, expires) {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    StorageBrowser.prototype.remove = function (key) {
        if (localStorage[key]) {
            localStorage.removeItem(key);
        }
        else {
            console.log('Trying to remove unexisting key: ', key);
        }
    };
    /**
     * @method parse
     * @param {any} value Input data expected to be JSON
     * @return {void}
     * @description
     * This method will parse the string as JSON if possible, otherwise will
     * return the value itself.
     **/
    StorageBrowser.prototype.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    StorageBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], StorageBrowser);
    return StorageBrowser;
}());



/***/ }),

/***/ "./src/app/shared/sdk/storage/storage.swaps.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SDKStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable */
/**
 * @module Storage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 **/
var BaseStorage = /** @class */ (function () {
    function BaseStorage() {
    }
    /**
     * @method get
     * @param {string} key Storage key name
     * @return {any}
     * @description
     * The getter will return any type of data persisted in storage.
     **/
    BaseStorage.prototype.get = function (key) { };
    /**
     * @method set
     * @param {string} key Storage key name
     * @param {any} value Any value
     * @return {void}
     * @description
     * The setter will return any type of data persisted in localStorage.
     **/
    BaseStorage.prototype.set = function (key, value, expires) { };
    /**
     * @method remove
     * @param {string} key Storage key name
     * @return {void}
     * @description
     * This method will remove a localStorage item from the client.
     **/
    BaseStorage.prototype.remove = function (key) { };
    return BaseStorage;
}());

/**
 * @module InternalStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The InternalStorage class is used for dependency injection swapping.
 * It will be provided using factory method from different sources.
 * This is mainly required because Angular Universal integration.
 * It does inject a CookieStorage instead of LocalStorage.
 **/
var InternalStorage = /** @class */ (function (_super) {
    __extends(InternalStorage, _super);
    function InternalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalStorage;
}(BaseStorage));

/**
 * @module SDKStorage
 * @author Jonathan Casarrubias <t: johncasarrubias, gh: mean-expert-official>
 * @license MIT
 * @description
 * The SDKStorage class is used for dependency injection swapping.
 * It will be provided using factory method according the right environment.
 * This is created for public usage, to allow persisting custom data
 * Into the local storage API.
 **/
var SDKStorage = /** @class */ (function (_super) {
    __extends(SDKStorage, _super);
    function SDKStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SDKStorage;
}(BaseStorage));



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\r\n  <div class=\"logo\">\r\n    <a href=\"http://www.creative-tim.com\" class=\"simple-text\">\r\n      <div class=\"logo-img\">\r\n        <img src=\"/assets/img/angular2-logo-white.png\" />\r\n      </div>\r\n      valhip\r\n    </a>\r\n  </div>\r\n  <ul class=\"nav responsive-nav\">\r\n    <li>\r\n      <a routerLink=\"/projetos\">\r\n        <i class=\"fa fa-search\"></i>\r\n        <p>Projetos</p>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/paginasValidadoras\">\r\n        <i class=\"fa fa-search\"></i>\r\n        <p>Paginas Validadoras</p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map