import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public opened = false;

  constructor(private modalService: NgbModal) {}

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  openBt(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
