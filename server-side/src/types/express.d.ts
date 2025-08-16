// src/types/express.d.ts
import { Request } from 'express' // Import the original Request type

interface CustomUser {
	id: string
	email: string
	picture: string
	name: string
	// Add other user-related properties as needed
}

declare module 'express' {
	interface Request {
		user?: CustomUser // Add your custom property, e.g., 'user'
		// Add other custom properties as needed
	}
}
