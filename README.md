Reddit Reader

Add developer OAuth2 credentials and Reddit API Access Token in App.js and you are ready to go.

Obtain a Reddit Auth token by running the following curl:

```
curl -X POST -A 'User agent' -d 'grant_type=password&username=ollynov14&password=myrealpassword' --user 'myclientid:myrealsecret' https://www.reddit.com/api/v1/access_token
```

As you can see in the command, you need the following:
- Username
- Password (normal github user password)
- ClientID
- User Agent (This is a string that you choose, just don't make it anything too generic)
- Secret

The ClientID and the Secret are obtained here: https://www.reddit.com/prefs/apps

---

Usage
---

Start the development server with this command:

```
npm start
```



Setup
---

```
npm install
```



Compile
---

```
npm run compile
```