export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 200);
            }
        );
    }

    login(){
        this.loggedIn = true;
    }
}