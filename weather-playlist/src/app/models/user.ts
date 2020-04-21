export class User {

    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;

    constructor(userObj) {
        this.uid = userObj.uid;
        this.email = userObj.email;
        this.photoURL = userObj.photoURL;
        this.displayName = userObj.displayName;
    }
}
