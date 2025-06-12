# Every Court Advantage 🏀

🔗 [Vercel Deployment](https://nba-scout-web-client.vercel.app/)

Hello! This Web Application enables the user to explore basic basketball box score data. This is a project to help me hone my skills in creating a Data and Visualization focused application. The secondary goal is to explore the tech stack of a specific organization that I'm interested in working for. This swayed some decisions to favor:

1. The company's stack
2. Development Speed
   - I applied to the role after creating a Vite app with a single MaterialUI Selector component with mock data. So completing as much as possible before someone viewed my application was important.
3. What would a realistic situation look like
   - Readily available (if unstructured) Data. I shouldn't be trying to0 hard to acquire data. I shouldn't dust off my web scraping hat to get live or hard to find data if APIs or datasets aren't available (at least for now).
   - Think Large. Just because my data is small and I could use csv files or SQLite doesn't mean they would be realistic solutions in a enterprise solution.

## Technologies

- Vite
- React
- TypeScript
- MaterialUI
- Storybook.js
- Python
- FastAPI
- SQLAlchemy
- Pandas
- SQL
- Postgres Database hosted on AWS
- Alembic for Database migrations

## Accomplished

Found a dataset for box scores from the 1996-1997 through 2023-2024 seasons on [Kaggle](https://www.kaggle.com/datasets/szymonjwiak/nba-traditional) and populated a AWS Postgres DB with the data manipulated using Pandas to fit a more relational schema.

This will do for now as I create visualizations using basic box scores. Though I would like to ingest more up to date info and create some less common stats like lineup specific metrics.

The backend, written in Python, uses FastAPI and SQLAlchemy to access my database to send box score data via APIS.

A Frontend Client created with Vite written in TypeScript. Uses React and MaterialUI to fetch the box score data and display stats in MUI-X charts (let it be known I have not enjoyed attempting to customize these). All encased in a simple and responsive UI.

## Some Considerations

**Vercel Deployment**
I looked into a number of hosting methods and I strongly considered deploying in AWS. It probably would have ended up involving Amplify to host the client and an EC2 instance for the backend. But the setup seemed more intensive than Vercel. And I've had experience deploying static sites on Vercel so with the emphasis on speed I decided not to try learning to deploy using two unfamiliar AWS services that could potentially trip me up for a full day.

**Backend Tests**
I want my backend tested. However, all my functions rely on the DB. I considered and researched how I wanted to handle that and it would likely include spinning up a test/dev Postgres instance locally or cloud host. Having never gone the local route I would err towards a second DB on AWS. But considering I have so few routes (and they all result in DB reads) and I can manually test them with FastAPIs docs this felt less urgent to me.

## What's Next

- Storybook.js
  I did some research through the docs, some articles and some videos and I added Storybook.js to the project. And I haven't done anything with it since. So adding some stories about the components I currently have is one of my next steps.
- Frontend Tests
  I kept seeing that Storybook could be used to conduct testing on components. So I've waited to add tests (admittedly I'm not the quickest to add tests anyways) until I start creating stories and can see if this testing is comprehensive enough to replace unit tests in Jest.
- Intermittent Speed Issues. Hits to the Server (or DB) are sometimes very slow. Range is around 100ms to 20s. Look into fixing this and adding a loading display.
- A Visualization Features
  - A season selector to see/compare across seasons
  - Compare two teams
  - See if MUI-X charts can be configured to highlight points across charts, so that when a game is clicked in a scatter plot it is highlighted in every chart that is currently displaying individual games. Also show a table displaying the actual box score from that game.
  - Some vizs showing Home vs Away, turnaround time
  - Vizs showing individual player stats
  - Explore whether individual teams have certain stats that affect winning more that the rest of the league (Probably like Boston's 3P%)
  - Past that I would like to compile play-by-play data to analyze lineups and rotations.
