import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
try {
 for(const url of ['http://127.0.0.1:4180/AI-Sovereignty-dashboard/','http://127.0.0.1:4181/']) {
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url);await page.getByText('Synthetic classroom data',{exact:true}).waitFor();
  assert.equal(await page.locator('tbody tr').count(),35);
  await page.locator('#privacyFilter').selectOption('Highly concerned');assert.equal(await page.locator('tbody tr').count(),7);
  assert.deepEqual(errors,[]);console.log('Static Pages layout passed:',url);await page.close();
 }
} finally {await browser.close();}
