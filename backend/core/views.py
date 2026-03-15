from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        "status": "online",
        "message": "Sulthan Shafeer's Portfolio API is running.",
        "endpoints": {
            "projects": "/api/projects/",
            "chat": "/api/chat/",
            "admin": "/admin/"
        }
    })
