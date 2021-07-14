import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { APPGGConfigService } from 'src/app/@core/services/app-gestiongrupos-config.service';
import { APPGGTokenRS } from 'src/app/models/token-rs/token-rs.model';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  public usuario: APPGGTokenRS;

  public expanded: boolean = false;

  items: NbMenuItem[] = [
    {
      title: 'opcion 1',
      icon: 'person-outline'
    }, 
    {
      title: 'opcion 2',
      icon: 'search-outline'
    },
    {
      title: 'cerrar sesión',
      link: '/auth/login',
      icon: 'unlock-outline'
    }
  ]


  constructor(private configService: APPGGConfigService) { }

  ngOnInit() {
    this.usuario = this.configService.currentUserValue;
    console.log('user',this.configService.currentUserValue);
  }

  menu(): void {
    this.expanded = !this.expanded;
  }

}
