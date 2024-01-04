import { test, expect } from '@playwright/test';
import { loginPage } from '../page/login'

test('first login', async ({ page }) => {
    
    const login = new loginPage(page)

    await login.gotologinPage()
    await login.login('tomsmith', 'SuperSecretPassword!')
     
    // await page.goto('https://the-internet.herokuapp.com/login')
    // //await page.click('name=username')
    // await page.getByLabel('Username').fill('tomsmith')
    // await page.getByLabel('Password').fill('SuperSecretPassword!')
    // await page.getByRole('button', { name:'login' }).click()
    // await page.pause()

});


