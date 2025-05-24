# Marriage Proposal Website 💍

A beautiful, animated marriage proposal website built with Next.js, featuring flower animations, confetti effects, and email response tracking.

## Features

- Beautiful animated flower effects
- Confetti celebration when accepting the proposal
- Email response form using EmailJS
- Responsive design
- Easy deployment to Vercel

## Setup

1. Clone this repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up EmailJS:

   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Get your Service ID, Template ID, and Public Key
   - Update the credentials in `app/components/ResponseForm.tsx`

4. Customize the proposal:
   - Update the name in `app/page.tsx`
   - Customize the colors and animations as desired
   - Modify the email template in EmailJS

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Confetti

## Customization

- Update the name in `app/page.tsx`
- Modify colors in the Tailwind classes
- Adjust animations in `app/components/FlowerAnimation.tsx`
- Customize the email template in EmailJS

## License

MIT
