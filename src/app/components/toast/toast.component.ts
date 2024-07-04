import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ToastService } from 'src/app/service/util/toast.service';

import {
  faClose
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('toastTrigger', [
      state('open', style({ transform: 'translateY(0%)' })),
      state('close', style({ transform: 'translateY(-200%)' })),
      transition('open <=> close', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class ToastComponent implements OnInit {

  public toastClass!: string[];
  public toastMessage!: string;
  public showsToast!: boolean;
  public faClose = faClose;

  constructor(public _toast: ToastService) { }

  ngOnInit(): void {
  }

  public dismiss(): void {
    this._toast.dismissToast();
  }

}
