import { test, expect} from '@fixtures/init';
import { User } from '@helpers/constants/users';


test.describe('Login page test', () => {
    test.use({ storageState: { cookies: [], origins: [] } });

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate(process.env.BASE_URL);
    })
    
    test('Login - Happy flow', async ({ loginPage, homePage }) => {
        await loginPage.loginUser(User.TEST_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Problem user', async ({ loginPage, homePage }) => {
        await loginPage.loginUser(User.PROBLEM_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Performance glitch user', async ({ loginPage, homePage }) => {
        await loginPage.loginUser(User.PERFORMANCE_GLITCH_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Error user', async ({ loginPage, homePage }) => {
        await loginPage.loginUser(User.ERROR_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Visual user', async ({ loginPage, homePage }) => {
        await loginPage.loginUser(User.VISUAL_USER);
        expect(await homePage.getHomeTitleText())
            .toBe('Products');
    }); 

    test('Login - Locked out user', async ({ loginPage }) => {
        await loginPage.loginUser(User.LOCKED_OUT_USER);
        expect(await loginPage.getErrorMessageText())
            .toContain('Sorry, this user has been locked out.');
        
    });

    test('Login - Incorrect password', async ({ loginPage }) => {
        await loginPage.loginUser(User.BAD_PW_USER);
        expect(await loginPage.getErrorMessageText())
            .toContain(' Username and password do not match any user in this service')
    })
    
    
});
