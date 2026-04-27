import { test, expect } from '@playwright/test';

test('Login สำเร็จ', async ({ page }) => {
      await test.step('เข้าสู่หน้าเว็บไซต์' , async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
      });

      await test.step('ไปที่หน้า Login' , async () => {
        await page.getByRole('link', { name: 'Login Form' }).click()
      });

      await test.step('กรอก Email เท่ากันกับ user@company.com และกรอก password เท่ากันกับ กรอก password  Test1234!' , async () => {
        const emailInput = page.getByTestId('email-input')
        await expect(emailInput).toBeVisible()
        await emailInput.fill('user@company.com')
        await page.getByTestId('password-input').fill('Test1234!')
      });
      
      await test.step('กดปุ่ม Enter' , async () => {
        await page.keyboard.press('Enter');
      });

      await test.step('ตรวจสอบ url และ ข้อความบนหน้าเว็บ' , async () => {
        await expect(page).toHaveURL('https://ui-sandbox-omega.vercel.app/login/success');
        await expect(page.getByTestId('success-heading')).toHaveText('Login successful')
        await expect(page.getByTestId('signin-user-message')).toHaveText('You have signed in as user@company.com')
      });
});
