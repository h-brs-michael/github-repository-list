import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    CardModule,
    ListboxModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    AvatarModule,
    InputTextModule,
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MenubarModule,
    CardModule,
    ListboxModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    AvatarModule,
    InputTextModule
  ],
})
export class PrimeNgModule {
}
