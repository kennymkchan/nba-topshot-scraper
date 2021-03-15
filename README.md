[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<p align="center">
  <h3 align="center">NBA Topshot Data Scraper</h3>

  <p align="center">
    Node script that will use Selenium to scrape card information from NBA Topshot including card names, rarity, and lowest cost at the moment.
    <br />
    <a href="https://github.com/kennymkchan/nba-topshop-scraper"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kennymkchan/nba-topshop-scraper">View Demo</a>
    ·
    <a href="https://github.com/kennymkchan/nba-topshop-scraper/issues">Report Bug</a>
    ·
    <a href="https://github.com/kennymkchan/nba-topshop-scraper/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

Node script that will use Selenium to scrape card information from [NBA Topshot](https://www.nbatopshot.com/) including card names, rarity, and lowest cost at the moment. This project is a fun way to keep track of the value of NBA moments from NBA Topshot. It relies on the marketplace being available, and the script basically scans all the items that is on the marketplace using selenium to do an infinite scroll + capturing all the data once infinite scroll is completed. At the moment, the script should not take more than 1 hour to run. Optimizations are always welcome.

Data is scraped once per day and updated onto this repo. This data can be found in the data folder and follows the naming convention: `topshot_data_${date in mmddyyyy format}`.

### Built With

* [Node](https://nodejs.org/en/)
* [Selenium](https://www.selenium.dev/)
* [Puppeteer](https://developers.google.com/web/tools/puppeteer)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kennymkchan/nba-topshop-scraper
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the script to start scraping
  ```sh
  node index.js
  ```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Kenny Chan - [@github](https://github.com/kennymkchan)

Project Link: [https://github.com/kennymkchan/nba-topshop-scraper](httpshttps://github.com/kennymkchan/nba-topshop-scraper)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kennymkchan/nba-topshop-scraper.svg?style=for-the-badge
[contributors-url]: https://github.com/kennymkchan/nba-topshop-scraper/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kennymkchan/nba-topshop-scraper.svg?style=for-the-badge
[forks-url]: https://github.com/kennymkchan/nba-topshop-scraper/network/members
[stars-shield]: https://img.shields.io/github/stars/kennymkchan/nba-topshop-scraper.svg?style=for-the-badge
[stars-url]: https://github.com/kennymkchan/nba-topshop-scraper/stargazers
[issues-shield]: https://img.shields.io/github/issues/kennymkchan/nba-topshop-scraper.svg?style=for-the-badge
[issues-url]: https://github.com/kennymkchan/nba-topshop-scraper/issues
[license-shield]: https://img.shields.io/github/license/kennymkchan/nba-topshop-scraper.svg?style=for-the-badge
[license-url]: https://github.com/kennymkchan/nba-topshop-scraper/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kennymchan
