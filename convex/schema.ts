import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	// Other tables here...

	categories: defineTable({
		anxietyLevel: v.string(),
		displayName: v.string(),
		hexColor: v.string(),
		name: v.string(),
	}),
});
