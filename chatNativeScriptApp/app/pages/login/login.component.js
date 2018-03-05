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
            console.dir(error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBRzlCLHdDQUE4RjtBQUM5Riw2R0FBMEc7QUFDMUcsd0ZBQXNGO0FBQ3RGLCtEQUE0RDtBQU01RDtJQU1FLHdCQUFtQixNQUFjLEVBQUUsRUFBZ0IsRUFBUyxHQUE0QixFQUFTLFNBQTRCLEVBQVUsSUFBVTtRQUE5SCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQTJCLFFBQUcsR0FBSCxHQUFHLENBQXlCO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRGpKLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUMzQixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDL0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUs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QWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uRnVuY3Rpb25zU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tb24tZnVuY3Rpb25zLXNlcnZpY2UvY29tbW9uLWZ1bmN0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTaW5nbGV0b25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NpbmdsZXRvbi1zZXJ2aWNlL3NpbmdsZXRvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MvZGlhbG9nc1wiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcIm1haW5cIikgbWFpbjogRWxlbWVudFJlZjtcbiAgICBsb2dpbkZvcm0gOiBGb3JtR3JvdXA7XG4gICAgcmVnaXN0ZXJGb3JtIDogRm9ybUdyb3VwO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlciwgZmIgOiBGb3JtQnVpbGRlciwgcHVibGljIGNmcyA6IENvbW1vbkZ1bmN0aW9uc1NlcnZpY2UsIHB1YmxpYyBzaW5nbGV0b24gOiBTaW5nbGV0b25TZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICBcbiAgICB0aGlzLmxvZ2luRm9ybSA9IGZiLmdyb3VwKHtcbiAgICAgIHVzZXJuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5yZWdpc3RlckZvcm0gPSBmYi5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIFxuICB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IFwiI2U3NGMzY1wiO1xuICAgIHRoaXMubWFpbi5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgfVxuXG4gIHN1Ym1pdCgpXG4gIHtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbiAmJiB0aGlzLmxvZ2luRm9ybS52YWxpZClcbiAgICB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBcbiAgICBlbHNlIGlmKCF0aGlzLmlzTG9nZ2luZ0luICYmIHRoaXMucmVnaXN0ZXJGb3JtLnZhbGlkKVxuICAgIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnRhaW5lci5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IC01LCB5OiAwIH0sIGR1cmF0aW9uOiA1MCB9KVxuICAgICAgLnRoZW4oKCkgPT4gY29udGFpbmVyLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogNSwgeTogMCB9ICwgZHVyYXRpb246IDUwfSkpXG4gICAgICAudGhlbigoKSA9PiBjb250YWluZXIuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAtNSwgeTogMCB9LCBkdXJhdGlvbjogNTAgfSkpXG4gICAgICAudGhlbigoKSA9PiBjb250YWluZXIuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiA1LCB5OiAwIH0sIGR1cmF0aW9uOiA1MCB9KSlcbiAgICAgIC50aGVuKCgpID0+IGNvbnRhaW5lci5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IC01LCB5OiAwIH0sIGR1cmF0aW9uOiA1MCB9KSlcbiAgICAgIC50aGVuKCgpID0+IGNvbnRhaW5lci5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDUsIHk6IDAgfSwgZHVyYXRpb246IDUwIH0pKVxuICAgICAgLnRoZW4oKCkgPT4gY29udGFpbmVyLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogLTUsIHk6IDAgfSwgZHVyYXRpb246IDUwIH0pKVxuICAgICAgLnRoZW4oKCkgPT4gY29udGFpbmVyLmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LCBkdXJhdGlvbjogNTAgfSkpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uIGZpbmlzaGVkXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKVxuICB7XG4gICAgdGhpcy5jZnMucG9zdE9ic2VydmVyKCcvYXBpL2xvZ2luJywgJycsIHRoaXMubG9naW5Gb3JtLnZhbHVlICkuc3Vic2NyaWJlKGRhdGE9PlxuICAgIHtcbiAgICAgIHRoaXMuc2luZ2xldG9uLnVzZXIgPSBkYXRhO1xuICAgICAgdGhpcy5zaW5nbGV0b24udXNlckxvZ2dlZCA9IGRhdGE7XG4gICAgICB0aGlzLmNmcy5zdG9yZVRva2VuKGRhdGEudG9rZW4pO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2hhdCddKTtcbiAgICB9LCBlcnJvciA9PlxuICAgIHtcbiAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgIGFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiT3BzLi5cIixcbiAgICAgICAgbWVzc2FnZTogZXJyb3IuanNvbigpW1wibWVzc2FnZVwiXSxcbiAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9rXCJcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2lnblVwKCkgXG4gIHtcbiAgICB0aGlzLmNmcy5wb3N0T2JzZXJ2ZXIoJy9hcGkvdXNlci9uZXcnLCAnJywgdGhpcy5yZWdpc3RlckZvcm0udmFsdWUgKS5zdWJzY3JpYmUoZGF0YT0+XG4gICAge1xuICAgICAgdGhpcy5zaW5nbGV0b24udXNlciA9IGRhdGE7XG4gICAgICB0aGlzLnNpbmdsZXRvbi51c2VyTG9nZ2VkID0gZGF0YTtcbiAgICAgIHRoaXMuY2ZzLnN0b3JlVG9rZW4oZGF0YS50b2tlbik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jaGF0J10pO1xuICAgIH0sIGVycm9yID0+XG4gICAge1xuICAgICAgYWxlcnQoe1xuICAgICAgICB0aXRsZTogXCJPcHMuLlwiLFxuICAgICAgICBtZXNzYWdlOiBlcnJvci5qc29uKClbXCJtZXNzYWdlXCJdLFxuICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVEaXNwbGF5KCkgXG4gIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgbGV0IG1haW4gPSA8Vmlldz50aGlzLm1haW4ubmF0aXZlRWxlbWVudDtcbiAgICBtYWluLmFuaW1hdGUoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjZWNmMGYxXCIpLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pO1xuICB9XG59Il19