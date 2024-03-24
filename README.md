# codenetwork.co
Welcome to the Code Network (CN) public website Github repository. 

Code Network is a student-led organisation dedicated to
fostering a strong developer community for anyone interested
in code. We seek to develop our members’ skills through regular
talks, workshops, and Hackathons. We also offer networking
opportunities and social spaces for students to communicate,
collaborate and most importantly, build something awesome.

## Getting Started

### Installation
To get started first clone this repository to your local device and navigate into the `VITECN` folder. Then execute the following:

### If you are using NPM:
```
npm install
npm run dev
```

### If you are using Yarn:
```
yarn install
yarn run dev
```
## Changes to Events, CN Team and Sponsors
The key data and information for these pages is easily changed by accessing the `src/data/` directory and selecting the relevant JSON file and making the changes directly to that file, this information will then be read by the respective pages where necessary.

## Creating a new Page
The process for creating a new page has been simplified and an attempt to reduce boilerplate code has been made, further changes and improvements to this process may occur over time with feedback!

Create a new page in `src/pages/` with the `<Name>.jsx` format, include the following essentials and then you can add any further content.
```jsx
import Page from "../components/Page";
export default function PAGE_NAME_HERE() {
  return (
    <Page>
    {/* ALL YOUR PAGE CONTENT HERE */}
    </Page>
  )
}
```
### No border page
To remove the default Code Network green border add the `noborder` attribute to the `<Page>` element like this `<Page noborder>`

## Contribution Guidelines
In an attempt to develop some structure to the development lifecycle for this website, we ask the following when you contribute to this site. If you know a better way to structure the contributions for this site please reach out to us.

### Branching
We use a `master` < `dev` < `[feature]` branch structure, to implement a new feature please fork a branch from dev and then merge back into dev.

### Conventional Commits
For commits to the source code for this repository please try to use informative or helpful commit messages, even consider using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to enforce better commit messages.

## History

### Design Brief
The [codenetwork.co](https://codenetwork.co) website as you see it now was originally developed by Jim Chi and Nathan Wang. Further changes and continued work to the site has been made by the Code Network infrastructure and development team in 2024. 

The website follows the 2023 style guide created by Drayko Medlyn and Shreya Arora's edit on the 2023 sponsorship prospectus. This website aims to improve the interactive experience by limiting relatively expensive user interaction. i.e. click (occupational disease prevention for developers and gamers), and scrolling (because who has time to read). Hence we are promoting a "peak and seek" interaction through effects like hover, animation and more. Attempt to gamify an information site, which seeks to inform.

### Our Thanks
To all the past, current and future contributors, Code Network developers, members and community who have worked to make this site the best it can be, we extend our gratitude for the time given to work on this site. Thank you.