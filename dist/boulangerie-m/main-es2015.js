(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+p+5":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-material-timepicker */ "r3oX");
/* harmony import */ var _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/form-validated-modal/form-validated-modal.component */ "p6Hq");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-routing.module */ "DM6G");
/* harmony import */ var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/order-form/order-form.component */ "H70G");
/* harmony import */ var _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/mondayStartWeekDateAdapter.service */ "dHby");
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/order-summary.pipe */ "nIH7");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/order.service */ "CZRY");























class OrderModule {
}
OrderModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: OrderModule });
OrderModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function OrderModule_Factory(t) { return new (t || OrderModule)(); }, providers: [
        _services_order_service__WEBPACK_IMPORTED_MODULE_21__["OrderService"],
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'fr-FR' },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__["MondayStartWeekDateAdapter"] },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"],
        ], _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](OrderModule, { declarations: [_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderFormComponent"],
        _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__["FormValidatedModalComponent"],
        _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"]], exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderFormComponent"],
                    _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__["FormValidatedModalComponent"],
                    _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"],
                ],
                providers: [
                    _services_order_service__WEBPACK_IMPORTED_MODULE_21__["OrderService"],
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'fr-FR' },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__["MondayStartWeekDateAdapter"] },
                ],
                exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gueri\Dev\prostore\src\main.ts */"zUnb");


/***/ }),

/***/ "5wd/":
/*!********************************************************!*\
  !*** ./src/app/admin/services/opening-days.service.ts ***!
  \********************************************************/
/*! exports provided: OpeningDaysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningDaysService", function() { return OpeningDaysService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class OpeningDaysService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAllClosingDays() {
        return this.firestore
            .collection('closingDays')
            .valueChanges({ idField: 'rangeId' });
    }
    addClosingDays(days) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore
            .collection('closingDays')
            .add(days));
    }
    deleteClosingDays(rangeId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore
            .collection('closingDays')
            .doc(rangeId)
            .delete());
    }
}
OpeningDaysService.??fac = function OpeningDaysService_Factory(t) { return new (t || OpeningDaysService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
OpeningDaysService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: OpeningDaysService, factory: OpeningDaysService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OpeningDaysService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig: {
        apiKey: 'AIzaSyAdqYq28vpm_FbbmvbxFju8m0kOyKrfoaU',
        authDomain: 'boulangerie-m17.firebaseapp.com',
        projectId: 'boulangerie-m17',
        storageBucket: 'boulangerie-m17.appspot.com',
        messagingSenderId: '615948873412',
        appId: '1:615948873412:web:996ee9e9433f1db3016391',
        measurementId: 'G-SNJSWSZG0K',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CZRY":
/*!*************************************************!*\
  !*** ./src/app/order/services/order.service.ts ***!
  \*************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class OrderService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAllAvailableItems() {
        return this.firestore
            .collection('products', (ref) => ref.where('available', '==', true))
            .valueChanges();
    }
    addOrder(order) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.collection('orders').add(order));
    }
}
OrderService.??fac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
OrderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: OrderService, factory: OrderService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "DB88":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/mentions-legales/mentions-legales.component.ts ***!
  \***************************************************************************/
/*! exports provided: MentionsLegalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentionsLegalesComponent", function() { return MentionsLegalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MentionsLegalesComponent {
    constructor() { }
    ngOnInit() { }
}
MentionsLegalesComponent.??fac = function MentionsLegalesComponent_Factory(t) { return new (t || MentionsLegalesComponent)(); };
MentionsLegalesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MentionsLegalesComponent, selectors: [["app-mentions-legales"]], decls: 57, vars: 0, consts: [["href", "https://www.freepik.com/vectors/background", 1, "bkgrdLink"], ["href", "https://www.flaticon.com/authors/freepik", "title", "Freepik"], ["href", "https://www.flaticon.com/", "title", "Flaticon"]], template: function MentionsLegalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Conditions G\u00E9n\u00E9rales d\u2019Utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Nous utilisons des liens de tracking Google. Nous stockons des cookies de navigations ainsi que les donn\u00E9es utilisateur n\u00E9cessaires au fonctionnement du site : informations de navigations, fonctionnalit\u00E9s annexes, et de localisation. Nous sommes susceptibles d\u2019afficher des pubs, et des pubs cibl\u00E9es par Google.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Article 1 : Objet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Les pr\u00E9sentes CGU ou Conditions G\u00E9n\u00E9rales d\u2019Utilisation encadrent juridiquement l\u2019utilisation des services du site boulangerie-m.web.app (ci-apr\u00E8s d\u00E9nomm\u00E9 \u00AB le site \u00BB). Constituant le contrat entre la soci\u00E9t\u00E9 Michon et l\u2019Utilisateur.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Article 2 : Mentions l\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " L\u2019\u00E9dition du site boulangerie-m.web.app est assur\u00E9e par la soci\u00E9t\u00E9 Michon, Siret n\u00B080886630500010, dont le si\u00E8ge social est localis\u00E9 au 127 avenue du Lieutenant Colonel Bernier, 17 000 La Rochelle. L\u2019h\u00E9bergeur du site boulangerie-m.web.app est la soci\u00E9t\u00E9 Google France, sise au 8 rue de Londres, 75009 Paris, France.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Article 3 : Acc\u00E8s au site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Le site boulangerie-m.web.app permet d\u2019acc\u00E9der gratuitement aux services suivants : \u2013 Affichage des articles \u2013 Mise en place du panier. Le site est accessible gratuitement depuis n\u2019importe o\u00F9 par tout utilisateur disposant d\u2019un acc\u00E8s \u00E0 Internet (sauf restriction par des pares-feux nationaux). Tous les frais n\u00E9cessaires pour l\u2019acc\u00E8s aux services (mat\u00E9riel informatique, connexion, internet\u2026) sont \u00E0 la charge de l\u2019Utilisateur. L\u2019acc\u00E8s au portail d\u00E9di\u00E9 aux administrateurs s\u2019effectue \u00E0 l\u2019aide d\u2019un identifiant et d\u2019un mot de passe. Pour des raisons de maintenance ou autres, l\u2019acc\u00E8s au site peut \u00EAtre interrompu ou suspendu par l\u2019\u00E9diteur sans pr\u00E9avis ni justification.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Article 4 : Collecte des donn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Conform\u00E9ment \u00E0 la loi n\u00B078-17 du 6 janvier relative \u00E0 l\u2019informatique, aux fichiers et aux libert\u00E9s, la collecte et le traitement d\u2019informations personnelles s\u2019effectuent dans le respect de la vie priv\u00E9e. La liste des donn\u00E9es collect\u00E9es : Adresse postale \u2013 Num\u00E9ro de t\u00E9l\u00E9phone \u2013 Contenu du panier \u2013 Commandes finalis\u00E9es et en cours. Suivant la loi Informatique et Libert\u00E9s en date du 6 janvier 1978, articles 39 et 40, l\u2019Utilisateur dispose du droit d\u2019acc\u00E9der, de rectifier, de supprimer et d\u2019opposer ses donn\u00E9es personnelles. L\u2019exercice de ce droit s\u2019effectue par une demande \u00E0 cette adresse mail : boulangerie.m17@gmail.com (informations disponibles ici).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Article 5 : Propri\u00E9t\u00E9 intellectuelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Les marques, logos ainsi que les contenus du site boulangerie-m.web.app (illustrations graphiques, textes\u2026) sont prot\u00E9g\u00E9s par le Code de la propri\u00E9t\u00E9 intellectuelle et par le droit d\u2019auteur. La reproduction et la copie des contenus par l\u2019Utilisateur requi\u00E8rent une autorisation pr\u00E9alable du site. Dans ce cas, toute utilisation \u00E0 des usages commerciaux ou \u00E0 des fins publicitaires est proscrite.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Article 6 : Responsabilit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Le site d\u00E9cline toute responsabilit\u00E9 concernant les \u00E9ventuels attaques, failles et fichiers informatiques pouvant infecter le mat\u00E9riel de l\u2019utilisateur apr\u00E8s l\u2019utilisation ou l\u2019acc\u00E8s \u00E0 ce site. Le site ne peut \u00EAtre tenu pour responsable en cas de force majeure ou du fait impr\u00E9visible et insurmontable d\u2019un tiers. La garantie totale de la s\u00E9curit\u00E9 et la confidentialit\u00E9 des donn\u00E9es n\u2019est pas assur\u00E9e par le site. Cependant, le site s\u2019engage \u00E0 mettre en \u0153uvre toutes les m\u00E9thodes requises pour le faire au mieux.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Article 7 : Liens hypertextes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Le site peut \u00EAtre constitu\u00E9 de liens hypertextes. En cliquant sur ces derniers, l\u2019Utilisateur sortira de la plateforme. Cette derni\u00E8re n\u2019a pas de contr\u00F4le et ne peut pas \u00EAtre tenue responsable du contenu des pages web relatives \u00E0 ces liens. Des liens dit \u00AB affili\u00E9s \u00BB peuvent \u00EAtre pr\u00E9sents sur le site. Un lien affili\u00E9 ou d\u2019affiliation est une URL sp\u00E9cifique utilis\u00E9e par un affili\u00E9 pour pointer vers une offre ou un produit d\u2019un marchand. Il est possible, \u00E0 la suite d\u2019un achat ou de la navigation par l\u2019Utilisateur sur le site d\u2019affiliation, qu\u2019une commission soit vers\u00E9e \u00E0 destination de la soci\u00E9t\u00E9 \u00E9ditrice.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Article 8 : Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Lors des visites sur le site, l\u2019installation automatique d\u2019un cookie sur le logiciel de navigation de l\u2019Utilisateur peut survenir. Les cookies correspondent \u00E0 de petits fichiers d\u00E9pos\u00E9s temporairement sur le disque dur de l\u2019ordinateur de l\u2019Utilisateur. Ces cookies sont n\u00E9cessaires pour assurer l\u2019accessibilit\u00E9 et la navigation sur le site. Ces fichiers ne comportent pas d\u2019informations personnelles et ne peuvent pas \u00EAtre utilis\u00E9s pour l\u2019identification d\u2019une personne. L\u2019information pr\u00E9sente dans les cookies est utilis\u00E9e pour am\u00E9liorer les performances de navigation sur le site boulangerie-m.web.app. En naviguant sur le site, l\u2019Utilisateur accepte les cookies. Leur d\u00E9sactivation peut s\u2019effectuer via les param\u00E8tres du logiciel de navigation.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Article 9 : Dur\u00E9e du contrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Le pr\u00E9sent contrat est valable pour une dur\u00E9e ind\u00E9termin\u00E9e. Le d\u00E9but de l\u2019utilisation des services du site marque l\u2019application du contrat \u00E0 l\u2019\u00E9gard de l\u2019Utilisateur.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Article 10 : Droit applicable et juridiction comp\u00E9tente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Le pr\u00E9sent contrat est soumis \u00E0 la l\u00E9gislation fran\u00E7aise. Dans un premier temps, la r\u00E9solution d\u2019\u00E9ventuels litiges entre les parties se fait \u00E0 l\u2019amiable. En cas d\u2019absence de r\u00E9solution \u00E0 l\u2019amiable, le recours aux tribunaux fran\u00E7ais comp\u00E9tents pour r\u00E9gler le contentieux s\u2019impose.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Sources des ressources graphiques pr\u00E9sentes sur le site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Arri\u00E8re plan: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Background vector created by freepik - www.freepik.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Ic\u00F4nes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Freepik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " www.flaticon.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    margin-top: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9tZW50aW9ucy1sZWdhbGVzL21lbnRpb25zLWxlZ2FsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFMRjtJQU1JLGdCQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvbWVudGlvbnMtbGVnYWxlcy9tZW50aW9ucy1sZWdhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogM3JlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MentionsLegalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mentions-legales',
                templateUrl: './mentions-legales.component.html',
                styleUrls: ['./mentions-legales.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DM6G":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/order-form/order-form.component */ "H70G");





const routes = [{ path: '', component: _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__["OrderFormComponent"] }];
class OrderRoutingModule {
}
OrderRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: OrderRoutingModule });
OrderRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function OrderRoutingModule_Factory(t) { return new (t || OrderRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](OrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "E/54":
/*!********************************************************************!*\
  !*** ./src/app/core/components/info-modal/info-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: InfoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModalComponent", function() { return InfoModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class InfoModalComponent {
    constructor() {
        this.dontShowAgain = false;
    }
    ngOnInit() { }
}
InfoModalComponent.??fac = function InfoModalComponent_Factory(t) { return new (t || InfoModalComponent)(); };
InfoModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InfoModalComponent, selectors: [["app-info-modal"]], decls: 39, vars: 1, consts: [["mat-dialog-title", ""], ["fxLayout", "column"], [1, "imageContainer"], ["id", "saveOrderDesktop", "alt", "Image enregistrer votre commande habituelle"], ["id", "newCardProduct", "src", "../../../../assets/images/new_product_card.png", "alt", "Nouvelle carte des produits"], [3, "change"], ["fxFlexLayout", "row wrap", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-button", "", 3, "mat-dialog-close"]], template: function InfoModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Votre formulaire \u00E9volue!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Nous faisons \u00E9voluer notre formulaire afin de faciliter vos commandes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Enregistrer votre commande habituelle :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Vous pouvez maintenant cocher la case \"Enregistrer mes infos personnelles\". Cela enregistrera sur votre navigateur l'ensemble de votre formulaire. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Lorsque vous retournerez sur le formulaire, vos infos personnelles seront d\u00E9j\u00E0 renseign\u00E9es! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Si vous avez enregistr\u00E9 pr\u00E9c\u00E9demment vos infos et ne souhaitez plus le faire, d\u00E9cochez simplement la case et validez votre commande. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Vos informations ne seront alors plus enregistr\u00E9es sur votre navigateur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Les commentaires pour les produits et la case \"Tranch\u00E9\" :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Si vous souhaitez que votre produit soit tranch\u00E9, plus besoin de mettre un commentaire. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Il vous suffit juste de cocher la case \"Tranch\u00E9\" lorsque vous choisissez votre produit! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Vous pouvez maintenant aussi mettre un commentaire sp\u00E9cifique \u00E0 un produit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "En esp\u00E9rant que ces changements vous plaisent!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "A tr\u00E8s vite!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function InfoModalComponent_Template_mat_checkbox_change_32_listener($event) { return ctx.dontShowAgain = $event.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Ne plus me montrer ce message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "L'\u00E9quipe M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["[_nghost-%COMP%] {\n  text-align: center;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\np[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.imageContainer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n#saveOrderDesktop[_ngcontent-%COMP%] {\n  border: var(--color-app-brown) solid 1px;\n  width: 700px;\n  max-width: 90%;\n  content: url('save_order_desktop.png');\n}\n\n@media (max-width: 768px) {\n  #saveOrderDesktop[_ngcontent-%COMP%] {\n    content: url('save_order_mobile.png');\n  }\n}\n\n#newCardProduct[_ngcontent-%COMP%] {\n  border: var(--color-app-brown) solid 1px;\n  width: 400px;\n  max-width: 90%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2luZm8tbW9kYWwvaW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0FBR0Y7O0FBRkU7RUFMRjtJQU1JLHFDQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaW5mby1tb2RhbC9pbmZvLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbn1cclxuLmltYWdlQ29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNzYXZlT3JkZXJEZXNrdG9wIHtcclxuICBib3JkZXI6IHZhcigtLWNvbG9yLWFwcC1icm93bikgc29saWQgMXB4O1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NhdmVfb3JkZXJfZGVza3RvcC5wbmdcIik7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NhdmVfb3JkZXJfbW9iaWxlLnBuZ1wiKTtcclxuICB9XHJcbn1cclxuXHJcbiNuZXdDYXJkUHJvZHVjdCB7XHJcbiAgYm9yZGVyOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pIHNvbGlkIDFweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InfoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-modal',
                templateUrl: './info-modal.component.html',
                styleUrls: ['./info-modal.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Fvy/":
/*!***************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/components/login-modal/login-modal.component */ "tp0f");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class LoginPageComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
        this.dialog.open(_app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__["LoginModalComponent"], {
            disableClose: true,
            width: '400px',
            maxWidth: '90%',
        });
    }
}
LoginPageComponent.??fac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
LoginPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 0, vars: 0, template: function LoginPageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "H70G":
/*!****************************************************************!*\
  !*** ./src/app/order/pages/order-form/order-form.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/order/components/form-validated-modal/form-validated-modal.component */ "p6Hq");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/product */ "yHTb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/order.service */ "CZRY");
/* harmony import */ var _app_admin_services_opening_days_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/admin/services/opening-days.service */ "5wd/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-material-timepicker */ "r3oX");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/order-summary.pipe */ "nIH7");

























function OrderFormComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r0.getErrorMessage("name"));
} }
function OrderFormComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r1.getErrorMessage("phone"));
} }
function OrderFormComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.getErrorMessage("street", "address"));
} }
function OrderFormComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r3.getErrorMessage("zipCode", "address"));
} }
function OrderFormComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r4.getErrorMessage("city", "address"));
} }
function OrderFormComponent_div_33_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r15.getErrorMessage("street", "address"));
} }
function OrderFormComponent_div_33_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r16.getErrorMessage("zipCode", "address"));
} }
function OrderFormComponent_div_33_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r17.getErrorMessage("city", "address"));
} }
function OrderFormComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Rue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, OrderFormComponent_div_33_mat_error_6_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Code postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, OrderFormComponent_div_33_mat_error_12_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, OrderFormComponent_div_33_mat_error_17_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    var tmp_0_0 = null;
    var tmp_0_1 = null;
    var tmp_1_0 = null;
    var tmp_1_1 = null;
    var tmp_2_0 = null;
    var tmp_2_1 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_0_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_0_1 = tmp_0_0.get("street")) == null ? null : tmp_0_1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_1_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_1_1 = tmp_1_0.get("zipCode")) == null ? null : tmp_1_1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_2_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_2_1 = tmp_2_0.get("city")) == null ? null : tmp_2_1.invalid);
} }
function OrderFormComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r7.getErrorMessage("deliveryDate"));
} }
function OrderFormComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Heure de livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "ngx-material-timepicker", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngxTimepicker", _r18)("format", 24);
} }
function OrderFormComponent_p_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Votre livraison vous sera livr\u00E9e \u00E0 l'adresse renseign\u00E9e le ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 2, (tmp_0_0 = ctx_r9.orderForm.get("deliveryDate")) == null ? null : tmp_0_0.value, "fullDate"), " ", ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) ? "\u00E0 " + ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) : "entre 6 heures et midi.", " ");
} }
function OrderFormComponent_p_51_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u00A0\u00A0- Elle devra \u00EAtre valid\u00E9e par la boulangerie M. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Sans retour de leur part dans l'heure, consid\u00E9rez la comme annul\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function OrderFormComponent_p_51_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u00A0\u00A0- Certains produits ne sont pas disponibles. Ils ont \u00E9t\u00E9 d\u00E9sactiv\u00E9s dans le formulaire. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function OrderFormComponent_p_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Attention, d\u00FB au d\u00E9lai court de votre commande: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, OrderFormComponent_p_51_span_3_Template, 5, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, OrderFormComponent_p_51_span_4_Template, 3, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.showOrderNeedValidationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.showShortDeliveryMessage);
} }
function OrderFormComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-checkbox", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Tranch\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r25.sliceFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControlName", product_r24.name);
} }
const _c0 = function (a0) { return { unavailableItem: a0 }; };
function OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-card", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-expansion-panel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-expansion-panel-header", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-form-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Commentaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_div_12_Template, 3, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-card-content", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-form-field", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const product_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, ctx_r23.showShortDeliveryMessage && !product_r24.shortDelivery));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r23.commentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControlName", product_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", product_r24.isSliceable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" Prix: ", product_r24.price.toFixed(2), " \u20AC H.T. / ", product_r24.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r23.itemFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formControlName", product_r24.name);
} }
function OrderFormComponent_ng_template_59_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-expansion-panel", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-expansion-panel-header", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_Template, 21, 12, "mat-card", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const category_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](category_r22.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r21.filterProductByCategory(category_r22.value));
} }
function OrderFormComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, OrderFormComponent_ng_template_59_mat_expansion_panel_0_Template, 5, 2, "mat-expansion-panel", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "keyvalue");
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, ctx_r13.PRODUCTCATEGORY));
} }
function OrderFormComponent_div_68_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "h3", 63);
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("innerHtml", item_r30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeHtml"]);
} }
function OrderFormComponent_div_68_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Commentaire de la commande : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function OrderFormComponent_div_68_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("      ", (tmp_0_0 = ctx_r29.orderForm.get("orderComment")) == null ? null : tmp_0_0.value, "\n    ");
} }
function OrderFormComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "R\u00E9sum\u00E9 de la commande :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, OrderFormComponent_div_68_h3_4_Template, 1, 1, "h3", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "summaryPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, OrderFormComponent_div_68_h3_6_Template, 2, 0, "h3", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, OrderFormComponent_div_68_h3_7_Template, 3, 1, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h2", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Prix total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    var tmp_1_0 = null;
    var tmp_2_0 = null;
    var tmp_3_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 4, ctx_r14.orderSummary));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_1_0 = ctx_r14.orderForm.get("orderComment")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_2_0 = ctx_r14.orderForm.get("orderComment")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", (tmp_3_0 = ctx_r14.orderForm.get("totalPrice")) == null ? null : tmp_3_0.value.toFixed(2), " \u20AC H.T. ");
} }
class OrderFormComponent {
    constructor(orderService, openingDaysService, fb, dialog) {
        this.orderService = orderService;
        this.openingDaysService = openingDaysService;
        this.fb = fb;
        this.dialog = dialog;
        this.orderSummary = {
            products: [],
            sliced: [],
            comments: [],
        };
        // FIXME: TYPE MOI BORDEL
        this.closingDays = [];
        this.PRODUCTCATEGORY = _models_product__WEBPACK_IMPORTED_MODULE_3__["ProductCategory"];
        this.tomorrow = new Date();
        this.showDeliveryMessage = false;
        this.showShortDeliveryMessage = false;
        this.showOrderNeedValidationMessage = false;
        this.selectDeliveryTime = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.productList = [];
        this.displayDeliveryForm = false;
        this.userChoiceDataManagement = false;
        this.orderForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{10}$')]],
            address: this.fb.group({
                street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')]],
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }),
            deliveryAddress: this.fb.group({
                street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')]],
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }, { disabled: !this.displayDeliveryForm }),
            hasDifferentDeliveryAddress: [
                this.displayDeliveryForm,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ],
            deliveryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deliveryTime: [null],
            orderDate: [new Date(Date.now()), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orderComment: [''],
            totalPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.errorMessages = {
            name: {
                required: 'Nom de votre entreprise obligatoire',
            },
            phone: {
                required: 'Num??ro de t??l??phone obligatoire',
                pattern: 'Doit contenir 10 chiffres',
            },
            street: {
                required: 'Rue obligatoire',
            },
            zipCode: {
                required: 'Code postal obligatoire',
                pattern: 'Doit contenir 5 chiffres',
            },
            city: {
                required: 'Ville obligatoire',
            },
            deliveryDate: {
                required: 'Date de livraison obligatoire',
                matDatepickerMin: 'Date incorrecte',
            },
        };
        this.isItOpenToday = (d) => {
            const day = (d || new Date()).getDay();
            const month = (d || new Date()).getMonth();
            let res = true;
            // Sunday open only between june and september included
            if (day === 0 && (month > 8 || month < 5)) {
                res = false;
            }
            // get and inject specific closed day from closing days form
            if (d &&
                this.closingDays.find((el) => el.startingDate.seconds * 1000 <= (d === null || d === void 0 ? void 0 : d.getTime()) &&
                    el.endingDate.seconds * 1000 >= (d === null || d === void 0 ? void 0 : d.getTime()))) {
                res = false;
            }
            return res;
            // tslint:disable-next-line
        };
        this.tomorrow.setDate(new Date().getDate() + 1);
        this.itemFormGroup = this.fb.group({
            default: [''],
        });
        this.sliceFormGroup = this.fb.group({
            default: [''],
        });
        this.commentFormGroup = this.fb.group({
            default: [''],
        });
        this.orderService
            .getAllAvailableItems()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((resProdList) => {
            this.productList = resProdList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            this.itemFormGroup.removeControl('default');
            this.sliceFormGroup.removeControl('default');
            this.commentFormGroup.removeControl('default');
            resProdList.forEach((product) => {
                var _a, _b, _c;
                (_a = this.itemFormGroup) === null || _a === void 0 ? void 0 : _a.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
                (_b = this.sliceFormGroup) === null || _b === void 0 ? void 0 : _b.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
                (_c = this.commentFormGroup) === null || _c === void 0 ? void 0 : _c.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
            });
            this.getUserDataFromLocalStorage();
        }))
            .subscribe();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.itemFormGroup.valueChanges,
            this.sliceFormGroup.valueChanges,
            this.commentFormGroup.valueChanges,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(([itemFormData, sliceFormData, commentFormData]) => {
            this.orderSummary = {
                products: Object.entries(itemFormData),
                sliced: Object.entries(sliceFormData),
                comments: Object.entries(commentFormData),
            };
            this.calcTotalPrice(itemFormData);
        }))
            .subscribe();
        this.hasDifferentDeliveryAddress(this.displayDeliveryForm);
        this.filterShortDeliveryProducts();
        this.openingDaysService
            .getAllClosingDays()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe((res) => (this.closingDays = res));
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.unsubscribe();
    }
    calcTotalPrice(itemFormData) {
        var _a;
        let totalPrice = 0;
        for (const [itemName, quantity] of Object.entries(itemFormData)) {
            if (quantity) {
                totalPrice +=
                    quantity *
                        this.productList.find((el) => el.name === itemName)
                            .price;
            }
            (_a = this.orderForm.get('totalPrice')) === null || _a === void 0 ? void 0 : _a.setValue(totalPrice);
        }
    }
    specificDeliveryTime(checked) {
        var _a, _b, _c;
        this.selectDeliveryTime = checked;
        if (this.selectDeliveryTime) {
            (_a = this.orderForm.get('deliveryTime')) === null || _a === void 0 ? void 0 : _a.enable();
        }
        else {
            (_b = this.orderForm.get('deliveryTime')) === null || _b === void 0 ? void 0 : _b.reset();
            (_c = this.orderForm.get('deliveryTime')) === null || _c === void 0 ? void 0 : _c.disable();
        }
    }
    hasDifferentDeliveryAddress(checked) {
        var _a, _b;
        this.displayDeliveryForm = checked;
        if (this.displayDeliveryForm) {
            (_a = this.orderForm.get('deliveryAddress')) === null || _a === void 0 ? void 0 : _a.enable();
        }
        else {
            (_b = this.orderForm.get('deliveryAddress')) === null || _b === void 0 ? void 0 : _b.disable();
        }
    }
    filterShortDeliveryProducts() {
        var _a, _b, _c;
        if (new Date(Date.now()).getHours() >= 18) {
            this.tomorrow.setDate(this.tomorrow.getDate() + 1);
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            (_a = this.orderForm.get('deliveryDate')) === null || _a === void 0 ? void 0 : _a.valueChanges,
            (_b = this.orderForm.get('orderDate')) === null || _b === void 0 ? void 0 : _b.valueChanges,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(([deliveryDate, orderDate]) => {
            const orderTime = orderDate.getHours();
            const differenceIndays = (deliveryDate.getTime() - orderDate.getTime()) / (1000 * 3600 * 24);
            if (differenceIndays >= 1) {
                this.showDeliveryMessage = true;
                this.showShortDeliveryMessage = false;
                this.showOrderNeedValidationMessage = false;
                this.productList.forEach((product) => {
                    var _a;
                    if (!product.shortDelivery) {
                        (_a = this.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.enable();
                    }
                });
            }
            else if (orderTime >= 11 &&
                orderTime < 18 &&
                differenceIndays < 1) {
                this.showDeliveryMessage = false;
                this.showOrderNeedValidationMessage = true;
                this.productList.forEach((product) => {
                    var _a;
                    if (!product.shortDelivery) {
                        this.showShortDeliveryMessage = true;
                        (_a = this.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.disable();
                    }
                });
            }
            else if (orderTime < 11 && differenceIndays < 1) {
                this.showDeliveryMessage = true;
                this.showOrderNeedValidationMessage = false;
                this.productList.forEach((product) => {
                    var _a;
                    if (!product.shortDelivery) {
                        this.showShortDeliveryMessage = true;
                        (_a = this.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.disable();
                    }
                });
            }
        }))
            .subscribe();
        (_c = this.orderForm.get('orderDate')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
    }
    onSubmit() {
        var _a;
        (_a = this.orderForm.get('orderDate')) === null || _a === void 0 ? void 0 : _a.setValue(new Date(Date.now()));
        const orderList = [];
        for (const [itemName, quantity] of Object.entries(this.itemFormGroup.value)) {
            if (quantity) {
                orderList.push({
                    product: itemName,
                    quantity,
                    unit: this.productList.find((el) => el.name === itemName)
                        .unit,
                });
            }
        }
        for (const [itemName, isSliced] of Object.entries(this.sliceFormGroup.value)) {
            if (isSliced) {
                const indexItem = orderList.findIndex((el) => (el === null || el === void 0 ? void 0 : el.product) === itemName);
                if (indexItem >= 0) {
                    orderList[indexItem].isSliced = true;
                }
            }
        }
        for (const [itemName, comment] of Object.entries(this.commentFormGroup.value)) {
            if (comment && comment.length > 0) {
                const indexItem = orderList.findIndex((el) => (el === null || el === void 0 ? void 0 : el.product) === itemName);
                if (indexItem >= 0) {
                    orderList[indexItem].comment = comment;
                }
            }
        }
        if (this.orderForm.valid && orderList.length > 0) {
            const finalOrder = Object.assign(Object.assign({}, this.orderForm.value), { order: orderList });
            this.userDataManagement();
            this.orderService
                .addOrder(finalOrder)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(() => {
                this.validatedModal = this.dialog.open(_app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_2__["FormValidatedModalComponent"], {
                    disableClose: true,
                    width: '400px',
                    maxWidth: '90%',
                });
                this.validatedModal
                    .afterClosed()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
                    window.location.reload();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                    .subscribe();
            });
        }
    }
    getErrorMessage(controlName, controlGroup) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const errors = [];
        if (controlGroup) {
            if ((_b = (_a = this.orderForm.get(controlGroup)) === null || _a === void 0 ? void 0 : _a.get(controlName)) === null || _b === void 0 ? void 0 : _b.hasError('required')) {
                return this.errorMessages[controlName].required;
            }
            if ((_d = (_c = this.orderForm.get(controlGroup)) === null || _c === void 0 ? void 0 : _c.get(controlName)) === null || _d === void 0 ? void 0 : _d.errors) {
                for (const key of Object.keys((_f = (_e = this.orderForm.get(controlGroup)) === null || _e === void 0 ? void 0 : _e.get(controlName)) === null || _f === void 0 ? void 0 : _f.errors)) {
                    errors.push(this.errorMessages[controlName][key]);
                }
            }
        }
        else {
            if ((_g = this.orderForm.get(controlName)) === null || _g === void 0 ? void 0 : _g.hasError('required')) {
                return this.errorMessages[controlName].required;
            }
            if ((_h = this.orderForm.get(controlName)) === null || _h === void 0 ? void 0 : _h.errors) {
                for (const key of Object.keys((_j = this.orderForm.get(controlName)) === null || _j === void 0 ? void 0 : _j.errors)) {
                    errors.push(this.errorMessages[controlName][key]);
                }
            }
        }
        return errors.join(', ');
    }
    filterProductByCategory(category) {
        return this.productList.filter((prod) => prod.category === category);
    }
    getUserDataFromLocalStorage() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const userData = localStorage.getItem('userBoulM');
        if (userData && userData.length > 0) {
            const userDataParsed = JSON.parse(userData);
            this.userChoiceDataManagement = true;
            (_a = this.orderForm.get('name')) === null || _a === void 0 ? void 0 : _a.setValue(userDataParsed.name);
            (_b = this.orderForm.get('phone')) === null || _b === void 0 ? void 0 : _b.setValue(userDataParsed.phone);
            (_d = (_c = this.orderForm
                .get('address')) === null || _c === void 0 ? void 0 : _c.get('street')) === null || _d === void 0 ? void 0 : _d.setValue(userDataParsed.address.street);
            (_f = (_e = this.orderForm
                .get('address')) === null || _e === void 0 ? void 0 : _e.get('zipCode')) === null || _f === void 0 ? void 0 : _f.setValue(userDataParsed.address.zipCode);
            (_h = (_g = this.orderForm
                .get('address')) === null || _g === void 0 ? void 0 : _g.get('city')) === null || _h === void 0 ? void 0 : _h.setValue(userDataParsed.address.city);
            // Deactivated for the first implementation
            // userDataParsed.order.forEach((el) => {
            //   this.itemFormGroup.get(el.product)?.setValue(el.quantity);
            //   this.sliceFormGroup.get(el.product)?.setValue(el.isSliced);
            //   this.commentFormGroup.get(el.product)?.setValue(el.comment);
            // });
            if (userDataParsed.deliveryAddress) {
                (_j = this.orderForm.get('hasDifferentDeliveryAddress')) === null || _j === void 0 ? void 0 : _j.setValue(true);
                this.hasDifferentDeliveryAddress(true);
                (_l = (_k = this.orderForm
                    .get('deliveryAddress')) === null || _k === void 0 ? void 0 : _k.get('street')) === null || _l === void 0 ? void 0 : _l.setValue(userDataParsed.deliveryAddress.street);
                (_o = (_m = this.orderForm
                    .get('deliveryAddress')) === null || _m === void 0 ? void 0 : _m.get('zipCode')) === null || _o === void 0 ? void 0 : _o.setValue(userDataParsed.deliveryAddress.zipCode);
                (_q = (_p = this.orderForm
                    .get('deliveryAddress')) === null || _p === void 0 ? void 0 : _p.get('city')) === null || _q === void 0 ? void 0 : _q.setValue(userDataParsed.deliveryAddress.city);
            }
            if (userDataParsed.deliveryTime) {
                (_r = this.orderForm.get('selectDeliveryTime')) === null || _r === void 0 ? void 0 : _r.setValue(true);
                this.specificDeliveryTime(true);
                (_s = this.orderForm
                    .get('deliveryTime')) === null || _s === void 0 ? void 0 : _s.setValue(userDataParsed.deliveryTime);
            }
            if (userDataParsed.orderComment) {
                (_t = this.orderForm
                    .get('orderComment')) === null || _t === void 0 ? void 0 : _t.setValue(userDataParsed.orderComment);
            }
        }
        localStorage.removeItem('haveSeenInfoBoulM');
    }
    userDataManagement() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        if (this.userChoiceDataManagement) {
            let userFormData = {
                name: (_a = this.orderForm.get('name')) === null || _a === void 0 ? void 0 : _a.value,
                phone: (_b = this.orderForm.get('phone')) === null || _b === void 0 ? void 0 : _b.value,
                address: {
                    street: (_d = (_c = this.orderForm.get('address')) === null || _c === void 0 ? void 0 : _c.get('street')) === null || _d === void 0 ? void 0 : _d.value,
                    zipCode: (_f = (_e = this.orderForm.get('address')) === null || _e === void 0 ? void 0 : _e.get('zipCode')) === null || _f === void 0 ? void 0 : _f.value,
                    city: (_h = (_g = this.orderForm.get('address')) === null || _g === void 0 ? void 0 : _g.get('city')) === null || _h === void 0 ? void 0 : _h.value,
                },
            };
            if (this.displayDeliveryForm) {
                userFormData = Object.assign(Object.assign({}, userFormData), {
                    deliveryAddress: {
                        street: (_k = (_j = this.orderForm.get('deliveryAddress')) === null || _j === void 0 ? void 0 : _j.get('street')) === null || _k === void 0 ? void 0 : _k.value,
                        zipCode: (_m = (_l = this.orderForm.get('deliveryAddress')) === null || _l === void 0 ? void 0 : _l.get('zipCode')) === null || _m === void 0 ? void 0 : _m.value,
                        city: (_p = (_o = this.orderForm.get('deliveryAddress')) === null || _o === void 0 ? void 0 : _o.get('city')) === null || _p === void 0 ? void 0 : _p.value,
                    },
                });
            }
            if (this.selectDeliveryTime) {
                userFormData = Object.assign(Object.assign({}, userFormData), { deliveryTime: (_q = this.orderForm.get('deliveryTime')) === null || _q === void 0 ? void 0 : _q.value });
            }
            localStorage.setItem('userBoulM', JSON.stringify(userFormData));
            // Deactivated on first implementation
            // localStorage.setItem('userBoulM', JSON.stringify({...userFormData, ...finalOrder}));
        }
        else {
            localStorage.removeItem('userBoulM');
        }
    }
}
OrderFormComponent.??fac = function OrderFormComponent_Factory(t) { return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_admin_services_opening_days_service__WEBPACK_IMPORTED_MODULE_7__["OpeningDaysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
OrderFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrderFormComponent, selectors: [["app-order-form"]], decls: 75, vars: 20, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly space-evenly"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: Restaurant du port", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "type", "tel", "placeholder", "Ex: 0546331122", "formControlName", "phone", "required", ""], ["formGroupName", "address"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: 2 rue du port", "formControlName", "street", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: 17000", "formControlName", "zipCode", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: La Rochelle", "formControlName", "city", "required", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", 1, "checkboxRow"], ["fxFlexOffset", "7", "formControlName", "hasDifferentDeliveryAddress", 3, "change"], ["formGroupName", "deliveryAddress", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "50"], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center"], ["fxFlexOffset", "7", "fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline", 3, "click"], ["matInput", "", "required", "", "formControlName", "deliveryDate", "readonly", "", 3, "min", "matDatepicker", "matDatepickerFilter"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], ["fxFlexOffset", "7", 3, "checked", "change"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87", 4, "ngIf"], ["class", "deliveryMessage", 4, "ngIf"], ["class", "warningMessage", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["productContainer", ""], ["fxFlexOffset", "7", "fxFlex", "87", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "formControlName", "orderComment", "placeholder", "Ex: D\u00E9poser la livraison en arri\u00E8re cuisine, ..."], ["fxLayout", "column wrap", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "buttonRow"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "mat-raised-button", "", "type", "submit"], ["formGroupName", "deliveryAddress"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87"], ["appearance", "outline"], ["min", "06:00", "max", "12:00", "readonly", "", "matInput", "", "formControlName", "deliveryTime", 3, "ngxTimepicker", "format"], ["datePicker", ""], [1, "deliveryMessage"], [1, "warningMessage"], ["id", "importantSentence"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", "class", "productCategory", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", 1, "productCategory"], ["fxFlex", "100", 1, "productCategoryHeader"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass"], [1, "productExpansion"], [1, "productExpansionHeader"], [1, "productExpansionBody"], ["fxFlex", "100", "appearance", "outline", 3, "formGroup"], ["matInput", "", "placeholder", "Ex: boules tranch\u00E9es, forme des pains, ...", 3, "formControlName"], [3, "formGroup", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between baseline", 1, "cardPriceQuantity"], ["appearance", "outline", 1, "quantityInput", 3, "formGroup"], ["matInput", "", "type", "number", "min", "0", 3, "formControlName"], [3, "formGroup"], [1, "slicedCheckbox", 3, "formControlName"], ["fxLayout", "column wrap", "fxLayoutAlign", "center center"], [3, "innerHtml", 4, "ngFor", "ngForOf"], ["fxFlex", "50", "fxFlexOffset", "2", "class", "orderCommentSummaryTitle", 4, "ngIf"], ["fxFlex", "50", "fxFlexOffset", "2", "class", "summaryComment", 4, "ngIf"], ["fxFlex", "50", "fxFlexOffset", "2"], [3, "innerHtml"], ["fxFlex", "50", "fxFlexOffset", "2", 1, "orderCommentSummaryTitle"], ["fxFlex", "50", "fxFlexOffset", "2", 1, "summaryComment"]], template: function OrderFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function OrderFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Nom de votre entreprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, OrderFormComponent_mat_error_6_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Num\u00E9ro de t\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, OrderFormComponent_mat_error_11_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Rue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, OrderFormComponent_mat_error_18_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Code postal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, OrderFormComponent_mat_error_24_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Ville");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, OrderFormComponent_mat_error_29_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function OrderFormComponent_Template_mat_checkbox_change_31_listener($event) { return ctx.hasDifferentDeliveryAddress($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Adresse de livraison diff\u00E9rente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, OrderFormComponent_div_33_Template, 18, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "mat-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrderFormComponent_Template_mat_form_field_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r31); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](43); return _r6.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Date de livraison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "mat-datepicker-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "mat-datepicker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, OrderFormComponent_mat_error_44_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function OrderFormComponent_Template_mat_checkbox_change_46_listener($event) { return ctx.specificDeliveryTime($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Besoin d'une heure de livraison pr\u00E9cise?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, OrderFormComponent_div_48_Template, 7, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, OrderFormComponent_p_50_Template, 3, 5, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, OrderFormComponent_p_51_Template, 5, 2, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "mat-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, OrderFormComponent_div_58_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, OrderFormComponent_ng_template_59_Template, 2, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "mat-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Commentaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, OrderFormComponent_div_68_Template, 12, 6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function OrderFormComponent_Template_mat_checkbox_change_70_listener($event) { return ctx.userChoiceDataManagement = $event.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Enregistrer mes infos personnelles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Commander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](43);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](60);
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        var tmp_3_1 = null;
        var tmp_4_0 = null;
        var tmp_4_1 = null;
        var tmp_5_0 = null;
        var tmp_5_1 = null;
        var tmp_11_0 = null;
        var tmp_18_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_1_0 = ctx.orderForm.get("name")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_2_0 = ctx.orderForm.get("phone")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_3_0 = ctx.orderForm.get("address")) == null ? null : (tmp_3_1 = tmp_3_0.get("street")) == null ? null : tmp_3_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_4_0 = ctx.orderForm.get("address")) == null ? null : (tmp_4_1 = tmp_4_0.get("zipCode")) == null ? null : tmp_4_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_5_0 = ctx.orderForm.get("address")) == null ? null : (tmp_5_1 = tmp_5_0.get("city")) == null ? null : tmp_5_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.displayDeliveryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", ctx.tomorrow)("matDatepicker", _r6)("matDatepickerFilter", ctx.isItOpenToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (tmp_11_0 = ctx.orderForm.get("deliveryDate")) == null ? null : tmp_11_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx.selectDeliveryTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.selectDeliveryTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showDeliveryMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showShortDeliveryMessage || ctx.showOrderNeedValidationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.productList.length)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ((tmp_18_0 = ctx.orderForm.get("totalPrice")) == null ? null : tmp_18_0.value) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", ctx.userChoiceDataManagement);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexOffsetDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_17__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_17__["NgxMaterialTimepickerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["KeyValuePipe"], _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_22__["OrderSummaryPipe"]], styles: ["form[_ngcontent-%COMP%] {\n  padding: 3rem 0 3rem 0;\n}\n@media (max-width: 768px) {\n  form[_ngcontent-%COMP%] {\n    padding: 5rem 0 3rem 0;\n  }\n}\n.checkboxRow[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.buttonRow[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.deliveryMessage[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .deliveryMessage[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.warningMessage[_ngcontent-%COMP%] {\n  color: crimson;\n}\n@media (max-width: 768px) {\n  .warningMessage[_ngcontent-%COMP%] {\n    text-align-last: center;\n  }\n}\n#importantSentence[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: bold;\n}\n  ngx-material-timepicker-container {\n  --button-color: var(--color-app-brown) !important;\n  --dial-background-color: var(--color-app-brown) !important;\n  --clock-hand-color: var(--color-app-brown) !important;\n}\n.productCategory[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  margin-bottom: 0.5rem;\n}\n.productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:first-child {\n  margin-top: 2rem;\n}\n@media (min-width: 600px) {\n  .productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 2rem;\n  }\n}\n.productCategoryHeader[_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 1.7rem;\n  max-height: 4rem;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0.8rem;\n}\n.productExpansion[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.productExpansionHeader[_ngcontent-%COMP%] {\n  padding: 0 5px 0 0;\n  font-size: 1.5rem;\n  margin: 0;\n  height: 2.5rem;\n}\n.productExpansionBody[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 1rem 1rem 0 1rem;\n}\n  .slicedCheckbox > label > span {\n  font-size: 1.3rem;\n}\n.cardPriceQuantity[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: var(--color-app-brown) !important;\n}\n  .mat-expansion-panel-body {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  font-size: 1.3rem;\n  padding: 0 !important;\n}\n  .mat-expansion-panel-body > p {\n  font-size: 1.3rem;\n  font-weight: lighter;\n  margin: 0 0 0.8rem 1rem !important;\n}\n.quantityInput[_ngcontent-%COMP%] {\n  max-width: 9rem;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix {\n  padding: 0;\n  border: 0;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix input {\n  height: 3rem;\n}\n.unavailableItem[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.2);\n}\n.unavailableItem[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: rgba(128, 128, 128, 0);\n}\n.unavailableItem[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0);\n}\n.orderCommentSummaryTitle[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.summaryComment[_ngcontent-%COMP%] {\n  text-align: center;\n}\npre[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvcGFnZXMvb3JkZXItZm9ybS9vcmRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjtBQUFFO0VBRkY7SUFHSSxzQkFBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFLG1CQUFBO0FBSUY7QUFEQTtFQUNFLGdCQUFBO0FBSUY7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQUhFO0VBSEY7SUFJSSxrQkFBQTtFQU1GO0FBQ0Y7QUFKQTtFQUNFLGNBQUE7QUFPRjtBQU5FO0VBRkY7SUFHSSx1QkFBQTtFQVNGO0FBQ0Y7QUFOQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFTRjtBQU5BO0VBQ0UsaURBQUE7RUFDQSwwREFBQTtFQUNBLHFEQUFBO0FBU0Y7QUFOQTtFQUNFLDZDQUFBO0VBQ0EscUJBQUE7QUFTRjtBQVJFO0VBQ0UsZ0JBQUE7QUFVSjtBQVJFO0VBQ0U7SUFDRSxnQkFBQTtFQVVKO0FBQ0Y7QUFOQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlIQUFBO0FBU0Y7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQU1GO0FBSkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBT0Y7QUFMQTtFQUNFLGdCQUFBO0FBUUY7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVNGO0FBUEE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFVRjtBQVJBO0VBQ0UsaUJBQUE7QUFXRjtBQVRBO0VBQ0UsZ0JBQUE7QUFZRjtBQVZBO0VBQ0Usd0NBQUE7QUFhRjtBQVhBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBY0Y7QUFiRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQWVKO0FBWEE7RUFDRSxlQUFBO0FBY0Y7QUFaQTtFQUNFLDRCQUFBO0FBZUY7QUFiQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBZ0JGO0FBZkU7RUFDRSxZQUFBO0FBaUJKO0FBZEE7RUFDRSwwQ0FBQTtBQWlCRjtBQWhCRTtFQUNFLHdDQUFBO0FBa0JKO0FBaEJFO0VBQ0Usd0NBQUE7QUFrQko7QUFkQTtFQUNFLDBCQUFBO0FBaUJGO0FBZEE7RUFDRSxrQkFBQTtBQWlCRjtBQWRBO0VBQ0UsaURBQUE7QUFpQkY7QUFkQSxvQ0FBQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyL3BhZ2VzL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIHBhZGRpbmc6IDNyZW0gMCAzcmVtIDA7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDAgM3JlbSAwO1xyXG4gIH1cclxufVxyXG4uY2hlY2tib3hSb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5idXR0b25Sb3cge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbi5kZWxpdmVyeU1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4ud2FybmluZ01lc3NhZ2Uge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4jaW1wb3J0YW50U2VudGVuY2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyIHtcclxuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG4gIC0tZGlhbC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pICFpbXBvcnRhbnQ7XHJcbiAgLS1jbG9jay1oYW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8qKiogQ1VTVE9NIEFDQ09SRElPTiBQUk9EVUNUIENBVEVHT1JZXHJcbi5wcm9kdWN0Q2F0ZWdvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgLm1hdC1jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1hdC1jYXJkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdENhdGVnb3J5SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBtYXgtaGVpZ2h0OiA0cmVtO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSxcclxuICAgIDBweCAycHggMnB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDVweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxufVxyXG4vLyoqKlxyXG5cclxuLy8qKiogQ1VTVE9NIENBUkQgUFJPRFVDVCBTVFlMRVxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG59XHJcbi5wcm9kdWN0RXhwYW5zaW9uOm5vdChbY2xhc3MqPVwibWF0LWVsZXZhdGlvbi16XCJdKSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ucHJvZHVjdEV4cGFuc2lvbkhlYWRlciB7XHJcbiAgcGFkZGluZzogMCA1cHggMCAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxufVxyXG4ucHJvZHVjdEV4cGFuc2lvbkJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAgMXJlbTtcclxufVxyXG46Om5nLWRlZXAgLnNsaWNlZENoZWNrYm94ID4gbGFiZWwgPiBzcGFuIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4uY2FyZFByaWNlUXVhbnRpdHkge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgPiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAwLjhyZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnF1YW50aXR5SW5wdXQge1xyXG4gIG1heC13aWR0aDogOXJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnF1YW50aXR5SW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5xdWFudGl0eUlucHV0IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG4udW5hdmFpbGFibGVJdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcclxuICB9XHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlckNvbW1lbnRTdW1tYXJ5VGl0bGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uc3VtbWFyeUNvbW1lbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucHJlIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-form',
                templateUrl: './order-form.component.html',
                styleUrls: ['./order-form.component.scss'],
            }]
    }], function () { return [{ type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }, { type: _app_admin_services_opening_days_service__WEBPACK_IMPORTED_MODULE_7__["OpeningDaysService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");




class AuthService {
    constructor(auth) {
        this.auth = auth;
    }
    login(credentials) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.auth
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((res) => {
            return res;
        }, (err) => {
            throw err;
        }));
    }
    logout() {
        this.auth.signOut();
    }
    isUserAuthenticated() {
        return this.auth.user;
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"])); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Plateforme de commande r\u00E9serv\u00E9e aux professionnels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.router.navigate([""]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Formulaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r14.router.navigate(["admin/liste-commandes"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Commandes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_4_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r15.router.navigate(["admin/recap-production"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Production ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r16.router.navigate(["admin/produits"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Produits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_4_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.router.navigate(["admin/gestion-fermeture"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Jours ferm\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_div_4_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r18.logoutAdminSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 25);
} }
function AppComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r4);
} }
function AppComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r19.router.navigate(["admin/liste-commandes"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r21.router.navigate(["admin/recap-production"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "supervisor_account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r23.router.navigate(["admin/produits"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "fastfood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r25.router.navigate(["admin/gestion-fermeture"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Fermeture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r27.router.navigate(["/"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Formulaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_p_47_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_p_47_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r29.router.navigate(["admin"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Espace administrateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AppComponent_p_48_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_p_48_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r31.logoutAdminSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class AppComponent {
    constructor(router, authService, iconRegistry, sanitizer) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = '';
        this.authService
            .isUserAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((user) => {
            this.isConnected = user;
        }))
            .subscribe();
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('../assets/logos/facebook-circular-logo.svg'));
    }
    logoutAdminSpace() {
        this.authService.logout();
        this.router.navigate(['']);
    }
    onActivate() {
        this.activatedRoute = this.router.routerState.snapshot.url;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 53, vars: 11, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", "fxLayoutAlign.lt-sm", "center center", 1, "header"], ["fxFlex", "20", "fxHide.lt-sm", "", 3, "click"], ["alt", "logo boulangerie-m", "src", "../assets/images/logo-header.png", 1, "logo-header", "link"], ["fxFlex", "60", "fxHide.lt-sm", "", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", "", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "80", 3, "click"], ["class", "mobileMenuButton", "fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "container-page"], [3, "activate"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column wrap", "fxLayoutAlign", "space-evenly center", 1, "footer"], [1, "textWithIcon"], ["svgIcon", "facebook", 1, "iconFb"], ["href", "https://www.facebook.com/pages/category/Bakery/Boulangerie-M-437577199741453/", "target", "blank", 1, "textWithIcon"], [1, "link", 3, "click"], [1, "link"], [3, "click", 4, "ngIf"], ["href", "https://www.linkedin.com/in/alexandre-guerin/", "target", "blank"], ["fxFlex", "60", "fxHide.lt-sm", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", ""], ["fxLayoutAlign", "center center", 1, "link", "logoutHeader", 3, "click"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 1, "mobileMenuButton", 3, "matMenuTriggerFor"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AppComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, AppComponent_div_4_Template, 16, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AppComponent_div_5_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_div_click_6_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AppComponent_button_8_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-menu", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, AppComponent_button_11_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, AppComponent_button_12_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, AppComponent_button_13_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AppComponent_button_14_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, AppComponent_button_15_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.logoutAdminSpace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "router-outlet", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("activate", function AppComponent_Template_router_outlet_activate_22_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Boulangerie M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " 127 Avenue du Lieutenant-Colonel Bernier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " 17000 La Rochelle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " 05 46 01 09 72 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Notre page facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_div_click_43_listener() { return ctx.router.navigate(["mentions-legales"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Mentions L\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, AppComponent_p_47_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, AppComponent_p_48_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " R\u00E9alis\u00E9 gracieusement par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Ithrandil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.activatedRoute.includes("liste"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.activatedRoute.includes("production"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.activatedRoute.includes("produits"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.activatedRoute.includes("fermeture"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.activatedRoute.includes("admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isConnected);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: url('bakery-background.jpg');\n  background-position: center;\n  background-size: cover;\n  background-color: var(--color-app-light-grey);\n}\n\n.container-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 90rem;\n  height: 100%;\n  background-color: var(--color-app-light-grey);\n  align-self: center;\n  overflow: auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  height: 14rem;\n  border-bottom: solid 1px black;\n  color: var(--color-app-brown);\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    height: 6rem;\n  }\n}\n\n.logo-header[_ngcontent-%COMP%] {\n  max-width: 10rem;\n  max-height: 10rem;\n}\n\n@media (max-width: 768px) {\n  .logo-header[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n    z-index: 99;\n    position: relative;\n  }\n}\n\n.mobileMenuButton[_ngcontent-%COMP%] {\n  border: none;\n  background-color: var(--color-app-light-grey);\n}\n\n.logoutHeader[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.footer[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  padding-top: 1.5rem;\n  margin-bottom: -11rem;\n  border-top: solid 1px black;\n  background-color: var(--color-app-light-grey);\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-bottom: -26.6rem;\n  }\n}\n\n[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  color: var(--color-app-brown);\n}\n\n.iconFb[_ngcontent-%COMP%] {\n  max-width: 2rem;\n}\n\n.textWithIcon[_ngcontent-%COMP%] {\n  vertical-align: super;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsOENBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFDRTtFQVBGO0lBUUksWUFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBRkU7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRjs7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUhFO0VBUEY7SUFRSSx1QkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSEE7Ozs7RUFJRSw2QkFBQTtBQU1GOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUhBO0VBQ0UscUJBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2Jha2VyeS1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbn1cclxuLmNvbnRhaW5lci1wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDkwcmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vLyBTVFlMRSBIRUFERVJcclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWxpZ2h0LWdyZXkpO1xyXG4gIGhlaWdodDogMTRyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogNnJlbTtcclxuICB9XHJcbn1cclxuLmxvZ28taGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLm1vYmlsZU1lbnVCdXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbi5sb2dvdXRIZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4vLyBzdHlsZSBmb290ZXJcclxuLmZvb3RlciB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFwcC1icm93bik7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAtMTFyZW07XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjYuNnJlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3ZlciAubGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hOmxpbmssXHJcbmE6dmlzaXRlZCxcclxuYTphY3RpdmUsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG59XHJcblxyXG4uaWNvbkZiIHtcclxuICBtYXgtd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi50ZXh0V2l0aEljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ "tp0f");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "Fvy/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "N/25");












class AuthModule {
}
AuthModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AuthModule });
AuthModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AuthModule, { declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                ],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ "On8d");
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/fr */ "Hfs6");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/components/info-modal/info-modal.component */ "E/54");
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ "DB88");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./order/order.module */ "+p+5");



























Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default.a, 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2___default.a);
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useValue: 'fr-FR' }, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _order_order_module__WEBPACK_IMPORTED_MODULE_24__["OrderModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"], _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_23__["MentionsLegalesComponent"], _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_22__["InfoModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        _order_order_module__WEBPACK_IMPORTED_MODULE_24__["OrderModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"], _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_23__["MentionsLegalesComponent"], _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_22__["InfoModalComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig),
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    _order_order_module__WEBPACK_IMPORTED_MODULE_24__["OrderModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useValue: 'fr-FR' }, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dHby":
/*!**********************************************************************!*\
  !*** ./src/app/order/services/mondayStartWeekDateAdapter.service.ts ***!
  \**********************************************************************/
/*! exports provided: MondayStartWeekDateAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MondayStartWeekDateAdapter", function() { return MondayStartWeekDateAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



class MondayStartWeekDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"] {
    getFirstDayOfWeek() {
        return 1;
    }
}
MondayStartWeekDateAdapter.??fac = function MondayStartWeekDateAdapter_Factory(t) { return ??MondayStartWeekDateAdapter_BaseFactory(t || MondayStartWeekDateAdapter); };
MondayStartWeekDateAdapter.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: MondayStartWeekDateAdapter, factory: MondayStartWeekDateAdapter.??fac });
const ??MondayStartWeekDateAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](MondayStartWeekDateAdapter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MondayStartWeekDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "nIH7":
/*!******************************************************!*\
  !*** ./src/app/order/services/order-summary.pipe.ts ***!
  \******************************************************/
/*! exports provided: OrderSummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryPipe", function() { return OrderSummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrderSummaryPipe {
    transform(obj) {
        const tmpProducts = obj.products.filter((el) => el[1] && el[1] !== null && el[1] > 0);
        const tmpSliced = obj.sliced.filter((el) => el[1] !== null);
        const tmpComments = obj.comments.filter((el) => el[1] && el[1] !== null && el[1].length > 0);
        const res = [];
        tmpProducts.forEach((prodEl) => {
            res.push(`- ${prodEl[0]} : ${prodEl[1]}`);
            const sliced = tmpSliced.find((sliceEl) => sliceEl[0] === prodEl[0]);
            if (sliced && sliced[1]) {
                res[res.length - 1] = res[res.length - 1].concat(` - Tranch??`);
            }
            const comment = tmpComments.find((commentEl) => commentEl[0] === prodEl[0]);
            if (comment) {
                res[res.length - 1] = res[res.length - 1].concat(`<br>&nbsp;&nbsp;Commentaire : ${comment[1]}`);
            }
        });
        return res;
    }
}
OrderSummaryPipe.??fac = function OrderSummaryPipe_Factory(t) { return new (t || OrderSummaryPipe)(); };
OrderSummaryPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "summaryPipe", type: OrderSummaryPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrderSummaryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'summaryPipe' }]
    }], null, null); })();


/***/ }),

/***/ "p6Hq":
/*!*****************************************************************************************!*\
  !*** ./src/app/order/components/form-validated-modal/form-validated-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormValidatedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidatedModalComponent", function() { return FormValidatedModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class FormValidatedModalComponent {
    constructor() { }
    ngOnInit() { }
}
FormValidatedModalComponent.??fac = function FormValidatedModalComponent_Factory(t) { return new (t || FormValidatedModalComponent)(); };
FormValidatedModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FormValidatedModalComponent, selectors: [["app-form-validated"]], decls: 14, vars: 1, consts: [["mat-dialog-title", ""], ["fxLayout", "column wrap"], ["fxFlexLayout", "row wrap", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-button", "", 3, "mat-dialog-close"]], template: function FormValidatedModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Votre commande a \u00E9t\u00E9 envoy\u00E9e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Merci!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " La boulangerie M vous remercie de votre commande. En cas d'erreur ou de questions, n'h\u00E9sitez pas \u00E0 nous contacter au 05 46 01 09 72. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " En esp\u00E9rant vous revoir tr\u00E8s prochainement et que votre commande vous satifera pleinement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "L'\u00E9quipe M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvY29tcG9uZW50cy9mb3JtLXZhbGlkYXRlZC1tb2RhbC9mb3JtLXZhbGlkYXRlZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGVkLW1vZGFsL2Zvcm0tdmFsaWRhdGVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormValidatedModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-validated',
                templateUrl: './form-validated-modal.component.html',
                styleUrls: ['./form-validated-modal.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tp0f":
/*!**********************************************************************!*\
  !*** ./src/app/auth/components/login-modal/login-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function LoginModalComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "E-mail obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoginModalComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Mot de passe obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoginModalComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r2.loginErrorMessage, " ");
} }
class LoginModalComponent {
    constructor(fb, authService, router, dialog) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.loginErrorMessage = '';
        this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() { }
    login() {
        if (this.loginForm.valid) {
            this.authService
                .login(this.loginForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe(() => {
                this.router.navigate(['admin']);
                this.dialog.closeAll();
            }, (err) => {
                this.loginErrorMessage = err.message;
            });
        }
    }
}
LoginModalComponent.??fac = function LoginModalComponent_Factory(t) { return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
LoginModalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginModalComponent, selectors: [["app-login-modal"]], decls: 23, vars: 4, consts: [["matDialogTitle", "", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "fxLayoutAlign", "center center"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: john.doe@gmail.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Ex: MySecretPassword", "formControlName", "password", "required", ""], ["fxFlex", "87", "fxLayoutAlign", "center center", "class", "errorMessage", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "2", "fxFlexOrder.gt-xs", "1", "mat-raised-button", "", "type", "button", "mat-dialog-close", "", 3, "click"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "1", "fxFlexOrder.gt-xs", "2", "mat-raised-button", "", "type", "submit"], ["fxFlex", "87", "fxLayoutAlign", "center center", 1, "errorMessage"]], template: function LoginModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginModalComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, LoginModalComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, LoginModalComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, LoginModalComponent_p_17_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginModalComponent_Template_button_click_19_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Annuler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Se connecter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm == null ? null : (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginForm == null ? null : (tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginErrorMessage);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexOrderDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".errorMessage[_ngcontent-%COMP%] {\n  color: crimson;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yTWVzc2FnZSB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-modal',
                templateUrl: './login-modal.component.html',
                styleUrls: ['./login-modal.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/pages/login-page/login-page.component */ "Fvy/");
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ "DB88");
/* harmony import */ var _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order/pages/order-form/order-form.component */ "H70G");








const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectUnauthorizedTo"])(['connexion']);
const redirectAlreadyLoggedIn = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectLoggedInTo"])(['admin']);
const routes = [
    { path: '', redirectTo: 'commande', pathMatch: 'full' },
    { path: 'commande', component: _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__["OrderFormComponent"] },
    { path: 'mentions-legales', component: _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_4__["MentionsLegalesComponent"] },
    Object.assign({ path: 'connexion', component: _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["canActivate"])(redirectAlreadyLoggedIn)),
    Object.assign({ path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule) }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["canActivate"])(redirectUnauthorizedToLogin)),
    // { path: '404', component: PageNotFoundPage },
    { path: '**', redirectTo: 'commande' },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yHTb":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: ProductUnit, ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUnit", function() { return ProductUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
var ProductUnit;
(function (ProductUnit) {
    ProductUnit["KG"] = "kilo";
    ProductUnit["UNIT"] = "unit\u00E9";
})(ProductUnit || (ProductUnit = {}));
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["BAGUETTE"] = "Baguettes";
    ProductCategory["SANDWICH"] = "Pains sandwichs";
    ProductCategory["INDIVIDUEL"] = "Pains individuels";
    ProductCategory["COUPE"] = "Pains \u00E0 la coupe";
    ProductCategory["PIECE"] = "Pains \u00E0 la pi\u00E8ce";
    ProductCategory["VIENNOISERIE"] = "Viennoiseries";
    ProductCategory["MIE"] = "Pains de mie";
    ProductCategory["GATEAU"] = "G\u00E2teaux de voyage";
    ProductCategory["PATES"] = "P\u00E2tes";
})(ProductCategory || (ProductCategory = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map