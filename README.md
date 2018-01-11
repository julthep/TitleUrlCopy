# UrlTitleCopy
UrlTitleCopy::Add-ons for Firefox
https://addons.mozilla.org/ja/firefox/addon/titleurlcopy/  

When you press command + c (mac) or ctrl + c (win) with no character selected, save the site URL and title on the clipboard.

# Application example

<img src="https://addons.cdn.mozilla.net/user-media/previews/full/192/192565.png?modified=1511440741" alt="A character is not selected" width="500px">

If you press ctrl + c with no character selected as above, the URL and title are saved on the clipboard.
When you paste saved on clipboard, it is displayed in the following format.

<img src="https://addons.cdn.mozilla.net/user-media/previews/full/192/192566.png?modified=1511440741" alt="URL and Title obtained" width="500px">

# Options

1. **Title before URL**
   * _Check_ - Title then URL
   * _Uncheck_ - URL then Title

2. **Copy only first one**
   * _Check_ - Copy only URL or Title
   * _Uncheck_ - Copy both URL and Title

3. **Break line in-between**
   * _Check_ - Separate them with new line
   * _Uncheck_ - Separate them with space

4. **Clean URL query string**
   * _Check_ - Clean URL query string to include only selected parameters: (Google search) q, tbm (YouTube video) v
   * _Uncheck_ - Do not clean URL query string

5. **Use Canonical URL if any**
   * _Check_ - Use Canonical URL if any
   * _Uncheck_ - Do not use Canonical URL

6. **Decode URL**
   * _Check_ - Decode URL
   * _Uncheck_ - Do not decode URL

# Revision History

* **v1.1.7** _2017/01/11_ Add Clean URL query string option.
* **v1.1.6** _2017/01/09_ Add Swap URL and Title option.
* **v1.1.5** _2017/01/08_ Add Options Page with URL only option and line break option.
* **v1.1.4** _2017/01/07_ Add Canonical URL feature.
* **v1.1.3** _2017/01/07_ First fork from original TitleUrlCopy v1.1.2. Swap Title and URL, rename to UrlTitleCopy. Add Decode URL feature.
