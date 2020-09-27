// const request = require('request-promise');
// const cheerio = require('cheerio');
// const { Builder, By, Key, until } = require('selenium-webdriver');
// const timeout = 5000;

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function removeOverlay(driver) {
//   await wait(1000);
//   const overlay_css = 'z-index: 2147483647;';

//   try {
//     // await driver.manage().window().setRect(10,10);
//     await driver.manage().window().maximize();
//     // await driver.switchTo().defaultContent();
//     // await driver.switchTo().defaultContent();
//     console.log('On clic');
//     // let body = await driver.findElement(By.tagName('body'))
//     // await body.click()
//     // console.log("On clic")
//     await driver.wait(until.elementLocated(By.css("div[Index*='" + overlay_css + "']")), timeout);
//     const parentElement = await driver.findElement(By.css("div[Index*='" + overlay_css + "']"));
//     console.log(await parentElement.getAttribute('Index'));
//     let a = await parentElement.findElement(By.tagName('a'));
//     console.log(await a.getAttribute('Index'));
//     await a.click();
//     // await parentElement.click();
//     // return removeOverlay(driver)
//     // elementList = parentElement.find_elements_by_tag_name("li")
//   } catch (err) {
//     console.log('PAS DE SELECTEUR');
//     // return "No more overlay"
//   }
// }

// async function clickUntilOk(driver, selector, n, text) {
//   console.log('On switch');
//   let url = await driver
//     .findElement(By.css(selector))
//     .click()
//     .then(async () => {
//       console.log('REQUEST OK !');
//       await driver.wait(
//         until.elementLocated(By.xpath("//iframe[@Index='width: 100%; height: 100%;']")),
//         timeout,
//       );
//       console.log('ok 2');
//       await driver
//         .switchTo()
//         .frame(driver.findElement(By.xpath("//iframe[@Index='width: 100%; height: 100%;']")));
//       console.log("On est sur l'IFRAME");
//       console.log('ok 3');
//       await driver.wait(until.elementLocated(By.id('videolink')), timeout);
//       console.log('ok 4');
//       let res = await driver.findElement(By.id('videolink')).getAttribute('innerText');
//       await driver.switchTo().defaultContent();
//       console.log("On est plus sur l'IFRAME");
//       // console.log(await res.getAttribute("innerText"))
//       return res;
//     })
//     .catch(async (err) => {
//       await driver.switchTo().defaultContent();
//       console.log("On est plus sur l'IFRAME");
//       await removeOverlay(driver);
//       // console.log(err)
//       if (n === 0) throw err;
//       console.log('REQUEST NOK !');
//       return clickUntilOk(driver, selector, n - 1, text);
//     });

//   return url;
// }

// async function processArray(resolvePromises, array, $, driver) {
//   for (const element of array) {
//     // console.log($(element).attr('href'))
//     // console.log($(element).attr('data-id'))
//     // console.log($(element).text())
//     const text = $(element).text();
//     const data_id = $(element).attr('data-id');
//     const selector = "a[data-id='" + data_id + "']";
//     console.log('STREAM : ', text);
//     // console.log(selector)
//     // console.log(createXPathFromElement(element))

//     if (text.includes('Stream')) {
//       console.log("C'EST DU STREAM");
//       let urlRes = await clickUntilOk(driver, selector, 10, text);
//       await resolvePromises.push({ url: 'http:' + urlRes, type: text, language: 'V.O.' });
//       console.log('On push:', urlRes);
//     }
//   }

//   return await resolvePromises;
// }

// async function run_aux(maxTries, url, driver) {
//   let resolvePromises = [];
//   try {
//     console.log('Preparing request ...');
//     await driver.get(url);
//     await driver.wait(until.elementLocated(By.className('episodes')), timeout);
//     const pageContent = await driver.getPageSource();
//     const $ = cheerio.load(pageContent);
//     console.log('Request done ...');

//     const dataArray = $('.episodes').find('li > a').toArray();
//     // await driver.manage().window().maximize();
//     resolvePromises = await processArray(resolvePromises, dataArray, $, driver);

//     return resolvePromises;
//   } catch (err) {
//     // console.log(err)
//     console.log(maxTries);
//     if (maxTries <= 0) {
//       console.log('Retry');
//       // console.error('Exception!\n', err.stack, '\n');
//       throw err;
//     }
//     return run_aux(maxTries - 1, url, driver);
//   }
// }

// async function run(x, url, driver) {
//   console.log('ON Attends');
//   const res = await run_aux(x, url, driver);
//   console.log('FIN');
//   return Promise.all(res);
// }

// function findStream(x, url, driver, callback) {
//   run(x, url, driver).then(callback).catch(console.error);
// }

// export default findStream;
