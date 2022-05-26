# OutlineSamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

Create two components ParentComponent and ChildComponent.
Show Name and Money property in ChildComponent.
Place two ChildComponents on Parent and pass name and money to both e.g. name1=Jack, money1=10, name2=Jill and money1=15.
Add two buttons “Send Money to Jack” and “Send Money to Jill” on ParentComponent to send 10 on each click to ChildComponents and add to child’s money.
Add two buttons “Get Money from Jack” and “Get Money from Jill” on ParentComponent to subtract 10 on each click by calling a function of ChildComponents.
Add button “Get Money” in ChildComponet to call a parent function to add 5 in child’s money on each click.
Implement two radio buttons [one for row and other column] to show children in row or column fxLayout.
Shrink or Grow ChildComponents in row/column by money using fxFlex property.
Implement service using rxJS and send and receive money from one or all children.
Send money every 1 minute to child automatically from parent using rxJS interval, and mergemap.
Copy and modify below code in Chrome Console to verify the result
let a1 = [{a:1, b:'a', f:false}, {a:2, b:'b'}, {a:3, c:'c', f:0}];
a1.forEach(x => { return ________________; }); // add property b and f, if doesn’t exist on x, with value 'A'
console.log(a1) //should be [{a:1, b:'a',f:false}, {a:2, b:'b', f:’A’}, {a:3, c:'c', b:'A', f:0}];
Copy and modify below code in Chrome Console to verify the result
let b1 = [{a:1, b:'a'}, {a:2, b:'b'}, {a:3, c:'c'}];
let b2 = b1.map(x => x.a = x.a + 1); //will this change b1?
console.log(b1, b2);

// change the above code so that b1 should not changed, and b2 should be = [{a:2, b:'a'}, {a:3, b:'b'}, {a:4, c:'c'}];

Expand the example to have n number of children using children array object and implement *ngFor for ChildComponent.
