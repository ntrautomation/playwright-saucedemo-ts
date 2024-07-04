/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
class Users {
    
    //USERS
    static readonly TEST_USER: IUser = {
        userName: process.env.USER_NAME,
        password: process.env.PASSWORD
    }

    public static readonly LOCKED_OUT_USER: IUser = {
        userName: process.env.LOCKED_OUT_USER,
        password: process.env.PASSWORD
    }

    public static readonly PROBLEM_USER: IUser = {
        userName: process.env.PROBLEM_USER,
        password: process.env.PASSWORD
    }

    public static readonly PERFORMANCE_GLITCH_USER: IUser = {
        userName: process.env.PERFORMANCE_GLITCH_USER,
        password: process.env.PASSWORD
    }

    public static readonly ERROR_USER: IUser = {
        userName: process.env.ERROR_USER,
        password: process.env.PASSWORD
    }

    public static readonly VISUAL_USER: IUser = {
        userName: process.env.VISUAL_USER,
        password: process.env.PASSWORD
    }
}