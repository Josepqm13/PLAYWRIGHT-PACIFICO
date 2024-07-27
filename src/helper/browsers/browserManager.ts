import { chromium, firefox, webkit } from "@playwright/test";


const options = {
    headless: false,
    args: [
        "--ignore-certificate-errors"
    ],
    timeout: 120000,
    ignoredHTTPSErrors: true,
    acceptInsecureCerts: true

}

export const invokeBrowser = () => {
    const browserType = process.env.BROWSER || "";
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);    
        case "webkit":
            return webkit.launch(options);
        default:
            //return chromium.launch(options);
            throw new Error("Debe especificar el browser");        
    }
}