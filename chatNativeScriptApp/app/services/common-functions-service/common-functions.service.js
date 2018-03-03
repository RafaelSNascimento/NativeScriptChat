"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var singleton_service_1 = require("../../services/singleton-service/singleton.service");
require("nativescript-localstorage");
var CommonFunctionsService = /** @class */ (function () {
    function CommonFunctionsService(http, singleton, ngZone) {
        this.http = http;
        this.singleton = singleton;
        this.ngZone = ngZone;
        console.log("intializing cfs...");
    }
    CommonFunctionsService.prototype.validateAllFormFields = function (control) {
        var _this = this;
        if (control instanceof forms_1.FormControl) {
            control.markAsTouched({ onlySelf: true });
        }
        else if (control instanceof forms_1.FormGroup) {
            Object.keys(control.controls).forEach(function (field) {
                var groupControl = control.get(field);
                _this.validateAllFormFields(groupControl);
            });
        }
        else if (control instanceof forms_1.FormArray) {
            var controlAsFormArray = control;
            controlAsFormArray.controls.forEach(function (arrayControl) { return _this.validateAllFormFields(arrayControl); });
        }
    };
    CommonFunctionsService.prototype.postObserver = function (url, token, content, form) {
        if (url === void 0) { url = ""; }
        if (token === void 0) { token = ""; }
        if (content === void 0) { content = null; }
        if (form === void 0) { form = false; }
        var header = new http_1.Headers();
        if (!form)
            header.append('Content-Type', "application/json");
        if (token)
            header.append('authorization', token);
        var options = new http_1.RequestOptions({ headers: header });
        return this.http.post(this.singleton.serverUrl + url, content, options).map(function (res) { return res.json(); });
    };
    CommonFunctionsService.prototype.getObserver = function (url, token) {
        if (url === void 0) { url = ""; }
        if (token === void 0) { token = ""; }
        var header = new http_1.Headers();
        if (token)
            header.append('authorization', token);
        var options = new http_1.RequestOptions({ headers: header });
        return this.http.get(this.singleton.serverUrl + url, options).map(function (res) { return res.json(); });
    };
    CommonFunctionsService.prototype.storeToken = function (token) {
        localStorage.setItem('token', token);
    };
    CommonFunctionsService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    CommonFunctionsService.prototype.orderByProperty = function (value, property) {
        if (!value || !value.length) {
            return value;
        }
        value.sort(function (first, second) {
            return (first[property] === second[property]) ? 0 : first[property] ? -1 : 1;
        });
        return value;
    };
    CommonFunctionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, singleton_service_1.SingletonService, core_1.NgZone])
    ], CommonFunctionsService);
    return CommonFunctionsService;
}());
exports.CommonFunctionsService = CommonFunctionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWZ1bmN0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLWZ1bmN0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHdDQUFvRjtBQUNwRixzQ0FBd0U7QUFDeEUsaUNBQStCO0FBQy9CLHVDQUFxQztBQUVyQyxtQ0FBaUM7QUFDakMsd0ZBQXNGO0FBQ3RGLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBUXZDO0lBQ0UsZ0NBQW9CLElBQVUsRUFBUyxTQUEyQixFQUFTLE1BQWM7UUFBckUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN2RixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHNEQUFxQixHQUFyQixVQUFzQixPQUF3QjtRQUE5QyxpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sWUFBWSxtQkFBVyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVksaUJBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYTtnQkFDcEQsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVks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QUFDO1FBQ2pGLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFyRFUsc0JBQXNCO1FBRGxDLGlCQUFVLEVBQUU7eUNBRWUsV0FBSSxFQUFvQixvQ0FBZ0IsRUFBaUIsYUFBTTtPQUQ5RSxzQkFBc0IsQ0FzRGxDO0lBQUQsNkJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0IHsgU2luZ2xldG9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NpbmdsZXRvbi1zZXJ2aWNlL3NpbmdsZXRvbi5zZXJ2aWNlJztcbnJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5pbXBvcnQgeyBhbGVydCwgY29uZmlybSB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgKiBhcyB1dGlsTW9kdWxlIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5kZWNsYXJlIHZhciBhbmRyb2lkIDphbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tb25GdW5jdGlvbnNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwdWJsaWMgc2luZ2xldG9uOiBTaW5nbGV0b25TZXJ2aWNlLCBwdWJsaWMgbmdab25lOiBOZ1pvbmUpIHtcbiAgICBjb25zb2xlLmxvZyhcImludGlhbGl6aW5nIGNmcy4uLlwiKTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkcyhjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Hcm91cCkge1xuICAgICAgT2JqZWN0LmtleXMoY29udHJvbC5jb250cm9scykuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBDb250cm9sID0gY29udHJvbC5nZXQoZmllbGQpO1xuICAgICAgdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZHMoZ3JvdXBDb250cm9sKTtcbiAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICBjb25zdCBjb250cm9sQXNGb3JtQXJyYXkgPSBjb250cm9sIGFzIEZvcm1BcnJheTtcbiAgICAgIGNvbnRyb2xBc0Zvcm1BcnJheS5jb250cm9scy5mb3JFYWNoKChhcnJheUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkgPT4gdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZHMoYXJyYXlDb250cm9sKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHBvc3RPYnNlcnZlcih1cmw6c3RyaW5nPVwiXCIsIHRva2VuOnN0cmluZyA9IFwiXCIsIGNvbnRlbnQ6YW55ID1udWxsLCBmb3JtOiBib29sZWFuID0gZmFsc2Upe1xuXHRcdGxldCBoZWFkZXIgPSBuZXcgSGVhZGVycygpO1xuICAgIGlmKCFmb3JtKSBoZWFkZXIuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gIFxuXHRcdGlmKHRva2VuKSBoZWFkZXIuYXBwZW5kKCdhdXRob3JpemF0aW9uJywgdG9rZW4pO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJ9KTtcblx0XHRyZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zaW5nbGV0b24uc2VydmVyVXJsK3VybCwgY29udGVudCwgb3B0aW9ucykubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG4gIFxuXHRwdWJsaWMgZ2V0T2JzZXJ2ZXIodXJsOnN0cmluZz1cIlwiLCB0b2tlbjpzdHJpbmcgPSBcIlwiKXtcblx0XHRsZXQgaGVhZGVyID0gbmV3IEhlYWRlcnMoKTtcblx0XHRpZih0b2tlbikgaGVhZGVyLmFwcGVuZCgnYXV0aG9yaXphdGlvbicsIHRva2VuKTtcblx0XHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogaGVhZGVyfSk7XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zaW5nbGV0b24uc2VydmVyVXJsK3VybCwgb3B0aW9ucykubWFwKChyZXM6UmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICB9XG4gIFxuICBwdWJsaWMgc3RvcmVUb2tlbih0b2tlbjogc3RyaW5nKVxuICB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuICB9XG5cbiAgcHVibGljIGdldFRva2VuKCkgOiBzdHJpbmdcbiAge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgfVxuXG4gIHB1YmxpYyBvcmRlckJ5UHJvcGVydHkodmFsdWU6IGFueVtdLCBwcm9wZXJ0eTogYW55LCk6IGFueXtcbiAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWUuc29ydCgoZmlyc3Q6IGFueSwgc2Vjb25kOiBhbnkpOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gKGZpcnN0W3Byb3BlcnR5XSA9PT0gc2Vjb25kW3Byb3BlcnR5XSkgPyAwIDogZmlyc3RbcHJvcGVydHldID8gLTEgOiAxO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19