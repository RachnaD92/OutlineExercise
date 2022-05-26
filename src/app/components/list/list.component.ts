  import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
  import { AppConstants } from '../../constants/app-contants';
  import { DataManagerService } from '../../services/data-manager.service';

  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
  })
  export class ListComponent implements OnInit {

    layoutIsRow = true;
    autoIncrementMoney = false;
    amountInterval: any;
    constructor(private cd: ChangeDetectorRef, private dataManager: DataManagerService) {
      this.point11Resolution();
      this.point12Resolution();
    }

    ngOnInit(): void {
      this.dataManager.subscibeObservable().subscribe(res => {
        if (res.key === AppConstants.ITEM_TO_LIST_TRANSACTION) {
          this.dataManager.sendMoneyToItem(res.amount, res.id);
        }
      });
    }

    changeRadio(radiobtn: any) {
      this.layoutIsRow = !radiobtn;
      this.cd.detectChanges();
    }

    items = [
      { id: 1, name: "Jack", money: 50 },
      { id: 2, name: "Jill", money: 50 }
    ];


    createTransaction(amount: number, itemobj: any) {
      this.dataManager.sendMoneyToItem(amount, itemobj.id);
    }

    point11Resolution() {
      let a1 = [{ a: 1, b: 'a', f: false }, { a: 2, b: 'b' }, { a: 3, c: 'c', f: 0 }];
      a1.forEach((x: any) => {
        if (!x.hasOwnProperty('b')) {
          x['b'] = 'A';
        }
        if (!x.hasOwnProperty('f')) {
          x.f = 'A';
        }
        return x;
      });

      console.log(a1);
    }

    point12Resolution() {
      let b1 = [{ a: 1, b: 'a' }, { a: 2, b: 'b' }, { a: 3, c: 'c' }];
      let b2 = JSON.parse(JSON.stringify(b1)).map((x: any) => {
        x["a"] = x["a"] + 1;
        return x;
      }); //will this change b1?
      console.log('b1 result =', b1);
      console.log('b2 result =', b2);
    }

    autoIncTrigger(autoIcFlag: boolean) {
      this.autoIncrementMoney = autoIcFlag;
      console.log("trigger auto inc", this.autoIncrementMoney)
      if (this.autoIncrementMoney) {
        this.autoIncForChildren()
      } else {
        clearInterval(this.amountInterval);
      }
    }

    autoIncForChildren() {
      console.log("starting interval code");
      this.amountInterval = setInterval(() => {
        if (this.autoIncrementMoney) {
          this.updateAllChildren();
        }
      }, 10000)
    }

    updateAllChildren() {
      console.log("updating all children");
      this.items.forEach(x => this.dataManager.sendMoneyToItem(1, x.id));
    }
    updateMoney(amount: any, obj: any) {
      this.dataManager.sendMoneyToItem(amount, obj.id);
    }
  }
