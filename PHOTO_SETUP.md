# Adding Your Profile Photo

## Quick Setup Instructions

1. **Save your photo** as `profile-photo.jpg` in the `public/images/` folder
   - The photo should be square (1:1 aspect ratio) for best results
   - Recommended size: 400x400px or larger
   - Supported formats: JPG, PNG, WebP

2. **File location**: `public/images/profile-photo.jpg`

3. **The website will automatically**:
   - Display your photo in the Hero section (main landing)
   - Display your photo in the About section
   - Fall back to "RK" initials if the photo fails to load
   - Apply hover effects and styling

## Alternative Photo Names

If you want to use a different filename, update these files:

### Hero Section
File: `src/components/sections/Hero.jsx`
Line: `src="/images/profile-photo.jpg"`

### About Section  
File: `src/components/sections/About.jsx`
Line: `src="/images/profile-photo.jpg"`

## Photo Optimization Tips

- **Square crop**: Crop your photo to be square for the best circular display
- **Good lighting**: Ensure the photo is well-lit and clear
- **Professional look**: Use a clean background (the current photo you shared is perfect!)
- **File size**: Keep under 500KB for fast loading

## Current Setup

The website is already configured to use your photo. Simply:
1. Save the photo you shared as `profile-photo.jpg`
2. Place it in `public/images/profile-photo.jpg`
3. Refresh the website

The photo will automatically appear with:
- Circular cropping
- Hover zoom effect
- Gradient border
- Glowing animation
- Fallback to initials if needed
