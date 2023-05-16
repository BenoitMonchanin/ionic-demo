import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Page1Page } from './pages/page1/page1.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent {

  public rootPage = Page1Page;

}
