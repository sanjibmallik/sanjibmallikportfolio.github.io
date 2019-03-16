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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _home_page_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/header/header.component */ "./src/app/home-page/header/header.component.ts");
/* harmony import */ var _home_page_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/about/about.component */ "./src/app/home-page/about/about.component.ts");
/* harmony import */ var _home_page_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-page/skills/skills.component */ "./src/app/home-page/skills/skills.component.ts");
/* harmony import */ var _home_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-page/contact/contact.component */ "./src/app/home-page/contact/contact.component.ts");
/* harmony import */ var _home_page_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/projects/projects.component */ "./src/app/home-page/projects/projects.component.ts");
/* harmony import */ var _home_page_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/experiences/experiences.component */ "./src/app/home-page/experiences/experiences.component.ts");
/* harmony import */ var _home_page_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-page/home/home.component */ "./src/app/home-page/home/home.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _home_page_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _home_page_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _home_page_skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                _home_page_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _home_page_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"],
                _home_page_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_11__["ExperiencesComponent"],
                _home_page_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/about/about.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-page/about/about.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mh-about\" id=\"mh-about\">\n  <div class=\"container\">\n      <div class=\"row section-separator\">\n          <div class=\"col-sm-12 col-md-6\">\n              <div class=\"mh-about-img shadow-2 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">\n                  <img src=\"assets/images/ab-img.png\" alt=\"\" class=\"img-fluid\">\n              </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6\">\n              <div class=\"mh-about-inner\">\n                  <h2 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.1s\">About Me</h2>\n                  <p class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">Hello, I’m a Sanjib, web-developer based on India. \n                  I have rich experience in web site design & building \n                  and customization. Also I am good at</p>\n                  <div class=\"mh-about-tag wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                      <ul>\n                          <li><span>php</span></li>\n                          <li><span>html</span></li>\n                          <li><span>css</span></li>\n                          <li><span>php</span></li>\n                          <li><span>wordpress</span></li>\n                          <li><span>React</span></li>\n                          <li><span>Javascript</span></li>\n                      </ul>\n                  </div>\n                  <a href=\"\" class=\"btn btn-fill wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">Downlaod CV <i class=\"fa fa-download\"></i></a>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n\n\n\n<section class=\"mh-service\">\n  <div class=\"container\">\n      <div class=\"row section-separator\">\n          <div class=\"col-sm-12 text-center section-title wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n              <h2>What I do</h2>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"mh-service-item shadow-1 dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                  <i class=\"fa fa-bullseye purple-color\"></i>\n                  <h3>UI Design</h3>\n                  <p>\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n                      magna aliquam erat volutpat.\n                  </p>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"mh-service-item shadow-1 dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                  <i class=\"fa fa-code iron-color\"></i>\n                  <h3>Web Development</h3>\n                  <p>\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n                      magna aliquam erat volutpat.\n                  </p>\n              </div>\n          </div>\n          <div class=\"col-sm-4\">\n              <div class=\"mh-service-item shadow-1 dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">\n                  <i class=\"fa fa-object-ungroup sky-color\"></i>\n                  <h3>App Development</h3>\n                  <p>\n                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore\n                      magna aliquam erat volutpat.\n                  </p>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n\n<!--\n===================\nFEATURE PROJECTS\n===================\n-->\n<section class=\"mh-featured-project image-bg featured-img-one\">\n  <div class=\"img-color-overlay\">\n      <div class=\"container\">\n          <div class=\"row section-separator\">\n              <div class=\"section-title col-sm-12\">\n                  <h3>Featured Projects</h3>\n              </div>\n              <div class=\"col-sm-12\">\n                  <div class=\"mh-single-project-slide-by-side row\">\n                      <!-- Project Items -->\n                      <div class=\"col-sm-12 mh-featured-item\">\n                          <div class=\"row\">\n                              <div class=\"col-sm-7\">\n                                  <div class=\"mh-featured-project-img shadow-2 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                                      <img src=\"assets/images/p-2.png\" alt=\"\" class=\"img-fluid\">\n                                  </div>\n                              </div>\n                              <div class=\"col-sm-5\">\n                                  <div class=\"mh-featured-project-content\">\n                                      <h4 class=\"project-category wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">Web Design</h4>\n                                      <h2 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">Wrap</h2>\n                                      <span class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">Design & Development</span>\n                                      <p class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">Stamp is a clean and elegant Multipurpose Landing Page Template. \n                                      It will fit perfectly for Startup, Web App or any type of Web Services.\n                                      It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. \n                                      All variations are organized separately so you can use / customize the template very easily.</p>\n                                      <a href=\"\" class=\"btn btn-fill wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">View Details</a>\n                                      <div class=\"mh-testimonial mh-project-testimonial wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.9s\">\n                                          <blockquote>\n                                    <q>Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                  <blockquote>\n                                    <q>Creative Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                  <blockquote>\n                                    <q>Organize Code - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!-- Project Items -->\n                      <div class=\"col-sm-12 mh-featured-item\">\n                          <div class=\"row\">\n                              <div class=\"col-sm-7\">\n                                  <div class=\"mh-featured-project-img shadow-2 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                                      <img src=\"assets/images/p-2.png\" alt=\"\" class=\"img-fluid\">\n                                  </div>\n                              </div>\n                              <div class=\"col-sm-5\">\n                                  <div class=\"mh-featured-project-content\">\n                                      <h4 class=\"project-category wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">Web Design</h4>\n                                      <h2 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">Wrap</h2>\n                                      <span class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">Design & Development</span>\n                                      <p class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">Stamp is a clean and elegant Multipurpose Landing Page Template. \n                                      It will fit perfectly for Startup, Web App or any type of Web Services.\n                                      It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. \n                                      All variations are organized separately so you can use / customize the template very easily.</p>\n                                      <a href=\"\" class=\"btn btn-fill wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">View Details</a>\n                                      <div class=\"mh-testimonial mh-project-testimonial wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.9s\">\n                                          <blockquote>\n                                    <q>Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                  <blockquote>\n                                    <q>Creative Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                  <blockquote>\n                                    <q>Organize Code - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!-- Project Items -->\n                      <div class=\"col-sm-12 mh-featured-item\">\n                          <div class=\"row\">\n                              <div class=\"col-sm-7\">\n                                  <div class=\"mh-featured-project-img shadow-2 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                                      <img src=\"assets/images/p-2.png\" alt=\"\" class=\"img-fluid\">\n                                  </div>\n                              </div>\n                              <div class=\"col-sm-5\">\n                                  <div class=\"mh-featured-project-content\">\n                                      <h4 class=\"project-category wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">Web Design</h4>\n                                      <h2 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">Wrap</h2>\n                                      <span class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">Design & Development</span>\n                                      <p class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">Stamp is a clean and elegant Multipurpose Landing Page Template. \n                                      It will fit perfectly for Startup, Web App or any type of Web Services.\n                                      It has 4 background styles with 6 homepage styles. 6 pre-defined color scheme. \n                                      All variations are organized separately so you can use / customize the template very easily.</p>\n                                      <a href=\"\" class=\"btn btn-fill wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">View Details</a>\n                                      <div class=\"mh-testimonial mh-project-testimonial wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.9s\">\n                                          <blockquote>\n                                    <q>Excellent Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                  <blockquote>\n                                    <q>Creative Template - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                  <blockquote>\n                                    <q>Organize Code - suits my needs perfectly whilst allowing me to learn some new technology first hand.</q>\n                                    <cite>- Shane Kavanagh</cite>\n                                  </blockquote>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div> <!-- End: .row -->\n      </div>\n  </div>\n</section>  "

/***/ }),

/***/ "./src/app/home-page/about/about.component.sass":
/*!******************************************************!*\
  !*** ./src/app/home-page/about/about.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-page/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/home-page/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.sass */ "./src/app/home-page/about/about.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/home-page/contact/contact.component.html":
/*!**********************************************************!*\
  !*** ./src/app/home-page/contact/contact.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mh-footer mh-footer-3\" id=\"mh-contact\">\n  <div class=\"container-fluid\">\n      <div class=\"row section-separator\">\n          <div class=\"col-sm-12 section-title wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n              <h3>Contact Me</h3>\n          </div>\n          <div class=\"map-image image-bg col-sm-12\">\n              <div class=\"container mt-30\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-12 col-md-6 mh-footer-address\">\n                          <div class=\"col-sm-12 xs-no-padding\">\n                              <div class=\"mh-address-footer-item dark-bg shadow-1 media wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                                  <div class=\"each-icon\">\n                                      <i class=\"fa fa-location-arrow\"></i>\n                                  </div>\n                                  <div class=\"each-info media-body\">\n                                      <h4>Address</h4>\n                                      <address>\n                                          5th Avenue, 34th floor, <br> \n                                           New york\n                                      </address>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-sm-12 xs-no-padding\">\n                              <div class=\"mh-address-footer-item media dark-bg shadow-1 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">\n                                  <div class=\"each-icon\">\n                                      <i class=\"fa fa-envelope-o\"></i>\n                                  </div>\n                                  <div class=\"each-info media-body\">\n                                      <h4>Email</h4>\n                                      <a href=\"mailto:yourmail@email.com\">yourmail@email.com</a><br>\n                                      <a href=\"mailto:yourmail@email.com\">yourmail@email.com</a>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-sm-12 xs-no-padding\">\n                              <div class=\"mh-address-footer-item media dark-bg shadow-1 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">\n                                  <div class=\"each-icon\">\n                                      <i class=\"fa fa-phone\"></i>\n                                  </div>\n                                  <div class=\"each-info media-body\">\n                                      <h4>Phone</h4>\n                                      <a href=\"callto:(880)-8976-987\">(880)-8976-987</a><br>\n                                      <a href=\"callto:(880)-8976-987\">(880)-8976-987</a>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"col-sm-12 col-md-6 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                          <form id=\"contactForm\" class=\"single-form quate-form wow fadeInUp\" data-toggle=\"validator\">\n                              <div id=\"msgSubmit\" class=\"h3 text-center hidden\"></div>\n                              <div class=\"row\">\n                                  <div class=\"col-sm-12\">\n                                      <input name=\"name\" class=\"contact-name form-control\" id=\"name\" type=\"text\" placeholder=\"First Name\" required>\n                                  </div>\n      \n                                  <div class=\"col-sm-12\">\n                                      <input name=\"name\" class=\"contact-email form-control\" id=\"L_name\" type=\"text\" placeholder=\"Last Name\" required>\n                                  </div>\n      \n                                  <div class=\"col-sm-12\">\n                                      <input name=\"name\" class=\"contact-subject form-control\" id=\"email\" type=\"email\" placeholder=\"Your Email\" required>\n                                  </div>\n      \n                                  <div class=\"col-sm-12\">\n                                      <textarea class=\"contact-message\" id=\"message\" rows=\"6\" placeholder=\"Your Message\" required></textarea>\n                                  </div>\n                                  \n                                  <!-- Subject Button -->\n                                  <div class=\"btn-form col-sm-12\">\n                                      <button type=\"submit\" class=\"btn btn-fill btn-block\" id=\"form-submit\">Send Message</button>\n                                  </div>\n                              </div>\n                          </form>\n                      </div>\n                      <div class=\"col-sm-12 mh-copyright wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                          <div class=\"row\">\n                              <div class=\"col-sm-6\">\n                                  <div class=\"text-left text-xs-center\">\n                                    \n                                  </div>\n                              </div>\n                              <div class=\"col-sm-6\">\n                                  <ul class=\"social-icon\">\n                                      <li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\n                                      <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\n                                      <li><a href=\"\"><i class=\"fa fa-github\"></i></a></li>\n                                      <li><a href=\"\"><i class=\"fa fa-dribbble\"></i></a></li>\n                                  </ul>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/home-page/contact/contact.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/home-page/contact/contact.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/home-page/contact/contact.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home-page/contact/contact.component.ts ***!
  \********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/home-page/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.sass */ "./src/app/home-page/contact/contact.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home-page/experiences/experiences.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home-page/experiences/experiences.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mh-experince image-bg featured-img-one\" id=\"mh-experience\">\n  <div class=\"img-color-overlay\">\n      <div class=\"container\">\n          <div class=\"row section-separator\">\n              <div class=\"col-sm-12 col-md-6\">\n                  <div class=\"mh-education\">\n                      <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">Education</h3>\n                      <div class=\"mh-education-deatils\">\n                          <!-- Education Institutes-->\n                          <div class=\"mh-education-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                              <h4>Art & Multimedia From <a href=\"\">Oxford University</a></h4>\n                              <div class=\"mh-eduyear\">2005-2008</div>\n                              <p>It is a long established fact that a reader will be distracted by the readable content of a \n                              page when looking at its layout. The point of using  Lorem Ipsum </p>\n                          </div>                                \n                          <!-- Education Institutes-->\n                          <div class=\"mh-education-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                              <h4>Art & Multimedia From <a href=\"\">Oxford University</a></h4>\n                              <div class=\"mh-eduyear\">2005-2008</div>\n                              <p>It is a long established fact that a reader will be distracted by the readable content of a \n                              page when looking at its layout. The point of using  Lorem Ipsum </p>\n                          </div>                                \n                          <!-- Education Institutes-->\n                          <div class=\"mh-education-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">\n                              <h4>Art & Multimedia From <a href=\"\">Oxford University</a></h4>\n                              <div class=\"mh-eduyear\">2005-2008</div>\n                              <p>It is a long established fact that a reader will be distracted by the readable content of a \n                              page when looking at its layout. The point of using L orem Ipsum </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-12 col-md-6\">\n                  <div class=\"mh-work\">\n                       <h3>Work Experience</h3>\n                      <div class=\"mh-experience-deatils\">\n                          <!-- Education Institutes-->\n                          <div class=\"mh-work-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">\n                              <h4>UI/UX Designer <a href=\"\">IronSketch</a></h4>\n                              <div class=\"mh-eduyear\">2005-2008</div>\n                              <span>Responsibility :</span>\n                              <ul class=\"work-responsibility\">\n                                  <li><i class=\"fa fa-circle\"></i>Validate CSS</li>\n                                  <li><i class=\"fa fa-circle\"></i>Project Management</li>\n                              </ul>\n                          </div>                                \n                          <!-- Education Institutes-->\n                          <div class=\"mh-work-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">\n                              <h4>Art & Multimedia From <a href=\"\">Oxford University</a></h4>\n                              <div class=\"mh-eduyear\">2005-2008</div>\n                              <span>Responsibility :</span>\n                              <ul class=\"work-responsibility\">\n                                  <li><i class=\"fa fa-circle\"></i>Validate CSS</li>\n                                  <li><i class=\"fa fa-circle\"></i>Project Management</li>\n                              </ul>\n                          </div>                                \n                          <!-- Education Institutes-->\n                          <div class=\"mh-work-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">\n                              <h4>Art & Multimedia From <a href=\"\">Oxford University</a></h4>\n                              <div class=\"mh-eduyear\">2005-2008</div>\n                              <span>Responsibility :</span>\n                              <ul class=\"work-responsibility\">\n                                  <li><i class=\"fa fa-circle\"></i>Validate CSS</li>\n                                  <li><i class=\"fa fa-circle\"></i>Project Management</li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>   "

/***/ }),

/***/ "./src/app/home-page/experiences/experiences.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/home-page/experiences/experiences.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9leHBlcmllbmNlcy9leHBlcmllbmNlcy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/experiences/experiences.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home-page/experiences/experiences.component.ts ***!
  \****************************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent() {
    }
    ExperiencesComponent.prototype.ngOnInit = function () {
    };
    ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experiences',
            template: __webpack_require__(/*! ./experiences.component.html */ "./src/app/home-page/experiences/experiences.component.html"),
            styles: [__webpack_require__(/*! ./experiences.component.sass */ "./src/app/home-page/experiences/experiences.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());



/***/ }),

/***/ "./src/app/home-page/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-page/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav\" id=\"mh-header\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n      <div class=\"row\">\n          <nav class=\"navbar navbar-expand-lg mh-nav nav-btn\">\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                  <span class=\"navbar-toggler-icon icon\"></span>\n              </button>\n          \n              <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                  <ul class=\"navbar-nav mr-auto ml-auto\">\n                      <li class=\"nav-item active\">\n                          <a class=\"nav-link\" href=\"#mh-home\">Home</a>\n                      </li>\n                      <li class=\"nav-item\">\n                          <a class=\"nav-link\" href=\"#mh-about\">About</a>\n                      </li>\n                      <li class=\"nav-item\">\n                         <a class=\"nav-link\" href=\"#mh-skills\">Skills</a>\n                      </li>                                \n                      <li class=\"nav-item\">\n                         <a class=\"nav-link\" href=\"#mh-experience\">Experiences</a>\n                      </li>                                \n                      <li class=\"nav-item\">\n                         <a class=\"nav-link\" href=\"#mh-contact\">Contact</a>\n                      </li>\n                  </ul>\n              </div>\n          </nav>\n      </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/home-page/header/header.component.sass":
/*!********************************************************!*\
  !*** ./src/app/home-page/header/header.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/home-page/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-page/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/home-page/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/home-page/header/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-home></app-home>\n<app-about></app-about>\n<app-skills></app-skills>\n<app-experiences></app-experiences>\n<app-projects></app-projects>\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.sass":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.sass */ "./src/app/home-page/home-page.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mh-home image-bg home-2-img\" id=\"mh-home\">\n  <div class=\"img-foverlay img-color-overlay\">\n      <div class=\"container\">\n          <div class=\"row section-separator xs-column-reverse vertical-middle-content home-padding\">\n              <div class=\"col-sm-6\">\n                  <div class=\"mh-header-info\">\n                      <div class=\"mh-promo wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.1s\">\n                          <span>Hello I'm</span>\n                      </div>\n                      \n                      <h2 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">Sanjib Mallik</h2>\n                      <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">Software Engineer</h4>\n                      \n                      <ul>\n                          <li class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\"><i class=\"fa fa-envelope\"></i><a href=\"mailto:\">sanjibmallik.prof@email.com</a></li>\n                          <li class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\"><i class=\"fa fa-phone\"></i><a href=\"callto:\">+91- 7259550530</a></li>\n                          <li class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\"><i class=\"fa fa-map-marker\"></i><address>#1257, Varthur Idgha road, Bangalore-87, Karnataka, INDIA</address></li>\n                      </ul>\n                      \n                      <ul class=\"social-icon wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">\n                          <li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\n                          <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\n                          <li><a href=\"\"><i class=\"fa fa-github\"></i></a></li>\n                          <li><a href=\"\"><i class=\"fa fa-dribbble\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"col-sm-6\">\n                  <div class=\"hero-img wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">\n                      <div class=\"img-border\">\n                          <img src=\"assets/images/sanjib.jpg\" alt=\"\"  class=\"img-fluid\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/home-page/home/home.component.sass":
/*!****************************************************!*\
  !*** ./src/app/home-page/home/home.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/home-page/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home-page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home-page/home/home.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home-page/projects/projects.component.html":
/*!************************************************************!*\
  !*** ./src/app/home-page/projects/projects.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/home-page/projects/projects.component.sass":
/*!************************************************************!*\
  !*** ./src/app/home-page/projects/projects.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/projects/projects.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-page/projects/projects.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/home-page/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.sass */ "./src/app/home-page/projects/projects.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/home-page/skills/skills.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-page/skills/skills.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mh-skills\" id=\"mh-skills\">\n  <div class=\"home-v-img\">\n      <div class=\"container\">\n          <div class=\"row section-separator\">\n              <div class=\"section-title text-center col-sm-12\">\n                  <!--<h2>Skills</h2>-->\n              </div>\n              <div class=\"col-sm-12 col-md-6\">\n                  <div class=\"mh-skills-inner\">\n                      <div class=\"mh-professional-skill wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                          <h3>Technical Skills</h3>\n                          <div class=\"each-skills\">\n                              <div class=\"candidatos\">\n                                  <div class=\"parcial\">\n                                      <div class=\"info\">\n                                          <div class=\"nome\">Javascript</div>\n                                          <div class=\"percentagem-num\">86%</div>\n                                      </div>\n                                      <div class=\"progressBar\">\n                                          <div class=\"percentagem\" style=\"width: 86%;\"></div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"candidatos\">\n                                  <div class=\"parcial\">\n                                      <div class=\"info\">\n                                          <div class=\"nome\">Java</div>\n                                          <div class=\"percentagem-num\">46%</div>\n                                      </div>\n                                      <div class=\"progressBar\">\n                                          <div class=\"percentagem\" style=\"width: 46%;\"></div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"candidatos\">\n                                  <div class=\"parcial\">\n                                      <div class=\"info\">\n                                          <div class=\"nome\">Python</div>\n                                          <div class=\"percentagem-num\">38%</div>\n                                      </div>\n                                      <div class=\"progressBar\">\n                                          <div class=\"percentagem\" style=\"width: 38%;\"></div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"candidatos\">\n                                  <div class=\"parcial\">\n                                      <div class=\"info\">\n                                          <div class=\"nome\">PHP</div>\n                                          <div class=\"percentagem-num\">17%</div>\n                                      </div>\n                                      <div class=\"progressBar\">\n                                          <div class=\"percentagem\" style=\"width: 17%;\"></div>\n                                      </div>\n                                  </div>\n                              </div>                                    \n                              \n                              <div class=\"candidatos\">\n                                  <div class=\"parcial\">\n                                      <div class=\"info\">\n                                          <div class=\"nome\">Python</div>\n                                          <div class=\"percentagem-num\">38%</div>\n                                      </div>\n                                      <div class=\"progressBar\">\n                                          <div class=\"percentagem\" style=\"width: 38%;\"></div>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"candidatos\">\n                                  <div class=\"parcial\">\n                                      <div class=\"info\">\n                                          <div class=\"nome\">PHP</div>\n                                          <div class=\"percentagem-num\">17%</div>\n                                      </div>\n                                      <div class=\"progressBar\">\n                                          <div class=\"percentagem\" style=\"width: 17%;\"></div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-12 col-md-6\">\n                  <div class=\"mh-professional-skills wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                      <h3>Professional Skills</h3>\n                      <ul class=\"mh-professional-progress\">\n                          <li>\n                              <div class=\"mh-progress mh-progress-circle\" data-progress=\"95\"></div>\n                              <div class=\"pr-skill-name\">Communication</div>\n                          </li>\n                          <li>\n                              <div class=\"mh-progress mh-progress-circle\" data-progress=\"55\"></div> \n                              <div class=\"pr-skill-name\">Team Work</div>\n                          </li>\n                          <li>\n                              <div class=\"mh-progress mh-progress-circle\" data-progress=\"86\"></div>\n                              <div class=\"pr-skill-name\">Project Management</div>\n                          </li> \n                          <li>\n                              <div class=\"mh-progress mh-progress-circle\" data-progress=\"60\"></div>\n                              <div class=\"pr-skill-name\">Creativity</div>\n                          </li>\n                      </ul>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home-page/skills/skills.component.sass":
/*!********************************************************!*\
  !*** ./src/app/home-page/skills/skills.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/home-page/skills/skills.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-page/skills/skills.component.ts ***!
  \******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/home-page/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.sass */ "./src/app/home-page/skills/skills.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\AL1451\Documents\IMPORTANT PROJECTS AND FILES\portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map