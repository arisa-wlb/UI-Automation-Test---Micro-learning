import { test, expect } from '@playwright/test';
import path from 'path';

test('กรอกข้อมูล Payment และ Confirm Payment สำเร็จ', async ({ page }) => {

  await test.step('เข้าสู่หน้าเว็บไซต์', async () => {
    await page.goto('/');
  });

  await test.step('ไปหน้า Confirm Payment', async () => {        
    await page.getByRole('link', { name: 'Confirm Payment' }).click();      
  });

  await test.step('อัปโหลดรูปภาพ sample-slip.jpg', async () => {
    const imagePath = path.join(__dirname, '..', 'assets' , 'jpg' , 'sample-slip.jpg');
    await page.getByTestId('slip-file-input').setInputFiles(imagePath);
  });
        
  await test.step('ตรวจสอบรูปภาพ sample-slip.jpg preview ', async () => {
    await expect(page.getByTestId('slip-image-preview')).toBeVisible();
  });

  await test.step('ตรวจสอบปุ่ม Remove แสดงขึ้นมา', async () => {
    await expect(page.getByTestId('slip-remove')).toBeVisible();
  });

  await test.step('กรอก Order ID เท่ากันกับ 6117011612040', async () => {
    await page.getByTestId('order-id').fill('6117011612040');
  });
  
  await test.step('กรอก Amount เท่ากันกับ 10,000', async () => {
    await page.getByTestId('payment-amount').fill('10,000');
  });

  await test.step('กรอก Transaction Date เท่ากันกับ 2026-04-24', async () => {
    await page.getByTestId('transaction-date').fill('2026-04-24');
  });

});
