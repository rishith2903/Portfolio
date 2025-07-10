# Adding Your Resume PDF

## 📄 Quick Setup Guide

### Step 1: Prepare Your Resume
1. **Export your resume as PDF** from Word/Google Docs/LaTeX
2. **Name the file**: `resume.pdf`
3. **Keep file size under 2MB** for fast loading

### Step 2: Add to Project
**Place your PDF here:**
```
portfolio-website/
├── public/
│   ├── images/
│   │   └── profile-photo.jpg
│   └── resume.pdf  ← Put your PDF here
├── src/
└── ...
```

### Step 3: Test the Buttons
After adding your PDF, the website will have two buttons:

1. **📥 Download PDF** - Downloads the file directly
2. **👁️ View Online** - Opens PDF in new browser tab

## ✅ What's Already Set Up

The resume section now includes:
- **Automatic download** with your name in filename
- **View online** option for quick preview
- **Professional styling** with hover effects
- **Mobile responsive** button layout
- **Error handling** if PDF is missing

## 🔧 Customization Options

### Change PDF Filename
Edit `src/components/sections/Resume.jsx`:
```javascript
link.href = '/your-resume-name.pdf';  // Change this
link.download = 'Your_Name_Resume.pdf';  // And this
```

### Change Button Text
Edit the button labels in the same file:
```javascript
<span>Download PDF</span>  // Change this
<span>View Online</span>   // And this
```

## 📱 Features

- **Two-button layout**: Download and View options
- **Responsive design**: Stacks vertically on mobile
- **Professional styling**: Matches your portfolio theme
- **Fast loading**: Optimized for web delivery
- **Cross-browser**: Works on all modern browsers

## 🚀 Ready to Use

Once you add `resume.pdf` to the `public/` folder:
1. The download button will work immediately
2. The view button will open your PDF in browser
3. Both buttons will have smooth animations
4. Mobile users get an optimized layout

**Your resume section is now fully functional!** 📄✨
