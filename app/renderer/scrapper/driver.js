const chromedriver = require('chromedriver');
const selenium = require('selenium-webdriver');
const command = require('selenium-webdriver/lib/command');
const chrome = require('selenium-webdriver/chrome');

const newDriver = () => {
  const chromeOptions = new chrome.Options()
    .addArguments('--no-sandbox', '--headless', '--start-maximized', '--ignore-certificate-errors')
    // .addArguments( '--no-sandbox', '--start-maximized', '--ignore-certificate-errors' )
    .setUserPreferences({
      'profile.default_content_settings.popups': 0, // disable download file dialog
      'download.default_directory': '/tmp/downloads', // default file download location
      'download.prompt_for_download': false,
      'download.directory_upgrade': true,
      'safebrowsing.enabled': false,
      'plugins.always_open_pdf_externally': true,
      'plugins.plugins_disabled': ['Chrome PDF Viewer'],
    })
    .windowSize({ width: 50, height: 50 });

  const driver = new selenium.Builder()
    .withCapabilities({
      browserName: 'chrome',
      javascriptEnabled: true,
      acceptSslCerts: true,
      path: chromedriver.path,
    })
    .setChromeOptions(chromeOptions)
    .build();

  // driver.manage().window().maximize();

  // driver.getSession().then((session) => {
  //   const cmd = new command.Command('SEND_COMMAND')
  //     .setParameter('cmd', 'Page.setDownloadBehavior')
  //     .setParameter('params', {
  //       behavior: 'allow',
  //       downloadPath: '/tmp/downloads',
  //     });
  //   driver
  //     .getExecutor()
  //     .defineCommand('SEND_COMMAND', 'POST', `/session/${session.getId()}/chromium/send_command`);
  //   return driver.execute(cmd);
  // });

  return driver;
};

export default newDriver;
