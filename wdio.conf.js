const { error } = require("console");

const type = process.env.TYPE || 'native';
const isNative = () => type == 'native';
const isWeb = () => type == 'web';

const webAppiumConfig = {
    browserName: 'chrome',
};

const nativeAppiumConfig = {
    'appium:appPackage': 'com.google.android.youtube',
    'appium:appActivity': 'com.google.android.youtube.HomeActivity',
};

let appiumCapabilities = {
    platformName: 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel (2)', 
    'appium:automationName': 'UiAutomator2',
};

if (isNative()) {
    appiumCapabilities = {
        ...appiumCapabilities,
        ...nativeAppiumConfig,
    }
} else if (isWeb()) {
    appiumCapabilities = {
        ...appiumCapabilities,
        ...webAppiumConfig,
    }
} else throw error('Incorrect test type! Provide correct environment variable TYPE: native or web.');

const spec = isNative() 
    ? './src/features/open-native-app.feature' 
    : './src/features/open-website-in-mobile.feature';

exports.config = {
    runner: 'local',
    specs: [ spec ],
    hostname: 'localhost',
    port: 4723,
    exclude: [ ],
    maxInstances: 10,
    capabilities: [{
        ...appiumCapabilities,
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: [
            './src/step-definitions/**/*.ts'
        ],
        backtrace: true,
        failFast: false,
        strict: true,
        timeout: 60000,
    },
    services: [
        ['appium', {
            command: 'appium',
            args: {
                allowInsecure: 'chromedriver_autodownload',
            }
        }]
    ],
};
