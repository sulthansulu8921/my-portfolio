from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

# Configure your Gemini API Key here or in .env
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")

if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

class AIChatView(APIView):
    def post(self, request):
        user_message = request.data.get("message", "")
        
        if not user_message:
            return Response({"error": "No message provided"}, status=status.HTTP_400_BAD_REQUEST)

        # Prompt engineering to give the AI context about Sulthan
        context = """
        You are an AI assistant for Sulthan Shafeer's personal portfolio website. 
        Sulthan is a Full-Stack Developer Intern at Upcode Software Labs, Calicut (2025).
        His skills include:
        - Frontend: React.js, TypeScript, Material UI
        - Backend: Python, Django
        - Database: PostgreSQL, Firebase
        - Tools: Git & GitHub
        
        His portfolio features a premium glassmorphism design. 
        Answer questions about Sulthan's background, skills, and the projects listed on this site.
        Keep your responses professional, friendly, and concise.
        """

        try:
            if not GEMINI_API_KEY:
                # Fallback response if no API key is provided
                return Response({
                    "reply": f"Sulthan is a talented Full-Stack Developer! (Note: Gemini API key is not configured, so I'm giving a limited response. You asked: '{user_message}')"
                })

            model = genai.GenerativeModel('gemini-flash-latest')
            chat = model.start_chat(history=[])
            response = chat.send_message(f"{context}\n\nUser: {user_message}")
            
            return Response({"reply": response.text})
            
        except Exception as e:
            print(f"Gemini API Error: {str(e)}")
            return Response({
                "reply": "I'm currently resting my circuits. Please ask Sulthan directly via the contact form!"
            }, status=status.HTTP_200_OK)
