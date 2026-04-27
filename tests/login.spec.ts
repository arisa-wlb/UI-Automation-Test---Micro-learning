import { test, expect } from '@playwright/test';

test('Login สำเร็จ', async ({ page }) => {
      await test.step('เข้าสู่หน้าเว็บไซต์' , async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
      });

      await test.step('ไปที่หน้า Login' , async () => {
        await page.getByRole('link', { name: 'Login Form' }).click()
      });

      await test.step('กรอก Email เท่ากันกับ user@company.com และกรอก password เท่ากันกับ Test1234!' , async () => {
        const emailInput = page.getByTestId('email-input')
        await expect(emailInput).toBeVisible()
        await emailInput.fill('user@company.com')
        await page.getByTestId('password-input').fill('Test1234!')
      });
      
      await test.step('กดปุ่ม Enter' , async () => {
        await page.keyboard.press('Enter');
      });

      await test.step('ตรวจสอบ url และ ข้อความบนหน้าเว็บ' , async () => {
        await expect(page).toHaveURL('https://ui-sandbox-omega.vercel.app/login/success');
        await expect(page.getByTestId('success-heading')).toHaveText('Login successful')
        await expect(page.getByTestId('signin-user-message')).toHaveText('You have signed in as user@company.com')
      });
});

test('Login  ไม่สำเร็จ password ไม่ถูกต้อง' , async ({ page }) => {
      await test.step('เข้าสู่หน้าเว็บไซต์' , async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
      });

      await test.step('ไปที่หน้า Login' , async () => {
        await page.getByRole('link', { name: 'Login Form' }).click()
      });
      await test.step('กรอก Email เท่ากันกับ user@company.com และกรอก password เท่ากันกับ Test1234!!!!!!' , async () => {
        const emailInput = page.getByTestId('email-input')
        await expect(emailInput).toBeVisible()
        await emailInput.fill('user@company.com')
        await page.getByTestId('password-input').fill('Test1234!!!!!!')
      });

      await test.step('กดปุ่ม Login' , async () => {
        await page.getByTestId('login-btn').click()
      });

      await test.step('ตรวจสอบ popup และข้อความใน pop up' , async () => {
        const toast = page.getByTestId('toast-msg')
        await expect(toast).toBeVisible()
        await expect(toast).toHaveText('Invalid email or password. Please try again.')
      });
      
});

test('Login  ไม่สำเร็จ Email ไม่ถูกต้อง' , async ({ page }) => {
  await test.step('เข้าสู่หน้าเว็บไซต์' , async () => {
    await page.goto('https://ui-sandbox-omega.vercel.app');
  });

  await test.step('ไปที่หน้า Login' , async () => {
    await page.getByRole('link', { name: 'Login Form' }).click()
  });
  await test.step('กรอก Email เท่ากันกับ wronguser@company.com  และกรอก password เท่ากันกับ Test1234!' , async () => {
    const emailInput = page.getByTestId('email-input')
    await expect(emailInput).toBeVisible()
    await emailInput.fill('wronguser@company.com')
    await page.getByTestId('password-input').fill('Test1234!')
  });

  await test.step('กดปุ่ม Login' , async () => {
    await page.getByTestId('login-btn').click()
  });

  await test.step('ตรวจสอบ popup และข้อความใน pop up' , async () => {
    const toast = page.getByTestId('toast-msg')
    await expect(toast).toBeVisible()
    await expect(toast).toHaveText('Invalid email or password. Please try again.')
  });
  
});

test('Login  ไม่สำเร็จ ไม่กรอก Email และ Password ' , async ({ page }) => {
  await test.step('เข้าสู่หน้าเว็บไซต์' , async () => {
    await page.goto('https://ui-sandbox-omega.vercel.app');
  });

  await test.step('ไปที่หน้า Login' , async () => {
    await page.getByRole('link', { name: 'Login Form' }).click()
  });

  await test.step('กดปุ่ม Login' , async () => {
    await page.getByTestId('login-btn').click()
  });

  await test.step('ตรวจสอบ error ใต้ช่องกรอก Email และ Password' , async () => {
    await expect(page.getByTestId('email-error')).toHaveText('Please enter a valid email address.')
    await expect(page.getByTestId('password-error')).toHaveText('Password is required.')
  });
  
});