import { AfterContentInit, AfterViewInit, Component, ContentChild, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginWrapperComponent } from '../../../Module/Login/component/wrapper/login-wrapper.component';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'page-header',
  imports: [FormsModule,ButtonModule,InputTextModule,InputGroupModule,InputGroupAddonModule,FloatLabelModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PageHeaderComponent {
  public items: MenuItem[];
  showLoginScreen: boolean;
  searchText: string = "";
  isLoggedIn: boolean = false;
  userName: string = '';
  @ViewChild("viewChildRef1") viewChildRef1:any;
  @ContentChild("contentChildRef1") contentChildRef1:any;
  @ContentChild("contentChildRef2") contentChildRef2:any;

  constructor(private route:Router) {
    console.log("Inside page-header");
    //this.viewChildRef1 = {};
    this.contentChildRef1 = {};
    this.contentChildRef2 = {};
    this.items = [
      {
        label: 'My Profile',
        icon: 'pi pi-user-plus',
        command: () => {
          //this.update();
        }
      },
      {
        label: 'Orders',
        icon: 'pi pi-truck',
        command: () => {
          //this.delete();
        }
      },
      {
        label: 'Bookmark',
        icon: 'pi pi-heart-fill',
        command: () => {
          //this.delete();
        }
      },
      {
        label: 'Address',
        icon: 'pi pi-tags',
        command: () => {
          //this.delete();
        }
      }
    ];

    this.showLoginScreen = false;
  }

  toggleLoginScreen() {
    this.showLoginScreen = !this.showLoginScreen;
  }

  closeLoginPopup() {
    this.showLoginScreen = false;
  }

  openCart() {
    this.route.navigate(['/cart']);
  }

  openLoginPopUp() {
  }
}
