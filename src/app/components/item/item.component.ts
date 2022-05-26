import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-contants';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() id: number = 0;
  @Input() money: number = 0;
  @Input() name: string = 'User Name';

  constructor(private dataManager: DataManagerService) { }

  ngOnInit(): void {
    this.dataManager.subscibeObservable().subscribe(res => {
      if (res.key ===  AppConstants.LIST_TO_ITEM_TRANSACTION && res.id === this.id) {
        this.money += res.amount;
      }
    })
  }

  getMoneyFromList() {
    this.dataManager.sendMoneyToList(5, this.id);
  }

}
