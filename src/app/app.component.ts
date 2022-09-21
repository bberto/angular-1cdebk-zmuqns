import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <button kendoButton *ngIf="!opened" (click)="open()">Open dialog</button>
        <kendo-dialog title="Please confirm" *ngIf="opened" (close)="close('cancel')" [minWidth]="250" [width]="450">
            <p style="margin: 30px; text-align: center;">Are you sure you want to continue?</p>
            <kendo-dialog-actions>
                <button kendoButton (click)="close('no')">No</button>
                <button kendoButton (click)="close('yes')" themeColor="primary">Yes</button>
            </kendo-dialog-actions>
        </kendo-dialog>
        
        <ng-template #content let-modal>
            <div class="modal-header">
            <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
            <button type="button" class="btn-close" aria-label="Close" (click)="modal.dismiss('Cross click')"></button>
            </div>
            <div class="modal-body">
            <form>
                <div class="mb-3">
                <label for="dateOfBirth">Date of birth</label>
                <div class="input-group">
                    <input id="dateOfBirth" class="form-control" placeholder="yyyy-mm-dd" name="dp" ngbDatepicker #dp="ngbDatepicker">
                    <button class="btn btn-outline-secondary calendar" (click)="dp.toggle()" type="button"></button>
                </div>
                </div>
            </form>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
            </div>
        </ng-template>
      
      <button class="btn btn-lg btn-outline-primary" >Launch demo modal</button>
    `,
})
export class AppComponent {
  public opened = true;

  public close(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}
