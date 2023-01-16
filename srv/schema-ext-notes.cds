using {notes as remoteNotes} from './external/notes.csn';

@path : 'external-notes'
service MyService {
    @readonly
    entity Notes as projection on remoteNotes.Notes {
        key ID : UUID,
        title: String(100),
        date: Date,
        text: String,
        completed: Boolean,
        type_ID: Integer
    };

    @readonly
    entity Type as projection on remoteNotes.Type {
        key ID: Integer,
        type: String(15)
    }
}
