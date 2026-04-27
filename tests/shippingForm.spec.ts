import { test, expect } from '@playwright/test';

test('Confirm Shipping สำเร็จ' , async ({ page }) => {
    await test.step('เข้าสู่หน้าเว็บไซต์ และ ไปหน้า Shipping Details' , async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
        await page.getByRole('link', { name: 'Shipping Form' }).click()
    });

});