import { test, expect } from "@playwright/test";

test('Tax Invoice 1 รายการ - แก้ไขราคาและจำนวน แล้ว Submit สำเร็จ', async ({page}) => {
   
await test.step('เข้าสู่หน้า Invoice', async () => {
  await page.goto('https://ui-sandbox-omega.vercel.app/invoice')
  });
   
  await test.step('เลือก Document type เท่ากันกับ Tax Invoice', async () => {
    await page.getByTestId('invoice-type-select').selectOption({label: 'Tax Invoice'})
  });
   
  await test.step('กรอก Item 1 Name เท่ากันกับ C-Level Consulting', async () => {
    await page.getByTestId('row-1-name').fill('C-Level Consulting')
  });
   
  await test.step('เลือก Item 1 Category เท่ากันกับ Consulting', async () => {
    await page.getByTestId('row-1-category').fill('Co')
    await page.getByRole('option', { name: 'Consulting' }).click()
  });
   
  await test.step('กรอก Item 1 Unit Price เท่ากันกับ 2000', async () => {
    await page.getByTestId('row-1-unit-price').fill('2000')
  });
   
  await test.step('กรอก Item 1 Qty เท่ากันกับ 4', async () => {
    await page.getByTestId('row-1-qty').clear()
    await page.getByTestId('row-1-qty').fill('4')
    await page.locator('body').click()
  });
   
  await test.step('ตรวจสอบ Item 1 Total Price เท่ากันกับ 8,000.00', async () => {
    await expect(page.getByTestId('row-1-total')).toHaveValue('8,000.00')
  });
   
  await test.step('แก้ไข Item 1 Unit Price เท่ากันกับ 6,500', async () => {
    await page.getByTestId('row-1-unit-price').clear()
    await page.getByTestId('row-1-unit-price').fill('6,500')
  });
   
  await test.step('แก้ไข Item 1 Qty เท่ากันกับ 1', async () => {
    await page.getByTestId('row-1-qty').clear()
    await page.getByTestId('row-1-qty').fill('1')
    await page.locator('body').click()
  });
   
  await test.step('ตรวจสอบ Item 1 Total Price เท่ากันกับ 6,500.00', async () => {
    await expect(page.getByTestId('row-1-total')).toHaveValue('6,500.00')
  });
   
  await test.step('ตรวจสอบ Subtotal เท่ากันกับ 6,500.00', async () => {
    await expect(page.getByTestId('summary-subtotal')).toHaveText('6,500.00')
  });
   
  await test.step('ตรวจสอบ VAT เท่ากันกับ 455.00', async () => {
    await expect(page.getByTestId('summary-vat')).toHaveText('455.00')
  });
   
  await test.step('ตรวจสอบ Grand Total เท่ากันกับ 6,955.00', async () => {
    await expect(page.getByTestId('summary-grand-total')).toHaveText('6,955.00')
  });
   
  await test.step('กดปุ่ม Submit', async () => {
    await page.getByTestId('submit-button').click()
  });
   
  await test.step('ตรวจสอบ URL เท่ากันกับ /invoice/success', async () => {
    await expect(page).toHaveURL('https://ui-sandbox-omega.vercel.app/invoice/success');
  });
   
  await test.step('ตรวจสอบ Heading เท่ากันกับ Submit Invoice Successful', async () => {
    await expect(page.getByTestId('success-heading')).toHaveText('Submit Invoice Successful')
  });
  
});
   