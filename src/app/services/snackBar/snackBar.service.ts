import { Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { TranslatorService } from "../translator/translator.service";

@Injectable({
    providedIn: 'root',
})
export class SnackBarService {
    constructor(private zone: NgZone, private translator: TranslatorService, private matSnackBar: MatSnackBar) {
    }

    public async duplicateCollectionAsync(collection: string): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.DuplicateCollection', { collection: collection });
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async duplicateNotebookAsync(notebookName: string): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.DuplicateNotebook', { notebookName: notebookName });
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async noteTitleCannotBeEmptyAsync(): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.NoteTitleCannotBeEmpty');
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async closeNoteBeforeChangingCollectionsAsync(): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.CloseNoteBeforeChangingCollections');
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async noteExportedAsync(noteTitle: string): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.NoteExported', { noteTitle: noteTitle });
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async noteMovedToNotebookAsync(notebookName: string): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.NoteMovedToNotebook', { notebookName: notebookName });
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async notesMovedToNotebookAsync(notebookName: string): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.NotesMovedToNotebook', { notebookName: notebookName });
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async notesImportedIntoNotebookAsync(notebookName: string): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.NotesImportedIntoNotebook', { notebookName: notebookName });
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async notesImportedAsync(): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.NotesImported');
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    public async noNoteFilesToImportAsync(): Promise<void> {
        let message: string = await this.translator.getAsync('SnackBarMessages.NoNoteFilesToImport');
        let action: string = await this.translator.getAsync('SnackBarActions.Ok');
        this.showActionSnackBar(message, action);
    }

    private showActionLessSnackBar(message: string) {
        this.zone.run(() => {
            this.matSnackBar.open(message, '', { duration: this.calculateDuration(message) });
        });
    }

    private showActionSnackBar(message: string, action: string) {
        this.zone.run(() => {
            this.matSnackBar.open(message, action, { duration: this.calculateDuration(message) });
        });
    }

    private calculateDuration(message: string): number {
        // See: https://ux.stackexchange.com/questions/11203/how-long-should-a-temporary-notification-toast-appear
        // We assume a safe reading speed of 150 words per minute and an average of 5.8 characters per word in the English language.
        // Then, approx. 1 character is read every 70 milliseconds. Adding a margin of 5 milliseconds, gives us 75 ms.
        return Math.min(Math.max(message.length * 75, 2000), 7000);
    }
}