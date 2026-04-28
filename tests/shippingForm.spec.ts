import { test, expect } from '@playwright/test';

test('Confirm Shipping สำเร็จ' , async ({ page }) => {
    await test.step('เข้าสู่หน้าเว็บไซต์' , async () => {
    await page.goto('https://ui-sandbox-omega.vercel.app');
  });

  await test.step('ไปหน้า Shipping Details' , async () => {
    await page.getByRole('link', { name: 'Shipping Form' }).click()
  });

  await test.step('กรอก First name เท่ากันกับ Somchai' , async () => {
    await page.getByTestId('shipping-form-first-name').fill('Somchai')
  });

  await test.step('กรอก Last name เท่ากันกับ Jaidee' , async () => {
    await page.getByTestId('shipping-form-last-name').fill('Jaidee')
  });

  await test.step('กรอก Phone เท่ากันกับ 089-654-2124' , async () => {
    await page.getByTestId('shipping-form-phone').fill('089-654-2124')
  });

  await test.step('กรอก Address เท่ากันกับ 43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63' , async () => {
    await page.getByTestId('shipping-form-address').fill('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
  });

  await test.step('เลือก Province เท่ากันกับ กรุงเทพมหานคร (Bangkok)' , async () => {
    await page.getByTestId('shipping-form-province-select').selectOption({label : 'กรุงเทพมหานคร (Bangkok)'})
  });

  await test.step('เลือก District เท่ากันกับ เขตวังทองหลาง (Khet Wang Thonglang)' , async () => {
    await page.getByTestId('shipping-form-district-select').selectOption({label : 'เขตวังทองหลาง (Khet Wang Thonglang)'})
  });

  await test.step('เลือก Subdistrict เท่ากันกับ วังทองหลาง (Wang Thonglang)' , async () => {
    await page.getByTestId('shipping-form-subdistrict-select').selectOption({label : 'วังทองหลาง (Wang Thonglang)'})
  });

  await test.step('กดปุ่ม Confirm Shipping' , async () => {
    await page.getByTestId('shipping-submit').click()
  });

  await test.step('ตรวจสอบ URL เท่ากันกับ /shipping/success' , async () => {
    await expect(page).toHaveURL('https://ui-sandbox-omega.vercel.app/shipping/success');
  });

  await test.step('ตรวจสอบ Heading เท่ากันกับ Shipping confirmed' , async () => {
    await expect(page.getByTestId('success-heading')).toHaveText('Shipping confirmed')
  });

  await test.step('ตรวจสอบ ชื่อ นามสกุล เท่ากันกับ Somchai Jaidee' , async () => {
    await expect(page.getByTestId('success-recipient')).toHaveText('Somchai Jaidee')
  });

  await test.step('ตรวจสอบ เบอร์โทร เท่ากันกับ 089-654-2124' , async () => {
    await expect(page.getByTestId('success-phone')).toHaveText('089-654-2124')
  });

  await test.step('ตรวจสอบ ที่อยู่ เท่ากันกับ 43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63' , async () => {
    await expect(page.getByTestId('success-address')).toHaveText('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
  });

  await test.step('ตรวจสอบ แขวง เท่ากันกับ วังทองหลาง (Wang Thonglang)' , async () => {
    await expect(page.getByTestId('success-subdistrict')).toHaveText('วังทองหลาง (Wang Thonglang)')
  });

  await test.step('ตรวจสอบ เขต เท่ากันกับ เขตวังทองหลาง (Khet Wang Thonglang)' , async () => {
    await expect(page.getByTestId('success-district')).toHaveText('เขตวังทองหลาง (Khet Wang Thonglang)')
  });

  await test.step('ตรวจสอบ จังหวัด เท่ากันกับ กรุงเทพมหานคร (Bangkok)' , async () => {
    await expect(page.getByTestId('success-province')).toHaveText('กรุงเทพมหานคร (Bangkok)')
  });

  await test.step('ตรวจสอบ รหัสไปรษณีย์ เท่ากันกับ 10310' , async () => {
    await expect(page.getByTestId('success-postal-code')).toHaveText('10310')
  });

});

test('Confirm Shipping ไม่สำเร็จ ไม่กรอก Shipping details ' , async ({ page }) => {
    await test.step('เข้าสู่หน้าเว็บไซต์' , async () => {
    await page.goto('https://ui-sandbox-omega.vercel.app');
  });

  await test.step('ไปหน้า Shipping Details' , async () => {
    await page.getByRole('link', { name: 'Shipping Form' }).click()
  });

  await test.step('กดปุ่ม Confirm Shipping' , async () => {
    await page.getByTestId('shipping-submit').click()
  });

  await test.step('ตรวจสอบ error ชื่อ เท่ากันกับ First name is required.' , async () => {
    await expect(page.getByTestId('shipping-form-first-name-error')).toHaveText('First name is required.')
  });

  await test.step('ตรวจสอบ error นามสกุล เท่ากันกับ Last name is required.' , async () => {
    await expect(page.getByTestId('shipping-form-last-name-error')).toHaveText('Last name is required.')
  });

  await test.step('ตรวจสอบ error เบอร์โทร เท่ากันกับ Phone number is required.' , async () => {
    await expect(page.getByTestId('shipping-form-phone-error')).toHaveText('Phone number is required.')
  });

  await test.step('ตรวจสอบ error ที่อยู่ เท่ากันกับ Address is required.' , async () => {
    await expect(page.getByTestId('shipping-form-address-error')).toHaveText('Address is required.')
  });

  await test.step('ตรวจสอบ error จังหวัด เท่ากันกับ Please select a province.' , async () => {
    await expect(page.getByTestId('shipping-form-province-error')).toHaveText('Please select a province.')
  });

  await test.step('ตรวจสอบ error เขต เท่ากันกับ Please select a district.' , async () => {
    await expect(page.getByTestId('shipping-form-district-error')).toHaveText('Please select a district.')
  });

  await test.step('ตรวจสอบ error แขวง เท่ากันกับ Please select a subdistrict.' , async () => {
    await expect(page.getByTestId('shipping-form-subdistrict-error')).toHaveText('Please select a subdistrict.')
  });

});