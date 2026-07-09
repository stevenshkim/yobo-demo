import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setConcurrency(null);

// This managed environment blocks Remotion's Chrome Headless Shell download host,
// but ships a Chromium at PLAYWRIGHT_BROWSERS_PATH. Point Remotion at it when
// present so renders work without egress. On a normal machine this env var is
// unset and Remotion falls back to its own managed browser.
const pwBrowsers = process.env.PLAYWRIGHT_BROWSERS_PATH;
if (pwBrowsers) {
  // Use the headless-shell build (the standalone old-headless implementation
  // Remotion expects); the full chrome binary rejects Remotion's headless flags.
  Config.setBrowserExecutable(
    `${pwBrowsers}/chromium_headless_shell-1194/chrome-linux/headless_shell`,
  );
}
