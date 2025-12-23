import { GoogleGenAI, Type } from "@google/genai";
import { BlogPost } from "../types";

// Helper function to get AI instance safely
const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBlogTopicIdea = async (): Promise<string> => {
  const ai = getAI();
  if (!ai) return "The Importance of Regular Roof Inspections";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate a single, catchy, SEO-friendly blog post title for a roofing company. Output ONLY the title string.",
    });
    return response.text?.trim() || "Roofing Tips 101";
  } catch (error) {
    console.error("Error generating topic:", error);
    return "The Ultimate Guide to Roof Maintenance";
  }
};

export const generateFullBlogPost = async (topic: string): Promise<Partial<BlogPost> | null> => {
  const ai = getAI();
  if (!ai) return null;

  const prompt = `
    Write a comprehensive, SEO-optimized blog post for "Mendoza Roofing" about: "${topic}".
    
    The response must be in JSON format matching this structure exactly:
    {
      "title": "string",
      "excerpt": "string (short summary under 160 chars)",
      "content": "string (markdown format with H2, H3, lists)",
      "tags": ["string", "string"]
    }

    Tone: Professional, authoritative, yet friendly and local.
    Target Audience: Homeowners.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            excerpt: { type: Type.STRING },
            content: { type: Type.STRING },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["title", "excerpt", "content", "tags"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating blog post:", error);
    return null;
  }
};
