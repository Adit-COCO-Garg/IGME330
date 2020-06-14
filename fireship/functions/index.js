const functions = require('firebase-functions');
const firebase = require("firebase-admin")
const express = require("express");
A
const cors = require("cors");



async function scrapeProduct(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.click("#app > main > section > div > div > div.login-actions-container > div > button");
    await page.waitFor("#username");
    await page.type("#username", "----");
    await page.click("#continue-button");
    await page.waitFor("#password");
    await page.type("#password", "----");
    await page.click("#signinbutton");
    await page.goto("https://quantum-computing.ibm.com/composer/621e24d1a77c7fe24347e4852e3fdfe4")
    await page.waitFor("#app > main > section > div > div > div:nth-child(1) > div:nth-child(1) > div > div.tool-header > div > div.actions > div.experiment-actions > button");
    await page.click("#app > main > section > div > div > div:nth-child(1) > div:nth-child(1) > div > div.tool-header > div > div.actions > div.experiment-actions > button");
    await setTimeout(async () => {
        await page.click("#app > main > section > div > div > div:nth-child(1) > div:nth-child(1) > div.run-modal.duo--Theme__light-white0.duo--Modal.duo--Modal--open > div > div > div.duo--Modal__container__footer > button.duo--Theme__light-gray10.duo--Theme--component__nested.duo--Button.duo--Button--fluid.duo--Button--primary")
    }, 3000);
    await setTimeout(async () => {
        await page.click("#app > main > section > div > div > div:nth-child(1) > div:nth-child(1) > div > div.tool-body > div.composer-queue-container > div.composer-results > ul > li:nth-child(1)");
        await page.waitForNavigation();
        await page.waitFor("#app > main > section > div > div > div:nth-child(1) > div.result-details > div:nth-child(4) > div > div > div > div:nth-child(2) > svg > g:nth-child(2) > g.series > g:nth-child(3) > text");
        let text = await page.evaluate(() => document.querySelector("#app > main > section > div > div > div:nth-child(1) > div.result-details > div:nth-child(4) > div > div > div > div:nth-child(2) > svg > g:nth-child(2) > g.series > g:nth-child(3) > text").innerHTML)
        console.log(text);
        return text;
    }, 20000);
}

exports.app = functions.https.onRequest((request, response)=>{
    scrapeProduct(`https://quantum-computing.ibm.com/`)
    .then(
        text => response.send(text)
    )
    .catch(
        error => response.status(500).send(error)
    )
    
})