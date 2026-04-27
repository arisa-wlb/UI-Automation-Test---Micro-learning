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
    await test.step('กรอกข้อมูลส่วน Address และตรวจสอบ Postal code' , async () => {
        await page.getByTestId('shipping-form-address').fill('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
        await page.getByTestId('shipping-form-province-select').selectOption({label : 'กรุงเทพมหานคร (Bangkok)'})
        await page.getByTestId('shipping-form-district-select').selectOption({label : 'เขตวังทองหลาง (Khet Wang Thonglang)'})
        await page.getByTestId('shipping-form-subdistrict-select').selectOption({label : 'วังทองหลาง (Wang Thonglang)'})
    });
    await test.step('กดปุ่ม Confilm shiping' , async () => {
        await page.getByTestId('shipping-submit').click()
    });

});