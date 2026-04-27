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

    await test.step('ตรวจสอบ URL และ ตรวจสอบ shipping details ที่หน้า Shipping confirmed' , async () => {
        await expect(page).toHaveURL('https://ui-sandbox-omega.vercel.app/shipping/success');
        await expect(page.getByTestId('success-heading')).toHaveText('Shipping confirmed')
        await expect(page.getByTestId('success-recipient')).toHaveText('Somchai Jaidee')
        await expect(page.getByTestId('success-phone')).toHaveText('089-654-2124')
        await expect(page.getByTestId('success-address')).toHaveText('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
        await expect(page.getByTestId('success-subdistrict')).toHaveText('วังทองหลาง (Wang Thonglang)')
        await expect(page.getByTestId('success-district')).toHaveText('เขตวังทองหลาง (Khet Wang Thonglang)')
        await expect(page.getByTestId('success-province')).toHaveText('กรุงเทพมหานคร (Bangkok)')
        await expect(page.getByTestId('success-postal-code')).toHaveText('10310')
    });

});