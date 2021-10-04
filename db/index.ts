import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db');

export interface SQLTransaction {
    
    
}

export const init = () => {
    return new Promise<void>((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS user (
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            )`,
            [],
            () => resolve(),
            (_, err): boolean | any => reject(err),
            )
        });
    });
}

export const userDetails = (name: string, email: string, password: string) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO user (name, email, password) VALUES (?, ?, ?)',
                [name, email, password],
                (_, result) => resolve(result),
                (_, error): boolean | any => reject(error),
            )
        })
    })
}

export const fetchUser = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM user',
                [],
                (_, result) => resolve(result),
                (_, error): boolean | any => reject(error),
            )
        })
    })
}