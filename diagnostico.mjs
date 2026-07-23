import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

page.on("console", (message) => {
  console.log("CONSOLA:", message.type(), message.text());
});

page.on("pageerror", (error) => {
  console.log("ERROR DE LA PÁGINA:", error.message);
});

page.on("requestfailed", (request) => {
  console.log(
    "ARCHIVO QUE NO CARGÓ:",
    request.url(),
    request.failure()?.errorText
  );
});

const response = await page.goto(
  "http://localhost:4173/qhapaq-nan-inmersivo/",
  {
    waitUntil: "networkidle",
  }
);

console.log("ESTADO HTTP:", response?.status());
console.log("TÍTULO:", await page.title());
console.log("TEXTO VISIBLE:", (await page.locator("body").innerText()).slice(0, 500));

await page.screenshot({
  path: "diagnostico.png",
  fullPage: true,
});

await browser.close();
