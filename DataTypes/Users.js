//@js-check
var User =(function(){
    var userName;
    var password = Symbol('password');
    var isConnected;

    function User(username, pass) {
        this.userName = username;
        this[password] = pass;
        this.isConnected = false;
    };

    User.prototype.getPassword=function() {
        return this[password];
    };
    return User;
}());

var UsersManager=(function() {
    function UsersManager(users) {
        this.users = users;
    };
    UsersManager.prototype.addNewUser=function(userName, password) {
        var userNames = this.users.filter(user=>user.userName === userName);
        if (!userNames.lenght) {
            var newUser = new User(userName,password);
            this.users.push(newUser);
            console.log(`the user ${userName} created!`)
            return;
        }
        else{
            console.log(`The user name ${userName} all ready exist`);
            return;
        }

    };
    UsersManager.prototype.connect = function(userName, password) {
        var user = this.users.filter(u =>u.userName === userName);
        if (!user.lenght){
            console.log(`the user name doesnt exist`);
            return;
        }
        if(!user[0].getPassword() === password){
            console.log(`the password is incorrect try again`);
            return;
        }
        var indexOfUser = this.users.indexOf(user[0]);
        this.users[indexOfUser].isConnected = true;
        console.log(`the user ${userName} is connected`);

    };

    UsersManager.prototype.isConnected = function(userName){
        var user = this.users.filter(u=>u.userName === userName);
        if (!user.lenght) {
            console.log(`the user does not exist`);
            return;
        }
        return user[0].isConnected;
    };

    UsersManager.prototype.disconnectUser = function(userName) {
        var user = this.users.filter(u=>u.userName === userName);
        if(!user.lenght){
            console.log(`the user does not exist`);
            return;
        }
        if(!user[0].isConnected){
            console.log(`the user is allredy disconected`);
            return;
        }
        user[0].isConnected = false;
        console.log(`the user is now disconnected`);
    };

    return UsersManager;

}());