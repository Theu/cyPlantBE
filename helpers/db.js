import PouchDB from 'pouchdb';

let instanceOfDb;

export const getDB = () => {
    if(!instanceOfDb) {
        instanceOfDb = new PouchDB('newDB');
    }

    return instanceOfDb;
}