import { Injectable } from '@angular/core';
import { RepositoryService } from 'src/services/repository.service';
import { HttpService } from 'src/services/http.service';
import { XTreeNode } from '@ng-nest/ui/tree';
import { XId } from '@ng-nest/ui/core';

@Injectable({ providedIn: 'root' })
export class MenusService extends RepositoryService<Menu> {
  constructor(public http: HttpService) {
    super(http, { controller: { name: 'menus',servicetype:'userprivilage' } });
  }
}

@Injectable({ providedIn: 'root' })
export class ActionsService extends RepositoryService<Action> {
  constructor(public http: HttpService) {
    super(http, { controller: { name: 'actions',servicetype:'userprivilage' } });
  }
}

export interface Menu extends XTreeNode {
  label?: string;
  icon?: string;
  pid?: string;
  path?: string;
  router?: string;
  sort?: string;
  // 子路由页面
  subPage?: string;
  // 参数
  param?: { [property: string]: any };
}

export interface Action extends XId {
  name?: string;
  code?: string;
  icon?: string;
  menuId?: string;
}
