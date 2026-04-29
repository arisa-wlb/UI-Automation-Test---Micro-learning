import { test, expect } from '@playwright/test';
import path from 'path';

test('กรอกข้อมูล Payment แนบ slip ด้วยนามสุกลไฟล์ .jpg และ Confirm Payment สำเร็จ', async ({ page }) => {

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

  await test.step('กรอก Transaction Time เท่ากันกับ 1510', async () => {
    await page.getByTestId('transaction-time').fill('1510');
  });

  await test.step('กดปุ่ม Confirm Payment', async () => {
    await page.getByTestId('payment-submit').click();
  });

  await test.step('ตรวจสอบ URL เท่ากันกับ /payment/success', async () => {
    await expect(page).toHaveURL('https://ui-sandbox-omega.vercel.app/payment/success');
  });

  await test.step('ตรวจสอบรูปภาพ Slip Preview แสดงขึ้นมา', async () => {
    await expect(page.getByTestId('success-slip-preview')).toBeVisible();
  });

  await test.step('ตรวจสอบ Order ID เท่ากันกับ 6117011612040', async () => {
    await expect(page.getByTestId('success-order-id')).toHaveText('6117011612040');
  });

  await test.step('ตรวจสอบ Amount เท่ากันกับ ฿ 10,000.00', async () => {
    await expect(page.getByTestId('success-amount')).toHaveText('฿ 10,000.00');
  });
  
  await test.step('ตรวจสอบ Date เท่ากันกับ 24/04/2026', async () => {
    await expect(page.getByTestId('success-date')).toHaveText('24/04/2026');
  });
  
  await test.step('ตรวจสอบ Time เท่ากันกับ 15:10', async () => {
    await expect(page.getByTestId('success-time')).toHaveText('15:10');
  });
  
  await test.step('ตรวจสอบ Filename เท่ากันกับ sample-slip.jpg', async () => {
    await expect(page.getByTestId('success-filename')).toHaveText('sample-slip.jpg');
  }); 

});



