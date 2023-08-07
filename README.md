# Arya AI
['Arya | AI]()
Arya AI is an AI-powered application that can generate conversations, images, and code snippets. This project is built using TypeScript, Next.js, and Clerk for handling user authentication.

## Features

- Generate Conversations: Arya AI can simulate conversations based on provided prompts.
- Generate Images: Arya AI can create images based on certain criteria.
- Generate Code Snippets: Arya AI can generate code snippets for different programming languages.
- User Authentication: Implemented user authentication using Clerk for secure login and signup.

## Technologies Used

- TypeScript
- Next.js
- Clerk (for authentication)

## Setup

1. Clone the repository: `git clone https://github.com/yourusername/arya-ai.git`
2. Install dependencies: `npm install`
3. Create a `.env.local` file in the project root and add your Clerk API keys:
 NEXT_PUBLIC_CLERK_FRONTEND_API_KEY=your_frontend_api_key
 NEXT_PUBLIC_CLERK_API_URL=https://api.clerk.yourdomain.com

4. Run the development server: `npm run dev`
5. Open `http://localhost:3000` in your browser.

## Usage

Arya AI provides an intuitive interface for users to generate various content:

- **Conversations:** Enter a conversation prompt, and Arya AI will generate a dialogue based on the input.
- **Images:** Specify image criteria, and Arya AI will create and display the requested image.
- **Code Snippets:** Choose a programming language and specify your requirements, and Arya AI will generate a code snippet for you.

## Screenshots

![Conversation Generation](screenshots/conversation.png)
![Image Generation](screenshots/image.png)
![Code Snippet Generation](screenshots/code.png)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact us at aryai.contact@example.com.

Enjoy using Arya AI for generating conversations, images, and code snippets!

