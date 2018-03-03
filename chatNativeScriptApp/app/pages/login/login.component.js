"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var forms_1 = require("@angular/forms");
var common_functions_service_1 = require("../../services/common-functions-service/common-functions.service");
var singleton_service_1 = require("../../services/singleton-service/singleton.service");
var dialogs_1 = require("tns-core-modules/ui/dialogs/dialogs");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, cfs, singleton, page) {
        this.router = router;
        this.cfs = cfs;
        this.singleton = singleton;
        this.page = page;
        this.isLoggingIn = true;
        this.loginForm = fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
        this.registerForm = fb.group({
            name: ['', forms_1.Validators.required],
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = "#e74c3c";
        this.main.nativeElement.backgroundColor = "white";
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn && this.loginForm.valid) {
            this.login();
        }
        else if (!this.isLoggingIn && this.registerForm.valid) {
            this.signUp();
        }
        else {
            var container_1 = this.container.nativeElement;
            container_1.animate({ translate: { x: -5, y: 0 }, duration: 50 })
                .then(function () { return container_1.animate({ translate: { x: 5, y: 0 }, duration: 50 }); })
                .then(function () { return container_1.animate({ translate: { x: -5, y: 0 }, duration: 50 }); })
                .then(function () { return container_1.animate({ translate: { x: 5, y: 0 }, duration: 50 }); })
                .then(function () { return container_1.animate({ translate: { x: -5, y: 0 }, duration: 50 }); })
                .then(function () { return container_1.animate({ translate: { x: 5, y: 0 }, duration: 50 }); })
                .then(function () { return container_1.animate({ translate: { x: -5, y: 0 }, duration: 50 }); })
                .then(function () { return container_1.animate({ translate: { x: 0, y: 0 }, duration: 50 }); })
                .then(function () {
                console.log("Animation finished");
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.cfs.postObserver('/api/login', '', this.loginForm.value).subscribe(function (data) {
            _this.singleton.user = data;
            _this.singleton.userLogged = data;
            _this.cfs.storeToken(data.token);
            _this.router.navigate(['/chat']);
        }, function (error) {
            dialogs_1.alert({
                title: "Ops..",
                message: error.json()["message"],
                okButtonText: "Ok"
            });
        });
        return;
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.cfs.postObserver('/api/user/new', '', this.registerForm.value).subscribe(function (data) {
            _this.singleton.user = data;
            _this.singleton.userLogged = data;
            _this.cfs.storeToken(data.token);
            _this.router.navigate(['/chat']);
        }, function (error) {
            dialogs_1.alert({
                title: "Ops..",
                message: error.json()["message"],
                okButtonText: "Ok"
            });
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var main = this.main.nativeElement;
        main.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#ecf0f1"),
            duration: 200
        });
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("main"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "main", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, common_functions_service_1.CommonFunctionsService, singleton_service_1.SingletonService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBRzlCLHdDQUE4RjtBQUM5Riw2R0FBMEc7QUFDMUcsd0ZBQXNGO0FBQ3RGLCtEQUE0RDtBQU01RDtJQU1FLHdCQUFtQixNQUFjLEVBQUUsRUFBZ0IsRUFBUyxHQUE0QixFQUFTLFNBQTRCLEVBQVUsSUFBVTtRQUE5SCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQTJCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRGpKLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUs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IEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25GdW5jdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1vbi1mdW5jdGlvbnMtc2VydmljZS9jb21tb24tZnVuY3Rpb25zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2luZ2xldG9uU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zaW5nbGV0b24tc2VydmljZS9zaW5nbGV0b24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9nc1wiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJtYWluXCIpIG1haW46IEVsZW1lbnRSZWY7XHJcbiAgICBsb2dpbkZvcm0gOiBGb3JtR3JvdXA7XHJcbiAgICByZWdpc3RlckZvcm0gOiBGb3JtR3JvdXA7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgZmIgOiBGb3JtQnVpbGRlciwgcHVibGljIGNmcyA6IENvbW1vbkZ1bmN0aW9uc1NlcnZpY2UsIHB1YmxpYyBzaW5nbGV0b24gOiBTaW5nbGV0b25TZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIFxyXG4gICAgdGhpcy5sb2dpbkZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgIHVzZXJuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLnJlZ2lzdGVyRm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQgXHJcbiAge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZENvbG9yID0gXCIjZTc0YzNjXCI7XHJcbiAgICB0aGlzLm1haW4ubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKVxyXG4gIHtcclxuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luICYmIHRoaXMubG9naW5Gb3JtLnZhbGlkKVxyXG4gICAge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZighdGhpcy5pc0xvZ2dpbmdJbiAmJiB0aGlzLnJlZ2lzdGVyRm9ybS52YWxpZClcclxuICAgIHtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgbGV0IGNvbnRhaW5lciA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGNvbnRhaW5lci5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IC01LCB5OiAwIH0sIGR1cmF0aW9uOiA1MCB9KVxyXG4gICAgICAudGhlbigoKSA9PiBjb250YWluZXIuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiA1LCB5OiAwIH0gLCBkdXJhdGlvbjogNTB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4gY29udGFpbmVyLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogLTUsIHk6IDAgfSwgZHVyYXRpb246IDUwIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiBjb250YWluZXIuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiA1LCB5OiAwIH0sIGR1cmF0aW9uOiA1MCB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4gY29udGFpbmVyLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogLTUsIHk6IDAgfSwgZHVyYXRpb246IDUwIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiBjb250YWluZXIuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiA1LCB5OiAwIH0sIGR1cmF0aW9uOiA1MCB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4gY29udGFpbmVyLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogLTUsIHk6IDAgfSwgZHVyYXRpb246IDUwIH0pKVxyXG4gICAgICAudGhlbigoKSA9PiBjb250YWluZXIuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sIGR1cmF0aW9uOiA1MCB9KSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uIGZpbmlzaGVkXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ2luKClcclxuICB7XHJcbiAgICB0aGlzLmNmcy5wb3N0T2JzZXJ2ZXIoJy9hcGkvbG9naW4nLCAnJywgdGhpcy5sb2dpbkZvcm0udmFsdWUgKS5zdWJzY3JpYmUoZGF0YT0+XHJcbiAgICB7XHJcbiAgICAgIHRoaXMuc2luZ2xldG9uLnVzZXIgPSBkYXRhO1xyXG4gICAgICB0aGlzLnNpbmdsZXRvbi51c2VyTG9nZ2VkID0gZGF0YTtcclxuICAgICAgdGhpcy5jZnMuc3RvcmVUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hhdCddKTtcclxuICAgIH0sIGVycm9yID0+XHJcbiAgICB7XHJcbiAgICAgIGFsZXJ0KHtcclxuICAgICAgICB0aXRsZTogXCJPcHMuLlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLmpzb24oKVtcIm1lc3NhZ2VcIl0sXHJcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgc2lnblVwKCkgXHJcbiAge1xyXG4gICAgdGhpcy5jZnMucG9zdE9ic2VydmVyKCcvYXBpL3VzZXIvbmV3JywgJycsIHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlICkuc3Vic2NyaWJlKGRhdGE9PlxyXG4gICAge1xyXG4gICAgICB0aGlzLnNpbmdsZXRvbi51c2VyID0gZGF0YTtcclxuICAgICAgdGhpcy5zaW5nbGV0b24udXNlckxvZ2dlZCA9IGRhdGE7XHJcbiAgICAgIHRoaXMuY2ZzLnN0b3JlVG9rZW4oZGF0YS50b2tlbik7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NoYXQnXSk7XHJcbiAgICB9LCBlcnJvciA9PlxyXG4gICAge1xyXG4gICAgICBhbGVydCh7XHJcbiAgICAgICAgdGl0bGU6IFwiT3BzLi5cIixcclxuICAgICAgICBtZXNzYWdlOiBlcnJvci5qc29uKClbXCJtZXNzYWdlXCJdLFxyXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEaXNwbGF5KCkgXHJcbiAge1xyXG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgbGV0IG1haW4gPSA8Vmlldz50aGlzLm1haW4ubmF0aXZlRWxlbWVudDtcclxuICAgIG1haW4uYW5pbWF0ZSh7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiI2VjZjBmMVwiKSxcclxuICAgICAgZHVyYXRpb246IDIwMFxyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19