import { test, expect } from '@playwright/test';
import path from 'path';

test('กรอกข้อมูล Payment และ Confirm Payment สำเร็จ', async ({ page }) => {

  await test.step('เข้าสู่หน้าเว็บไซต์', async () => {
    await page.goto('https://ui-sandbox-omega.vercel.app');
  });

  await test.step('ไปหน้า Confirm Payment', async () => {        
    await page.getByRole('link', { name: 'Confirm Payment' }).click();      
  });

  await test.step('อัปโหลดรูปภาพ sample-slip.jpg', async () => {
    const imagePath = path.join(__dirname, '..', 'assets' , 'jpg' , 'sample-slip.jpg');
    await page.getByTestId('slip-file-input').setInputFiles(imagePath);
  });
        
});
