import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day31workshop';

  cartList: { name: string; quantity: number }[] = [];

  selectItem(event: string) {
    if (this.cartList.length == 0) {
      this.cartList.push({ name: event, quantity: 1 });
    } else {
      let obj = this.cartList.find((o) => o.name === event);
      let index = this.cartList.indexOf(obj, 0);

      if (index >= 0) {
        this.cartList[index].quantity++;
      } else {
        this.cartList.push({ name: event, quantity: 1 });
      }
    }

    for (var item of this.cartList) {
      console.log('cart item: ' + JSON.stringify(item));
    }
  }

  deleteItem(event: any) {
    console.log(JSON.stringify(event));
    let obj = this.cartList.find((o) => o.name === event);
    let index = this.cartList.indexOf(obj, 0);
    if (this.cartList[index].quantity == 1){
      this.cartList.splice(index, 1);
    } else {
      this.cartList[index].quantity--;
    }

  }
}
