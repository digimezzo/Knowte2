import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { remote } from 'electron';
import { Constants } from '../../../core/constants';
import * as path from 'path';

@Component({
    selector: 'error-dialog',
    templateUrl: './errorDialog.component.html',
    styleUrls: ['./errorDialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
    }

    public onViewLogClick(): void {
        // See: https://stackoverflow.com/questions/30381450/open-external-file-with-electron
        remote.shell.openItem(remote.app.getPath("userData"));
    }
}