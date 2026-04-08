# Firebase Setup Guide for Stick Talk

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Project name: `Stick Talk`
4. Accept the terms and click "Continue"
5. Disable Google Analytics (optional) and click "Create project"
6. Wait for the project to be created

## Step 2: Set Up Authentication

1. In Firebase Console, go to **Authentication** (left sidebar)
2. Click **Get Started**
3. Select **Email/Password** as the sign-in method
4. Enable it and click **Save**
5. Go to **Users** tab and click **Add User**
6. Create two test accounts:
   - Email: `puckfessor@sticktalk.com` | Password: `password123`
   - Email: `strokologist@sticktalk.com` | Password: `password123`

## Step 3: Set Up Firestore Database

1. Go to **Firestore Database** (left sidebar)
2. Click **Create database**
3. Select **Start in test mode** (for development)
4. Choose a location (closest to you)
5. Click **Create**

## Step 4: Set Up Cloud Storage

1. Go to **Storage** (left sidebar)
2. Click **Get Started**
3. Accept the rules (test mode is fine for development)
4. Click **Done**

## Step 5: Get Your Firebase Config

1. Go to **Project Settings** (gear icon, top right)
2. Click on your app under "Your apps" (or create one if needed)
3. Copy the Firebase config object that looks like:
```javascript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

## Step 6: Update firebase-config.js

1. Open `firebase-config.js` in your project
2. Replace `YOUR_API_KEY`, `your-project.firebaseapp.com`, etc. with your actual Firebase config values

## Step 7: Deploy to Firebase Hosting (Optional)

To make your site live:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. In your project directory, run: `firebase login`
3. Run: `firebase init hosting`
4. Select your project
5. Set public directory to `sticktalk`
6. Deploy with: `firebase deploy`

## Step 8: Test the System

1. Open `login.html` in your browser
2. Log in with:
   - Email: `puckfessor@sticktalk.com`
   - Password: `password123`
3. Upload an article with a Word document
4. The article will appear on the appropriate page

## How It Works

### Login System
- Two user accounts (Puckfessor & Strokologist)
- Each user logs into their admin dashboard
- Email contains their name for automatic categorization

### Article Upload
1. User logs in to admin dashboard
2. Fills in: Title, Description, and selects their category
3. Uploads a Word document (.doc or .docx)
4. File is stored in Firebase Storage
5. Article metadata is saved to Firestore

### Article Display
- Articles are automatically fetched from Firestore
- Displayed on the appropriate category pages
- Users can download the original Word document
- Admin users can edit/delete their own articles

## File Structure

```
sticktalk/
├── index.html (home page)
├── login.html (admin login)
├── admin-dashboard.html (upload & manage articles)
├── firebase-config.js (Firebase credentials)
├── articles/
│   ├── puckfessor-articles.html
│   ├── strokologist-articles.html
│   └── ...
└── assets/
```

## Firestore Collections Structure

**articles** collection:
```json
{
  "title": "Article Title",
  "description": "Article description",
  "category": "puckfessor|strokologist|about",
  "fileUrl": "https://...",
  "fileName": "document.docx",
  "author": "puckfessor@sticktalk.com",
  "authorType": "puckfessor|strokologist|admin",
  "createdAt": Timestamp,
  "updatedAt": Timestamp
}
```

## Next Steps

1. Set up Firebase as described above
2. Update `firebase-config.js` with your credentials
3. Update the article pages to fetch and display articles from Firestore
4. Add styling for dynamically loaded articles
5. Consider adding features like:
   - Edit articles
   - Article search
   - Comments
   - Share functionality

## Troubleshooting

**Articles not showing?**
- Check browser console for errors
- Verify Firebase credentials in `firebase-config.js`
- Ensure Firestore rules allow reading

**Upload fails?**
- Check file size (Firebase has limits)
- Ensure .doc or .docx format
- Check browser console for specific error

**Login not working?**
- Clear browser cache
- Check Firebase Authentication is enabled
- Verify user accounts exist in Firebase Console
