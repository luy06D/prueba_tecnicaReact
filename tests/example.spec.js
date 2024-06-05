// @ts-check
import { test, expect } from '@playwright/test';

// Url de la img para el test
const CAT_URL_iMAGE  = 'https://cataas.com/cat/says/'

// Indicamos la ruta del proyecto
const LOCALHOST_URL = 'http://localhost:5173/'
// Un nombre para el test
test('app shows random fact and image', async ({ page }) => {
  //Pasamos la ruta
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.locator('[data-testid="card-img"]');

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_URL_iMAGE)).toBeTruthy()

});


