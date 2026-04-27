import { test, expect } from '@playwright/test';

test('Confirm Shipping สำเร็จ' , async ({ page }) => {
    await test.step('เข้าสู่หน้าเว็บไซต์ และ ไปหน้า Shipping Details' , async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
        await page.getByRole('link', { name: 'Shipping Form' }).click()
    });
    await test.step('กรอกข้อมูลส่วน Recipient' , async () => {
        await page.getByTestId('shipping-form-first-name').fill('Somchai')
        await page.getByTestId('shipping-form-last-name').fill('Jaidee')
        await page.getByTestId('shipping-form-phone').fill('089-654-2124')
    });

});