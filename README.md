# authx-app
A simple auth-based profile app

## Outline of the Application

Create a basic login page where the user can login and if they don't have an account, they can register. 

User profile would consist of a Profile Picture, Username, Email and a Short Bio. 

Once logged in, Users can edit their profile i.e Updating their profile picture, Updating their bio (Using Rich Text Editor)

### Tech Stack Used

- Front End : Next.js (Using App-Router)
- Back End : Express.js 
- Database : MongoDB 

## Journal
### (03/02/25)
Let me start with the thing I'm most familiar with, which is the frontend. 
The requirement mentions nextjs which was confirmed to me to be like reactjs. While I'm only supposed to use the app routing… 
So using the nextjs documentation, I’ll just learn how to work this out. 
I created the app and while installing it gave me these prompts to which I answered Yes to only the things specified. 
After initializing the app, I should start with the other components of the stack and figure out how they lay in the workflow.

### (04/02/25)
So before I could get started, I studied through the first concept which is app routing. (https://www.freecodecamp.org/news/routing-in-nextjs/)

Next.js App routing system which finds folders under the app folders and shows content on the on the page file on each folder. 
Now using this logic, I can just route the login form to the registration form with ease. 

Next step involves; Connecting the forms to the mongodb database.
Although from what I have read in the next.js documentation, it has a native api handling, I would still look into express.js for the custom server management experience.

So far, I found a piece of code on the mongodb atlas page where it has the code for connection. I modified it a bit.
errno:-4048 and it turns out maybe the .env file was not loaded at all. Explained a bit more since I looked into the express.js documentation and videos, I needed dotenv, to load the file manually. 

After several tries, I was able to load the file and now the server runs perfectly. I am able to register and login but then I noticed something funny which was the fact that I can do directory traversal which makes the whole thing kinda pointless so now I will take care of the security.

After several tries with NextAuth.. And even storing the JWT token. I can’t seem to apply the security levels needed for this website.

### (05/02/25)
After a bit of research and looking at my logical structure, redefining the middleware, this forum post helped me a bit. (https://github.com/vercel/next.js/discussions/54840)

Now after figuring out cors and the way cookies work… I was able to implement basic security, I should probably add a logout button on the dashboard.

