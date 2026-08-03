export async function login(page,username, password) {    

  await page.goto('https://smarterp-wgaw.onrender.com/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

}
export async function logout(page) {

    await page.getByRole('button', { name: 'Logout' }).click();
}