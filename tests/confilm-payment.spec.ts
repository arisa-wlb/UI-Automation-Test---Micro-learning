import { test, expect } from '@playwright/test';


test('กรอกข้อมูล Payment และ Confirm Payment สำเร็จ', async ({ page }) => {

    await test.step('เข้าสู่หน้าเว็บไซต์', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
      });
        
});