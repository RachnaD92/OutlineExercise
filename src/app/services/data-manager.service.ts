import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, Subject } from 'rxjs';
import { AppConstants } from '../constants/app-contants';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {


  private transaction = new Subject<any>(); 
  constructor() { }

  sendMoneyToItem(amount: number, objId: number) {
    this.transaction.next({key: AppConstants.LIST_TO_ITEM_TRANSACTION, id: objId, amount: amount});
  }

  sendMoneyToList(amount: number, id: any) {
    this.transaction.next({key: AppConstants.ITEM_TO_LIST_TRANSACTION, amount: amount, id: id});
  }

  subscibeObservable(): Observable<any> {
    return this.transaction;
  }
}
