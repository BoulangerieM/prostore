import { Component, OnDestroy, OnInit } from '@angular/core';
import { OrderListService } from '@app/admin/services/order-list.service';
import { Order } from '@models/order';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  public currentOrdersList: Order[] = [];
  constructor(private orderListService: OrderListService) {}

  ngOnInit(): void {
    this.orderListService
      .getAllCurentOrders()
      .pipe(
        tap((currentOrders) => {
          this.currentOrdersList = currentOrders;
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }
}